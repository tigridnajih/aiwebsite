'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[850px] flex flex-col pt-16 pb-10 lg:pt-20 lg:pb-16 overflow-hidden text-slate-900">
            {/* Hero Background Image */}
            <img
                src="/herosection_assets/Blueandwhitebghero.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            />

            {/* Subtle Overlay to ensure text readability if needed */}
            <div className="absolute inset-0 z-[1] bg-white/10 pointer-events-none" />

            {/* Bottom Gradient for section blending */}
            <div className="absolute inset-x-0 bottom-0 h-32 sm:h-56 z-[2] bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Main Content Area - CENTERED DESIGN */}
            <div className="container-custom relative z-20 flex-1 flex flex-col items-center justify-center text-center w-full px-4 sm:px-6">
                <div className="relative max-w-5xl flex flex-col items-center w-full">

                    {/* Text Container Wrapper */}
                    <div className="relative z-10 flex flex-col items-center w-full">
                        <div className="flex flex-col gap-1 sm:gap-2 items-center text-center w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="font-sans font-normal text-[32px] sm:text-[48px] md:text-[64px] lg:text-[76px] text-black tracking-[-1px] md:tracking-[-2px] leading-[1.1] md:leading-[1.15] w-full break-words"
                            >
                                Automate repetitive.
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                                className="font-instrument italic font-bold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[76px] text-black tracking-[-1px] md:tracking-[-2px] leading-[1.1] md:leading-[1.15] w-full break-words relative inline-block"
                            >
                                <span className="relative">
                                    Focus on{" "}
                                    <span className="relative">
                                        growth
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
                                            className="absolute -top-1 sm:-top-3 -right-5 sm:-right-8 lg:-right-10"
                                        >
                                            <span className="text-[14px] sm:text-[22px] lg:text-[28px] font-bold text-blue-600 tracking-tighter drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]">
                                                AI
                                            </span>
                                        </motion.div>
                                    </span>
                                    .
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="font-manrope font-normal text-[13px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-black max-w-[580px] mx-auto mt-4 sm:mt-6 lg:mt-8"
                        >
                            The next-generation AI agent platform that handles lead generation, customer support, and data entry while you build.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-row gap-3 sm:gap-5 items-center justify-center mt-6 sm:mt-8 lg:mt-10 w-full"
                        >
                            <Link
                                href="#contact"
                                className="group bg-gradient-to-b from-blue-600 to-blue-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-cabin font-medium text-[14px] sm:text-[16px] flex items-center justify-center gap-2 sm:gap-3 text-white shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all active:scale-[0.98] min-w-[130px] sm:min-w-[180px]"
                            >
                                Get Started
                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                                    <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 text-blue-800 fill-none stroke-current" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                </div>
                            </Link>

                            <Link
                                href="#demo"
                                className="bg-white/40 backdrop-blur-md border border-slate-200/50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-cabin font-medium text-[14px] sm:text-[16px] text-slate-900 shadow-sm hover:bg-white/60 transition-all active:scale-[0.98] min-w-[110px] sm:min-w-[150px] text-center"
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
                        className="w-full mt-12 sm:mt-14 lg:mt-20 overflow-hidden"
                    >
                        <TrustLogos />
                    </motion.div>

                </div>
            </div>

        </section>
    );
}
