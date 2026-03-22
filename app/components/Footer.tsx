'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Send } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Send, href: "#", label: "Telegram" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#f9fafb] pt-24 pb-12 border-t border-slate-100"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 px-4 mt-8">
          
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-8 group w-fit">
               <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-600/20">
                  <span className="text-white font-bold text-xl">T</span>
               </div>
               <span className="text-2xl font-bold text-slate-900 tracking-tight">Tigrid</span>
            </Link>
            <p className="text-slate-500 text-[15px] leading-loose mb-10 max-w-[300px] font-medium opacity-80">
              AI-powered automation solutions designed to help businesses scale, optimize workflows, and launch stunning experiences effortlessly and fast.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <Link 
                  key={idx}
                  href={social.href} 
                  aria-label={social.label}
                  className="relative group w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 hover:border-blue-600 text-slate-900 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                  <social.icon 
                    size={18} 
                    className="relative z-10 transition-colors duration-300 group-hover:text-white" 
                    fill={idx !== 2 ? "currentColor" : "none"}
                    strokeWidth={idx === 2 ? 2.5 : 2}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="mt-2">
            <h4 className="text-slate-400 font-bold mb-9 uppercase tracking-[0.2em] text-[11px]">Company</h4>
            <ul className="space-y-5">
              {['Home', 'About us', 'Pricing', 'Blog', 'Case Studies'].map((linkText) => (
                <li key={linkText}>
                  <Link href="#" className="group relative inline-block text-slate-500 hover:text-blue-600 transition-colors text-[14px] font-medium">
                    {linkText}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product */}
          <div className="mt-2">
            <h4 className="text-slate-400 font-bold mb-9 uppercase tracking-[0.2em] text-[11px]">Product</h4>
            <ul className="space-y-5">
              {['Features', 'Solutions', 'How it works', 'Contact', 'FAQ'].map((linkText) => (
                <li key={linkText}>
                  <Link href="#" className="group relative inline-block text-slate-500 hover:text-blue-600 transition-colors text-[14px] font-medium">
                    {linkText}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="mt-2">
            <h4 className="text-slate-400 font-bold mb-9 uppercase tracking-[0.2em] text-[11px]">Newsletter</h4>
            <p className="text-slate-500 text-[15px] mb-8 leading-relaxed font-medium opacity-80">
              Get tips, product updates, and insights on working smarter with AI.
            </p>
            <div className="relative group/input">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full h-14 pl-6 pr-36 rounded-full border border-slate-200 bg-white focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none text-[14px] shadow-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-blue-600 text-white font-bold text-[13px] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-2 group/btn">
                Get Updates
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-[13px] font-medium">
            © 2025 Tigrid Automation Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-10">
            <Link href="#" className="group relative text-slate-400 hover:text-slate-900 text-[13px] transition-colors font-medium">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="#" className="group relative text-slate-400 hover:text-slate-900 text-[13px] transition-colors font-medium">
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="#" className="group relative text-slate-400 hover:text-slate-900 text-[13px] transition-colors font-medium">
                Cookies
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
