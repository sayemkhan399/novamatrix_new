import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Zap,
  Shield,
  Code2,
  Users,
  Trophy,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4 py-20 md:px-8 lg:px-12 pt-32">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e0e7ff 1px, transparent 1px), linear-gradient(to bottom, #e0e7ff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 mb-8"
              >
                <Zap size={18} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-900">
                  Welcome to Nova Matrix
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Innovative IT Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Cutting-edge technology, expert developers, and strategic vision
                to elevate your digital presence
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
                  Get Started <ArrowUpRight size={20} />
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-blue-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all">
                  Learn More
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-8 mt-12 pt-8 border-t border-gray-200"
              >
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10+</div>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Code2 size={80} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Digital Innovation</h3>
                  <p className="text-blue-100 mt-2">
                    Building tomorrow's solutions today
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Web Development",
                description:
                  "Custom web applications built with modern technologies",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description:
                  "Protect your assets with enterprise-grade security solutions",
              },
              {
                icon: TrendingUp,
                title: "Cloud Solutions",
                description:
                  "Scalable cloud infrastructure for your business growth",
              },
              {
                icon: Users,
                title: "Consulting",
                description: "Expert IT consulting for digital transformation",
              },
              {
                icon: Zap,
                title: "System Integration",
                description: "Seamless integration of your existing systems",
              },
              {
                icon: Trophy,
                title: "Support & Maintenance",
                description: "24/7 support and proactive system maintenance",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our IT solutions can help you achieve your goals
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center gap-2">
              Schedule a Consultation <ArrowUpRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
