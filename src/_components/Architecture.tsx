'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

import MonolithicFlow from './MonolithicFlow';
import MicroservicesFlow from './MicroservicesFlow';
import ArchitectureHeader from './ArchitectureHeader';

export default function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      <ArchitectureHeader />
      <div className="relative z-10">
        <MonolithicFlow />
        <MicroservicesFlow />
      </div>
      <div className="h-32" />
    </section>
  );
}