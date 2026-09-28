
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "UI UX",
    description: "Make a Design that speaks for itself",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "AI",
    description:
      "Integrate AI in your business. Automate every task in your business",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "LMS",
    description: "Get your own Learning Management System",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Protect your systems with enterprise-grade security and monitoring.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "IT Consulting",
    description:
      "Strategic consulting services to accelerate digital transformation.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function StackedServicesSection() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl py-12">
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
            <div className="relative aspect-video w-full overflow-hidden rounded-[28px] sm:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100">
              
              {/* 1. Base Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* 2. PURE GRADIENT SMOOKY BOTTOM (No backdrop-blur to prevent scroll bugs) */}
              <div 
                className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 z-10"
                style={{
                  background: `linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.4) 30%,
                    rgba(255, 255, 255, 0.75) 65%,
                    rgba(255, 255, 255, 0.95) 85%,
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
                    <button className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95">
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