'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import architectureDiagram from "@/src/images/microservices.png";
import { badges } from "../data/softwareSolutionsData";

export default function SoftwareArchitectureHero() {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 opacity-[0.15]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(251, 191, 36, 1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 text-center lg:text-left flex flex-col items-center lg:items-start space-y-5 sm:space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <span className="text-amber-400 text-[11px] sm:text-xs font-mono uppercase tracking-widest">
                Enterprise-Grade Architecture
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">
              <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Software Architecture
              </span>
              <br />
              <span className="text-amber-400">That Scales</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
              We architect robust, scalable systems that evolve with your business.
              From monolithic foundations to distributed microservices, we design
              solutions that handle growth, complexity, and change.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
              {badges.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 relative"
          >
            <div className="relative w-full aspect-4/3 md:aspect-16/10 lg:aspect-video bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden">
              <Image
                src={architectureDiagram}
                alt="Software architecture diagram showing microservices structure"
                fill
                className="object-contain md:object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 flex justify-center lg:justify-end"
        >
          <Link href="/solutions/architecture-review">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl border border-amber-500/30 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-amber-400 font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
            >
              <Network className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 transition-transform group-hover:rotate-12" />
              <span>Schedule Architecture Review</span>
              <span className="absolute inset-0 rounded-xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
