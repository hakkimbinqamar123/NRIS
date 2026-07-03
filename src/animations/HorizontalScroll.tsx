'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps scroll progress (0 to 1) to horizontal translation (0% to -100%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#f8fafc]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-32 pr-[50vw]">
          {children}
        </motion.div>
      </div>
    </section>
  );
}
