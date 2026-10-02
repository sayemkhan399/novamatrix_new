import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Develop websites and web applications around your product requirements and users.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Design and develop mobile applications for iOS and Android based on your project requirements.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Design user flows, interfaces, wireframes, and prototypes for websites and applications.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Create visual assets for brands, campaigns, and digital products.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "Graphic Design for Digital Channels",
    description:
      "Design campaign graphics, social media assets, and other digital marketing visuals.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    title: "Brand Graphics",
    description:
      "Create consistent visual materials for a brand across its digital channels.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 7,
    title: "Product Design & Development",
    description:
      "Combine software development, UI/UX design, and graphic design to support a digital product.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
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
