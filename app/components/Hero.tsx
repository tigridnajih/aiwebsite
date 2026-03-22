'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import heroBg from '../herosection_assets/hero_bg.png';

export default function Hero() {
    return (
        <section className="relative min-h-[700px] lg:min-h-[850px] flex flex-col pt-16 pb-32 lg:pt-24 lg:pb-48 overflow-hidden text-slate-900 bg-white">

            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Custom Image Background */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-[2] pointer-events-none select-none flex justify-center items-center lg:items-end overflow-hidden"
            >
                <img 
                    src={heroBg.src} 
                    alt="Hero Background Illustration" 
                    className="w-full min-w-[1024px] h-full object-cover opacity-90"
                />
            </motion.div>

            {/* Main Content Area - CENTERED DESIGN */}
            <div className="container-custom relative z-20 flex-1 flex flex-col items-center justify-start mt-8 lg:mt-16 text-center">
                <div className="relative max-w-5xl flex flex-col items-center w-full">
                    

                    {/* Text Container Wrapper */}
                    <div className="relative z-10 flex flex-col items-center w-full">
                    


                    <div className="space-y-5 relative z-20">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold font-heading tracking-tighter leading-[1.05] text-slate-900"
                        >
                            Intelligent Automation for <br />
                            Modern Businesses.
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Bringing AI automation to your fingertips & streamlining operational tasks for accelerated business growth.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-5 pt-5 items-center relative z-20"
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-bold text-sm transition-all duration-300 hover:shadow-md active:scale-[0.98]"
                        >
                            Book A Demo
                        </Link>

                        <Link
                            href="#get-started"
                            className="group flex items-center gap-3 px-7 py-2.5 rounded-full bg-blue-600 bg-gradient-to-t from-white/25 to-transparent text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_12px_30px_-6px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_35px_-8px_rgba(0,0,0,0.35)]"
                        >
                            Get Started
                            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-blue-600 shadow-sm">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </Link>
                    </motion.div>

                    </div> {/* End Text Container Wrapper */}
                </div>
            </div>

            {/* Bottom White Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[10]" />

        </section>
    );
}
