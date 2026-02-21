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
        <section className="py-10 bg-black overflow-hidden select-none">
            <div className="container-custom">
                <p className="text-center text-[10px] md:text-xs font-medium text-gray-500 mb-4 tracking-widest uppercase">
                    Over 50+ business trust us
                </p>

                {/* Infinite Scroll Wrapper with Side Masks */}
                <div className="relative w-full flex overflow-hidden py-2">
                    {/* Fade Masks */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20" />

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
