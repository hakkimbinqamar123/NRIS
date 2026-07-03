import { PageHero } from "@/components/common/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Insurance | NRIS",
  description: "Specialized engineering insurance for large-scale projects and machinery.",
};

export default function EngineeringInsurancePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHero 
        title="Engineering Insurance" 
        description="Built to protect your monumental projects. We offer specialized risk coverage for contractors, machinery, and complex engineering ventures."
      />
      
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12">
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0a0a0a] mb-6">Our Engineering Solutions</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">✓</span>
              Contractor's All Risk (CAR) Insurance
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">✓</span>
              Erection All Risk (EAR) Insurance
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">✓</span>
              Contractor's Plant & Machinery (CPM)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">✓</span>
              Electronic Equipment Insurance (EEI)
            </li>
          </ul>
        </section>

        <section className="bg-[#1f1f1f] text-white p-10 rounded-3xl shadow-lg flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">Project Assurance</h2>
          <p className="mb-8 text-blue-100">Partner with NRIS for end-to-end risk management on your next big construction or engineering project.</p>
          <button className="px-8 py-4 bg-[#b87333] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md w-full md:w-auto">
            Consult an Expert
          </button>
        </section>
      </div>
    </main>
  );
}
