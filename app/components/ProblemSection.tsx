'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LEFT_PHRASES = [
    "Wasting hours on manual data entry?",
    "Leads slipping through the cracks?",
    "Overwhelmed by repetitive tasks?",
    "Struggling to scale operations?"
];

const RIGHT_PHRASES = [
    "Losing money on inefficiencies?",
    "Team burnt out by boring work?",
    "Inconsistent customer responses?",
    "Still using spreadsheets for everything?",
    "Missing out on the AI revolution?"
];

export default function ProblemSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Horizontal movement for left phrases (move further left)
    const leftX = useTransform(scrollYProgress, [0, 1], [0, -400]);
    // Horizontal movement for right phrases (move further right)
    const rightX = useTransform(scrollYProgress, [0, 1], [0, 400]);
    // Opacity fade in and out
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    // Scale for the center text
    const centerScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1.1, 1]);

    return (
        <section 
            ref={sectionRef} 
            className="relative h-[250vh] bg-[#02040a] overflow-hidden"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="container-custom relative w-full h-full flex items-center justify-center">
                    
                    {/* Left Moving Phrases */}
                    <div className="absolute left-0 w-1/3 flex flex-col gap-24 items-end pr-12">
                        {LEFT_PHRASES.map((phrase, i) => (
                            <motion.div
                                key={`left-${i}`}
                                style={{ x: leftX, opacity }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-right"
                            >
                                <div className="inline-block relative">
                                    {/* Corner Accents */}
                                    <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-white/20" />
                                    <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-white/20" />
                                    
                                    <p className="text-white/40 text-sm md:text-lg font-medium tracking-tight whitespace-nowrap">
                                        {phrase}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Static Text */}
                    <motion.div
                        style={{ scale: centerScale, opacity }}
                        className="relative z-10 text-center"
                    >
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                            Is This <span className="text-blue-500">You?</span>
                        </h2>
                    </motion.div>

                    {/* Right Moving Phrases */}
                    <div className="absolute right-0 w-1/3 flex flex-col gap-20 items-start pl-12">
                        {RIGHT_PHRASES.map((phrase, i) => (
                            <motion.div
                                key={`right-${i}`}
                                style={{ x: rightX, opacity }}
                                className="text-left"
                            >
                                <div className="inline-block relative">
                                    {/* Corner Accents */}
                                    <div className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-white/20" />
                                    <div className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-white/20" />
                                    
                                    <p className="text-white/40 text-sm md:text-lg font-medium tracking-tight whitespace-nowrap">
                                        {phrase}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Subtle Grid overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            </div>
        </section>
    );
}
