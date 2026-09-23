
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  MessageSquare,
  ShieldCheck,
  Globe,
  ChevronDown,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@nova.com",
    color: "primary",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    color: "secondary",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dhaka, Bangladesh",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "< 24 Hours",
    color: "secondary",
  },
];


const reasons = [
  {
    icon: MessageSquare,
    title: "Fast Communication",
    description:
      "Quick responses and transparent communication throughout the project.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description:
      "Long-term collaboration focused on growth and measurable results.",
  },
  {
    icon: Globe,
    title: "Global Availability",
    description:
      "Working with clients worldwide across multiple time zones.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#f32e25]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#f95d04]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, black 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <span className="rounded-full border border-[#f32e25]/20 bg-[#f32e25]/5 px-4 py-2 text-sm font-semibold text-[#f32e25]">
            Contact Us
          </span>

          <h1 className="mt-8 text-4xl sm:text-5xl font-black tracking-tight text-gray-900 md:text-7xl">
            Let's Build Something
            <span className="bg-gradient-to-r from-[#f95d04] via-[#f32e25] to-[#f1093f] bg-clip-text text-transparent">
              {" "}Amazing
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-600">
            Ready to start your next project? We'd love to hear about your
            ideas and help transform them into powerful digital experiences.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="mt-24 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-[36px] border border-gray-200 bg-white/80 p-8 md:p-10 shadow-xl backdrop-blur"
          >
            <h2 className="text-3xl font-black text-gray-900">
              Send a Message
            </h2>

            <form className="mt-8 space-y-5">
              {/* Row 1: Name & Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder-gray-400 outline-none transition-all focus:border-[#f32e25] focus:ring-4 focus:ring-[#f32e25]/10"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder-gray-400 outline-none transition-all focus:border-[#f32e25] focus:ring-4 focus:ring-[#f32e25]/10"
                />
              </div>

              {/* Row 2: Service & Budget (Newly Added) */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Service Select */}
                <div className="relative">
                  <select
                    name="service"
                    className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 pr-12 text-gray-700 outline-none transition-all focus:border-[#f32e25] focus:ring-4 focus:ring-[#f32e25]/10"
                  >
                    <option value="" disabled selected>Select a Service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Applications</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="security">Cyber Security</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="support">Support & Maintenance</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>

                {/* Budget Select */}
                <div className="relative">
                  <select
                    name="budget"
                    className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 pr-12 text-gray-700 outline-none transition-all focus:border-[#f32e25] focus:ring-4 focus:ring-[#f32e25]/10"
                  >
                    <option value="" disabled selected>Select Budget Range</option>
                    <option value="<1k">Under $1,000</option>
                    <option value="1k-2.5k">$1,000 - $2,500</option>
                    <option value="2.5k-5k">$2,500 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                    <option value="discuss">Let's Discuss</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Row 3: Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder-gray-400 outline-none transition-all focus:border-[#f32e25] focus:ring-4 focus:ring-[#f32e25]/10"
              />

              {/* Row 4: Message */}
              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-700 placeholder-gray-400 outline-none transition-all focus:border-[#f32e25] focus:ring-4 focus:ring-[#f32e25]/10"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f95d04] via-[#f32e25] to-[#f1093f] px-8 py-4 font-semibold text-white shadow-lg shadow-[#f32e25]/20 transition-all hover:scale-105 hover:shadow-[#f32e25]/30"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      item.color === "primary"
                        ? "bg-[#f32e25]/10 text-[#f32e25]"
                        : "bg-[#f95d04]/10 text-[#f95d04]"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600">{item.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mt-28 grid gap-8 md:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f32e25]/10 text-[#f32e25]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 overflow-hidden rounded-[40px] bg-gradient-to-r from-gray-950 to-gray-900 p-12 text-center text-white"
        >
          <h2 className="text-4xl font-black md:text-5xl">
            Ready To Start?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Let’s discuss your project and create something exceptional
            together.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f95d04] via-[#f32e25] to-[#f1093f] px-8 py-4 font-bold text-white shadow-lg shadow-[#f32e25]/20 transition hover:scale-105">
            Schedule a Call
            <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}