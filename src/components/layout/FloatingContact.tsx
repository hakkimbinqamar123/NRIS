'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/971554021161"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="w-14 h-14 bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow relative group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href="tel:+971554021161"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
        className="w-14 h-14 bg-[#b8161c] rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow relative group"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us: +971 55 402 1161
        </span>
      </motion.a>
    </div>
  );
}
