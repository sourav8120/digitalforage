import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("RAZORPAY_KEY_SECRET not configured");
      return NextResponse.json(
        { error: "Verification configuration missing" },
        { status: 500 }
      );
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData } =
      await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing payment details" },
        { status: 400 }
      );
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Payment verified – you can now store booking in DB, send email etc.
      console.log("Payment verified for:", orderData);

      // Optional: Send confirmation email using Resend or Nodemailer
      // await sendConfirmationEmail(orderData);

      return NextResponse.json({ success: true });
    } else {
      console.warn("Signature mismatch for order:", razorpay_order_id);
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Verification failed: ${errorMessage}` },
      { status: 500 }
    );
  }
}