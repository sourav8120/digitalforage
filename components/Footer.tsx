import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            The Digital Forage
          </h3>
          <p className="text-sm">
            Crafting digital excellence with modern web & AI solutions.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/booking" className="hover:text-white">Book Session</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Website Development</li>
            <li>Prompt Engineering</li>
            <li>AI Strategy</li>
            <li>Tech Consulting</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>Instagram: @the_digitalforge</li>
            <li>Email: souravsingha502@gmail.com</li>
            <li>LinkedIn: /company/thedigitalforage</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} The Digital Forage. All rights reserved.
      </div>
    </footer>
  );
}