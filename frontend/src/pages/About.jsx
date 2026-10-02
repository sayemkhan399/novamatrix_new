import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  Globe,
  Layers3,
  Lightbulb,
  Palette,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LeadershipSection from "../components/LeadershipSection";

function AnimatedStat({ number, label }) {
  const target = Number(number.replace(/[^0-9]/g, ""));
  const suffix = number.replace(/[0-9]/g, "");
  const [count, setCount] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
      ? target
      : 0,
  );
  const statRef = useRef(null);

  useEffect(() => {
    const stat = statRef.current;
    if (!stat) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;

    let animationFrameId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        const startTime = performance.now();
        const duration = 1200;

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 4);
          setCount(Math.round(target * easedProgress));

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          }
        };

        animationFrameId = requestAnimationFrame(animate);
      },
      { threshold: 0.5 },
    );

    observer.observe(stat);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return (
    <>
      <h3
        ref={statRef}
        aria-label={`${number} ${label}`}
        className="text-4xl font-black bg-gradient-to-r from-[#f95d04] to-[#f1093f] bg-clip-text text-transparent md:text-5xl"
      >
        {count}
        {suffix}
      </h3>
      <p className="mt-3 text-sm font-medium text-neutral-500 md:text-base">
        {label}
      </p>
    </>
  );
}

const stats = [
  { number: "50", label: "Software Development" },
  { number: "60", label: "UI/UX Design" },
  { number: "20", label: "Graphic Design" },
  { number: "50", label: "Digital Products" },
];

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User flows, wireframes, interface design, and prototypes for websites and apps.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Websites, web applications, and mobile software developed around project requirements.",
  },
  {
    icon: Layers3,
    title: "Graphic Design",
    desc: "Brand graphics and visual assets for digital products and campaigns.",
  },
];

const process = [
  "Discovery & Strategy",
  "Research & Planning",
  "Design & Prototype",
  "Development & Launch",
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Modern solutions powered by creativity and technology.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Transparent collaboration and long-term partnerships.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "High-quality experiences crafted with precision.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fffa] py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-5 py-2 backdrop-blur shadow-sm">
            <Sparkles size={16} className="text-emerald-600" />
            <span className="text-sm font-medium text-neutral-700">
              Software & Design Company
            </span>
          </div>
        </motion.div>

        {/* HERO */}
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-black leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
          >
            Software, UI/UX and graphic design for digital products and
            <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
              {" "}
              businesses.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl"
          >
            NovaMatrix develops software and designs user experiences and
            graphic assets for websites, applications, and digital brands.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-neutral-100">
              <Play size={16} />
              Explore Our Services
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {stats.map((item, index) => (
            <motion.div key={index} className=" flex gap-5 p-7 ">
              <AnimatedStat number={item.number} label={item.label} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Layout */}
        <div className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Story Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative overflow-hidden rounded-[36px] border border-neutral-200 bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] lg:col-span-7"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />

            <span className="inline-flex rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
              Our Story
            </span>

            <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight text-black md:text-5xl">
              Software and design for digital products.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              We work across software development, UI/UX design, and graphic
              design to support websites, apps, and digital product experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Software", "UI/UX", "Graphic Design", "Digital Products"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="grid gap-6 lg:col-span-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15">
                    <Icon size={26} className="text-black" />
                  </div>

                  <h3 className="text-2xl font-bold text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-neutral-600">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] bg-neutral-950 px-8 py-14 md:px-14"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
                Why Choose Us
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                Software, UI/UX & graphic design working together.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
                We work on software, interfaces, and graphic assets for
                websites, applications, and digital brands.
              </p>

              <button className="mt-10 flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">
                Let's Talk
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Process */}
            <div className="space-y-4">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 font-bold text-white">
                    0{index + 1}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">{item}</h4>
                    <p className="mt-1 text-sm text-neutral-400">
                      Software and design work shaped around project
                      requirements.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* VALUES */}
        <div className="mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-black text-black md:text-5xl">
              Our Core Values
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
              Principles that shape our culture, workflow, and client
              relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100">
                    <Icon size={28} className="text-black" />
                  </div>

                  <h3 className="text-2xl font-bold text-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-neutral-600">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <LeadershipSection />

        {/* FINAL CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <div className="mx-auto max-w-4xl rounded-[40px] border border-neutral-200 bg-white px-8 py-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <Globe size={40} className="mx-auto mb-6 text-emerald-600" />

            <h2 className="text-4xl font-black leading-tight text-black md:text-5xl">
              Ready to build something extraordinary together?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Tell us about your software, UI/UX, or graphic design project.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:scale-105">
                Start Your Project
                <ArrowUpRight size={18} />
              </button>

              <button className="flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-neutral-100">
                <CheckCircle2 size={18} />
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
