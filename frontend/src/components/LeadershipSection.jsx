import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

// Note: Ensure your Tailwind config has a 'glass-shimmer' animation defined.

const leaders = [
  {
    name: "Md. Sayem Khan",
    role: "CEO",
    description:
      "Leading product strategy, modern UI systems, and scalable digital experiences for ambitious brands.",
    image:
      "https://i.ibb.co.com/hJ8mfyN2/Whats-App-Image-2025-05-01-at-22-48-42.jpg",
    linkedin: "#",
    email: "mailto:example@domain.com",
  },
  {
    name: "Shahriar Shishir",
    role: "Founder",
    description:
      "Focused on innovation, business growth, and building high-performing digital solutions worldwide.",
    image:
      "https://i.ibb.co.com/C5d0GXzT/Whats-App-Image-2025-12-14-at-22-24-32.jpg",
    linkedin: "#",
    email: "mailto:example@domain.com",
  },
  {
    name: "Mahadin Islam",
    role: "Head of Engineering",
    description:
      "Specialized in scalable architecture, cloud systems, and premium web application development.",
    image:
      "https://i.ibb.co.com/G3pWRpzG/Whats-App-Image-2025-12-14-at-22-24-16.jpg",
    linkedin: "#",
    email: "mailto:example@domain.com",
  },
];

// Employee Data - Only Image, Name, and Designation
const employees = [
  {
    name: "Kazi Naznin Akter",
    role: " UI/UX Designer",
    image: "https://i.ibb.co.com/R4pnWGfF/naznin.jpg",
  },
  {
    name: "Md. Abidur Rahman",
    role: "Full Stack Engineer",
    image:
      "https://i.ibb.co.com/mrySqJw1/Whats-App-Image-2026-09-26-at-6-39-54-PM.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function LeadershipSection() {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* ================= LEADERSHIP SECTION ================= */}
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-gray-800">
            Leadership
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Visionaries & Leaders
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
            The NovaMatrix team works across software development, UI/UX design,
            and graphic design.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-4 sm:px-10 max-w-5xl">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center rounded-3xl p-3 border-none relative transition-all duration-300"
            >
              {/* Corner-to-corner glassy light effect (Shimmer) */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-10 top-0 w-[50%] h-[20%] bg-white blur-xl opacity-80 -translate-x-[150%] -translate-y-[150%] animate-glass-shimmer group-hover:animate-glass-shimmer"></div>
              </div>

              {/* Image Container */}
              <div className="relative mb-5 w-full overflow-hidden rounded-3xl aspect-[10/11] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03]"
                />

                {/* Image blending background */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"></div>

                {/* Social Actions Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 rounded-xl bg-white/60 p-2 shadow-xl backdrop-blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={leader.email}
                    aria-label="Email"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-gray-800 shadow-md transition-all hover:bg-red-50 hover:text-red-500 hover:scale-110"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={leader.linkedin}
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-gray-800 shadow-md transition-all hover:bg-sky-50 hover:text-sky-600 hover:scale-110"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>

              {/* Leader Info */}
              <h3 className="text-xl font-bold text-gray-950">{leader.name}</h3>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
                {leader.role}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-5xl border-t border-emerald-100 pt-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700">
                The wider team
              </span>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Great work is a team effort.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
              Design perspective and engineering craft, working side by side.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {employees.map((employee, index) => (
              <motion.article
                key={employee.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(15,23,42,0.1)] sm:gap-5 sm:p-5"
              >
                <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-emerald-50 sm:h-28 sm:w-24">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">
                    Team member 0{index + 1}
                  </p>
                  <h4 className="mt-2 break-words text-lg font-bold leading-tight text-gray-950 sm:text-xl">
                    {employee.name}
                  </h4>
                  <p className="mt-2 text-sm font-medium text-gray-500">
                    {employee.role.trim()}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
