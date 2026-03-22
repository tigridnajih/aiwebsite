'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative pt-60 pb-10 bg-white overflow-hidden text-center">
      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[1.5rem] overflow-hidden bg-blue-50 min-h-[450px] flex items-center justify-center"
        >
          {/* CONTENT */}
          <div className="relative z-10 p-10 md:p-20 max-w-4xl flex flex-col items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-sm shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] shadow-blue-600/20 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-blue-700 group mb-10"
            >
              Book a Call
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Your Business.<br />Supercharged with AI.
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Save time, boost efficiency, and streamline your business with AI automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

  );
}
