'use client';

import { ReactNode, useEffect, useState } from 'react';

interface SectionHeaderProps {
    badge?: string;
    title: ReactNode;
    description?: string;
    className?: string;
}

export default function SectionHeader({ badge, title, description, className = "" }: SectionHeaderProps) {
    const [particles, setParticles] = useState<{ id: number; left: string; top: string; size: number; delay: string; duration: string }[]>([]);

    useEffect(() => {
        // Generate random particles only on client
        const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 1.5 + 0.5, // Tiny particles
            delay: `${Math.random() * 10}s`,
            duration: `${10 + Math.random() * 15}s`, // Slightly faster rise
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className={`relative flex flex-col items-center text-center py-24 px-4 overflow-hidden ${className}`}>
            {/* Expanded Dark Blue Radial Glow - Luminous and Wide */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),rgba(30,58,138,0.1),transparent_70%)] blur-[80px]" />

            {/* Core Glow Center - To prevent "collapsed" look */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-blue-600/15 rounded-full blur-[120px] z-0" />

            {/* Fade overlays for smooth transitions */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/20 to-transparent z-0" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />

            {/* Rising Tiny Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute bg-white rounded-full animate-float-up"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            opacity: 0.8,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white leading-tight drop-shadow-sm">
                    {title}
                </h2>

                {description && (
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
