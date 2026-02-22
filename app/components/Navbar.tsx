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
            className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full font-medium transition-all"
          >
            {/* The Animated Border Reflection (Beam) - Always active */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_20%,#3B82F6_50%,transparent_80%)] animate-spin-slow opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

            {/* The Gradient Background (Dark Blue Majority) */}
            <div className="absolute inset-[1px] bg-gradient-to-br from-[#1E3A8A] via-[#172554] to-black rounded-full z-10" />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 z-20" />

            {/* Button Content */}
            <span className="relative z-30 px-6 text-sm text-white/90 group-hover:text-white transition-colors">
              Book a Demo
            </span>
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
