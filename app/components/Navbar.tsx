'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center bg-white transition-all duration-300 ${scrolled ? 'border-b border-slate-100 shadow-sm' : ''}`}>
        <div className="flex items-center justify-between w-full max-w-[1440px] h-20 px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tighter text-slate-900">Tigrid</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="#solutions" className="text-sm font-bold text-slate-700 hover:text-accent transition-colors">Services</Link>
            <Link href="#case-studies" className="text-sm font-bold text-slate-700 hover:text-accent transition-colors">Case Studies</Link>
            <Link href="#about" className="text-sm font-bold text-slate-700 hover:text-accent transition-colors">About</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] bg-[#0f172a] px-6 text-white text-sm font-bold shadow-md hover:bg-black"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-900 hover:bg-white/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-500 md:hidden ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-16">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-slate-900">Tigrid</span>
            </Link>
            <button
              className="p-2 text-slate-900 bg-slate-100 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-10">
            <Link href="#solutions" className="text-4xl font-bold text-slate-900 tracking-tight" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#case-studies" className="text-4xl font-bold text-slate-900 tracking-tight" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="#about" className="text-4xl font-bold text-slate-900 tracking-tight" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </div>

          <div className="mt-auto">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-16 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold text-lg shadow-2xl shadow-black/20"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
