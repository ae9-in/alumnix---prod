import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { realtimeHub } from "@/lib/realtime";

function sseFormat(data: unknown, event?: string) {
  const payload = `data: ${JSON.stringify(data)}\n`;
  const evt = event ? `event: ${event}\n` : "";
  return `${evt}${payload}\n`;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });
  const uid = (session as any).uid as string;

  let isClosed = false;
  const stream = new ReadableStream({
    start(controller) {
      const enc = new TextEncoder();
      
      const safeEnqueue = (data: Uint8Array) => {
        if (!isClosed) {
          try {
            controller.enqueue(data);
          } catch (e) {
            isClosed = true;
          }
        }
      };

      safeEnqueue(enc.encode(`retry: 2000\n\n`));
      safeEnqueue(enc.encode(sseFormat({ ok: true }, "ready")));

      const channel = `notifications:${uid}`;
      const unsubUser = realtimeHub.subscribe(channel, (msg: any) => {
        safeEnqueue(enc.encode(sseFormat(msg, "notifications")));
      });

      let unsubAdmin = () => {};
      if ((session as any).role === "ADMIN") {
        unsubAdmin = realtimeHub.subscribe("admin:notifications", (msg: any) => {
          safeEnqueue(enc.encode(sseFormat(msg)));
        });
      }

      const keepAlive = setInterval(() => {
        safeEnqueue(enc.encode(`event: ping\ndata: {}\n\n`));
      }, 15000);

      // Store cleanup on the controller if needed, but the cancel() method below is better
      (controller as any)._cleanup = () => {
        isClosed = true;
        clearInterval(keepAlive);
        unsubUser();
        unsubAdmin();
      };
    },
    cancel(controller) {
      isClosed = true;
      if ((controller as any)._cleanup) (controller as any)._cleanup();
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}

