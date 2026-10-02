import { motion } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Frown,
  MessageSquare,
  Smile,
  Sparkles,
  Target,
  X,
} from "lucide-react";

const otherAgencies = [
  "Unclear software requirements",
  "Confusing user flows",
  "Interfaces that miss product needs",
  "Inconsistent brand graphics",
  "Disconnected design and development",
  "Unclear project scope",
];

const novaMatrix = [
  {
    icon: Sparkles,
    text: "Software development shaped around project requirements",
  },
  {
    icon: Target,
    text: "UI/UX design for websites and applications",
  },
  {
    icon: BadgeCheck,
    text: "Graphic design for brands and digital channels",
  },
  {
    icon: Briefcase,
    text: "User flows, interfaces, and prototypes",
  },
  {
    icon: Sparkles,
    text: "Web, mobile, and digital product development",
  },
  {
    icon: MessageSquare,
    text: "Visual design assets for digital products",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7fffa] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-5 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 border-l-2 border-t-2 border-emerald-500" />
            <span className="text-sm font-medium text-neutral-800">Why us</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-950 md:text-5xl">
            Why work with us?
          </h2>

          <p className="mt-5 text-base text-neutral-500 md:text-lg">
            Software, UI/UX, and graphic design for digital products.
          </p>
        </div>

        {/* Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[40px] bg-[#f3f8f4] p-4 md:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Card */}
            <div>
              <div className="mb-6 flex items-center justify-center gap-3">
                <Frown size={22} className="text-neutral-500" />
                <h3 className="text-xl font-semibold text-neutral-500">
                  Common project challenges:
                </h3>
              </div>

              <div className="rounded-[34px] bg-white p-6 shadow-sm md:p-8">
                {otherAgencies.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-b border-neutral-100 py-5 last:border-none"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-200">
                      <X size={14} className="text-neutral-500" />
                    </div>

                    <p className="text-sm font-medium text-neutral-500 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div>
              <div className="mb-6 flex items-center justify-center gap-3">
                <Smile size={22} className="text-emerald-600" />
                <h3 className="text-xl font-semibold text-neutral-900">
                  NovaMatrix:
                </h3>
              </div>

              <div className="rounded-[34px] bg-white p-6 shadow-sm md:p-8">
                {novaMatrix.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 border-b border-neutral-100 py-5 last:border-none"
                    >
                      <div className="flex h-7 w-7 items-center justify-center">
                        <Icon size={18} className="text-[#f32e25]" />
                      </div>

                      <p className="text-sm font-medium text-neutral-800 md:text-base">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
