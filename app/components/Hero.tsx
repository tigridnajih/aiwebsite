'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden text-slate-900 bg-white">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Main Content Area - CENTERED DESIGN */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-20 w-full px-4 text-center">
                <div className="container-custom max-w-5xl flex flex-col items-center relative">
                    
                    {/* Trusted Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="text-sm md:text-base font-bold tracking-tight text-accent bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10">
                            Supercharge your Business
                        </span>
                    </motion.div>

                    {/* Centered Heading */}
                    <div className="relative group">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl lg:text-9xl font-extrabold font-heading tracking-tighter leading-[0.9] text-slate-900 z-10 relative"
                        >
                            Intelligent Automation <br />
                            for Modern Business.
                        </motion.h1>

                        {/* 💎 3D Floating Element (CENTERED BOTTOM) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute -bottom-24 md:-bottom-48 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] z-20 pointer-events-none select-none"
                        >
                            <motion.img
                                src="/herosection_assets/hero_3delement.avif"
                                alt="3D Decorative Element"
                                className="w-full h-full object-contain"
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 1, 0]
                                }}
                                transition={{ 
                                    duration: 5, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            />
                        </motion.div>
                    </div>
                    
                    {/* Centered Subtext */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed tracking-wide mt-32 md:mt-56 mb-12"
                    >
                        Bringing AI automation to your fingertips and streamlining operational tasks for accelerated business growth.
                    </motion.p>

                    {/* Centered Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 items-center mb-16"
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
            </div>

            {/* Integrated TrustLogos */}
            <div className="relative z-30 pb-12 md:pb-8">
                <TrustLogos />
            </div>
            
            {/* Bottom gradient mask for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/40 to-transparent z-[15] pointer-events-none" />
        </section>
    );
}
