'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import tier from "@/src/images/3-tier.png";
import { methodology } from '../data/softwareSolutionsData';

export default function SoftwareArchitectureMethodology() {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black py-16 sm:py-20 md:py-28">
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

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-12">
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

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Built for <span className="text-sky-400">Growth</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            We don’t just design systems — we architect solutions that anticipate your business evolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-10 md:gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6 sm:space-y-8"
          >
            {methodology.map((item, i) => {
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 relative"
          >
            <div className="relative w-full aspect-4/3 md:aspect-16/10 lg:aspect-video bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden">
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
