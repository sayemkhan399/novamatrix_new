
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export default function HeroSection() {
  const reviews = ["James Carter", "Alex Mitchel"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7fffa] px-4 py-10 md:px-8 lg:px-12">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(16,185,129,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating green glows */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-[100px]" />
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-green-300/30 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl min-h-screen flex-col items-center justify-center text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-4 rounded-full border border-emerald-100 bg-white/80 px-5 py-2.5 shadow-lg backdrop-blur-xl"
        >
          {/* Live pulse indicator */}
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </div>

          {/* Text */}
          <span className="text-sm font-medium text-gray-700">
            Available
          </span>

          {/* CTA */}
          <button className="flex items-center gap-1 text-sm font-semibold text-emerald-700 transition hover:text-emerald-600">
            Join Now
            <ArrowUpRight size={16} />
          </button>
        </motion.div>

        {/* Left floating review */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute left-0 top-1/3 hidden max-w-[260px] -rotate-12 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl xl:block"
        >
          <p className="text-sm text-gray-600">
            “A visually stunning website optimized for conversions.”
          </p>
          <p className="mt-4 font-semibold text-gray-900">— {reviews[0]}</p>
        </motion.div>

        {/* Right floating review */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-0 top-1/3 hidden max-w-[260px] rotate-12 rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl xl:block"
        >
          <p className="text-sm text-gray-600">
            “Fast, focused, and detail-driven product design.”
          </p>
          <p className="mt-4 font-semibold text-gray-900">— {reviews[1]}</p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl md:text-6xl"
        >
          World-Class Design
          <br />
          Built For{" "}
          <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
            Business Growth
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg"
        >
          We craft apps, websites, SaaS platforms, landing pages, dashboards,
          and brand experiences built for growth and performance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="group relative flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-white shadow-lg transition hover:scale-105">
            {/* pulse effect */}
            <span className="absolute -left-1 -top-1 h-3 w-3 animate-ping rounded-full bg-lime-300"></span>
            <Phone size={18} />
            Book an intro call
          </button>

          <button className="flex items-center justify-center gap-3 rounded-full border border-emerald-200 bg-white px-8 py-4 font-medium text-emerald-700 transition hover:scale-105">
            View Pricing
            <ArrowUpRight size={18} />
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4"
        >

          <p className="text-sm text-gray-600">
            Trusted by 200+ growing brands
          </p>
        </motion.div>
      </div>
    </section>
  );
}
