'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SplitText } from '@/animations/SplitText';
import { Magnetic } from '@/animations/Magnetic';

export function AboutSection() {
  return (
    <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative animated shapes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#f5ebd0] to-[#b87333] rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#1f1f1f] to-[#0a0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" 
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-md mb-8 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[#1f1f1f] animate-pulse" />
            <span className="text-[#0a0a0a] text-sm font-bold tracking-wider uppercase">Who We Are</span>
          </motion.div>
          
          <div className="text-5xl md:text-7xl font-extrabold text-[#0a0a0a] mb-8 leading-[1.1] tracking-tight flex flex-col items-center justify-center">
            <SplitText text="Setting the Standard in" delay={0.1} className="justify-center" />
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f1f1f] via-[#0a0a0a] to-[#f5ebd0] mt-2">
              <SplitText text="Insurance Excellence" delay={0.4} className="justify-center" />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-14 leading-relaxed max-w-3xl mx-auto font-light"
          >
            NRIS is a leading provider of comprehensive insurance solutions. With decades of industry experience, we are committed to delivering innovative products and exceptional service to protect what matters most to you.
          </motion.p>
          
          <Magnetic>
            <Link href="/about" className="inline-block relative group">
              <div className="absolute inset-0 bg-[#0a0a0a] rounded-full blur group-hover:blur-md transition-all opacity-30 group-hover:opacity-60" />
              <button 
                className="relative px-10 py-5 bg-[#0a0a0a] text-white rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(9,30,66,0.3)] flex items-center gap-3 mx-auto group-hover:bg-[#1f1f1f] transition-colors"
              >
                Read Our Full Story 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
