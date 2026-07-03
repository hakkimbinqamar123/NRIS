import { PageHero } from "@/components/common/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | NRIS",
  description: "Join our team of insurance experts and build a rewarding career.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHero 
        title="Careers at NRIS" 
        description="We are always looking for passionate, driven individuals to join our mission of providing world-class insurance solutions."
      />
      
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">Why Work With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            At NRIS, we value innovation, integrity, and client satisfaction. We offer a dynamic work environment with continuous learning opportunities, excellent benefits, and a culture of collaboration.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-gray-50 rounded-xl"><h3 className="font-bold text-[#1f1f1f]">Health Benefits</h3></div>
            <div className="p-4 bg-gray-50 rounded-xl"><h3 className="font-bold text-[#1f1f1f]">Flexible Hours</h3></div>
            <div className="p-4 bg-gray-50 rounded-xl"><h3 className="font-bold text-[#1f1f1f]">Career Growth</h3></div>
            <div className="p-4 bg-gray-50 rounded-xl"><h3 className="font-bold text-[#1f1f1f]">Global Exposure</h3></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#0a0a0a] mb-8">Open Positions</h3>
        <div className="space-y-4">
          {[
            { title: "Senior Underwriter", dept: "Risk & Underwriting", loc: "Dubai, UAE" },
            { title: "Corporate Sales Manager", dept: "Sales", loc: "Abu Dhabi, UAE" },
            { title: "Claims Specialist", dept: "Claims", loc: "Remote" }
          ].map((job, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-[#0a0a0a]">{job.title}</h4>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span>💼 {job.dept}</span>
                  <span>📍 {job.loc}</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-[#1f1f1f] text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
