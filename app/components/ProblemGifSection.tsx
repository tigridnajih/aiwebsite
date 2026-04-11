'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProblemGifSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
                    
                    {/* Left Side: Text */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
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

                    {/* Right Side: GIF */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-[55%] relative order-1 md:order-2"
                    >
                        <div className="relative overflow-hidden">
                            <Image 
                                src="/section_assets/ANIM.gif" 
                                alt="Automation Process" 
                                width={1000} 
                                height={800}
                                className="w-full h-auto object-contain"
                                unoptimized
                            />
                            
                            {/* Blending Gradients */}
                            <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-x-0 top-0 h-8 md:h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-x-0 bottom-0 h-8 md:h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
