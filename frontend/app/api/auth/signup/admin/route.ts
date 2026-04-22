import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password, adminSecret } = await req.json();

    // Check secret key
    const secret = process.env.ADMIN_REGISTRATION_SECRET || "alumnix-admin-2024";
    if (adminSecret !== secret) {
      return NextResponse.json({ error: "Invalid admin secret key." }, { status: 403 });
    }

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists." }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        passwordHash,
        role: "ADMIN",
        verifiedAt: new Date(),
      },
    });

    return NextResponse.json({ ok: true, message: "Admin created successfully." });
  } catch (error) {
    console.error("Admin registration error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
