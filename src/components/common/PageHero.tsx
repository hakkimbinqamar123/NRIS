'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { SplitText } from '@/animations/SplitText';

interface PageHeroProps {
  title: string;
  description: string;
  imagePath?: string;
}

export function PageHero({ title, description, imagePath = "/images/simple_hero_bg_2.png" }: PageHeroProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={targetRef} className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center overflow-hidden bg-[#0a0a0a] rounded-b-[3rem] shadow-2xl">
      
      {/* Cinematic Background Layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src={imagePath} 
          alt={title} 
          fill
          className="object-cover opacity-60 mix-blend-overlay scale-105"
          priority
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </motion.div>
      
      {/* Animated Glow Particles */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#d4af37]/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-[#b87333]/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="max-w-3xl">
          <div className="mb-6">
            <div className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter text-white leading-[1.1]">
              <SplitText text={title} delay={0.05} />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100/80 font-light leading-relaxed border-l-4 border-[#d4af37] pl-6"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
