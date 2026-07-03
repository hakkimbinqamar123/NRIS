'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode; // Optional overlay content
}

export function ImageReveal({ src, alt, className = '', children }: ImageRevealProps) {
  return (
    <motion.div 
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} // Cinematic ease
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }} // Decelerating scale
        className="absolute inset-0 w-full h-full"
      >
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-cover"
        />
      </motion.div>
      {/* Optional Overlay Content (e.g. gradients or badges) */}
      {children && (
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      )}
    </motion.div>
  );
}
