import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";


const socialLinks = [
  { icon: Users, name: "Facebook", href: "#" },
  { icon: Camera, name: "Instagram", href: "#" },
  { icon: BriefcaseBusiness, name: "LinkedIn", href: "#" },
  { icon: MessageCircle, name: "WhatsApp", href: "#" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function FooterSection() {
  return (
    <footer className="relative min-h-screen overflow-hidden bg-[#eff9f4] text-slate-800 px-6 py-10 md:px-12 lg:px-16 flex flex-col justify-between selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* --- Modern Typographic Text Watermark --- */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[16vw] font-black  tracking-wide text-orange-950/[0.03] leading-none select-none z-0"
      >
        NovaMatrix
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex flex-col justify-between">
        
        {/* Top Hero Section */}
        <div className="grid grid-cols-1 gap-12 pt-6 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
             


            {/* Headline */}
            <h2 className="text-4xl font-extrabold leading-[1.08] text-slate-950 sm:text-6xl xl:text-7xl tracking-tight">
              Software & design
              for digital 
              <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
                products.
              </span>
            </h2>

            <p className="max-w-xl text-lg text-slate-600 leading-relaxed font-normal">
              Software development, UI/UX design, and graphic design crafted to elevate modern digital brands.
            </p>
          </motion.div>

        </div>

        {/* Bottom Navigation & Info */}
        <div className="mt-20 border-t border-slate-900/10 pt-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-12 mb-12">
            
            {/* Contact Details */}
            <div className="space-y-3 lg:col-span-5 text-sm font-medium text-slate-600">
              <a 
                href="mailto:novamatrixtech@gmail.com" 
                className="flex items-center gap-3 transition-colors duration-200 hover:text-emerald-600 w-fit"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-900/5 text-emerald-600">
                  <Mail size={16} />
                </div>
                novamatrixtech@gmail.com
              </a>

              <a 
                href="tel:+8801768639060" 
                className="flex items-center gap-3 transition-colors duration-200 hover:text-emerald-600 w-fit"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-900/5 text-emerald-600">
                  <Phone size={16} />
                </div>
                +880 1768-639060
              </a>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-900/5 text-emerald-600">
                  <MapPin size={16} />
                </div>
                Dhaka, Bangladesh
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="lg:col-span-4 flex flex-wrap gap-x-8 gap-y-3 items-center text-sm font-medium text-slate-600">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors duration-200 hover:text-emerald-600"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3 lg:col-span-3 md:justify-end items-start">
              {socialLinks.map(({ icon: Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={`NovaMatrix on ${name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-slate-900/5 text-slate-700 shadow-xs transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
            <p>© {new Date().getFullYear()} NovaMatrix. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}