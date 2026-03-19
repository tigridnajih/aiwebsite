'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
        ? 'bg-white/80 backdrop-blur-xl border-slate-200 h-16 shadow-sm'
        : 'bg-transparent border-transparent h-20'
        }`}>
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 shadow-sm">
              <div className="h-4 w-4 rotate-45 rounded-[2px] bg-accent" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Tigrid</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#solutions" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Services</Link>
            <Link href="#case-studies" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Case Studies</Link>
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">About</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] bg-slate-900 px-6 text-white text-sm font-semibold shadow-md hover:bg-slate-800"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <div className="h-4 w-4 rotate-45 bg-accent" />
              </div>
              <span className="text-xl font-bold text-slate-900">Tigrid</span>
            </Link>
            <button
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Menu className="w-6 h-6 rotate-90" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <Link href="#solutions" className="text-3xl font-bold text-slate-900 tracking-tight" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#case-studies" className="text-3xl font-bold text-slate-900 tracking-tight" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="#about" className="text-3xl font-bold text-slate-900 tracking-tight" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </div>

          <div className="mt-auto">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-14 items-center justify-center rounded-2xl bg-accent text-white font-bold text-lg shadow-lg shadow-accent/20"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
