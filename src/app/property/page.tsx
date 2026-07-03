import { PageHero } from "@/components/common/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Insurance | NRIS",
  description: "Secure your physical assets with NRIS Property Insurance.",
};

export default function PropertyInsurancePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHero 
        title="Property Insurance" 
        description="Safeguard your most valuable assets. Whether it's your home or business, our property insurance provides robust protection against fire, theft, and natural disasters."
      />
      
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12">
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0a0a0a] mb-6">Comprehensive Coverage</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-[#0a0a0a] font-bold">✓</span>
              Fire and Allied Perils coverage
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a0a0a] font-bold">✓</span>
              Burglary and housebreaking protection
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a0a0a] font-bold">✓</span>
              Business interruption coverage for commercial properties
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0a0a0a] font-bold">✓</span>
              Public liability coverage options
            </li>
          </ul>
        </section>

        <section className="bg-[#1f1f1f] text-white p-10 rounded-3xl shadow-lg flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">Secure Your Assets</h2>
          <p className="mb-8 text-blue-100">Get customized property insurance solutions tailored specifically for your residential or commercial real estate.</p>
          <button className="px-8 py-4 bg-[#b87333] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md w-full md:w-auto">
            Request Assessment
          </button>
        </section>
      </div>
    </main>
  );
}
