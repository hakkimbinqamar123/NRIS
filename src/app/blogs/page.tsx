import { PageHero } from "@/components/common/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Insights | NRIS",
  description: "Latest news, tips, and insights from the insurance industry.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHero 
        title="Insights & Articles" 
        description="Stay updated with the latest trends in insurance, financial planning, and risk management."
      />
      
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col cursor-pointer group">
              <div className="h-48 bg-gray-200 w-full overflow-hidden relative">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/80 to-transparent group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#b87333] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {i % 2 === 0 ? "Insurance Tips" : "News"}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-400 mb-2">October {i + 10}, 2026</p>
                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3 group-hover:text-[#1f1f1f] transition-colors">
                  Understanding The Future of Risk Management
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
                  Learn how global changes are affecting insurance premiums and what you can do to protect your assets efficiently in an ever-changing environment.
                </p>
                <div className="text-[#1f1f1f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
