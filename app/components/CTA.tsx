'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative pt-24 pb-0 bg-white overflow-hidden text-center">
      {/* BACKGROUND DECORATIVE TEXT */}
      <div className="absolute top-10 left-0 right-0 z-0 select-none pointer-events-none opacity-[0.03]">
         <h1 className="text-[120px] md:text-[180px] lg:text-[240px] font-bold text-slate-900 leading-none whitespace-nowrap -translate-x-10 scale-110">
            r people. Higher margins. Be
         </h1>
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Your Business.<br />Supercharged with AI.
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            Save time, boost efficiency, and streamline your business with AI automation from Tigrid.
          </p>
          
          <Link 
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-sm shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-blue-700"
          >
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>

      {/* FOOTER WAVE DECORATION */}
      <div className="relative w-full h-32 md:h-48 overflow-hidden mt-12">
        <svg 
          className="absolute bottom-0 left-0 w-[200%] h-full text-blue-500" 
          viewBox="0 0 1000 100" 
          preserveAspectRatio="none"
        >
          <path 
            className="animate-wave-slow fill-[url(#wave-gradient)]" 
            d="M0 80 C 150 100, 350 0, 500 80 C 650 100, 850 0, 1000 80 L 1000 100 L 0 100 Z" 
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#8a2be2', stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: '#4169e1', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#00ced1', stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: '#4169e1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8a2be2', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave-slow {
          animation: wave 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
