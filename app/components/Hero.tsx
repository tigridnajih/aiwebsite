'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col pt-32 overflow-hidden text-slate-900 bg-white">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Main Content Area - HEADER ONLY DESIGN */}
            <div className="flex-1 flex flex-col items-center justify-start relative z-20 w-full px-4 text-center">
                <div className="container-custom max-w-6xl flex flex-col items-center relative">
                    
                    {/* Trusted Proof */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <span className="text-xs md:text-sm font-bold tracking-widest text-accent bg-accent/5 px-6 py-2 rounded-full border border-accent/10 uppercase">
                            Supercharge your Business
                        </span>
                    </motion.div>

                    {/* Centered Heading with Integrated 3D Element */}
                    <div className="relative w-full">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl md:text-8xl lg:text-[160px] font-extrabold font-heading tracking-tighter leading-[0.85] text-slate-900 z-10 relative"
                        >
                            Intelligent <br />
                            Automation
                        </motion.h1>

                        {/* 💎 3D Floating Element (CENTERED BOTTOM) */}
                        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] z-20 pointer-events-none select-none flex items-center justify-center">
                            <motion.img
                                src="/herosection_assets/hero_3delement.avif"
                                alt="3D Decorative Element"
                                className="w-full h-full object-contain"
                                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1, 
                                    y: [0, -40, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{ 
                                    opacity: { duration: 1 },
                                    scale: { duration: 1.2, ease: "easeOut" },
                                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Integrated TrustLogos (Kept at bottom for layout structure) */}
            <div className="relative z-30 pb-16 md:pb-12 mt-auto">
                <TrustLogos />
            </div>
            
            {/* Bottom gradient mask for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white via-white/40 to-transparent z-[15] pointer-events-none" />
        </section>
    );
}
