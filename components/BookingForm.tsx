"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  service: z.enum(["Web Dev", "Prompt Eng", "AI Consult", "Coaching"]),
  date: z.string().min(1, "Select a date"),
});

type FormData = z.infer<typeof schema>;

const servicePrices: Record<FormData["service"], number> = {
  "Web Dev": 1,
  "Prompt Eng": 1500,
  "AI Consult": 3500,
  Coaching: 1200,
};

export default function BookingForm({
  onSubmit,
}: {
  onSubmit: (data: FormData & { amount: number }) => void;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: "Web Dev" },
  });

  const selectedService = watch("service");

  const submitHandler = (data: FormData) => {
    const amount = servicePrices[data.service];
    onSubmit({ ...data, amount });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Full Name</label>
        <input
          {...register("name")}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Service</label>
        <select
          {...register("service")}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
        >
          <option value="Web Dev">Website Development</option>
          <option value="Prompt Eng">Prompt Engineering</option>
          <option value="AI Consult">AI Consultation</option>
          <option value="Coaching">One-on-One Coaching</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Preferred Date</label>
        <input
          {...register("date")}
          type="date"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
        />
        {errors.date && (
          <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
        )}
      </div>

      <div className="pt-4">
        <p className="text-lg font-semibold">
          Amount: ₹{servicePrices[selectedService]}
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
      >
        Proceed to Payment
      </motion.button>
    </form>
  );
}