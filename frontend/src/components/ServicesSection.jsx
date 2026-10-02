import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Monitor,
  Palette,
  PenTool,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const services = {
  uiux: ["User flows", "Wireframes", "Interfaces", "Prototypes"],
  web: ["Websites", "Web apps", "Mobile apps", "Integrations"],
  brand: ["Brand graphics", "Campaigns", "Social media", "Marketing"],
};

const Tag = ({ text }) => (
  <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700">
    {text}
  </span>
);

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  tags,
  className = "",
}) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className={`h-full rounded-[28px] border border-emerald-100 bg-white p-6 md:p-8 shadow-[0_4px_30px_rgba(16,185,129,0.06)]${className}`}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
        <Icon size={20} className="text-neutral-800" />
      </div>

      <h3 className="mb-3 text-xl md:text-2xl font-semibold text-neutral-950">
        {title}
      </h3>

      <p className="mb-6 text-sm md:text-base leading-relaxed text-neutral-600">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="bg-[#f7fffa] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-3 w-3 border-l-2 border-t-2 border-green-500" />
          <span className="text-sm font-medium text-neutral-700">
            Our Services
          </span>
          <div className="h-3 w-3 border-r-2 border-b-2 border-green-500" />
        </div>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950"
        >
          Software and design for digital products
          <br />
          <span className="text-neutral-400">
            From concept to visual detail
          </span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12"
        >
          {/* Left Tall */}
          <div className="xl:col-span-4 xl:row-span-2">
            <ServiceCard
              icon={PenTool}
              title="UI/UX Design"
              description="User flows, wireframes, interface design, and prototypes for websites and apps."
              tags={services.uiux}
              className="xl:min-h-[540px]"
            />
          </div>

          {/* Top Right */}
          <div className="xl:col-span-8">
            <ServiceCard
              icon={Code2}
              title="Software Development"
              description="Websites, web applications, and mobile software built around project requirements."
              tags={services.web}
              className="min-h-[260px]"
            />
          </div>

          {/* Middle Right */}
          <div className="xl:col-span-8">
            <ServiceCard
              icon={Palette}
              title="Graphic Design"
              description="Visual assets for brands and digital products, including campaign and social media graphics."
              tags={services.brand}
              className="min-h-[260px]"
            />
          </div>

          {/* Bottom Left */}
          <div className="xl:col-span-8">
            <ServiceCard
              icon={Layers3}
              title="Product Design & Development"
              description="Bring software development, user experience design, and graphic design together for a digital product."
              tags={["Prototype", "Launch", "Testing", "Scale"]}
              className="min-h-[260px]"
            />
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="xl:col-span-4 rounded-[28px] bg-neutral-950 p-8 text-white flex flex-col justify-between min-h-[260px]"
          >
            <Monitor size={28} />

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                Software & Design.
                <br />
                Made for your product.
              </h3>
            </div>

            <button className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
              Book a call
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
