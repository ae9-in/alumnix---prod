"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ShieldCheck, Database, Server } from "lucide-react";
import { syne } from "@/lib/fonts";

export default function AdminRealTimeStats() {
  const [serverLoad, setServerLoad] = useState(12);
  const [recentLogs, setRecentLogs] = useState<string[]>([]);

  useEffect(() => {
    // Connect to real-time notification stream
    const eventSource = new EventSource("/api/stream/notifications");
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.message) {
          setRecentLogs(prev => [data.message, ...prev].slice(0, 5));
        }
      } catch (err) {
        console.error("Failed to parse SSE message", err);
      }
    };

    const interval = setInterval(() => {
      // Simulate real-time CPU variation
      setServerLoad(Math.floor(Math.random() * 20) + 5);
    }, 4000);

    return () => {
      eventSource.close();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="rounded-3xl bg-brand-dark p-6 text-white shadow-2xl relative overflow-hidden group">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-orange/10 to-transparent" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-brand-orange animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Core Engine</span>
          </div>
          <ShieldCheck className="h-5 w-5 text-green-500" />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
                <p className={`${syne.className} text-3xl font-black`}>
                    {serverLoad}%
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 flex items-center gap-1">
                    <Activity className="h-3 w-3 text-brand-orange" />
                    CPU Load
                </p>
            </div>
            <div className="space-y-1">
                <p className={`${syne.className} text-3xl font-black`}>
                    Stable
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 flex items-center gap-1">
                    <Database className="h-3 w-3 text-brand-sky" />
                    DB Sync
                </p>
            </div>
        </div>

        <div className="space-y-3 pt-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 border-b border-white/10 pb-2">
            System Logs
          </p>
          <div className="space-y-2 h-16 overflow-hidden">
            <AnimatePresence initial={false}>
              {recentLogs.map((log, i) => (
                <motion.div
                  key={log + i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[10px] font-mono text-white/60 flex items-center gap-2"
                >
                  <span className="text-brand-orange">>></span>
                  {log}
                </motion.div>
              ))}
              {recentLogs.length === 0 && (
                <p className="text-[10px] text-white/20 italic font-mono">Awaiting system events...</p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
