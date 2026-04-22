"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Digital Forage
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${
                pathname === item.href
                  ? "text-secondary"
                  : "text-gray-700 hover:text-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://www.instagram.com/the_digitalforge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-pink-500 transition-colors"
            title="Follow us on Instagram"
          >
            📷
          </Link>
          <Link
            href="/booking"
            className="bg-secondary text-white px-5 py-2 rounded-full hover:bg-secondary/90 transition-all"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
        >
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-800" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-6"
        >
          <nav className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://www.instagram.com/the_digitalforge/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-3xl hover:opacity-75 transition-opacity"
              title="Follow us on Instagram"
            >
              📷
            </Link>
            <Link
              href="/booking"
              onClick={() => setMobileOpen(false)}
              className="bg-secondary text-white px-6 py-3 rounded-full"
            >
              Book a Session
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}