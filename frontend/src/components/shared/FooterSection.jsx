import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../../assets/Nova.svg";
const link = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Services", href: "/Services" },
  { name: "Portfolio", href: "/Portfolio" },
  { name: "Contact", href: "/Contact" },
];

export default function FooterSection() {
  return (
    <footer className="relative min-h-screen overflow-hidden bg-[#f7fffa] px-4 py-8 md:px-8">
      {/* Background Logo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <img src={logo} alt="Nova" className="w-[70%] max-w-[900px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between">
        {/* Top */}
        <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <img src={logo} alt="NovaMatrix" className="mb-8 h-14 w-auto" />

            <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl xl:text-7xl">
              Software & design
              <br />
              for digital
              <br />
              <span className="text-orange-600">products.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-gray-600">
              Software development, UI/UX design, and graphic design for digital
              products.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-[36px] border border-emerald-100 bg-transparent p-8 shadow-sm lg:col-span-5"
          >
            <h3 className="text-xl font-semibold text-black">
              Start your next project
            </h3>

            <p className="mt-3 text-gray-500">
              Tell us what you are planning to build or design.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-sm font-medium text-white">
              Book a Call
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 gap-8 border-t border-emerald-100 py-10 md:grid-cols-3">
          {/* Contact */}
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              novamatrixtech@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              +8801768639060
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              Dhaka, Bangladesh
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            {link.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-600 transition hover:text-emerald-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 md:justify-end">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm transition hover:bg-emerald-600 hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ),
            )}
          </div>
        </div>
        <p className="text-sm text-gray-500">
          © 2026 NovaMatrix. Crafted with purpose.
        </p>
      </div>
    </footer>
  );
}
