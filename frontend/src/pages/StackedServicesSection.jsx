
import { ArrowRight } from "lucide-react";

// Light-themed Animated Vector Illustrations for each service
const LightVectorIllustration = ({ id }) => {
  switch (id) {
    case 1:
      // Web App Development: Clean Dashboard Window & Nodes
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/60 to-slate-100 flex items-center justify-center overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          
          <svg className="w-full h-full max-w-2xl opacity-90" viewBox="0 0 800 450" fill="none">
            {/* Soft Glowing Curves */}
            <path d="M 100 225 C 250 100, 350 350, 500 225 C 600 150, 650 300, 700 225" 
                  stroke="#3b82f6" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" opacity="0.4" />
            <path d="M 150 150 C 300 300, 450 100, 650 250" 
                  stroke="#6366f1" strokeWidth="2" strokeDasharray="6 6" className="animate-[dash_15s_linear_infinite_reverse]" opacity="0.4" />

            {/* Web App Window Frame */}
            <g className="animate-[bounce_6s_ease-in-out_infinite]">
              <rect x="250" y="80" width="300" height="180" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className="shadow-2xl" />
              <rect x="250" y="80" width="300" height="36" rx="16" fill="#f8fafc" />
              <circle cx="275" cy="98" r="5" fill="#ef4444" />
              <circle cx="290" cy="98" r="5" fill="#f59e0b" />
              <circle cx="305" cy="98" r="5" fill="#10b981" />
              
              {/* Web Layout Components */}
              <rect x="275" y="130" width="80" height="10" rx="5" fill="#3b82f6" className="animate-pulse" />
              <rect x="365" y="130" width="160" height="10" rx="5" fill="#e2e8f0" />
              <rect x="275" y="152" width="250" height="12" rx="6" fill="#f1f5f9" />
              <rect x="275" y="174" width="115" height="60" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
              <rect x="400" y="174" width="125" height="60" rx="8" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="1" />
            </g>

            {/* Floating Decorative Balls */}
            <circle cx="180" cy="180" r="16" fill="#60a5fa" className="animate-pulse" opacity="0.7" />
            <circle cx="620" cy="240" r="22" fill="#818cf8" className="animate-bounce" opacity="0.6" />
          </svg>
        </div>
      );

    case 2:
      // Mobile App Development: Smartphone & Modern App UI
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50/50 to-fuchsia-50 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full max-w-2xl opacity-90" viewBox="0 0 800 450" fill="none">
            {/* Orbiting Ring */}
            <g className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "400px 200px" }}>
              <circle cx="400" cy="200" r="150" stroke="#c084fc" strokeWidth="2" strokeDasharray="6 12" opacity="0.3" />
            </g>
            
            {/* Smartphone Vector */}
            <g className="animate-[pulse_4s_ease-in-out_infinite]">
              <rect x="330" y="60" width="140" height="260" rx="28" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" className="shadow-2xl" />
              <rect x="370" y="72" width="60" height="6" rx="3" fill="#e2e8f0" />
              
              {/* App Interface Elements */}
              <rect x="346" y="92" width="108" height="60" rx="12" fill="#8b5cf6" opacity="0.85" />
              <rect x="346" y="162" width="50" height="50" rx="10" fill="#a78bfa" opacity="0.3" />
              <rect x="404" y="162" width="50" height="50" rx="10" fill="#38bdf8" opacity="0.3" />
              <rect x="346" y="222" width="108" height="30" rx="10" fill="#f1f5f9" />
              <circle cx="400" cy="237" r="8" fill="#8b5cf6" />
            </g>

            <circle cx="240" cy="140" r="12" fill="#c084fc" className="animate-bounce" />
            <circle cx="560" cy="250" r="18" fill="#f472b6" className="animate-pulse" />
          </svg>
        </div>
      );

    case 3:
      // Graphics Design: Creative Shapes, Color Palette & Canvas
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50/60 to-amber-50 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full max-w-2xl opacity-90" viewBox="0 0 800 450" fill="none">
            {/* Floating Vibrant Creative Shapes */}
            <circle cx="330" cy="180" r="85" fill="#fb7185" opacity="0.25" className="animate-pulse" />
            <polygon points="400,80 480,240 320,240" fill="#f43f5e" opacity="0.3" className="animate-[spin_16s_linear_infinite]" style={{ transformOrigin: "400px 180px" }} />
            <rect x="420" y="130" width="110" height="110" rx="16" fill="#fbbf24" opacity="0.3" className="animate-bounce" />
            
            {/* Color Swatch Bar */}
            <g className="animate-pulse">
              <rect x="280" y="270" width="240" height="40" rx="20" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />
              <circle cx="310" cy="290" r="12" fill="#f43f5e" />
              <circle cx="350" cy="290" r="12" fill="#ec4899" />
              <circle cx="390" cy="290" r="12" fill="#8b5cf6" />
              <circle cx="430" cy="290" r="12" fill="#3b82f6" />
              <circle cx="470" cy="290" r="12" fill="#10b981" />
            </g>
          </svg>
        </div>
      );

    case 4:
      // UI/UX Design: Wireframe Grid & Interactive Prototypes
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-cyan-50 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full max-w-2xl opacity-90" viewBox="0 0 800 450" fill="none">
            {/* Bezier Vector Path with Control Points */}
            <path d="M 150 280 Q 400 40 650 280" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6" />
            <circle cx="150" cy="280" r="6" fill="#059669" />
            <circle cx="400" cy="40" r="6" fill="#059669" />
            <circle cx="650" cy="280" r="6" fill="#059669" />
            <line x1="150" y1="280" x2="400" y2="40" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="400" y1="40" x2="650" y2="280" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* UI Wireframe Prototype Board */}
            <g className="animate-[bounce_5s_ease-in-out_infinite]">
              <rect x="260" y="110" width="280" height="170" rx="12" fill="#ffffff" stroke="#a7f3d0" strokeWidth="2" />
              <rect x="280" y="130" width="90" height="10" rx="5" fill="#10b981" />
              <rect x="280" y="152" width="240" height="8" rx="4" fill="#e2e8f0" />
              <rect x="280" y="168" width="180" height="8" rx="4" fill="#f1f5f9" />
              
              {/* Prototype Buttons */}
              <rect x="280" y="195" width="75" height="26" rx="13" fill="#10b981" />
              <rect x="365" y="195" width="75" height="26" rx="13" fill="#d1fae5" />
            </g>
          </svg>
        </div>
      );

    case 5:
      // Brand Design: Brand Identity Grid, Guidelines & Shapes
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full max-w-2xl opacity-90" viewBox="0 0 800 450" fill="none">
            {/* Concentric Rings */}
            <circle cx="400" cy="200" r="90" stroke="#f97316" strokeWidth="2" opacity="0.25" className="animate-ping" />
            <circle cx="400" cy="200" r="140" stroke="#fb923c" strokeWidth="2" opacity="0.2" />

            {/* Brand Card Stack */}
            <g className="animate-[bounce_4s_ease-in-out_infinite]">
              <rect x="310" y="100" width="180" height="180" rx="20" fill="#ffffff" stroke="#fed7aa" strokeWidth="2" className="shadow-xl" />
              <circle cx="400" cy="165" r="32" fill="#f97316" opacity="0.9" />
              <rect x="350" y="215" width="100" height="10" rx="5" fill="#fdba74" />
              <rect x="370" y="235" width="60" height="8" rx="4" fill="#f1f5f9" />
            </g>

            {/* Brand Badges */}
            <rect x="210" y="120" width="60" height="60" rx="16" fill="#f97316" opacity="0.75" className="animate-pulse" />
            <rect x="530" y="200" width="70" height="70" rx="18" fill="#fbbf24" opacity="0.8" className="animate-bounce" />
          </svg>
        </div>
      );

    case 6:
    default:
      // Logo Design: Precision Geometry, Vectors & Blueprint Lines
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50/60 to-blue-50 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full max-w-2xl opacity-90" viewBox="0 0 800 450" fill="none">
            {/* Precision Grid Blueprint Lines */}
            <line x1="200" y1="200" x2="600" y2="200" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
            <line x1="400" y1="70" x2="400" y2="330" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
            <circle cx="400" cy="200" r="110" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" opacity="0.4" />

            {/* Rotating Logo Emblem */}
            <g className="animate-[spin_15s_linear_infinite]" style={{ transformOrigin: "400px 200px" }}>
              <polygon points="400,110 475,245 325,245" stroke="#0284c7" strokeWidth="3.5" fill="none" />
              <circle cx="400" cy="200" r="55" stroke="#38bdf8" strokeWidth="3" fill="none" />
            </g>
            
            {/* Central Focal Point */}
            <circle cx="400" cy="200" r="16" fill="#0284c7" className="animate-pulse" />
          </svg>
        </div>
      );
  }
};

const services = [
  {
    id: 1,
    title: "Web App Development",
    description:
      "Develop scalable web applications and interactive platforms optimized for performance and users.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Build native and cross-platform mobile apps for iOS and Android tailored to your business needs.",
  },
  {
    id: 3,
    title: "Graphics Design",
    description:
      "Create high-impact visual assets, marketing media, and digital illustrations for all channels.",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Craft seamless user flows, interactive prototypes, and intuitive interfaces for digital products.",
  },
  {
    id: 5,
    title: "Brand Design",
    description:
      "Establish a cohesive visual identity, brand guidelines, and collateral across modern touchpoints.",
  },
  {
    id: 6,
    title: "Logo Design",
    description:
      "Design memorable, precision-crafted logos that encapsulate your brand identity.",
  },
];

export default function StackedServicesSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl py-12 px-4 ">
      {/* Keyframe animation for vector dashed lines */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>

      {/* Stacked Cards Container */}
      <div className="relative pb-[30vh]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="sticky transition-transform duration-300 ease-out mb-12 sm:mb-20"
            style={{
              top: `calc(5rem + ${index * 24}px)`,
              zIndex: index + 1,
            }}
          >
            {/* Card Container - Strict 16:9 Aspect Ratio */}
            <div className="relative aspect-video w-full overflow-hidden rounded-[28px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/80 bg-white">
              {/* 1. Light Theme Vector Background */}
              <LightVectorIllustration id={service.id} />

              {/* 2. Soft Smoky Gradient Overlay at Bottom */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 z-10"
                style={{
                  background: `linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.5) 30%,
                    rgba(255, 255, 255, 0.85) 65%,
                    rgba(255, 255, 255, 0.98) 85%,
                    #ffffff 100%
                  )`,
                }}
              />

              {/* 3. Text and CTA Content */}
              <div className="relative z-20 h-full w-full flex flex-col justify-end p-6 sm:p-10 md:p-12">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  {/* Left Title & Description */}
                  <div className="max-w-xl space-y-1 sm:space-y-2">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-base font-medium text-slate-600 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Right CTA Button */}
                  <div className="shrink-0">
                    <button className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95">
                      <span>Got an idea?</span>
                      <ArrowRight className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}