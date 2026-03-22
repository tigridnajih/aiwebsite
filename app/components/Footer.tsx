'use client';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] pt-20 pb-10 border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4">
          
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                  <span className="text-white font-bold text-xl">T</span>
               </div>
               <span className="text-xl font-bold text-slate-900 tracking-tight">Tigrid</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[280px]">
              AI-powered automation solutions designed to help businesses scale, optimize workflows, and launch stunning experiences effortlessly and fast.
            </p>
            <div className="flex items-center gap-5 text-slate-900">
              <Link href="#" className="hover:text-blue-600 transition-colors"><Facebook size={20} fill="currentColor" /></Link>
              <Link href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} fill="currentColor" /></Link>
              <Link href="#" className="hover:text-blue-600 transition-colors"><Instagram size={20} strokeWidth={2.5} /></Link>
              <Link href="#" className="hover:text-blue-600 transition-colors"><Send size={20} fill="currentColor" /></Link>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-slate-900 font-bold mb-7 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">Home</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">About us</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">Pricing</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">Blog</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">Case Studies</Link></li>
            </ul>
          </div>

          {/* Column 3: Product */}
          <div>
            <h4 className="text-slate-900 font-bold mb-7 uppercase tracking-wider text-xs">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">Features</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">Solutions</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">How it works</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">Contact</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-[14px]">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-7 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Get tips, product updates, and insights on working smarter with AI.
            </p>
            <div className="relative group/input">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full h-14 pl-6 pr-32 rounded-full border border-slate-200 bg-white focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none text-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                Subscribe
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-medium">
            © 2025 Tigrid Automation Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">Terms of Service</Link>
            <Link href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
