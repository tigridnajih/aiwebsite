'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

    <section className="relative pt-32 pb-16 bg-white overflow-hidden text-center">
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

      <div className="container-custom relative z-10 pt-48 pb-10">
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
    </section>

  );
}
