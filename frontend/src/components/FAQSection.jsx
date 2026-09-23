import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "What does “unlimited design” mean?",
    answer:
      "You can request as many design tasks as you want during your active subscription. We work through requests one at a time, delivering high-quality designs.",
  },
  {
    question: "How long does it take to get my designs?",
    answer:
      "Most requests are delivered within 24–48 hours depending on scope and complexity.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. We continue revising until the design aligns with your goals.",
  },
  {
    question: "What types of designs can you create?",
    answer:
      "UI/UX design, websites, dashboards, branding, presentations, social media assets, and more.",
  },
  {
    question: "How do I submit a design request?",
    answer:
      "Simply send your brief, task, or idea through our project workspace.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, there are no long-term contracts. Cancel whenever you want.",
  },
  {
    question:
      "Can multiple team members submit requests under one account?",
    answer:
      "Yes, your whole team can collaborate under one workspace.",
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
              <span className="text-sm font-medium text-black">
                FAQs
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-neutral-950 md:text-5xl">
              Have questions,
              <br />
              <span className="text-gray-400">
                We got answers.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-md text-base leading-relaxed text-neutral-600">
              Everything you need to know about our process,
              and how we deliver results.
            </p>

            {/* Support Box */}
            <div className="mt-20 rounded-[32px] bg-[#eefaf2] p-8">
              <h3 className="text-xl font-semibold text-neutral-950">
                Can't find your answer?
              </h3>

              <p className="mt-3 text-neutral-600">
                Get in touch with our support team,
                they are friendly!
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
                      {isOpen ? (
                        <Minus size={22} />
                      ) : (
                        <Plus size={22} />
                      )}
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