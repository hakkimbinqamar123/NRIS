'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor when mouse moves
    const handleMouseOver = () => setIsVisible(true);
    const handleMouseOut = () => setIsVisible(false);

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Detect hover on clickable elements
    const handleElementsHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable');

      setIsHovered(!!isClickable);
    };

    document.addEventListener('mousemove', handleElementsHover);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousemove', handleElementsHover);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  // Don't show custom cursor on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[#b87333] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isHovered ? 2.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#d4af37] rounded-full pointer-events-none z-[9998]"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5
        }}
      />
    </>
  );
}
