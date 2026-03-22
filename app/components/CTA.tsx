'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-[120px] overflow-hidden">
      <div className="container-custom max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-white via-blue-500 to-indigo-700 px-8 py-20 text-center md:px-16 md:py-28 shadow-[0_24px_50px_-12px_rgba(37,99,235,0.15)] group"
        >
          {/* Dynamic Light Background Orbs */}
          <div className="absolute top-0 left-0 -translate-x-[20%] -translate-y-[20%] w-[500px] h-[500px] bg-white opacity-20 blur-[120px] rounded-full transition-transform duration-1000 group-hover:translate-x-[10%] group-hover:translate-y-[10%]" />
          <div className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] w-[400px] h-[400px] bg-blue-300 opacity-20 blur-[100px] rounded-full transition-transform duration-1000 group-hover:-translate-x-[10%] group-hover:-translate-y-[10%]" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              Let AI take the busywork off <br className="hidden md:block" /> your team's plate
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-12 max-w-2xl leading-relaxed">
              From dispatching and documents to messages and reports automate the tasks your team shouldn't be doing manually.
            </p>
            
            <Link 
              href="#contact"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-blue-600 font-bold text-sm transition-all hover:scale-[1.05] active:scale-[0.98] shadow-2xl shadow-blue-900/10"
            >
              Build My Site
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={3} 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
