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
      <style>{`
        .glass-nav {
          --c-glass: #bbbbbc;
          --c-light: #fff;
          --c-dark: #000;
          --glass-reflex-dark: 1;
          --glass-reflex-light: 1;
          --saturation: 150%;
          
          border: none;
          background-color: color-mix(in srgb, var(--c-glass) 12%, transparent);
          backdrop-filter: blur(8px) saturate(var(--saturation));
          -webkit-backdrop-filter: blur(8px) saturate(var(--saturation));
          box-shadow: 
            inset 0 0 0 1px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 10%), transparent),
            inset 1.8px 3px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent),
            inset -2px -2px 0px -2px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent),
            inset -3px -8px 1px -6px color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent),
            inset -0.3px -1px 4px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 12%), transparent),
            inset -1.5px 2.5px 0px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent),
            inset 0px 3px 4px -2px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent),
            inset 2px -6.5px 1px -4px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent),
            0px 1px 5px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent),
            0px 6px 16px 0px color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 8%), transparent);
        }
      `}</style>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 md:px-8">
        <div className="glass-nav flex items-center justify-between w-full max-w-[1440px] h-[64px] pl-3 pr-2 md:pl-6 md:pr-3 rounded-full transition-all duration-500 pointer-events-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 shadow-sm">
              <div className="h-4 w-4 rotate-45 rounded-[2px] bg-accent" />
            </div>
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
              <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <div className="h-4 w-4 rotate-45 bg-accent" />
              </div>
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
