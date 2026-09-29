import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Paintbrush,
  Code2,
  Zap,
  Clock,
  RotateCcw,
  ShieldCheck,
  Check,
  Sparkles,
} from "lucide-react";

const USD_TO_BDT = 125; // Exchange rate

const plansData = [
  {
    id: "web-app",
    category: "Web Development",
    subHeading: "Scalable solutions for modern web platforms",
    description:
      "Full-stack web applications engineered for performance, security, and high user traffic.",
    basePriceUSD: 0,
    options: [
      {
        id: "design",
        title: "UI Design",
        description: "UI/UX & Interactive Prototype",
        priceUSD: 1200,
        icon: Paintbrush,
        defaultChecked: true,
        features: [
          "Responsive wireframes & UI design",
          "Figma design & design system setup",
        ],
        timeDays: 10,
        revisions: 4,
      },
      {
        id: "development",
        title: "Code Build",
        description: "Full-Stack Custom Code",
        priceUSD: 2500,
        icon: Code2,
        defaultChecked: true,
        features: [
          "Modern Frontend (React/Next.js) & API Integration",
          "Database architecture & Admin panel",
        ],
        timeDays: 20,
        revisions: 5,
      },
      {
        id: "fast",
        title: "Fast Track",
        description: "Accelerated Delivery",
        priceUSD: 800,
        icon: Zap,
        defaultChecked: false,
        features: ["Dedicated team sprint (Express delivery)"],
        timeDays: -10,
        revisions: 0,
      },
    ],
    commonFeatures: [
      { icon: Clock, text: (days) => `Avg. ${Math.ceil(days / 7)} weeks turnaround` },
      { icon: RotateCcw, text: (revs) => `${revs} rounds of revisions` },
      { icon: ShieldCheck, text: () => "3 months of free support" },
    ],
  },
  {
    id: "mobile-app",
    category: "Mobile Apps",
    subHeading: "Native & Cross-Platform Mobile Apps",
    description:
      "Intuitive iOS and Android apps crafted to scale your business directly to handheld devices.",
    basePriceUSD: 0,
    options: [
      {
        id: "design",
        title: "App Design",
        description: "Mobile-First Interface Design",
        priceUSD: 1500,
        icon: Paintbrush,
        defaultChecked: true,
        features: [
          "iOS & Android UI component library",
          "Interactive Figma prototype",
        ],
        timeDays: 14,
        revisions: 5,
      },
      {
        id: "development",
        title: "App Build",
        description: "Flutter / React Native Build",
        priceUSD: 3500,
        icon: Code2,
        defaultChecked: true,
        features: [
          "Cross-platform iOS & Android code",
          "Push notifications, Auth & API integration",
        ],
        timeDays: 28,
        revisions: 6,
      },
      {
        id: "fast",
        title: "Fast Track",
        description: "Priority Development Sprint",
        priceUSD: 1200,
        icon: Zap,
        defaultChecked: false,
        features: ["Priority deployment & store submission prep"],
        timeDays: -14,
        revisions: 0,
      },
    ],
    commonFeatures: [
      { icon: Clock, text: (days) => `Avg. ${Math.ceil(days / 7)} weeks turnaround` },
      { icon: RotateCcw, text: (revs) => `${revs} rounds of revisions` },
      { icon: ShieldCheck, text: () => "3 months of free support & store approval guarantee" },
    ],
  },
  {
    id: "ui-ux",
    category: "Product Design",
    subHeading: "Product strategy and visual identity",
    description:
      "Transform raw ideas into user-centric interfaces backed by deep UX research and design systems.",
    basePriceUSD: 0,
    options: [
      {
        id: "research",
        title: "UX Strategy",
        description: "User Flow & Information Architecture",
        priceUSD: 800,
        icon: Paintbrush,
        defaultChecked: true,
        features: [
          "Competitor analysis & user journeys",
          "Low-fidelity wireframes & site map",
        ],
        timeDays: 7,
        revisions: 3,
      },
      {
        id: "ui-design",
        title: "Visual System",
        description: "High-Fidelity UI Design System",
        priceUSD: 1200,
        icon: Code2,
        defaultChecked: true,
        features: [
          "Pixel-perfect UI design system",
          "Full clickable Figma prototype for handoff",
        ],
        timeDays: 10,
        revisions: 4,
      },
      {
        id: "fast",
        title: "Fast Track",
        description: "Fast-Track Handoff",
        priceUSD: 500,
        icon: Zap,
        defaultChecked: false,
        features: ["Accelerated design turnaround"],
        timeDays: -5,
        revisions: 0,
      },
    ],
    commonFeatures: [
      { icon: Clock, text: (days) => `Avg. ${days} days turnaround` },
      { icon: RotateCcw, text: (revs) => `${revs} rounds of revisions` },
      { icon: ShieldCheck, text: () => "Developer handoff support included" },
    ],
  },
  {
    id: "ai-solutions",
    category: "AI Automation",
    subHeading: "Intelligent automation and AI integration",
    description:
      "Supercharge your operations with custom AI chatbots, LLM integrations, and predictive analytics.",
    basePriceUSD: 0,
    options: [
      {
        id: "architecture",
        title: "AI Strategy",
        description: "Model selection & Architecture",
        priceUSD: 1800,
        icon: Paintbrush,
        defaultChecked: true,
        features: [
          "AI use-case discovery & tech stack plan",
          "Data preprocessing & fine-tuning strategy",
        ],
        timeDays: 10,
        revisions: 3,
      },
      {
        id: "development",
        title: "Agent Build",
        description: "Custom Agents & API Build",
        priceUSD: 3200,
        icon: Code2,
        defaultChecked: true,
        features: [
          "LLM/OpenAI/Custom Model integration",
          "Automated workflows & secure vector storage",
        ],
        timeDays: 20,
        revisions: 5,
      },
      {
        id: "fast",
        title: "Fast Track",
        description: "Rapid MVP Deployment",
        priceUSD: 1000,
        icon: Zap,
        defaultChecked: false,
        features: ["Accelerated AI model training/deployment"],
        timeDays: -10,
        revisions: 0,
      },
    ],
    commonFeatures: [
      { icon: Clock, text: (days) => `Avg. ${Math.ceil(days / 7)} weeks turnaround` },
      { icon: RotateCcw, text: (revs) => `${revs} rounds of revisions` },
      { icon: ShieldCheck, text: () => "6 months of model maintenance & API monitoring" },
    ],
  },
  {
    id: "it-consulting",
    category: "IT Consulting",
    subHeading: "Expert guidance for digital transformation",
    description:
      "Modernize legacy architecture, plan cloud migrations, and optimize technology budgets.",
    basePriceUSD: 0,
    options: [
      {
        id: "roadmap",
        title: "Tech Strategy",
        description: "Strategy & Assessment",
        priceUSD: 1000,
        icon: Paintbrush,
        defaultChecked: true,
        features: [
          "Current tech stack evaluation & cost optimization",
          "Digital transformation roadmap document",
        ],
        timeDays: 5,
        revisions: 2,
      },
      {
        id: "advisory",
        title: "CTO Advisory",
        description: "Implementation Strategy",
        priceUSD: 2000,
        icon: Code2,
        defaultChecked: true,
        features: [
          "Cloud architecture design (AWS/GCP/Azure)",
          "DevOps strategy & CI/CD pipeline setup guide",
        ],
        timeDays: 10,
        revisions: 3,
      },
      {
        id: "fast",
        title: "Fast Track",
        description: "Accelerated Review",
        priceUSD: 500,
        icon: Zap,
        defaultChecked: false,
        features: ["Priority strategy sessions & rapid blueprint"],
        timeDays: -3,
        revisions: 0,
      },
    ],
    commonFeatures: [
      { icon: Clock, text: (days) => `Avg. ${days} days turnaround` },
      { icon: RotateCcw, text: (revs) => `${revs} rounds of review` },
      { icon: ShieldCheck, text: () => "1-on-1 executive consulting included" },
    ],
  },
];

export default function PricingPlans3D() {
  const [currency, setCurrency] = useState("USD"); 

  return (
    <section className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/40 via-slate-50 to-slate-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-4xl text-center mb-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold text-amber-700 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-amber-200/60 backdrop-blur-md">
          <Sparkles size={14} className="text-amber-500" />
          Pricing
        </span>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
          Pricing Plans
        </h1>
        <p className="mt-4 text-base sm:text-lg font-medium text-slate-600 max-w-xl mx-auto">
          For each plan we outperform the competition in quality, speed, and overall service.
        </p>

        {/* Currency Switch Toggle (USD / BDT) */}
        <div className="mt-8 flex justify-center items-center gap-3 ">
          <span className={`text-sm font-bold transition-colors ${currency === "USD" ? "text-slate-900" : "text-slate-400"}`}>
            USD ($)
          </span>
          <button
            onClick={() => setCurrency((prev) => (prev === "USD" ? "BDT" : "USD"))}
            className="relative h-9 w-18 rounded-full bg-slate-900/90 p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),_0_4px_12px_rgba(0,0,0,0.1)] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle currency"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className={`h-7 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-md flex items-center justify-center text-[10px] font-black text-white ${
                currency === "BDT" ? "translate-x-9" : "translate-x-0"
              }`}
            >
              {currency}
            </motion.div>
          </button>
          <span className={`text-sm font-bold transition-colors ${currency === "BDT" ? "text-slate-900" : "text-slate-400"}`}>
            BDT (৳)
          </span>
        </div>
      </div>

      {/* Cards List */}
      <div className="relative z-10 mx-auto max-w-5xl space-y-20">
        {plansData.map((plan) => (
          <PricingCard3D key={plan.id} plan={plan} currency={currency} />
        ))}
      </div>
    </section>
  );
}

function PricingCard3D({ plan, currency }) {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    const initialState = {};
    plan.options.forEach((opt) => {
      initialState[opt.id] = opt.defaultChecked;
    });
    return initialState;
  });

  const toggleOption = (id) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedCount = Object.values(selectedOptions).filter(Boolean).length;
  const isAnythingSelected = selectedCount > 0;

  // Calculate Price in USD
  const totalUSD = plan.options.reduce((sum, opt) => {
    return selectedOptions[opt.id] ? sum + opt.priceUSD : sum;
  }, plan.basePriceUSD);

  // Format Price based on Selected Currency
  const formattedPrice =
    currency === "BDT"
      ? `৳${(totalUSD * USD_TO_BDT).toLocaleString()}`
      : `$${totalUSD.toLocaleString()}`;

  const activeOptionTitles = plan.options
    .filter((opt) => selectedOptions[opt.id])
    .map((opt) => opt.title);

  const activeFeatures = plan.options
    .filter((opt) => selectedOptions[opt.id])
    .flatMap((opt) => opt.features);

  const totalDays = Math.max(
    1,
    plan.options.reduce((days, opt) => {
      return selectedOptions[opt.id] ? days + opt.timeDays : days;
    }, 0)
  );

  const totalRevisions = plan.options.reduce((revs, opt) => {
    return selectedOptions[opt.id] ? revs + opt.revisions : revs;
  }, 0);

  return (
    <div className="relative rounded-[40px] bg-white/90 backdrop-blur-xl p-6 sm:p-10 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06),_0_1px_2px_rgba(0,0,0,0.04),_inset_0_1px_1px_rgba(255,255,255,1)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Title & Interactive Switches */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent sm:text-4xl">
              {plan.category}
            </h2>
            <h3 className="mt-2 text-lg font-bold text-slate-800">
              {plan.subHeading}
            </h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
              {plan.description}
            </p>
          </div>

          {/* Interactive Option Cards */}
          <div className="space-y-4 pt-2">
            {plan.options.map((option) => {
              const Icon = option.icon;
              const isChecked = selectedOptions[option.id];

              return (
                <div
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`relative flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-colors duration-200 select-none ${
                    isChecked
                      ? "bg-gradient-to-b from-white via-amber-50/40 to-amber-100/30 border border-amber-300/80 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.12),_inset_0_1px_0_rgba(255,255,255,0.9)]"
                      : "bg-slate-50/80 border border-slate-200/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isChecked
                          ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_6px_16px_rgba(245,158,11,0.35),_inset_0_1px_1px_rgba(255,255,255,0.4)]"
                          : "bg-slate-200/70 text-slate-500 shadow-inner"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {option.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-500">
                        {option.description}
                      </p>
                    </div>
                  </div>

                  {/* Push Switch */}
                  <div
                    className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full p-1 transition-all duration-300 ease-in-out ${
                      isChecked
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                        : "bg-slate-300/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]"
                    }`}
                  >
                    <motion.span
                      layout
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className={`pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-[0_3px_8px_rgba(0,0,0,0.25),_inset_0_-1px_1px_rgba(0,0,0,0.1)] ${
                        isChecked ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Fixed Height Dynamic Price Summary Card */}
        <div className="lg:col-span-6">
          <div className="relative rounded-[32px] bg-gradient-to-b from-amber-50/90 via-orange-50/40 to-amber-100/50 p-6 sm:p-8 border border-amber-200/70 shadow-[0_25px_60px_-15px_rgba(245,158,11,0.15),_inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-between h-[520px] overflow-hidden">
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-end gap-2 h-7 overflow-hidden">
                {isAnythingSelected ? (
                  <>
                    <span className="text-xs font-bold text-slate-600 bg-white/60 px-3 py-1 rounded-full border border-white/80 shadow-sm backdrop-blur-md">
                      {activeOptionTitles.join(" & ")}
                    </span>
                    {selectedOptions.fast && (
                      <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-black text-white shadow-[0_4px_12px_rgba(245,158,11,0.3)]">
                        Fast Track
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-xs font-bold text-slate-500 bg-white/60 px-3 py-1 rounded-full border border-white/80 shadow-sm backdrop-blur-md">
                    No Service Selected
                  </span>
                )}
              </div>

              {/* Animated Price Counter */}
              <div className="mt-4 text-right h-12 flex items-center justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${formattedPrice}-${currency}`}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight drop-shadow-sm">
                      {formattedPrice}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Feature Highlights with Fixed Container Height to eliminate jitter */}
              <div className="mt-6 h-[270px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isAnythingSelected ? (
                    <motion.div
                      key="no-service"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-2.5 pt-2 text-slate-500 text-xs sm:text-sm font-medium"
                    >
                      <Check size={16} className="text-amber-500/80 shrink-0" />
                      <span>What services are you looking for with us?</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="service-details"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-700"
                    >
                      {/* Common Plan Feature Specs */}
                      <div className="flex items-center gap-2.5 text-slate-600">
                        <Clock size={16} className="text-amber-600/80 shrink-0" />
                        <span>{plan.commonFeatures[0].text(totalDays)}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-slate-600">
                        <RotateCcw size={16} className="text-amber-600/80 shrink-0" />
                        <span>{plan.commonFeatures[1].text(totalRevisions)}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-slate-600">
                        <ShieldCheck size={16} className="text-amber-600/80 shrink-0" />
                        <span>{plan.commonFeatures[2].text()}</span>
                      </div>

                      {/* Fast Track Highlight if active */}
                      {selectedOptions.fast && (
                        <div className="flex items-center gap-2.5 text-slate-800 font-semibold">
                          <Zap size={16} className="text-amber-600 shrink-0" />
                          <span>Fast delivery (3X everything)</span>
                        </div>
                      )}

                      {/* Dynamic Option Features */}
                      {activeFeatures.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-slate-600">
                          <Check size={16} className="text-amber-600/80 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative group overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 py-4 px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(0,0,0,0.25),_inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Book a 45-min call</span>
                  <Sparkles size={16} className="text-amber-400 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}