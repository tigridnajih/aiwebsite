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
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            delay: `${Math.random() * 5}s`,
            duration: `${5 + Math.random() * 10}s`,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className={`relative flex flex-col items-center text-center py-24 px-4 overflow-hidden ${className}`}>
            {/* Dark Blue Radial Glow - Increased intensity and spread */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.4),transparent_80%)]" />

            {/* Fade overlays to blend with sections above and below */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-0" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />

            {/* Animated Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute bg-white rounded-full opacity-40 animate-pulse"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl">
                {badge && (
                    <div className="px-4 py-1.5 rounded-full border border-white/50 bg-gradient-to-r from-indigo-600 via-indigo-400 to-white/20 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.5),_inset_0_0_8px_rgba(255,255,255,0.2)]">
                        {badge}
                    </div>
                )}

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
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
