import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import PinnedProcess from "./PinnedProcess";
import PricingPlans from "./PricingPlans";
import StackedServicesSection from "./StackedServicesSection";

export default function Services() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#f7fffa] px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, #dcefe4 1px, transparent 1px), linear-gradient(to bottom, #dcefe4 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800">
              <Sparkles size={16} className="text-emerald-600" />
              Software · UI/UX · Graphic design
            </div>

            <h1 className="max-w-4xl text-[2.65rem] font-black leading-[1.06] text-neutral-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Software and design services
              <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
                for digital products.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              NovaMatrix develops software and designs user experiences and
              graphics for websites, apps, and digital brands.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#service-offerings"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-[0_10px_24px_rgba(5,150,105,0.2)] transition-colors hover:bg-emerald-700"
              >
                Explore services
                <ArrowDown size={17} />
              </motion.a>
              <a
                href="/Contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-800 transition-colors hover:border-emerald-500 hover:text-emerald-700"
              >
                Talk to our team
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="border-l border-emerald-200 pl-6 sm:pl-8"
          >
            <p className="mb-5 text-sm font-bold text-neutral-500">
              Software and design capabilities
            </p>
            <div className="divide-y divide-emerald-100">
              {[
                {
                  icon: Layers3,
                  number: "01",
                  title: "Software development",
                  description: "Websites, web applications, and mobile apps.",
                },
                {
                  icon: Sparkles,
                  number: "02",
                  title: "UI/UX design",
                  description: "User flows, interfaces, and prototypes.",
                },
                {
                  icon: Code2,
                  number: "03",
                  title: "Graphic design",
                  description: "Visual assets for brands and digital channels.",
                },
              ].map(({ icon: Icon, number, title, description }) => (
                <div
                  key={number}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <Icon size={19} className="mt-1 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-xs font-bold text-emerald-700">
                      {number}
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-neutral-900">
                      {title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section
        id="service-offerings"
        className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          <p className="text-sm font-bold text-emerald-700">WHAT WE DO</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-black leading-tight text-neutral-950 sm:text-4xl md:text-5xl">
              Software and design for your next digital product.
            </h2>
            <p className="max-w-xl leading-relaxed text-neutral-600 md:text-lg">
              Explore our software development, UI/UX design, and graphic design
              services.
            </p>
          </div>
        </motion.div>
        <StackedServicesSection />
      </section>

      <PinnedProcess />

      <PricingPlans />

      <section className="bg-[#f7fffa] px-4 pb-20 sm:px-6 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-neutral-950 px-6 py-10 text-white sm:px-10 md:px-16 md:py-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-emerald-300">
                HAVE A PROJECT IN MIND?
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Let’s build or design your next product.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-neutral-300 md:text-lg">
                Tell us about the software or design work you have in mind.
              </p>
            </div>
            <a
              href="/Contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f95d04] via-[#f32e25] to-[#f1093f] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
