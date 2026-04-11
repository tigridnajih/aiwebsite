'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
    "Are you tired of manual repeated work?",
    "Are you spending hours on a single task?",
    "Is your team overwhelmed by boring admin?",
    "Are leads slipping through the cracks?",
    "Struggling to scale your operations?",
    "Missing out on the AI revolution?",
    "Ready for a smarter way to work?"
];

export default function ProblemGifSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % QUESTIONS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="pb-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
                    
                    {/* Left Side: Text */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
                    >
                        <h2 className="text-5xl lg:text-7xl font-sans font-extrabold tracking-tighter leading-[1.1] text-black mb-8">
                            IS THIS <span className="text-blue-600">YOU?</span>
                        </h2>
                        
                        <div className="h-[60px] md:h-[80px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-slate-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed"
                                >
                                    {QUESTIONS[index]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
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
                            <div className="absolute inset-y-0 left-0 w-4 md:w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-y-0 right-0 w-4 md:w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-x-0 top-0 h-4 md:h-12 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-x-0 bottom-0 h-4 md:h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
