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
                    


                        <div className="flex flex-col gap-[10px] items-center text-center">
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="font-inter font-medium text-[48px] md:text-[76px] text-black tracking-[-1px] md:tracking-[-2px] leading-[1.15]"
                            >
                                Automate repetitive.
                            </motion.h1>
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                                className="font-instrument italic text-[48px] md:text-[76px] text-black tracking-[-1px] md:tracking-[-2px] leading-[1.15]"
                            >
                                Focus on growth.
                            </motion.h2>
                        </div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="font-manrope font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#6B7280] max-w-[613px] mx-auto mt-8 lg:mt-10"
                        >
                            The next-generation AI agent platform that handles lead generation, customer support, and data entry while you build.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-[16px] sm:gap-[22px] items-center justify-center mt-10 lg:mt-12"
                        >
                            <Link
                                href="#contact"
                                className="bg-[#7b39fc] px-[24px] py-[14px] rounded-[10px] font-cabin font-medium text-[16px] leading-[1.7] text-white shadow-lg shadow-purple-500/10 hover:brightness-110 transition-all active:scale-[0.98]"
                            >
                                Get Started Free
                            </Link>

                            <Link
                                href="#demo"
                                className="bg-[#2b2344] px-[24px] py-[14px] rounded-[10px] font-cabin font-medium text-[16px] leading-[1.7] text-[#f6f7f9] shadow-lg shadow-black/10 hover:brightness-125 transition-all active:scale-[0.98]"
                            >
                                Watch 2min Demo
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
