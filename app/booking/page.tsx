"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import BookingForm from "@/components/BookingForm";
import RazorpayButton from "@/components/RazorpayButton";
import AnimatedSection from "@/components/AnimatedSection";

export default function BookingPage() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    service: string;
    date: string;
    amount: number;
  } | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Book Your Session
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choose a service and time that works for you.
        </p>
      </AnimatedSection>

      <div className="glass-card p-8 rounded-2xl">
        {!formData ? (
          <BookingForm onSubmit={setFormData} />
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Confirm Your Booking</h2>
            <div className="bg-gray-50 p-6 rounded-xl text-left">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Service:</strong> {formData.service}</p>
              <p><strong>Preferred Date:</strong> {formData.date}</p>
              <p className="text-xl font-bold mt-4">
                Total: ₹{formData.amount}
              </p>
            </div>
            <RazorpayButton
              amount={formData.amount}
              orderData={{
                name: formData.name,
                email: formData.email,
                service: formData.service,
                date: formData.date,
              }}
              onSuccess={() => {
                toast.success("Payment successful! Check your email.");
                setFormData(null);
              }}
            />
            <button
              onClick={() => setFormData(null)}
              className="text-secondary underline"
            >
              Edit details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}