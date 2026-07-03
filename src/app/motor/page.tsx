import { PageHero } from "@/components/common/PageHero";
import { Metadata } from "next";
import { SplitText } from '@/animations/SplitText';
import { ImageReveal } from '@/animations/ImageReveal';
import { LiquidButton } from '@/animations/LiquidButton';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: "Motor Insurance | NRIS",
  description: "Comprehensive motor insurance policies to keep you safe on the road.",
};

const benefits = [
  { id: '01', title: 'Third-Party Car Insurance Is Mandatory', desc: 'The UAE Government has made it mandatory to buy TPL, as it protects Licensed Driver’s Legal Liability towards third parties and their property' },
  { id: '02', title: 'Saves You From Traffic Fines', desc: 'Gives a great peace of mind to the policy holder and passengers when driving the vehicle' },
  { id: '03', title: 'Provides Personal Accident Coverage For Owner and Driver', desc: 'Provides legal cover to the owner in case of third party injury or death' },
  { id: '04', title: 'Gives easy access to replacement cars', desc: 'Emergency replacement allowing car owners to receive substitute vehicle' },
  { id: '05', title: 'Covers Damages To The Car', desc: 'Excellent financial protection against damage to the car or loss of vehicle' },
  { id: '06', title: 'Covers Your Car Against Theft', desc: 'Financial security in case of accidents, theft, and natural catastrophes' },
];

export default function MotorInsurancePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pb-24 overflow-hidden">
      <PageHero 
        title="Motor Insurance" 
        description="Drive with confidence. Our motor insurance plans offer comprehensive coverage for your vehicles against accidents, theft, and third-party liabilities."
        imagePath="/images/motor_intro_1.png"
      />
      
      {/* Dynamic Intro Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f1f1f]/10 border border-[#1f1f1f]/20 mb-4">
              <span className="text-[#1f1f1f] font-bold tracking-widest uppercase text-xs">The NRiS Advantage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0a] leading-[1.1] tracking-tight">
              NRiS assists you to save big on the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b87333]">best policy for your car.</span>
            </h2>
            
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Car insurance is as important as buying the car itself. At NRiS we make sure that our clients’ investments are protected against accidental damage. We guide you through the complex options to select the best type of car insurance suited to your specific needs.
            </p>
            
            <div className="p-6 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#b87333]/10 flex items-center justify-center shrink-0">
                <span className="text-[#b87333] font-bold text-xl">✓</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0a0a0a] mb-1">Expert Advice On All Vehicles</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We provide insurance advice on: Cars, Pickups, Trucks, Buses, Bikes etc. Drive safe and leave the hassle of going through policies and paper work to us.</p>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Background floating blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-[100px] pointer-events-none" />
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-[80%] h-[400px] z-10"
            >
              <ImageReveal src="/images/motor_intro_1.png" alt="Premium Car driving" className="w-full h-full rounded-3xl shadow-2xl" />
            </motion.div>

            <motion.div 
              initial={{ y: 100, x: -50, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[60%] h-[300px] z-20"
            >
              <ImageReveal src="/images/motor_intro_2.png" alt="Luxury Car Detail" className="w-full h-full rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-4 border-[#f8fafc]" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-bold text-[#0a0a0a] mb-16 text-center">What are the benefits of a motor insurance policy?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-[#1f1f1f] transition-colors duration-500"
              >
                <div className="text-6xl font-black text-gray-200 group-hover:text-blue-800 transition-colors duration-500 mb-6">{benefit.id}</div>
                <h4 className="text-xl font-bold text-[#0a0a0a] group-hover:text-white transition-colors duration-500 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-bold text-[#0a0a0a] mb-20 text-center">What are the different types of motor insurance policies?</h3>
        
        <div className="space-y-32">
          {/* Comprehensive */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] mb-6">Comprehensive Policy</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive insurance cover provides protection to the insured vehicle against loss, damage or destruction due to collision, overturning, fire, malicious damage, vandalism, natural calamities like storm, flood & hailstone, external explosion, and theft by unknown person. It also provides personal accident or injury benefit and protects against property damage of third parties arising from the use of the vehicle.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ImageReveal src="/images/auto_insurance.png" alt="Comprehensive Insurance" className="w-full h-[400px] rounded-3xl shadow-2xl" />
            </div>
          </div>

          {/* Third Party */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <ImageReveal src="/images/hero_insurance.png" alt="Third Party Insurance" className="w-full h-[400px] rounded-3xl shadow-2xl" />
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] mb-6">Third Party Motor Policy</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Third party Motor Insurance protects Licensed Driver’s Legal Liability towards third parties and their property. It compensates all losses arising out of the use of motor vehicle, all sums which driver or the owner shall become legally liable to pay as compensation against Death or bodily injury to any person including the passengers, in the vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] p-16 rounded-[3rem] shadow-2xl max-w-4xl mx-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to secure your journey?</h2>
          <LiquidButton>
            <span>Get a Custom Quote</span>
          </LiquidButton>
        </motion.div>
      </section>
    </main>
  );
}
