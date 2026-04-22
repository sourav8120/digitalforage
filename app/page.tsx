"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Website building • Prompt Engineering • AI Consultation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Book a Session
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/30"
            >
              Explore Services
            </Link>
          </div>
          
          {/* Demo Video */}
          <div className="mt-16 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/S2FiJTXSleU"
              title="The Digital Forage Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </motion.div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000" />
      </section>

      {/* Services Preview */}
      <AnimatedSection>
        <div className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We <span className="text-secondary">Offer</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <div className="max-w-6xl mx-auto py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="glass-card p-8 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free 15‑minute discovery call.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    icon: "🌐",
    title: "Website Building",
    desc: "Modern, responsive websites with animations and seamless UX.",
  },
  {
    icon: "💡",
    title: "Prompt Engineering",
    desc: "Craft effective prompts for AI tools to boost productivity.",
  },
  {
    icon: "🤖",
    title: "AI Consultation",
    desc: "Strategic guidance on integrating AI into your workflows.",
  },
];

const testimonials = [
  {
    quote: "The website development service transformed our online presence. It's responsive, fast, and absolutely stunning. We saw a 40% increase in client inquiries within the first month!",
    name: "Rajesh Kumar",
    title: "E-commerce Business Owner",
  },
  {
    quote: "Prompt engineering training was eye-opening. I learned how to get better results from AI tools, saving hours of work each week. Highly recommended for anyone using AI.",
    name: "Priya Sharma",
    title: "Content Strategist",
  },
  {
    quote: "The AI consultation helped us integrate automation into our workflow. The guidance was practical and implementation was smooth. ROI was visible within weeks.",
    name: "Amit Patel",
    title: "Tech Startup Founder",
  },
  {
    quote: "One-on-one coaching sessions were personalized and packed with actionable insights. I built my first website with confidence. Best investment I made this year!",
    name: "Ananya Desai",
    title: "Freelance Designer",
  },
  {
    quote: "Professional, knowledgeable, and responsive. They understood our requirements perfectly and delivered beyond expectations. Will definitely work with them again.",
    name: "Vikram Singh",
    title: "Digital Marketing Manager",
  },
  {
    quote: "The AI integration strategy completely changed how we operate. Efficiency improved dramatically, and our team loves the new workflow. A game-changer for our business!",
    name: "Neha Gupta",
    title: "Operations Director",
  },
];