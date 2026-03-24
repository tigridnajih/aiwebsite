'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-[700px] lg:min-h-[850px] flex flex-col pt-16 pb-10 lg:pt-24 lg:pb-16 overflow-hidden text-slate-900">



            {/* Hero Background Image */}
            <img
                src="/herosection_assets/herobg.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            />

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
                                className="font-sans font-medium text-[48px] md:text-[76px] text-black tracking-[-1px] md:tracking-[-2px] leading-[1.15]"
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
                            className="flex flex-col sm:flex-row gap-[16px] sm:gap-[20px] items-center justify-center mt-10 lg:mt-12"
                        >
                            <Link
                                href="#contact"
                                className="group bg-gradient-to-b from-blue-600 to-blue-800 px-[24px] py-[12px] rounded-full font-cabin font-medium text-[16px] flex items-center gap-3 text-white shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all active:scale-[0.98]"
                            >
                                Get Started Free
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-800 fill-none stroke-current" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                </div>
                            </Link>

                            <Link
                                href="#demo"
                                className="bg-white/40 backdrop-blur-md border border-slate-200/50 px-[24px] py-[12px] rounded-full font-cabin font-medium text-[16px] text-slate-900 shadow-sm hover:bg-white/60 transition-all active:scale-[0.98]"
                            >
                                Know More
                            </Link>
                        </motion.div>

                    </div> {/* End Text Container Wrapper */}

                    {/* Trust Logos - inline after CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        className="w-full mt-14 lg:mt-20"
                    >
                        <TrustLogos />
                    </motion.div>

                </div>
            </div>

        </section>
    );
}
