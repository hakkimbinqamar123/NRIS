import { PageHero } from "@/components/common/PageHero";
import { Metadata } from "next";
import { ImageReveal } from '@/animations/ImageReveal';
import { LiquidButton } from '@/animations/LiquidButton';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: "Health Insurance | NRIS",
  description: "Protect what matters most. Health insurance plans for you and your family.",
};

const benefits = [
  { id: '01', title: 'Medical Insurance is compulsory in the UAE', desc: 'In order to renew the visa, GDRFA requires valid health insurance cover' },
  { id: '02', title: 'Affordable Plans', desc: 'We device policies that are tailored to your needs and are made available at very competitive rates' },
  { id: '03', title: 'Pre And Post Hospitalization Expenses', desc: 'In-Patient and Out-Patient services are covered depending on the health plan limits and co-pay' },
  { id: '04', title: 'Health Cover for New Borns', desc: 'New Borns will be automatically covered under the mother’s policy up to 30 days securing proper medical support to the child' },
  { id: '05', title: 'Maternity Cover', desc: 'As per the UAE regulations, all married females from the age 18-50 will be having a maternity cover as per the terms and conditions of the policy' },
  { id: '06', title: 'Pre-existing and chronic conditions', desc: 'All pre-existing medical conditions and chronic diseases are covered subject to continuity and depending on the plan\'s limit and co-pay' },
];

export default function HealthInsurancePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pb-24 overflow-hidden">
      <PageHero 
        title="Health Insurance" 
        description="Your health is your greatest wealth. Explore our comprehensive health insurance plans designed to cover medical expenses for you and your loved ones."
        imagePath="/images/why_choose_us.png"
      />
      
      {/* Intro Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0a] mb-10 leading-tight tracking-tight">
            Providing access to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5ebd0] to-[#b87333]">quality and affordable healthcare</span> in the UAE.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
            At NRiS, we make optimum use of our long years of experience, expertise, and research in the health sector. We offer tailor-made individual and Group medical health insurance plans as per your specific requirements. 
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            We research the availability of solutions based on your health data to determine the best deal that meets all your objectives. We give you access to innumerable health benefits by comparing products from different insurers and matching them against your needs. Our goal is to ensure minimum hassle and assure your peace of mind in events of medical emergencies.
          </p>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-bold text-[#0a0a0a] mb-16 text-center">What are the benefits of a health insurance policy?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-[#f5ebd0] transition-colors duration-500"
              >
                <div className="text-6xl font-black text-gray-200 group-hover:text-red-900 transition-colors duration-500 mb-6">{benefit.id}</div>
                <h4 className="text-xl font-bold text-[#0a0a0a] group-hover:text-white transition-colors duration-500 mb-4">{benefit.title}</h4>
                <p className="text-gray-600 group-hover:text-red-100 transition-colors duration-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Types */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-bold text-[#0a0a0a] mb-20 text-center">Complete Health Insurance</h3>
        
        <div className="space-y-32">
          {/* Individual */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] mb-6">Individual health insurance covers you and your family</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                NRiS helps you to obtain the best and most precise health cover that covers you and your family against sickness or illness. Whether you are an individual seeking insurance plans for your family, we have market metrics and our industry experience to bring you the best solutions.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ImageReveal src="/images/why_choose_us.png" alt="Individual Health Insurance" className="w-full h-[400px] rounded-3xl shadow-2xl" />
            </div>
          </div>

          {/* Group */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <ImageReveal src="/images/home_insurance.png" alt="Group Health Insurance" className="w-full h-[400px] rounded-3xl shadow-2xl" />
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0a] mb-6">Group health insurance covers all your employees</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive Health Insurance products for organizations and affinity groups that are designed to meet the commercial needs of businesses, customized to meet your particular requisites. We work towards getting the best rates and benefits for your company, leveraging our sizeable portfolio and experience in brokering, to generate competition and favorable pricing.
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Protect What Matters Most</h2>
          <LiquidButton>
            <span>Get a Health Quote</span>
          </LiquidButton>
        </motion.div>
      </section>
    </main>
  );
}
