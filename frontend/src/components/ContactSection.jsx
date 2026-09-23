import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  return (
    <section className="bg-[#f7fffa] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 border-l-2 border-t-2 border-emerald-500" />
              <span className="text-sm font-medium text-black">
                Contact Us
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Let's build something
            <br />
            <span className="text-gray-400">
              great together
            </span>
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* Left Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[36px] border border-emerald-100 bg-white p-8 shadow-sm lg:col-span-5"
          >
            <h3 className="text-2xl font-semibold text-black">
              Get in touch
            </h3>

            <p className="mt-4 text-gray-600">
              Tell us about your project,
              business goals, or product idea.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4 rounded-2xl  p-4">
                <MapPin
                  size={18}
                  className="text-emerald-600"
                />
                <p className="text-sm text-gray-700">
                  House 12, Road 5, Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl  p-4">
                <Phone
                  size={18}
                  className="text-emerald-600"
                />
                <p className="text-sm text-gray-700">
                  +880 17XX XXX XXX
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl  p-4">
                <Mail
                  size={18}
                  className="text-emerald-600"
                />
                <p className="text-sm text-gray-700">
                  hello@novamatrix.com
                </p>
              </div>

            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-medium text-gray-500">
                Follow us
              </p>

              <div className="flex gap-3">

                {[
                  FaFacebookF,
                  FaInstagram,
                  FaLinkedinIn,
                  FaWhatsapp,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}

              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[36px] border border-emerald-100 bg-white p-8 shadow-sm lg:col-span-7"
          >
            <h3 className="mb-8 text-2xl font-semibold text-black">
              Send a message
            </h3>

            <form className="space-y-5 text-black">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl bg-[#f8faf8] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl bg-[#f8faf8] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="w-full rounded-2xl bg-[#f8faf8] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-2xl bg-[#f8faf8] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-sm font-medium text-white transition hover:bg-emerald-700"
              >
                Send Message
                <ArrowUpRight size={16} />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}