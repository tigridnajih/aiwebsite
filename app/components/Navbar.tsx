'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]' : 'bg-transparent'}`}>
        <div className="container-custom flex items-center justify-between w-full h-11 sm:h-13">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tighter text-black">Tigrid</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="#solutions" className="text-[13px] font-medium text-black hover:text-accent transition-colors">Services</Link>
            <Link href="#case-studies" className="text-[13px] font-medium text-black hover:text-accent transition-colors">Case Studies</Link>
            <Link href="#about" className="text-[13px] font-medium text-black hover:text-accent transition-colors">About</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] bg-blue-600 px-5 text-white text-[13px] font-bold shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-black hover:bg-white/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white/90 backdrop-blur-2xl transition-all duration-500 md:hidden ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-16">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-black">Tigrid</span>
            </Link>
            <button
              className="p-2 text-black bg-slate-100 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-10">
            <Link href="#solutions" className="text-4xl font-bold text-black tracking-tight" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#case-studies" className="text-4xl font-bold text-black tracking-tight" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="#about" className="text-4xl font-bold text-black tracking-tight" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </div>

          <div className="mt-auto">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-16 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-600/30 active:scale-[0.98] transition-all"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
