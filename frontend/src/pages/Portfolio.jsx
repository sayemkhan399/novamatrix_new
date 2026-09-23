import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";

import {
  FaGithub,
  FaReact,
  FaVuejs,
  FaPython,
  FaJava,
  FaPhp,
  FaLaravel,
  FaDocker,
  FaRust,
  FaSwift,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiSpring,
  SiKotlin,
  SiFlutter,
  SiKubernetes,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

// Fix for Vite default export resolution
const MarqueeComponent = Marquee.default || Marquee;

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    description:
      "Full-stack e-commerce solution with payment integration and advanced dashboard.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "#",
    github: "#",
    color: "emerald",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "mobile",
    description:
      "Secure banking experience with modern UI and real-time transactions.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
    tags: ["React Native", "Firebase", "Security"],
    live: "#",
    github: "#",
    color: "green",
  },
  {
    id: 3,
    title: "Cloud Analytics",
    category: "cloud",
    description:
      "Real-time business analytics platform powered by cloud infrastructure.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    tags: ["AWS", "Analytics", "Dashboard"],
    live: "#",
    github: "#",
    color: "emerald",
  },
  {
    id: 4,
    title: "Healthcare System",
    category: "web",
    description:
      "Complete healthcare management software for clinics and hospitals.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
    tags: ["Next.js", "PostgreSQL", "Healthcare"],
    live: "#",
    github: "#",
    color: "green",
  },
  {
    id: 5,
    title: "AI Assistant",
    category: "mobile",
    description:
      "AI-powered chatbot solution with intelligent customer support.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    tags: ["OpenAI", "Python", "ML"],
    live: "#",
    github: "#",
    color: "emerald",
  },
  {
    id: 6,
    title: "Enterprise ERP",
    category: "cloud",
    description:
      "Scalable enterprise management platform with cloud architecture.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    tags: ["Azure", ".NET", "Enterprise"],
    live: "#",
    github: "#",
    color: "green",
  },
];

const techRow1 = [
  { name: "Django", icon: SiDjango, color: "text-emerald-800" },
  { name: "Flask", icon: SiFlask, color: "text-gray-800" },
  { name: "Spring", icon: SiSpring, color: "text-green-600" },
  { name: "Kotlin", icon: SiKotlin, color: "text-purple-600" },
  { name: "Swift", icon: FaSwift, color: "text-orange-500" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "React", icon: FaReact, color: "text-sky-400" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-600" },
  { name: "Java", icon: FaJava, color: "text-red-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "Vue js", icon: FaVuejs, color: "text-emerald-500" },
];

const techRow2 = [
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "Flutter", icon: SiFlutter, color: "text-sky-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "MySQL", icon: SiMysql, color: "text-sky-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Rust", icon: FaRust, color: "text-gray-900" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const getColorClass = (color, type = "bg") => {
    if (color === "emerald") {
      return type === "bg"
        ? "bg-emerald-50/40 border-emerald-200/60"
        : "text-emerald-600";
    }
    return type === "bg"
      ? "bg-green-50/40 border-green-200/60"
      : "text-green-600";
  };

  const getTagClass = (color) => {
    if (color === "emerald") {
      return "bg-emerald-100/70 text-emerald-700";
    }
    return "bg-green-100/70 text-green-700";
  };

  const getHoverClass = (color) => {
    if (color === "emerald") {
      return "group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)] group-hover:border-emerald-300/80";
    }
    return "group-hover:shadow-[0_20px_60px_rgba(34,197,94,0.2)] group-hover:border-green-300/80";
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-[600px] w-[600px] rounded-full bg-green-100/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, black 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/60 backdrop-blur px-4 py-2.5 text-sm font-semibold text-emerald-700"
          >
            <Sparkles size={16} />
            Portfolio Showcase
          </motion.span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900">
            Our Recent
            <span className="relative inline-block mx-3">
              <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
                Projects
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-gray-600 font-medium">
            Explore our portfolio of innovative digital products, enterprise
            platforms, mobile applications, and cloud solutions that drive real
            business impact.
          </p>
        </motion.div>

        {/* Tech Stacks Marquee Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 py-10"
        >


          <div className="space-y-4 overflow-hidden relative">
            {/* Fade Gradients at Edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

            {/* Row 1 */}
            <MarqueeComponent speed={35} gradient={false} pauseOnHover={true}>
              <div className="flex gap-4 py-2 pr-4">
                {techRow1.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-full border border-gray-200/80  px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {Icon && <Icon className={`text-xl ${item.color}`} />}
                      <span className="text-sm font-medium text-gray-800">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </MarqueeComponent>

            {/* Row 2 */}
            <MarqueeComponent
              speed={35}
              gradient={false}
              direction="right"
              pauseOnHover={true}
            >
              <div className="flex gap-4 py-2 pr-4">
                {techRow2.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-full border border-gray-200/80 bg-white px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {Icon && <Icon className={`text-xl ${item.color}`} />}
                      <span className="text-sm font-medium text-gray-800">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </MarqueeComponent>
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="mt-28 overflow-hidden rounded-[36px] border border-emerald-200/50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <div className="absolute inset-0 bg-grid-white/5 [background-size:20px_20px]" />

          <div className="relative grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 md:p-14 lg:p-16 flex flex-col justify-center"
            >
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur px-4 py-2 text-sm font-semibold text-emerald-300 w-fit">
                Featured Project
              </span>

              <h2 className="mt-8 text-4xl lg:text-5xl font-black text-white leading-tight">
                Enterprise SaaS Platform
              </h2>

              <p className="mt-7 text-lg leading-relaxed text-gray-300 font-medium">
                A scalable enterprise solution serving thousands of users with
                real-time analytics, cloud infrastructure, advanced automation
                workflows, and dedicated support.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Next.js", "PostgreSQL", "AWS", "Stripe"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
              >
                View Case Study
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[300px] lg:h-auto overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
                alt="Enterprise Platform"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-gray-900/60 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-wrap justify-center gap-4"
        >
          {["all", "web", "mobile", "cloud"].map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-7 py-3 font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-500/30"
                  : "border-2 border-emerald-200/50 bg-gradient-to-br from-emerald-50/40 to-green-50/40 text-gray-700 hover:border-emerald-400 hover:shadow-lg"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            layout
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className={`group overflow-hidden rounded-[28px] border-2 ${getColorClass(project.color, "bg")} ${getHoverClass(project.color)} bg-gradient-to-br from-white/60 via-white/40 to-white/60 shadow-lg hover:shadow-2xl backdrop-blur-xl transition-all duration-300`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-[280px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 backdrop-blur text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 backdrop-blur text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-xs font-bold backdrop-blur ${getTagClass(project.color)}`}
                    >
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-700 font-medium">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-bold backdrop-blur ${getTagClass(project.color)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-32 relative overflow-hidden rounded-[36px] bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 p-12 md:p-16 lg:p-20 text-center text-white shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg lg:text-xl text-white/90 font-medium">
              Partner with us to build scalable digital products that create
              real business impact and drive growth for your organization.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 rounded-full bg-white px-10 py-5 text-lg font-bold text-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}