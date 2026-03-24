'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 bg-white overflow-hidden text-center">
      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* CONTENT */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-md">
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                <span className="text-[9px] font-bold text-black uppercase tracking-[1px]">
                    Get Started
                </span>
            </div>
            <h2 className="text-[28px] md:text-[40px] font-sans font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4 text-center">
              Your Business.<br />Supercharged with AI.
            </h2>
            <p className="text-[#4B5563] text-[15px] max-w-2xl mx-auto font-normal leading-[1.6]">
              Save time, boost efficiency, and streamline your business with AI automation.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-sm shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] shadow-blue-600/20 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-blue-700 group"
          >
            Book a Call
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
