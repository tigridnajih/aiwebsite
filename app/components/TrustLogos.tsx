'use client';

import { useEffect, useRef } from 'react';

const LOGO_NAMES = ["Books", "Opal", "Dune", "Oasis", "Asterisk", "Echo"];

export default function TrustLogos() {
    // Combine multiple sets for smooth infinite scroll
    const allLogos = [...LOGO_NAMES, ...LOGO_NAMES, ...LOGO_NAMES, ...LOGO_NAMES, ...LOGO_NAMES];

    return (
        <section className="relative z-50 py-4 bg-transparent overflow-hidden select-none">
            <p className="text-center text-[10px] md:text-xs font-semibold text-gray-500 mb-6 tracking-[0.3em] uppercase opacity-60">
                Over 50+ business trust us
            </p>

            {/* Infinite Scroll Wrapper - Full Width */}
            <div className="relative w-full flex items-center overflow-hidden py-4">
                {/* Full-width Logos Container with CSS Mask for edge fade */}
                <div
                    className="relative z-10 flex animate-infinite-scroll-slow whitespace-nowrap items-center py-2"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
                    }}
                >
                    {allLogos.map((name, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 mx-12 md:mx-20"
                        >
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                            </div>
                            <span className="text-base md:text-lg font-bold tracking-tighter text-white/70">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
