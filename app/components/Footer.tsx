'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 border-t border-slate-100 overflow-hidden">
      {/* Background Image */}
      <img
        src="/herosection_assets/Blueandwhitebgfooter.png"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="container-custom relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
               <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <span className="text-white font-black text-lg">T</span>
               </div>
               <span className="text-xl font-bold text-slate-900 tracking-tight">Tigrid</span>
            </Link>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-[320px]">
              Tigrid helps teams transform complex workflows into clear, engaging automated systems — everything you need in one place.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
            {/* Product */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-[15px]">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Integrations', 'Updates'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-500 hover:text-slate-900 transition-colors text-[14px] font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-[15px]">Resources</h4>
              <ul className="space-y-4">
                {['Documentation', 'Guides', 'Blog', 'Support'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-500 hover:text-slate-900 transition-colors text-[14px] font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-[15px]">Company</h4>
              <ul className="space-y-4">
                {['About', 'Careers', 'Contact', 'Partners'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-500 hover:text-slate-900 transition-colors text-[14px] font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-[13px] font-medium order-2 md:order-1">
            © 2025 Tigrid. All rights reserved.
          </p>
          <div className="flex items-center gap-8 order-1 md:order-2">
            <Link href="#" className="text-slate-400 hover:text-slate-900 text-[13px] transition-colors font-medium underline decoration-slate-200 underline-offset-4 hover:decoration-slate-900">
                Terms of Service
            </Link>
            <Link href="#" className="text-slate-400 hover:text-slate-900 text-[13px] transition-colors font-medium underline decoration-slate-200 underline-offset-4 hover:decoration-slate-900">
                Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
