'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden text-center">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[1.5rem] overflow-hidden bg-slate-900 shadow-2xl min-h-[450px] flex items-center justify-center"
        >
          {/* BACKGROUND IMAGE CARD */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: "url('/bottom_hero_bg.png')" }}
          />
          
          {/* GLASS OVERLAY FOR LEGIBILITY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* CONTENT */}
          <div className="relative z-10 p-10 md:p-20 max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Your Business.<br />Supercharged with AI.
            </h2>
            <p className="text-white/80 text-base md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Save time, boost efficiency, and streamline your business with AI automation from Tigrid.
            </p>
            
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-slate-50 group"
            >
              Book a Strategy Call
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
