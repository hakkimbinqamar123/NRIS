'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Target, HeartHandshake, Globe } from 'lucide-react';
import { SplitText } from '@/animations/SplitText';
import { Magnetic } from '@/animations/Magnetic';

const features = [
  {
    icon: ShieldCheck,
    title: 'Comprehensive Protection',
    description: 'We provide top-tier coverage options tailored to your specific needs, ensuring maximum security.'
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Approach',
    description: 'Your peace of mind is our priority. We are dedicated to providing personalized service and support.'
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: 'Our team of experienced professionals is here to guide you through every step of the insurance process.'
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Touch',
    description: 'We combine international standards with deep local expertise to serve you better.'
  }
];

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);


  return (
    <section ref={sectionRef} className="py-24 bg-[#f8fafc] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image with Parallax */}
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden group">
            <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] -top-[10%]">
              <Image
                src="/images/why_choose_us.png"
                alt="Professional team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="text-5xl font-extrabold text-white mb-1 tracking-tight">20+</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">Years of Trust</div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#b87333] animate-pulse" />
                <span className="text-[#b87333] text-sm font-bold tracking-wide uppercase">The NRIS Advantage</span>
              </div>

              <div className="text-4xl md:text-6xl font-extrabold text-[#0a0a0a] mb-8 leading-[1.1] tracking-tight">
                <SplitText text="Why Partner with NRIS" />
              </div>

              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                We go beyond traditional insurance. We are your dedicated partners in risk management, offering unparalleled expertise and a commitment to your ultimate security.
              </p>
            </motion.div>

            {/* Staggered Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="group"
                >
                  <Magnetic>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1f1f1f]/5 to-[#1f1f1f]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1f1f1f] transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-900/20">
                      <feature.icon className="w-8 h-8 text-[#1f1f1f] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </Magnetic>
                  <h4 className="text-2xl font-bold text-[#0a0a0a] mb-3 group-hover:text-[#1f1f1f] transition-colors">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
