'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lock, BarChart3, Users } from 'lucide-react';
import tier from "@/src/images/3-tier.png";

export default function SoftwareArchitectureMethodology() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-16 sm:py-20 md:py-28">
      {/* Subtle background grid (COOL TECH VERSION) */}
      <div className="absolute inset-0 opacity-[0.1]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-5 sm:mb-6">
            <span className="text-sky-400 text-[11px] sm:text-xs font-mono uppercase tracking-widest">
              Our Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Built for <span className="text-sky-400">Growth</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            We don’t just design systems — we architect solutions that anticipate your business evolution.
          </p>
        </motion.div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-10 md:gap-14 lg:gap-20 items-center">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6 sm:space-y-8"
          >
            {[
              {
                icon: Users,
                title: "Business-First Thinking",
                description:
                  "We understand your business model and growth trajectory before touching code."
              },
              {
                icon: BarChart3,
                title: "Metrics-Driven Design",
                description:
                  "Every architectural decision is informed by performance metrics and scalability projections."
              },
              {
                icon: Lock,
                title: "Risk Mitigation",
                description:
                  "We identify potential failure points early and implement graceful degradation strategies."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left"
                >
                  <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT IMAGE (always order-2) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 relative"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden">
              <Image
                src={tier}
                alt="Three-tier architecture diagram"
                fill
                className="object-contain md:object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
