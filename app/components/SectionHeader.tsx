'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
    badge?: string;
    title: ReactNode;
    description?: string;
    className?: string;
}

export default function SectionHeader({ badge, title, description, className = "" }: SectionHeaderProps) {
    return (
        <div className={`relative flex flex-col items-center text-center pt-24 pb-12 px-4 overflow-hidden ${className}`}>
            {/* Expanded Dark Blue Radial Glow - Luminous and Wide */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),rgba(30,58,138,0.1),transparent_70%)] blur-[80px]" />

            {/* Core Glow Center - To prevent "collapsed" look */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-blue-600/15 rounded-full blur-[120px] z-0" />

            {/* Fade overlays for smooth transitions */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/20 to-transparent z-0" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/20 to-transparent z-0" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl">
                {badge && (
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-white/30 transition-shadow duration-300">
                        <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
                            {badge}
                        </span>
                    </div>
                )}
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
