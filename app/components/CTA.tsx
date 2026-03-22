'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden text-center">
      {/* SCROLLING BACKGROUND TEXT (Right to Left) */}
      <div className="absolute top-10 left-0 right-0 z-0 select-none pointer-events-none opacity-[0.03] overflow-hidden">
         <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
         >
            <h1 className="text-[120px] md:text-[180px] lg:text-[240px] font-bold text-slate-900 leading-none pr-20">
                Better people. Higher margins. Better business. Tigrid AI.
            </h1>
            <h1 className="text-[120px] md:text-[180px] lg:text-[240px] font-bold text-slate-900 leading-none pr-20">
                Better people. Higher margins. Better business. Tigrid AI.
            </h1>
         </motion.div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl min-h-[500px] flex items-center justify-center"
        >
          {/* BACKGROUND IMAGE CARD */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: "url('/bottom_hero_bg.png')" }}
          />
          
          {/* GLASS OVERLAY FOR LEGIBILITY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 p-10 md:p-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Your Business.<br />Supercharged with AI.
            </h2>
            <p className="text-white/80 text-base md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Save time, boost efficiency, and streamline your business with AI automation from Tigrid.
            </p>
            
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-sm shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-blue-700"
            >
              Book a Strategy Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>


  );
}
