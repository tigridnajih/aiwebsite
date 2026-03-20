'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col pt-16 overflow-hidden text-slate-900 bg-white">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Bottom gradient mask for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/40 to-transparent z-[15] pointer-events-none" />

            {/* Main Content Area - UNIFIED CONTAINER DESIGN */}
            <div className="flex-1 flex items-center relative z-20 w-full lg:pt-0">
                <div className="container-custom grid lg:grid-cols-2 gap-8 items-center h-full">
                    {/* Left Column: Content */}
                    <div className="flex flex-col gap-6 max-w-2xl items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
                        {/* Trusted Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block"
                        >
                            <span className="text-sm md:text-base font-bold tracking-tight text-accent bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10">
                                Supercharge your Business
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-7xl lg:text-[72px] font-bold font-heading tracking-tight leading-[1.05] text-slate-900"
                            >
                                Intelligent Automation for <br className="hidden lg:block" />
                                Modern Businesses.
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed tracking-wide"
                            >
                                Bringing AI automation to your fingertips & streamlining operational tasks for accelerated business growth.
                            </motion.p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 items-center"
                        >
                            <Link
                                href="#contact"
                                className="group flex items-center gap-2 px-10 py-4 rounded-full bg-accent text-white font-bold text-sm transition-all hover:bg-accent/90 hover:scale-[1.05] active:scale-[0.98] shadow-2xl shadow-accent/30"
                            >
                                Book a Strategy Call
                                <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </Link>

                            <Link
                                href="#works"
                                className="px-10 py-4 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-bold text-sm transition-all duration-300 hover:bg-slate-200"
                            >
                                See How It Works
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: 💎 3D Floating Element (INTEGRATED INTO GRID) */}
                    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] flex items-center justify-center lg:justify-end">
                        <motion.div
                            className="w-full h-full"
                            animate={{ 
                                y: [0, -25, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ 
                                duration: 6, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                        >
                            <img
                                src="/herosection_assets/hero_3delement.avif"
                                alt="3D Decorative Element"
                                className="w-full h-full object-contain scale-125 lg:scale-150 transform translate-x-8 md:translate-x-16 lg:translate-x-32"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Integrated TrustLogos */}
            <div className="relative z-30 pb-12 md:pb-8">
                <TrustLogos />
            </div>
        </section>
    );
}
