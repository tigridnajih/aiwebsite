'use client';

import { useEffect, useRef } from 'react';

const LOGOS = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.85 8.65L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.15 8.65L12 2Z" fill="currentColor" />
            </svg>
        )
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24.49 15.51L40 20L24.49 24.49L20 40L15.51 24.49L0 20L15.51 15.51L20 0Z" fill="currentColor" />
            </svg>
        )
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
        )
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="currentColor" />
            </svg>
        )
    }
];

export default function TrustLogos() {
    // Generate a longer list for smooth infinite scroll
    const allLogos = [...Array(10)].map((_, i) => LOGOS[i % LOGOS.length]);

    return (
        <section className="relative z-50 py-24 bg-white overflow-hidden select-none border-t border-slate-50">
            {/* Infinite Scroll Wrapper with CSS Mask for transparent Fading */}
            <div className="container-custom">
                <div
                    className="relative w-full flex items-center overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                    }}
                >
                    {/* Logos Container */}
                    <div className="flex animate-infinite-scroll-slow whitespace-nowrap items-center py-2 text-slate-900">
                        {allLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 md:gap-3 mx-4 md:mx-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 scale-90">
                                    {logo.icon}
                                </div>
                                <span className="text-lg md:text-xl font-bold tracking-tighter">
                                    logoipsum
                                </span>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {allLogos.map((logo, i) => (
                            <div
                                key={`dup-${i}`}
                                className="flex items-center gap-2 md:gap-3 mx-4 md:mx-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 scale-90">
                                    {logo.icon}
                                </div>
                                <span className="text-lg md:text-xl font-bold tracking-tighter">
                                    logoipsum
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
