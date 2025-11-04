'use client'

import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import { fadeIn, containerVariants } from '@/src/utils/motion'
import { opportunities, communityStats } from '@/src/data/opportunities'
import type { Opportunity } from '@/src/data/opportunities'

export default function Opportunities() {
  return (
    <section id='join' data-nav-section className="relative py-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <HeaderSection />
        <OpportunityCardsGrid />
        <CommunityMetricsBar />
      </div>
    </section>
  )
}

// Header Section Component
function HeaderSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mb-20 md:mb-24"
    >
      {/* Badge */}
      <motion.div
      //@ts-ignore
        variants={fadeIn('down', 'spring', 0, 0.6)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-full mb-6 backdrop-blur-sm"
      >
        <Rocket className="w-3.5 h-3.5 text-amber-500" />
        <span className="text-amber-500 text-xs font-mono uppercase tracking-widest font-semibold">
          Join Our Team
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
       //@ts-ignore
        variants={fadeIn('up', 'spring', 0.2, 0.75)}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
      >
        <span className="bg-linear-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
          Launch Your Career
        </span>
        <br />
        <span className="text-amber-500">With WESA</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
       //@ts-ignore
        variants={fadeIn('up', 'spring', 0.3, 0.8)}
        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        Join a team building the future of AI-powered solutions for healthcare and enterprise
      </motion.p>
    </motion.div>
  )
}

// Opportunity Cards Grid Component
function OpportunityCardsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
      {opportunities.map((opportunity, index) => (
        opportunity.type === 'open-position' ? (
          <PrimaryCard key={opportunity.id} opportunity={opportunity} index={index} />
        ) : (
          <SecondaryCard key={opportunity.id} opportunity={opportunity} index={index} />
        )
      ))}
    </div>
  )
}

// Primary Card (Open Positions)
function PrimaryCard({ opportunity, index }: { opportunity: Opportunity; index: number }) {
  const Icon = opportunity.icon

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
       //@ts-ignore
      variants={fadeIn('right', 'spring', 0.2 + index * 0.1, 0.8)}
      className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-900 via-gray-900 to-gray-800 border border-white/10 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 min-h-[500px] md:min-h-[600px] p-6 md:p-8 lg:p-10"
    >
      {/* Animated Gradient Orb */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-linear-to-br from-amber-500/20 via-amber-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 186, 0, 0.05) 25%, rgba(255, 186, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 186, 0, 0.05) 75%, rgba(255, 186, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 186, 0, 0.05) 25%, rgba(255, 186, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 186, 0, 0.05) 75%, rgba(255, 186, 0, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Top Border Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6">
            <div className="w-16 h-16 bg-linear-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:border-amber-500/50 transition-all duration-300">
            <Icon className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
          {opportunity.title}
        </h3>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
          {opportunity.description}
        </p>

        {/* Role Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 flex-1">
          {opportunity.roles?.map((role, roleIndex) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * roleIndex, duration: 0.4 }}
              className="relative group/pill"
            >
              <div className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-amber-500/30 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 group-hover/pill:animate-pulse" />
                  <span className="text-sm font-mono text-gray-300 group-hover/pill:text-white transition-colors">
                    {role.title}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-amber-500/0 group-hover/pill:bg-amber-500/5 transition-all duration-300 -z-10 blur-sm" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href={opportunity.ctaLink}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-amber-500 via-amber-400 to-amber-500 text-black rounded-xl font-bold text-base shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 border border-amber-400/50 overflow-hidden group/btn"
        >
          <span>{opportunity.ctaText}</span>
          <opportunity.ctaIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />

          {/* Button shine effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ['-200%', '200%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'linear'
            }}
          />
        </motion.a>
      </div>
    </motion.div>
  )
}

// Secondary Card (Community Contributors)
function SecondaryCard({ opportunity, index }: { opportunity: Opportunity; index: number }) {
  const Icon = opportunity.icon

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
       //@ts-ignore
      variants={fadeIn('left', 'spring', 0.3 + index * 0.1, 0.8)}
      className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 border border-white/10 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500 min-h-[500px] md:min-h-[600px] p-6 md:p-8 lg:p-10"
    >
      {/* Gradient Orb */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-linear-to-br from-purple-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-linear-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:border-purple-500/50 transition-all duration-300">
            <Icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
          {opportunity.title}
        </h3>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-400 leading-relaxed mb-8 max-w-md">
          {opportunity.description}
        </p>

        {/* Contribution Types */}
        <div className="space-y-3 mb-8 flex-1">
          {opportunity.contributions?.map((contribution, contribIndex) => {
            const ContribIcon = contribution.icon
            return (
              <motion.div
                key={contribution.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * contribIndex, duration: 0.4 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="w-8 h-8 shrink-0 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center">
                  <ContribIcon className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1">{contribution.type}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{contribution.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.a
          href={opportunity.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-purple-500/50 text-purple-400 rounded-xl font-bold text-base hover:bg-purple-500/10 hover:border-purple-500 hover:text-purple-300 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 group/btn"
        >
          <opportunity.ctaIcon className="w-5 h-5" />
          <span>{opportunity.ctaText}</span>
          <opportunity.ctaIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </div>
    </motion.div>
  )
}

// Community Metrics Bar Component
function CommunityMetricsBar() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl bg-linear-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 border border-white/5 backdrop-blur-sm">
        {communityStats.map((stat, index) => {
          const StatIcon = stat.icon
          return (
            <motion.div
              key={stat.id}
               //@ts-ignore
              variants={fadeIn('up', 'spring', index * 0.1, 0.6)}
              className="text-center group cursor-default"
            >
              <div className="mb-2">
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-3 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300"
                >
                  <StatIcon className="w-6 h-6 text-amber-500" />
                </motion.div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
