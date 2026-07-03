'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Play, Star, HeartHandshake, Zap } from 'lucide-react';
import { SplitText } from '@/animations/SplitText';
import { Magnetic } from '@/animations/Magnetic';

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Cinematic Background Layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/simple_hero_bg_2.png"
          alt="Premium Insurance Protection"
          fill
          className="object-cover object-top scale-105"
          priority
        />
        {/* Complex Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#1f1f1f]/50 to-[#0a0a0a] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent opacity-90" />

        {/* Animated Glow Particles / Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-[#1f1f1f] blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#f5ebd0] blur-[150px] rounded-full mix-blend-screen"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity, y: useTransform(scrollYProgress, [0, 1], ["0%", "100px"]) }} className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">

        <div className="flex flex-col items-start max-w-4xl">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse shadow-[0_0_10px_#d4af37]" />
            <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase">The Future of Insurance</span>
          </motion.div>

          {/* SplitText Headline */}
          <div className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-white tracking-tighter leading-[1] mb-6">
            <SplitText text="Secure Your" delay={0.05} />
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#b87333] to-[#f5ebd0]">
              <SplitText text="Tomorrow" delay={0.3} />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light mb-12 leading-relaxed"
          >
            Comprehensive, state-of-the-art protection that evolves with you. Safeguarding your family, assets, and legacy with absolute certainty.
          </motion.p>

          {/* Interactive Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Magnetic>
              <Link href="/contact" className="relative group block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#b87333] to-[#f5ebd0] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="relative px-8 py-4 bg-gradient-to-r from-[#b87333] to-[#f5ebd0] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 overflow-hidden">
                  <span className="relative z-10">Get Covered Now</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </Magnetic>

            <Magnetic>
              <Link href="/video" className="group flex items-center gap-4 text-white hover:text-[#d4af37] transition-colors">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d4af37] transition-colors bg-white/5 backdrop-blur-sm">
                  <Play className="w-5 h-5 fill-current ml-1" />
                </div>
                <span className="font-semibold tracking-wide">Watch Showreel</span>
              </Link>
            </Magnetic>
          </motion.div>

        </div>
      </motion.div>

      {/* Floating Badges */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 1.5 }
          }
        }}
        className="absolute top-1/2 -translate-y-1/2 right-12 md:right-32 z-20 hidden md:flex flex-col gap-4"
      >
        {[
          { icon: ShieldCheck, title: "100% Secure", subtitle: "Verified Protection", iconColor: "text-green-400", bgColor: "bg-green-500/20" },
          { icon: Star, title: "Highly Trustable", subtitle: "Industry Leader", iconColor: "text-blue-400", bgColor: "bg-blue-500/20" },
          { icon: HeartHandshake, title: "24/7 Support", subtitle: "Always Here", iconColor: "text-orange-400", bgColor: "bg-orange-500/20" },
          { icon: Zap, title: "Fast Claims", subtitle: "Lightning Speed", iconColor: "text-purple-400", bgColor: "bg-purple-500/20" },
        ].map((badge, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: -50, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
            }}
          >
            <Magnetic>
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center gap-4 hover:bg-white/20 transition-colors w-64">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${badge.bgColor}`}>
                  <badge.icon className={`w-6 h-6 ${badge.iconColor}`} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{badge.title}</div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold mt-1">{badge.subtitle}</div>
                </div>
              </div>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-bold rotate-90 origin-left translate-x-3 translate-y-8">Scroll</span>
        <div className="w-[1px] h-24 bg-white/20 overflow-hidden relative mt-16">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
}
