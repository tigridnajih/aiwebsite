'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col pt-32 lg:pt-48 overflow-hidden text-slate-900 bg-white">

            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Main Content Area - CENTERED DESIGN */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-20 w-full px-4 text-center lg:-mt-12">
                <div className="relative container-custom max-w-5xl flex flex-col items-center w-full">
                    


                    {/* Text Container Wrapper */}
                    <div className="relative z-10 flex flex-col items-center w-full">
                    
                    {/* Trusted Proof */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="text-xs md:text-sm font-bold tracking-widest text-accent bg-accent/5 px-6 py-2 rounded-full border border-accent/10 uppercase">
                            Supercharge your Business
                        </span>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl md:text-7xl lg:text-[72px] font-extrabold font-heading tracking-tighter leading-[1.05] text-slate-900"
                        >
                            Intelligent Automation for <br />
                            Modern Businesses.
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Bringing AI automation to your fingertips & streamlining operational tasks for accelerated business growth.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 pt-12 items-center"
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-900 font-bold text-sm md:text-base transition-all duration-300 hover:bg-slate-50 hover:shadow-md active:scale-[0.98]"
                        >
                            Book A Demo
                        </Link>

                        <Link
                            href="#get-started"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-bold text-sm md:text-base transition-all hover:brightness-110 hover:scale-[1.05] active:scale-[0.98] shadow-xl shadow-accent/25"
                        >
                            Get Started
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-accent group-hover:translate-x-1 transition-transform duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </Link>
                    </motion.div>
                    
                    </div> {/* End Text Container Wrapper */}
                </div>
            </div>

            {/* Integrated TrustLogos (Kept at bottom) */}
            <div className="relative z-30 pb-16 md:pb-12 mt-auto">
                <TrustLogos />
            </div>
            

        </section>
    );
}
