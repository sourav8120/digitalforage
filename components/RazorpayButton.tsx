"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayButtonProps {
  amount: number;
  orderData: {
    name: string;
    email: string;
    service: string;
    date: string;
  };
  onSuccess: () => void;
}

export default function RazorpayButton({
  amount,
  orderData,
  onSuccess,
}: RazorpayButtonProps) {
  const [loading, setLoading] = useState(false);

  const createOrder = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    return data.orderId;
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const orderId = await createOrder();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100, // in paise
        currency: "INR",
        name: "The Digital Forage",
        description: `Booking: ${orderData.service}`,
        order_id: orderId,
        handler: async (response: any) => {
          // Verify payment
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderData,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            toast.success("Payment successful! Confirmation email sent.");
            onSuccess();
          } else {
            toast.error("Payment verification failed.");
          }
        },
        prefill: {
          name: orderData.name,
          email: orderData.email,
        },
        theme: { color: "#3b82f6" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      toast.error("Payment initiation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-70"
      >
        {loading ? "Processing..." : "Pay with Razorpay"}
      </button>
    </>
  );
}