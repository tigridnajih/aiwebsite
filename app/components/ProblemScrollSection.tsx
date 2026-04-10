'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const PAIN_POINTS = [
    { text: "Wasting hours on manual data entry?", x: "15%", startY: 1000, speed: 0.15 },
    { text: "Leads slipping through the cracks?", x: "75%", startY: 1200, speed: 0.2 },
    { text: "Overwhelmed by repetitive tasks?", x: "20%", startY: 1500, speed: 0.25 },
    { text: "Struggling to scale operations?", x: "80%", startY: 1800, speed: 0.18 },
    { text: "Losing money on inefficiencies?", x: "10%", startY: 2100, speed: 0.22 },
    { text: "Team burnt out by boring work?", x: "70%", startY: 2400, speed: 0.12 },
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
            className="relative h-[300vh] bg-white overflow-visible"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                
                {/* Floating Kinetic Typography */}
                {PAIN_POINTS.map((point, i) => {
                    // Parallax movement
                    const y = useTransform(scrollYProgress, [0, 1], [point.startY, -point.startY * 1.5]);
                    
                    // Focus/Blur logic: Snap into focus at the center
                    // We'll define a range around 0.5 (the visual center of the scroll)
                    // But since phrases are staggered, we'll use their individual relative center
                    const focusStart = (i / PAIN_POINTS.length) * 0.5;
                    const focusEnd = focusStart + 0.4;
                    
                    const opacity = useTransform(scrollYProgress, [focusStart, focusStart + 0.1, focusEnd - 0.1, focusEnd], [0, 1, 1, 0]);
                    const blur = useTransform(scrollYProgress, [focusStart, focusStart + 0.1, focusEnd - 0.1, focusEnd], [12, 0, 0, 12]);
                    const scale = useTransform(scrollYProgress, [focusStart, focusStart + 0.1, focusEnd - 0.1, focusEnd], [0.8, 1, 1, 0.8]);

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
                            className="whitespace-nowrap"
                        >
                            <span className="text-slate-400 text-lg md:text-2xl font-medium tracking-tight">
                                {point.text}
                            </span>
                        </motion.div>
                    );
                })}

                {/* Central Anchor Heading */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative z-20"
                >
                    <h2 className="text-7xl md:text-9xl font-sans font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#0047FF] to-white leading-none pb-4">
                        Is This You?
                    </h2>
                </motion.div>

            </div>
        </section>
    );
}
