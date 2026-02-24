'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const projects = [
    {
        url: 'https://i.pinimg.com/1200x/d5/ac/3a/d5ac3a9cd282c1bd0aa44ce6b7f52221.jpg',
        title: 'Website Design - Wanderly'
    },
    {
        url: 'https://i.pinimg.com/1200x/8b/72/e7/8b72e7904f2d3f687bd6051cf36962d6.jpg',
        title: 'App Design - Waitlista'
    },
    {
        url: 'https://i.pinimg.com/1200x/80/13/81/801381ce1ef3c4f08ecc58055a5f6a44.jpg',
        title: 'Website Design - Regulate'
    },
    {
        url: 'https://i.pinimg.com/736x/16/9b/c1/169bc12e57821b9ee9de2cfb0c02d156.jpg',
        title: 'App Design - Appit'
    },
    {
        url: 'https://i.pinimg.com/1200x/9a/73/1d/9a731d7608517e4bcd7f9716d5187424.jpg',
        title: 'Dashboard Design - Analytics'
    },
    {
        url: 'https://i.pinimg.com/736x/a5/80/66/a58066e9c111c772958a21960ed5f9e9.jpg',
        title: 'SaaS Landing - TechFlow'
    },
    {
        url: 'https://i.pinimg.com/736x/ab/ab/b9/ababb9436999e8bd6531c56ca7e1efd4.jpg',
        title: 'User Interface - Nexus'
    }
];

export default function PortfolioShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-32 bg-[#030712] overflow-hidden relative">
            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.03]" />

            <div className="container-custom mb-20">
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-[#64748B] uppercase">
                        Portfolio Selection
                    </span>
                    <h2 className="text-white text-3xl font-medium tracking-tight">
                        Selected Works
                    </h2>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex gap-12 overflow-x-auto pb-32 px-[10vw] no-scrollbar snap-x snap-mandatory"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                {projects.map((project, index) => {
                    const [category, title] = project.title.split(' - ');
                    return (
                        <ProjectCard
                            key={index}
                            project={{ ...project, category, title }}
                            containerRef={containerRef}
                        />
                    );
                })}
                {/* Spacer for end of scroll */}
                <div className="flex-shrink-0 w-[10vw]" />
            </div>

            {/* Bottom Divider Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03]" />
        </section>
    );
}

interface ProjectCardProps {
    project: {
        url: string;
        category: string;
        title: string;
    };
    containerRef: React.RefObject<HTMLDivElement | null>;
}

function ProjectCard({ project, containerRef }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: containerRef,
        target: cardRef,
        offset: ["center end", "center center", "center start"]
    });

    // Scale logic: 85% at periphery, 100% at center
    const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

    // Smooth transition for values
    const springScale = useSpring(scale, { stiffness: 120, damping: 20 });

    // Border and Shadow transitions
    // Center is around 0.5 in the [center end, center center, center start] range
    const borderOpacity = useTransform(scrollXProgress, [0.4, 0.5, 0.6], [0.05, 1, 0.05]);
    const shadowIntensity = useTransform(scrollXProgress, [0.4, 0.5, 0.6], [0, 1, 0]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale: springScale }}
            className="flex-shrink-0 w-[80vw] md:w-[600px] snap-center"
        >
            {/* The "Invisible" Frame / Frame Logic */}
            <motion.div
                className="relative aspect-video rounded-xl overflow-hidden pointer-events-none"
                style={{
                    border: '1px solid',
                    borderColor: useTransform(borderOpacity, (v) => `rgba(59, 130, 246, ${v})`),
                    // For inactive cards, we use the fallback color
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: useTransform(shadowIntensity, (v) => `0 40px 100px -20px rgba(59, 130, 246, ${v * 0.12})`),
                }}
            >
                {/* Fallback Inactive Border (when active border is invisible) */}
                <motion.div
                    className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none"
                    style={{ opacity: useTransform(borderOpacity, (v) => 1 - v) }}
                />

                <div className="p-[2px] h-full w-full">
                    <img
                        src={project.url}
                        alt={project.title}
                        className="h-full w-full object-cover rounded-[5px]"
                    />
                </div>
            </motion.div>

            {/* Typography & Precision Details */}
            <div className="mt-8 flex flex-col items-center text-center">
                <motion.span
                    className="text-[10px] tracking-[0.3em] text-[#64748B] uppercase mb-3"
                    style={{
                        opacity: useTransform(scrollXProgress, [0.3, 0.5, 0.7], [0.3, 1, 0.3]),
                        fontFamily: 'var(--font-geist-mono)'
                    }}
                >
                    {project.category}
                </motion.span>
                <motion.h3
                    className="text-white text-xl md:text-2xl font-medium tracking-[-0.02em]"
                    style={{
                        opacity: useTransform(scrollXProgress, [0.3, 0.5, 0.7], [0.4, 1, 0.4]),
                        fontFamily: 'var(--font-geist-sans)'
                    }}
                >
                    {project.title}
                </motion.h3>
            </div>
        </motion.div>
    );
}
