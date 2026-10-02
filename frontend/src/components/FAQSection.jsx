import { motion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What services does NovaMatrix provide?",
    answer:
      "NovaMatrix provides software development, UI/UX design, and graphic design for websites, apps, and digital products.",
  },
  {
    question: "What software can you build?",
    answer:
      "Project scope may include websites, web applications, and mobile software. The specific requirements are discussed before work begins.",
  },
  {
    question: "What is included in UI/UX design?",
    answer:
      "UI/UX work can include user flows, wireframes, interface design, and prototypes, depending on the project scope.",
  },
  {
    question: "What types of graphic design do you provide?",
    answer:
      "Graphic design can include brand visuals, campaign graphics, social media assets, and other visual materials for digital channels.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Contact NovaMatrix with a short description of your software or design needs to discuss the project scope.",
  },
  {
    question: "How are project scope and estimates decided?",
    answer:
      "Requirements and deliverables are discussed with you before an estimate and schedule are prepared.",
  },
  {
    question:
      "Can software development and design be part of the same project?",
    answer:
      "Yes. Software development, UI/UX design, and graphic design can be scoped together or discussed as separate services.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f7fffa] px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Sticky Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {/* Badge */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 border-l-2 border-t-2 border-green-500" />
              <span className="text-sm font-medium text-black">FAQs</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-neutral-950 md:text-5xl">
              Have questions,
              <br />
              <span className="text-gray-400">We got answers.</span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-md text-base leading-relaxed text-neutral-600">
              Answers about our software and design services.
            </p>

            {/* Support Box */}
            <div className="mt-20 rounded-[32px] bg-[#eefaf2] p-8">
              <h3 className="text-xl font-semibold text-neutral-950">
                Can't find your answer?
              </h3>

              <p className="mt-3 text-neutral-600">
                Tell us what you are planning to build or design.
              </p>

              <button className="mt-8 flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-emerald-700 shadow-sm">
                Contact us
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-1">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <motion.div
                  key={index}
                  layout
                  className="border-b border-emerald-100 py-8"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between gap-6 text-left"
                  >
                    <h3 className="text-base font-medium text-neutral-950 md:text-xl">
                      {index + 1}. {faq.question}
                    </h3>

                    <div className="mt-1 text-emerald-600">
                      {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                    </div>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-neutral-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
