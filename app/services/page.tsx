"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Custom Website Development",
    description:
      "Responsive, animated websites built with Next.js, Tailwind, and Framer Motion. SEO‑optimized and performance‑focused.",
    price: "Starting at Rs 1,500",
    icon: "🌐",
  },
  {
    title: "Prompt Engineering",
    description:
      "Tailored prompt design for ChatGPT, Claude, Midjourney, and other AI tools. Maximise output quality and consistency.",
    price: "Consultation from Rs 399/hr",
    icon: "✨",
  },
  {
    title: "AI Integration Consulting",
    description:
      "End‑to‑end guidance on embedding AI into your business workflows, from strategy to implementation.",
    price: "Package from Rs 10000",
    icon: "🤖",
  },
  {
    title: "One‑on‑One Coaching",
    description:
      "Personalised sessions covering web development, AI tools, or building your online presence.",
    price: "Rs 599 per hour",
    icon: "🎓",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <AnimatedSection>
        <h1 className="text-5xl font-bold text-center mb-6">Our Services</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Tailored solutions to help you build, automate, and scale with modern technology.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <AnimatedSection key={idx}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl h-full"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-secondary font-semibold text-lg">
                {service.price}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}