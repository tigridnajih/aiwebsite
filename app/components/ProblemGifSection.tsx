'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProblemGifSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
                    
                    {/* Left Side: GIF */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 relative lg:pr-12"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-600/10 border border-slate-100">
                            <Image 
                                src="/section_assets/ANIM.gif" 
                                alt="Automation Process" 
                                width={800} 
                                height={600}
                                className="w-full h-auto object-cover"
                                unoptimized // Essential for GIFs to animate
                            />
                            {/* Subtle Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Right Side: Text */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Analysis</span>
                        </div>
                        
                        <h2 className="text-5xl lg:text-7xl font-sans font-extrabold tracking-tighter leading-[1.1] text-black mb-8">
                            IS THIS <span className="text-blue-600">YOU?</span>
                        </h2>
                        
                        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                            Stop wasting hours on manual data entry and repetitive workflows. Tigrid automates the chaos so you can focus on scaling.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
