import { motion } from "framer-motion";
import { Rocket, Eye, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function MissionVisionSection() {
  return (
    <section className="bg-[#f7fffa] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 border-l-2 border-t-2 border-emerald-500" />
            <span className="text-sm font-medium text-black">
              Who We Are
            </span>
          </div>
        </div>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Our purpose drives
            <br />
            <span className="text-gray-400">
              every digital experience
            </span>
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">

          {/* Mission Large */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-[40px] border border-emerald-100 bg-white p-8 md:p-12 shadow-sm lg:col-span-8"
          >
            {/* Icon */}
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50">
              <Rocket
                size={26}
                className="text-emerald-600"
              />
            </div>

            <p className="mb-4 text-sm font-medium tracking-wide text-emerald-700">
              OUR MISSION
            </p>

            <h3 className="max-w-3xl text-2xl font-bold leading-tight text-black md:text-5xl">
              Turning ambitious ideas
              into scalable digital
              products.
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
              We help startups, founders, and businesses
              transform ideas into meaningful products
              through strategic design, engineering,
              and performance-driven execution.
            </p>

            {/* Floating stat */}
            <div className="mt-10 inline-flex rounded-3xl bg-[#f7fffa] px-6 py-4">
              <div>
                <p className="text-2xl font-bold text-black">
                  100+
                </p>
                <p className="text-sm text-gray-500">
                  Projects Delivered
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Compact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-[40px] bg-[#f95d04] p-8 text-white lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                <Eye size={26} />
              </div>

              <p className="mb-4 text-sm font-medium tracking-wide text-emerald-300">
                OUR VISION
              </p>

              <h3 className="text-2xl font-bold leading-tight md:text-4xl">
                Becoming
                the trusted
                growth partner.
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-gray-300 md:text-base">
                Our vision is to make world-class
                digital strategy accessible to every
                modern business.
              </p>
            </div>

            <button className="mt-10 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
              Explore More
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}