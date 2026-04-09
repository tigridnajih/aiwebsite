'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

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
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />

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
            <button
              onClick={() => setShowContactModal(true)}
              className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] bg-blue-600 px-5 text-white text-[13px] font-bold shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-black block transition-transform origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-black block transition-transform origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed left-0 right-0 z-[40] bg-white/95 backdrop-blur-2xl transition-all duration-500 md:hidden border-b border-slate-100 overflow-hidden ${mobileMenuOpen ? 'top-[44px] sm:top-[52px] h-[320px] opacity-100' : 'top-[44px] sm:top-[52px] h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-8 gap-8">
          <div className="flex flex-col gap-5">
            <Link href="#solutions" className="text-lg font-semibold text-black tracking-tight" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#case-studies" className="text-lg font-semibold text-black tracking-tight" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="#about" className="text-lg font-semibold text-black tracking-tight" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </div>

          <div className="pt-4 border-t border-slate-50">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowContactModal(true);
              }}
              className="w-full flex h-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
