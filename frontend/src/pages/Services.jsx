import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {

  CheckCircle2,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Briefcase,
  Headphones,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";

const servicesToType = [
  "Web Development",
  "Mobile Applications",
  "Cloud Solutions",
  "Cyber Security",
  "IT Consulting"
];

function TypewriterEffect() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(servicesToType[0].substring(0, 1));
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const word = servicesToType[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting && currentText === word) {
        setTypingSpeed(2000); // Pause at the end of the word
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % servicesToType.length);
        setTypingSpeed(500); // Pause before typing the next word
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
        setCurrentText((prev) => 
          isDeleting ? prev.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="inline-block min-w-[280px] md:min-w-[420px] lg:min-w-[480px]">
      <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-1.5 h-10 md:h-14 lg:h-16 bg-emerald-500 ml-1 align-middle rounded-sm"
      />
    </span>
  );
}

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern websites and scalable web applications engineered for performance and growth.",
    startingPrice: "$499+",
    icon: Code2,
    features: [
      "React & Next.js",
      "SEO Optimization",
      "API Integration",
      "High Performance",
    ],
    color: "emerald",
  },
  {
    id: 2,
    title: "Mobile Applications",
    description:
      "Premium iOS and Android applications with seamless user experiences.",
    startingPrice: "$799+",
    icon: Smartphone,
    features: [
      "Cross Platform",
      "Native Performance",
      "Clean UI/UX",
      "Realtime Features",
    ],
    color: "green",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and DevOps solutions built for reliability.",
    startingPrice: "$599+",
    icon: Cloud,
    features: [
      "AWS & Azure",
      "Cloud Migration",
      "CI/CD Pipelines",
      "Infrastructure",
    ],
    color: "emerald",
  },
  {
    id: 4,
    title: "Cyber Security",
    description:
      "Protect your systems with enterprise-grade security and monitoring.",
    startingPrice: "$699+",
    icon: ShieldCheck,
    features: [
      "Security Audits",
      "Pen Testing",
      "Threat Detection",
      "Data Protection",
    ],
    color: "green",
  },
  {
    id: 5,
    title: "IT Consulting",
    description:
      "Strategic consulting services to accelerate digital transformation.",
    startingPrice: "$299+",
    icon: Briefcase,
    features: [
      "Business Strategy",
      "Digital Growth",
      "Tech Consulting",
      "Optimization",
    ],
    color: "emerald",
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description:
      "Continuous support, optimization, and maintenance for your products.",
    startingPrice: "$199+/mo",
    icon: Headphones,
    features: [
      "24/7 Support",
      "System Monitoring",
      "Bug Fixing",
      "Maintenance",
    ],
    color: "green",
  },
];

const stats = [
  {
    title: "120+",
    description: "Projects Delivered",
    icon: Zap,
  },
  {
    title: "98%",
    description: "Client Satisfaction",
    icon: TrendingUp,
  },
  {
    title: "24/7",
    description: "Dedicated Support",
    icon: Headphones,
  },
  {
    title: "8+",
    description: "Years Experience",
    icon: Sparkles,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
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

const getCardStyle = (color) => {
  if (color === "emerald") {
    return {
      border: "border-emerald-200/70",
      bg: "bg-gradient-to-br from-emerald-50/70 via-white/50 to-emerald-50/30",
      icon: "bg-emerald-100/80 text-emerald-600",
      badge: "bg-emerald-100/70 text-emerald-700",
      button: "bg-emerald-600 hover:bg-emerald-700",
      shadow: "hover:shadow-[0_30px_90px_rgba(16,185,129,0.2)]",
      price: "text-emerald-600",
      accent: "from-emerald-500 to-green-500",
    };
  }

  return {
    border: "border-green-200/70",
    bg: "bg-gradient-to-br from-green-50/70 via-white/50 to-green-50/30",
    icon: "bg-green-100/80 text-green-600",
    badge: "bg-green-100/70 text-green-700",
    button: "bg-green-600 hover:bg-green-700",
    shadow: "hover:shadow-[0_30px_90px_rgba(34,197,94,0.2)]",
    price: "text-green-600",
    accent: "from-green-500 to-emerald-500",
  };
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-44">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-green-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-20 md:mb-24 max-w-4xl text-center"
        >
          <motion.div 
            variants={itemVariants} 
            className=""
          >


          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.2]"
          >
            Transforming Ideas Into Expert
            <br className="block" />
            <span className="relative mt-1 sm:mt-2 inline-block">
              <TypewriterEffect />
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 font-medium"
          >
            We help startups, SaaS businesses, and modern brands create scalable, 
            high-performance digital experiences that drive measurable growth and 
            long-term success.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-3xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50/60 via-white/40 to-green-50/60 p-7 shadow-lg backdrop-blur-xl hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-emerald-600" />
                </div>
                <h3 className="text-3xl font-black text-gray-900">
                  {stat.title}
                </h3>
                <p className="mt-2 text-gray-600 font-medium">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const styles = getCardStyle(service.color);
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className={`group relative overflow-hidden rounded-[32px] border-2  ${styles.bg} p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 ${styles.shadow} backdrop-blur-xl`}
              >
                {/* Gradient Accent */}
                <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${styles.accent} opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${styles.icon} transition-all duration-300`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-700 font-medium mb-5">
                    {service.description}
                  </p>

                  {/* Price Badge */}
                  <div className={`inline-flex rounded-full ${styles.badge} px-4 py-2 text-sm font-bold mb-6`}>
                    Starting from <span className={`ml-1.5 ${styles.price}`}>{service.startingPrice}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 pb-8 border-b border-gray-200/60">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`flex-shrink-0 rounded-full ${styles.badge} p-1`}>
                          <CheckCircle2 size={16} className={styles.price.replace("text-", "")} />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Available Now
                    </span>

                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.button} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-32 relative overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 p-12 md:p-16 lg:p-20 text-center text-white shadow-2xl"
        >
          {/* Pattern */}
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ready to Transform Your Business?
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg lg:text-xl text-white/90 font-medium">
              Let's work together to create innovative digital solutions that drive measurable business growth and success.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white px-10 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}