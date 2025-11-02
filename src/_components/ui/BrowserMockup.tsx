'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface BrowserMockupProps {
  url: string;
  src: string;
  widthClass?: string;
  heightClass?: string;
}

export default function BrowserMockup({
  url,
  src,
  widthClass = 'max-w-7xl',
  heightClass = 'max-h-[75vh]',
}: BrowserMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`relative ${widthClass} mx-auto`}
    >
      <div className="absolute -inset-2 bg-linear-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-2xl blur-2xl" />
      <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 mx-4 bg-gray-700/50 rounded-lg px-4 py-2 flex items-center gap-2 overflow-hidden">
            <Globe className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="text-sm text-gray-300 truncate">{url}</span>
          </div>
        </div>
        <div
          className={`relative bg-white rounded-b-2xl overflow-hidden ${heightClass}`}
        >
          <iframe
            src={src}
            className="w-full h-full"
            title="Live Platform Preview"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}
