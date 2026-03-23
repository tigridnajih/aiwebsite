'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import heroBg from '../herosection_assets/herobg.png';

export default function Hero() {
    return (
        <section className="relative min-h-[700px] lg:min-h-[850px] flex flex-col pt-16 pb-32 lg:pt-24 lg:pb-48 overflow-hidden text-slate-900 bg-white">



            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />



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
                            className="text-[32px] md:text-[48px] font-extrabold font-heading tracking-tighter leading-[1.05] text-slate-900"
                        >
                            Your Business. <br />
                            Supercharged with AI.
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
                        className="flex flex-row gap-3 pt-6 items-center relative z-20"
                    >
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-900 font-bold text-xs md:text-sm transition-all duration-300 active:scale-[0.98]"
                        >
                            Book A Demo
                        </Link>

                        <Link
                            href="#get-started"
                            className="group inline-flex items-center gap-4 px-[28px] py-[12px] rounded-full bg-[#4a7dff] text-white font-semibold text-[18px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                        >
                            Get Started
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4a7dff] transition-transform duration-300 group-hover:translate-x-0.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
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
