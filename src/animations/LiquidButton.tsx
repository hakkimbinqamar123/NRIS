'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Magnetic } from './Magnetic';

interface LiquidButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function LiquidButton({ children, className = '', onClick }: LiquidButtonProps) {
  return (
    <Magnetic>
      <button 
        onClick={onClick}
        className={`relative overflow-hidden rounded-full group bg-white/5 backdrop-blur-md border border-white/20 px-8 py-4 ${className}`}
      >
        {/* Liquid Gradient Hover Layer */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl mix-blend-screen"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#1f1f1f] to-[#d4af37] animate-[gradient_4s_linear_infinite] bg-[length:200%_100%]" />
        </motion.div>
        
        {/* Fill Layer */}
        <div className="absolute inset-0 z-0 bg-[#1f1f1f] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] rounded-[50%_50%_0_0] group-hover:rounded-none" />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-3 text-white font-bold group-hover:text-white transition-colors duration-300">
          {children}
        </span>
      </button>
    </Magnetic>
  );
}
