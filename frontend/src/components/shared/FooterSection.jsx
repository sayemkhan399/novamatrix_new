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
    <footer className="relative overflow-hidden bg-[#eff9f4] text-slate-800 px-6 pt-16 pb-8 md:px-12 md:pt-20 lg:px-16 flex flex-col justify-between selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* --- Fancy Organic Wavy Curve Top Border (Keeping #eff9f4 theme) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] pointer-events-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[90px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#eff9f4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Wave Background Shape */}
          <path
            d="M0,40 C300,100 600,0 900,60 C1050,90 1150,20 1200,40 L1200,120 L0,120 Z"
            fill="#eff9f4"
          ></path>
          {/* Wave Shadow Overlay */}
          <path
            d="M0,40 C300,100 600,0 900,60 C1050,90 1150,20 1200,40 L1200,60 C1150,40 1050,110 900,80 C600,20 300,120 0,60 Z"
            fill="url(#waveGradientLight)"
          ></path>
        </svg>
      </div>

      {/* --- Modern Typographic Text Watermark --- */}
      <div 
        aria-hidden="true" 
        className="footer-watermark pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[16vw] font-black tracking-thin text-orange-950/[0.03] leading-none select-none z-0"
      >
        NovaMatriX
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex flex-col justify-between">
        
        {/* Top Hero Section - Centered & Responsive (No clipping, shows all text) */}
        <div className="pt-2 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {/* Headline wrapped cleanly so it stays centered and fully visible */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Software & design for digital{" "}
              <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
                products
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Software development, UI/UX design, and graphic design crafted to elevate modern digital brands.
            </p>
          </motion.div>
        </div>

        {/* Bottom Navigation & Info - Reduced Gap */}
        <div className="mt-8 md:mt-12 border-t border-slate-900/10 pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-12 mb-6">
            
            {/* Contact Details */}
            <div className="space-y-2.5 lg:col-span-5 text-sm font-medium text-slate-600">
              <a 
                href="mailto:novamatrixtech@gmail.com" 
                className="flex items-center gap-3 transition-colors duration-200 hover:text-emerald-600 w-fit"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-900/5 text-emerald-600">
                  <Mail size={15} />
                </div>
                novamatrixtech@gmail.com
              </a>

              <a 
                href="tel:+8801768639060" 
                className="flex items-center gap-3 transition-colors duration-200 hover:text-emerald-600 w-fit"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-900/5 text-emerald-600">
                  <Phone size={15} />
                </div>
                +880 1768-639060
              </a>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-900/5 text-emerald-600">
                  <MapPin size={15} />
                </div>
                Dhaka, Bangladesh
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="lg:col-span-4 flex flex-wrap gap-x-6 gap-y-2 items-center text-sm font-medium text-slate-600">
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
            <div className="flex gap-2.5 lg:col-span-3 md:justify-end items-start">
              {socialLinks.map(({ icon: Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={`NovaMatrix on ${name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white border border-slate-900/5 text-slate-700 shadow-xs transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:-translate-y-1"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-medium text-slate-400">
            <p>© {new Date().getFullYear()} NovaMatrix. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}