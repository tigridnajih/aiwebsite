'use client';

import { useEffect, useRef } from 'react';

export default function TrustLogos() {
    // Array of demo logo items
    const logos = [
        { name: "Logoipsum" },
        { name: "Logoipsum" },
        { name: "Logoipsum" },
        { name: "Logoipsum" },
        { name: "Logoipsum" },
        { name: "Logoipsum" },
    ];

    // Combine multiple sets for smooth infinite scroll
    const allLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="relative z-50 py-12 bg-transparent overflow-hidden select-none -mt-32">
            <p className="text-center text-[10px] md:text-xs font-semibold text-gray-500 mb-8 tracking-[0.3em] uppercase opacity-60">
                Over 50+ business trust us
            </p>

            {/* Infinite Scroll Wrapper - Full Width */}
            <div className="relative w-full flex items-center overflow-hidden py-4">
                {/* Full-width Logos Container with CSS Mask for edge fade */}
                <div
                    className="relative z-10 flex animate-infinite-scroll whitespace-nowrap items-center py-2"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    {allLogos.map((logo, i) => (
                        <LogoItem key={i} name={logo.name} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function LogoItem({ name, index }: { name: string, index: number }) {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frameId: number;

        const updateEffect = () => {
            if (itemRef.current) {
                const rect = itemRef.current.getBoundingClientRect();
                const centerX = window.innerWidth / 2;
                const itemX = rect.left + rect.width / 2;

                // Calculate distance from center (0 to 1)
                const distance = Math.abs(centerX - itemX);
                const maxDist = window.innerWidth * 0.6; // Influence area
                const normalizedDist = Math.min(distance / maxDist, 1);

                // Fisheye math: Scale and Opacity boost in center
                // 1.15 at center, down to 0.85 at edges
                const scale = 1.15 - (Math.pow(normalizedDist, 1.5) * 0.3);
                // 1.0 at center, down to 0.4 at edges
                const opacity = 1.0 - (Math.pow(normalizedDist, 1.2) * 0.6);

                // Apply styles directly to DOM for performance
                itemRef.current.style.transform = `scale(${scale})`;
                itemRef.current.style.opacity = `${opacity}`;
            }
            frameId = requestAnimationFrame(updateEffect);
        };

        frameId = requestAnimationFrame(updateEffect);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div
            ref={itemRef}
            className="flex items-center gap-2 mx-6 md:mx-10 scale-90 will-change-transform transition-opacity duration-300"
        >
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-white/10 border border-white/20 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
            <span className="text-base md:text-lg font-bold tracking-tighter text-white">
                {name}
            </span>
        </div>
    );
}
