"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import AnimatedSection from "@/components/AnimatedSection";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Message sent! We'll get back soon.");
      reset();
    } else {
      toast.error("Something went wrong. Try emailing directly.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Have a project in mind? Let's discuss.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="glass-card p-8 rounded-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                {...register("name")}
                className="w-full px-4 py-3 border rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                {...register("email")}
                className="w-full px-4 py-3 border rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full px-4 py-3 border rounded-lg"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">Or reach out directly:</p>
            <a
              href="mailto:hello@thedigitalpage.com"
              className="text-secondary font-medium text-lg"
            >
              hello@thedigitalpage.com
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}