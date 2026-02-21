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
        <section className="py-20 bg-black overflow-hidden select-none">
            <div className="container-custom">
                <p className="text-center text-xs md:text-sm font-medium text-gray-400 mb-12 tracking-tight">
                    Over 50+ business trust us
                </p>

                {/* Infinite Scroll Wrapper with Side Masks */}
                <div className="relative w-full flex overflow-hidden py-10">
                    {/* Fade Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
                    <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20" />

                    <div className="flex animate-infinite-scroll whitespace-nowrap items-center">
                        {allLogos.map((logo, i) => (
                            <LogoItem key={i} name={logo.name} index={i} />
                        ))}
                    </div>
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
                // 1.0 at center, down to 0.7 at edges
                const scale = 1.25 - (Math.pow(normalizedDist, 1.5) * 0.5);
                // 1.0 at center, down to 0.2 at edges
                const opacity = 1.0 - (Math.pow(normalizedDist, 1.2) * 0.8);

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
            className="flex items-center gap-3 mx-8 md:mx-16 will-change-transform transition-opacity duration-300"
        >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 border border-white/20 flex-shrink-0 flex items-center justify-center shadow-inner">
                <div className="w-4 h-4 rounded-full bg-white/40" />
            </div>
            <span className="text-xl md:text-3xl font-bold tracking-tighter text-white">
                {name}
            </span>
        </div>
    );
}
