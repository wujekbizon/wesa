'use client';

import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';
import ScrollButton from './ui/ScrollButton';
import BrowserMockup from './ui/BrowserMockup';

export default function WolfmedHeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasManuallyDragged, setHasManuallyDragged] = useState(false);
  const autoAnimationRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isUserActive, setIsUserActive] = useState(false);

  const splitPosition = useMotionValue(90);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(heroScroll, [0, 0.5], [0, -50]);

  const stats = [
    { label: 'Questions', value: 10500, color: 'text-amber-400', suffix: '+' },
    { label: 'Procedures', value: 31, color: 'text-orange-400' },
    { label: 'Users', value: 4500, color: 'text-yellow-400', suffix: '+' },
  ];
  const handleUserActivity = useCallback(() => {
    setIsUserActive(true);
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      setIsUserActive(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'click', 'scroll', 'keydown', 'touchstart', 'touchmove', 'wheel'];

    events.forEach(event => {
      window.addEventListener(event, handleUserActivity, { passive: true });
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserActivity);
      });
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [handleUserActivity]);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  useEffect(() => {
    if (isUserActive || hasManuallyDragged) {
      if (autoAnimationRef.current) {
        clearTimeout(autoAnimationRef.current);
        autoAnimationRef.current = null;
      }
      return;
    }

    const startDelay = setTimeout(() => {
      const runAutoAnimation = async () => {
        if (isUserActive || hasManuallyDragged) return;

        await animate(splitPosition, 10, {
          duration: 2,
          ease: [0.4, 0, 0.2, 1],
        });
        await new Promise(resolve => setTimeout(resolve, 13000));

        if (isUserActive || hasManuallyDragged) return;

        await animate(splitPosition, 90, {
          duration: 2,
          ease: [0.4, 0, 0.2, 1],
        });

        await new Promise(resolve => setTimeout(resolve, 13000));
      };

      runAutoAnimation();
      const interval = setInterval(() => {
        if (!isUserActive && !hasManuallyDragged) {
          runAutoAnimation();
        }
      }, 30000);

      autoAnimationRef.current = interval;
    }, 10000);

    return () => {
      clearTimeout(startDelay);
      if (autoAnimationRef.current) {
        clearInterval(autoAnimationRef.current);
      }
    };
  }, [isUserActive, hasManuallyDragged, splitPosition]);

  const handlePointerDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setHasManuallyDragged(true);
    handleUserActivity();
    e.preventDefault();
    e.stopPropagation();
  };

  const handlePointerMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'clientX' in e ? e.clientX : e.touches?.[0]?.clientX;
    if (!clientX) return;

    const percentage = ((clientX - rect.left) / rect.width) * 100;
    const clampedPercentage = Math.max(10, Math.min(90, percentage));

    splitPosition.set(clampedPercentage);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e: MouseEvent | TouchEvent) => handlePointerMove(e);
      const handleUp = () => handlePointerUp();

      window.addEventListener('mousemove', handleMove, { passive: false });
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleUp);

      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleUp);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleUp);
      };
    }
  }, [isDragging]);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black"
    >
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 w-full"
      >
        <div className="relative w-full">
          <div
            ref={containerRef}
            className="relative flex items-stretch h-screen w-full overflow-hidden bg-black"
          >
            <motion.div
              style={{
                width: useTransform(splitPosition, (v) => `${v}%`),
              }}
              className="relative flex items-center justify-center overflow-hidden"
            >
              <motion.div
                style={{
                  opacity: useTransform(splitPosition, [10, 40, 75], [0.2, 0.7, 1]),
                  filter: useTransform(splitPosition, [10, 50, 75], ['blur(8px)', 'blur(2px)', 'blur(0px)']),
                }}
                className="relative z-10 w-[90%] max-w-3xl mx-auto px-2 sm:px-6 text-center"
              >
                <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl shadow-black/40 h-[65vh] flex flex-col justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mx-auto"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-500 rounded-full animate-pulse" />
                    <span className="text-amber-400 text-xs sm:text-sm font-medium">
                      Featured Project 2025
                    </span>
                  </motion.div>

                  <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
                    >
                      <span className="text-white">Transforming</span>
                      <br />
                      <span className="bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                        Medical Education
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2"
                    >
                      Empowering healthcare professionals across Poland with modern
                      learning tools and adaptive testing systems.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
                  >
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm min-w-[90px] sm:min-w-[120px] md:min-w-[140px]"
                      >
                        <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${item.color} font-mono tabular-nums`}>
                          <AnimatedCounter end={item.value} suffix={item.suffix} />
                        </span>
                        <span className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              onMouseDown={handlePointerDown}
              onTouchStart={handlePointerDown}
              style={{
                left: useTransform(splitPosition, (v) => `${v}%`),
              }}
              className={`absolute top-0 bottom-0 -ml-[2px] w-[4px] bg-white/20 cursor-col-resize z-50 group touch-none select-none ${isDragging ? 'bg-white/40' : ''
                } transition-colors hover:bg-white/30`}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-white/10 border border-white/30 rounded-full backdrop-blur-sm flex items-center justify-center transition-opacity ${isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-[15%] left-1/2 -translate-x-1/2 pointer-events-none"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="flex items-center gap-1 px-2.5 py-1.5 bg-white/15 border border-white/30 rounded-lg backdrop-blur-md shadow-xl">
                    <ChevronsLeft className="w-3 h-3 text-white/90" />
                    <span className="text-white/90 text-[11px] font-semibold whitespace-nowrap">Drag</span>
                    <ChevronsRight className="w-3 h-3 text-white/90" />
                  </div>
                  <div className="w-px h-8 bg-linear-to-b from-white/40 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              style={{
                width: useTransform(splitPosition, (v) => `${100 - v}%`),
              }}
              className="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 to-black p-2 sm:p-4 md:p-6"
            >
              <motion.div
                style={{
                  opacity: useTransform(splitPosition, [10, 60, 90], [1, 0.7, 0.2]),
                  filter: useTransform(splitPosition, [10, 50, 90], ['blur(0px)', 'blur(2px)', 'blur(8px)']),
                }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: hasAnimated ? 1 : 0, scale: hasAnimated ? 1 : 0.9 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-2 sm:mb-4 text-center"
                >
                  <span className="inline-block px-3 sm:px-4 py-1 text-[10px] sm:text-xs md:text-sm font-semibold text-amber-400 border border-amber-500/40 rounded-full mb-1 sm:mb-2">
                    Live Platform Demo
                  </span>
                  <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    Experience in Action
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="w-full"
                >
                  <BrowserMockup
                    url="https://wolfmed-edukacja.pl"
                    src="https://wolfmed-edukacja.pl/"
                    widthClass="max-w-[90%]"
                    heightClass="h-[65vh]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <ScrollButton tag="challenge" className="bottom-6 sm:bottom-10 z-30 pointer-events-auto" />
    </section>
  );
}