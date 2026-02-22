'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger background change after 20px of scroll
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
      ? 'bg-black/60 backdrop-blur-xl border-white/10 h-16'
      : 'bg-transparent border-transparent h-20'
      }`}>
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 border border-white/20 shadow-inner">
            <div className="h-4 w-4 rotate-45 rounded-[2px] bg-accent" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">bima</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="#case-studies" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Case Studies</Link>
          <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="group relative inline-flex h-10 items-center justify-center px-6 rounded-full bg-gradient-to-r from-[#1b0eb5] to-[#070312] text-white font-semibold text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 shadow-[0_4px_20px_rgba(27,14,181,0.2)] hover:shadow-[0_8px_25px_rgba(27,14,181,0.3)]"
          >
            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] pointer-events-none" />

            <span className="relative z-10">Book a Call</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
