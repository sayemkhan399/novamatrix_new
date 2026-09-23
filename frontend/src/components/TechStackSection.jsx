import { motion } from "framer-motion";

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiCloudflare,
  SiFigma,
  SiCss
} from "react-icons/si";

import {
  Server,
  Bot,
  Cloud
} from "lucide-react";

const techStacks = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },

  { name: "Flutter", icon: SiFlutter },

  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: Server },

  { name: "Python", icon: SiPython },

  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },

  { name: "AWS", icon: Cloud }, // fixed
  { name: "OpenAI", icon: Bot },

  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Cloudflare", icon: SiCloudflare },

  { name: "Figma", icon: SiFigma },
];
function TechCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-emerald-100 bg-white px-6 py-4 shadow-sm">
      <Icon
        size={20}
        className="text-emerald-600"
      />
      <span className="text-sm font-semibold text-neutral-800 md:text-base">
        {item.name}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  const doubled = [...techStacks, ...techStacks];

  return (
    <section className="overflow-hidden bg-[#f7fffa] py-2">
      <div className="relative">
        
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f7fffa] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f7fffa] to-transparent" />

        {/* marquee */}
        <motion.div
          className="flex w-max gap-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubled.map((item, index) => (
            <TechCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}