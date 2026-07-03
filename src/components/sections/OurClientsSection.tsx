'use client';

import { motion } from 'framer-motion';

const clients = [
  'Global Enterprises',
  'Tech Solutions LLC',
  'Prime Properties',
  'NextGen Logistics',
  'Summit Financial',
  'Crescent Group',
  'Oasis Healthcare',
  'Apex Construction',
];

export function OurClientsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/10 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[#b87333] font-bold tracking-widest uppercase text-xs">Our Global Network</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Trusted by Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">Leaders</span>
          </h3>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <div className="py-8 animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {/* Double the list to create a seamless infinite loop */}
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              className="mx-12 flex items-center justify-center min-w-[200px] cursor-pointer"
            >
              <div className="text-white/30 font-black text-3xl md:text-4xl tracking-tighter uppercase transition-colors duration-300">
                {client}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
