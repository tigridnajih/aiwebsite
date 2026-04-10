'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const PAIN_POINTS = [
    { text: ["Wasting hours on", "manual data entry?"], x: "20%", startY: 800, speed: 0.15 },
    { text: ["Leads slipping", "through the cracks?"], x: "65%", startY: 1200, speed: 0.2 },
    { text: ["Overwhelmed by", "repetitive tasks?"], x: "25%", startY: 1600, speed: 0.25 },
    { text: ["Struggling to", "scale operations?"], x: "70%", startY: 2000, speed: 0.18 },
    { text: ["Losing money on", "inefficiencies?"], x: "15%", startY: 2400, speed: 0.22 },
    { text: ["Team burnt out", "by boring work?"], x: "60%", startY: 2800, speed: 0.12 },
];

export default function ProblemScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section 
            ref={containerRef} 
            className="relative h-[400vh] bg-white overflow-visible"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                
                <div className="container-custom relative w-full h-full pointer-events-none">
                    {/* Floating Kinetic Typography */}
                    {PAIN_POINTS.map((point, i) => {
                        // Parallax movement
                        const y = useTransform(scrollYProgress, [0, 1], [point.startY, -point.startY * 0.8]);
                        
                        // Use a more spread out focus window to prevent overlap
                        const focusCenter = (i + 1) / (PAIN_POINTS.length + 1);
                        const focusStart = Math.max(0, focusCenter - 0.2);
                        const focusEnd = Math.min(1, focusCenter + 0.2);
                        
                        const opacity = useTransform(scrollYProgress, [focusStart, focusStart + 0.05, focusEnd - 0.05, focusEnd], [0, 1, 1, 0]);
                        const blur = useTransform(scrollYProgress, [focusStart, focusStart + 0.05, focusEnd - 0.05, focusEnd], [12, 0, 0, 12]);
                        const scale = useTransform(scrollYProgress, [focusStart, focusStart + 0.05, focusEnd - 0.05, focusEnd], [0.9, 1, 1, 0.9]);

                        return (
                            <motion.div
                                key={i}
                                style={{ 
                                    position: 'absolute',
                                    left: point.x,
                                    y,
                                    opacity,
                                    filter: useTransform(blur, (v) => `blur(${v}px)`),
                                    scale
                                }}
                                className="inline-block"
                            >
                                <div className="relative p-4 px-6 group">
                                    {/* Corner Brackets */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300" />
                                    
                                    <p className="text-slate-400 text-lg md:text-xl font-medium tracking-tight leading-snug">
                                        {point.text[0]}<br/>
                                        <span className="font-semibold">{point.text[1]}</span>
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Central Anchor Heading */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative z-20 pointer-events-none"
                >
                    <h2 className="text-5xl md:text-[84px] font-sans font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#0047FF] to-white leading-none pb-4 text-center">
                        Is This You?
                    </h2>
                </motion.div>

            </div>
        </section>
    );
}
