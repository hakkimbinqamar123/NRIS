import { PageHero } from "@/components/common/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NRIS",
  description: "Get in touch with NRIS for any queries or support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <PageHero 
        title="Get in Touch" 
        description="We are here to help. Reach out to our dedicated team of experts for inquiries, quotes, or claims assistance."
      />
      
      <div className="max-w-6xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-12">
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#0a0a0a] mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#b87333] focus:border-transparent outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#b87333] focus:border-transparent outline-none" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#b87333] focus:border-transparent outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={5} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#b87333] focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full py-4 bg-[#b87333] text-white rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-md text-lg">
              Send Message
            </button>
          </form>
        </section>

        <section className="space-y-8">
          <div className="bg-[#1f1f1f] text-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">📍</div>
                <div>
                  <h4 className="font-bold">Headquarters</h4>
                  <p className="text-blue-100">NRIS Building, Financial Centre,<br/>Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">📞</div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-blue-100">+971 55 402 1161</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">✉️</div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-blue-100">info@nris-insurance.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center text-gray-500 shadow-inner">
            {/* Map Placeholder */}
            Interactive Map Integrates Here
          </div>
        </section>
      </div>
    </main>
  );
}
