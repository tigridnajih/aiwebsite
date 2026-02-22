'use client';

import { useEffect, useRef } from 'react';

const LOGO_NAMES = ["Books", "Opal", "Dune", "Oasis", "Asterisk", "Echo"];

export default function TrustLogos() {
    // Combine multiple sets for smooth infinite scroll
    const allLogos = [...LOGO_NAMES, ...LOGO_NAMES, ...LOGO_NAMES, ...LOGO_NAMES, ...LOGO_NAMES];

    return (
        <section className="relative z-50 py-12 bg-transparent overflow-hidden select-none -mt-32">
            <p className="text-center text-[10px] md:text-xs font-semibold text-gray-400 mb-8 tracking-[0.3em] uppercase opacity-60">
                Over 50+ business trust us
            </p>

            {/* Infinite Scroll Wrapper - Full Width */}
            <div className="relative w-full flex items-center overflow-hidden py-4">
                {/* Subtle Glow behind the center logos to enhance the globe feel */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

                {/* Full-width Logos Container with CSS Mask for edge fade */}
                <div
                    className="relative z-10 flex animate-infinite-scroll whitespace-nowrap items-center py-2"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)'
                    }}
                >
                    {allLogos.map((name, i) => (
                        <LogoItem key={i} name={name} index={i} />
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

                // Calculate distance from center (normalized -1 to 1)
                const distanceRatio = (itemX - centerX) / (window.innerWidth / 2);
                const absDist = Math.abs(distanceRatio);

                // Globe effect math
                // 1. Scale decreases as it moves away from center
                const scale = 1.15 - (Math.pow(absDist, 1.8) * 0.45);
                // 2. Opacity decreases sharply to blend into darkness
                const opacity = 1.0 - (Math.pow(absDist, 1.25) * 1.5);

                // 3. Rotation around Y axis to give 3D depth
                const rotateY = distanceRatio * 25; // More dramatic 25deg rotation for globe feel

                // Apply styles directly to DOM for performance
                itemRef.current.style.transform = `scale(${Math.max(0.6, scale)}) perspective(1000px) rotateY(${-rotateY}deg)`;
                itemRef.current.style.opacity = `${Math.max(0, opacity)}`;
            }
            frameId = requestAnimationFrame(updateEffect);
        };

        frameId = requestAnimationFrame(updateEffect);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div
            ref={itemRef}
            className="flex items-center gap-2 mx-10 md:mx-16 will-change-transform"
        >
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>
            <span className="text-base md:text-lg font-bold tracking-tighter text-white/90">
                {name}
            </span>
        </div>
    );
}
