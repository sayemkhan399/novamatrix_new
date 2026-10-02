import { motion } from "framer-motion";
import { ClipboardList, LayoutPanelTop, MousePointerClick } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Plan",
    description:
      "Discuss your software or design goals, project requirements, and scope.",
  },
  {
    icon: ClipboardList,
    title: "Design",
    description:
      "Explore user flows, interface concepts, or visual directions for your project.",
  },
  {
    icon: LayoutPanelTop,
    title: "Build & review",
    description:
      "Develop the agreed software and review design deliverables with the team.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f7fffa] px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex justify-center"
        >
          <div className="relative inline-flex items-center px-4 text-sm font-medium text-emerald-700">
            <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-emerald-500"></span>
            <span className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-emerald-500"></span>

            <span className="px-4">Impact</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-16 max-w-4xl text-center text-3xl font-bold tracking-tight text-emerald-950 sm:text-5xl md:text-6xl"
        >
          A clear process for software
          <br />
          and design projects.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-[32px] bg-[#eefaf2] p-6 md:p-8 max-w-[380px] mx-auto w-full"
              >
                {/* Icon */}
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-full border border-emerald-100 bg-white">
                  <Icon size={20} className="text-emerald-600" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-base leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
