'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Magnetic } from '@/animations/Magnetic';
import { NRISLogo } from '@/components/ui/Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Background blur logic
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide/Show logic
    if (latest > 150 && latest > previous) {
      setHidden(true);
      setCompanyDropdown(false);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Motor', href: '/motor' },
    { name: 'Health', href: '/health' },
    { name: 'Property', href: '/property' },
    { name: 'Engineering', href: '/engineering' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Magnetic>
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <div className="text-white hover:text-white/80 transition-colors">
              <NRISLogo className="h-12 w-auto" />
            </div>
          </Link>
        </Magnetic>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-white/90">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative group px-1 py-2">
              <span className="relative z-10 group-hover:text-white transition-colors">{link.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </Link>
          ))}
          
          {/* Company Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCompanyDropdown(true)}
            onMouseLeave={() => setCompanyDropdown(false)}
          >
            <button className="flex items-center gap-1 group px-1 py-2 relative">
              <span className="relative z-10 group-hover:text-white transition-colors">Company</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${companyDropdown ? 'rotate-180' : ''}`} />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </button>
            <AnimatePresence>
              {companyDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 15, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute top-full left-0 mt-4 w-56 bg-white/10 backdrop-blur-2xl rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden text-white"
                >
                  <div className="flex flex-col p-2 gap-1">
                    <Link href="/about" className="px-4 py-3 text-sm rounded-xl hover:bg-white/10 transition-colors font-medium">About NRIS</Link>
                    <Link href="/careers" className="px-4 py-3 text-sm rounded-xl hover:bg-white/10 transition-colors font-medium">Careers</Link>
                    <Link href="/blogs" className="px-4 py-3 text-sm rounded-xl hover:bg-white/10 transition-colors font-medium">Blogs</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden lg:flex items-center">
          <Magnetic>
            <Link href="/contact" className="relative group block p-2">
              <div className="absolute inset-0 bg-[#b87333] rounded-full blur group-hover:blur-md transition-all opacity-50 group-hover:opacity-100" />
              <button className="relative px-7 py-3 bg-[#b87333] text-white font-bold rounded-full hover:bg-orange-500 transition-colors shadow-xl">
                Get Started
              </button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-white relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-3xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col font-medium text-white/90 gap-6 text-center text-3xl">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)} className="hover:text-[#d4af37] transition-colors">{link.name}</Link>
                </motion.div>
              ))}
              
              <div className="w-12 h-[1px] bg-white/20 mx-auto my-4" />
              
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#d4af37] transition-colors block mb-6">About NRIS</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Link href="/careers" onClick={() => setIsOpen(false)} className="hover:text-[#d4af37] transition-colors block mb-6">Careers</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="px-8 py-4 bg-[#b87333] text-white rounded-full font-bold shadow-2xl inline-block mt-4">Get Started</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
