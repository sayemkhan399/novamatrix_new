import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

import {
  FaDocker,
  FaGithub,
  FaJava,
  FaLaravel,
  FaPhp,
  FaPython,
  FaReact,
  FaRust,
  FaSwift,
  FaVuejs,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlask,
  SiFlutter,
  SiGraphql,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiSpring,
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

  const getTagClass = (color) => {
    if (color === "emerald") {
      return "border-emerald-200 bg-emerald-50 text-emerald-800";
    }
    return "border-green-200 bg-green-50 text-green-800";
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
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_14px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="relative min-h-[280px] overflow-hidden bg-emerald-50 sm:min-h-[380px] lg:min-h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
              alt="Team collaborating on an enterprise software platform"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-emerald-800 shadow-sm sm:left-7 sm:top-7">
              <Sparkles size={14} />
              Selected work
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-emerald-700">
              Enterprise · SaaS
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-neutral-950 sm:text-4xl">
              Enterprise SaaS Platform
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
              A scalable enterprise solution serving thousands of users with
              real-time analytics, cloud infrastructure, advanced automation
              workflows, and dedicated support.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Next.js", "PostgreSQL", "AWS", "Stripe"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs font-semibold text-neutral-700 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="/Contact"
              className="mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Discuss a similar project
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.article>

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
              <motion.article
                key={project.id}
                layout
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_46px_rgba(15,23,42,0.12)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-emerald-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <span
                    className={`absolute left-4 top-4 inline-flex rounded-full border px-3.5 py-2 text-xs font-bold capitalize ${getTagClass(project.color)}`}
                  >
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-xs font-bold tabular-nums text-neutral-600">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-snug text-neutral-950 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-neutral-100 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.live !== "#" || project.github !== "#") && (
                    <div className="mt-5 flex gap-2">
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          aria-label={`Open ${project.title} live project`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          aria-label={`Open ${project.title} source code`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          <FaGithub size={17} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
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
