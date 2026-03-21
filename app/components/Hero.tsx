'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustLogos from './TrustLogos';
import CityBackground from './CityBackground';

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col pt-32 lg:pt-48 overflow-hidden text-white bg-black">
            
            {/* 🌆 3D City Background */}
            <CityBackground />

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent z-[5] pointer-events-none" />
            <div className="absolute inset-0 z-[5] bg-black/40 pointer-events-none" />

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
                            className="text-4xl md:text-7xl lg:text-[72px] font-extrabold font-heading tracking-tighter leading-[1.05] text-white"
                        >
                            Intelligent Automation for <br />
                            Modern Businesses.
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium"
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
                            className="group flex items-center gap-2 px-12 py-5 rounded-full bg-accent text-white font-bold text-base transition-all hover:bg-accent/90 hover:scale-[1.05] active:scale-[0.98] shadow-2xl shadow-accent/30"
                        >
                            Book a Strategy Call
                            <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </Link>

                        <Link
                            href="#works"
                            className="px-12 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
                        >
                            See How It Works
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
