'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Business Owner',
    content: 'NRIS provided exceptional service when we needed commercial property insurance. Their team was knowledgeable and helped us find the perfect coverage for our growing business.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Software Engineer',
    content: 'I recently switched my auto insurance to NRIS and the process was incredibly smooth. Not only did I save money, but the coverage is much better than my previous provider.',
    rating: 5,
  },
  {
    name: 'Aisha Al-Mansoori',
    role: 'Homeowner',
    content: 'The level of personalized attention I received from NRIS was outstanding. They took the time to explain every detail of my home insurance policy.',
    rating: 5,
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 via-transparent to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-orange-50 via-transparent to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <span className="text-[#1f1f1f] text-sm font-bold tracking-wide uppercase">Client Stories</span>
            </div>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] leading-tight whitespace-nowrap">
              Don&apos;t just take our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f1f1f] to-[#f5ebd0]">word for it</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 relative group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.2 }} 
                className="absolute top-8 right-8 z-0"
              >
                <Quote className="w-14 h-14 text-gray-100 group-hover:text-blue-50 transition-colors duration-300" />
              </motion.div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <Star className="w-6 h-6 fill-[#b87333] text-[#b87333]" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-10 flex-grow text-lg leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a0a0a] text-lg">{testimonial.name}</h4>
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
