import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // Here you can integrate with Resend, Nodemailer, or store in DB.
  console.log("Contact form submission:", body);
  // Simulate success
  return NextResponse.json({ success: true });
}