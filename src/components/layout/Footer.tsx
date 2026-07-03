import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-16 border-t border-[#133c70]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-3xl font-bold tracking-tight bg-white inline-block px-4 py-2 rounded-lg">
            <span className="text-[#1f1f1f]">NR</span>
            <span className="text-[#f5ebd0]">IS</span>
          </div>
          <p className="text-sm text-gray-400">
            Providing comprehensive and progressive insurance solutions to safeguard your assets, business, and loved ones.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-[#b87333] transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-[#b87333] transition-colors">Careers</Link></li>
            <li><Link href="/blogs" className="hover:text-[#b87333] transition-colors">Latest News</Link></li>
            <li><Link href="/contact" className="hover:text-[#b87333] transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        {/* Insurance Services */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/motor" className="hover:text-[#b87333] transition-colors">Motor Insurance</Link></li>
            <li><Link href="/health" className="hover:text-[#b87333] transition-colors">Health Insurance</Link></li>
            <li><Link href="/property" className="hover:text-[#b87333] transition-colors">Property Insurance</Link></li>
            <li><Link href="/engineering" className="hover:text-[#b87333] transition-colors">Engineering Insurance</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-[#b87333]">📍</span>
              NRIS Building, Dubai, UAE
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#b87333]">📞</span>
              +971 55 402 1161
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#b87333]">✉️</span>
              info@nris-insurance.com
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#133c70] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} NRIS Insurance. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
