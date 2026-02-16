'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const checkHeroRef = () => heroRef.current;

        let animationFrameId: number;
        let time = 0;

        const animate = () => {
            const el = checkHeroRef();
            if (!el) return;

            time += 0.02; // Faster time progression

            // Automatic drift calculation (faster and more complex)
            // Combined sine waves for organic, non-repetitive motion
            const driftX = Math.sin(time * 0.5) * 200 + Math.cos(time * 0.2) * 100;
            const driftY = Math.cos(time * 0.3) * 200 + Math.sin(time * 0.1) * 100;

            // Current mouse position (stored in ref to avoid re-renders)
            // We need a ref for mouse position
            const currentMouseX = mouseRef.current.x;
            const currentMouseY = mouseRef.current.y;

            // Combine drift and mouse interaction
            el.style.setProperty('--posX', `${currentMouseX + driftX}`);
            el.style.setProperty('--posY', `${currentMouseY + driftY}`);

            animationFrameId = requestAnimationFrame(animate);
        };

        const handlePointerMove = (e: PointerEvent) => {
            const el = checkHeroRef();
            if (!el) return;
            const { clientX: x, clientY: y } = e;
            const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
            mouseRef.current = { x: x - l - w / 2, y: y - t - h / 2 };
        };

        window.addEventListener('pointermove', handlePointerMove);
        // Start animation loop
        animate();

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero-gradient-mesh relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden text-white"
        >
            {/* Vignette for text readability */}
            <div className="absolute inset-0 z-0 bg-black/20 pointer-events-none" />

            {/* Deep Navy Blue Semi-Circle Gradient */}
            <div
                className="absolute top-0 left-0 right-0 h-[600px] z-[0] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 80% at 50% 0%, rgba(10, 25, 60, 0.8) 0%, transparent 70%)',
                    mixBlendMode: 'screen' // Using screen to ensure the blue glow is visible on dark bg
                }}
            />


            {/* Grid Overlay - Fades from top center */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.03) 4px, transparent 4px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 4px, transparent 4px)
                    `,
                    backgroundSize: '150px 150px',
                    maskImage: 'radial-gradient(ellipse 60% 70% at 50% 0%, black 10%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 0%, black 10%, transparent 80%)'
                }}
            />

            <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-16 items-center">

                {/* Left Side Content */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    {/* Badge */}
                    <div className="animate-fade-in opacity-0">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-widest text-blue-200 uppercase backdrop-blur-md shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60A5FA]" />
                            Neural System v4.0 Active
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 mt-6 text-white drop-shadow-2xl">
                            Forgings the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                                Future Intelligence
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-blue-100/80 max-w-xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 font-light tracking-wide shadow-black">
                        Deploy autonomous AI architectures that evolve with your business. Processing logic, scaling revenue, and eliminating operational friction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300 pt-4">
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 rounded-lg bg-blue-600 overflow-hidden font-semibold text-white tracking-wide shadow-lg transition-all hover:shadow-blue-500/50 hover:scale-105"
                        >
                            <span className="relative z-10">Initialize System</span>
                            {/* Button Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="#works"
                            className="px-8 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-gray-200 hover:text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                        >
                            Explore Documentation
                        </Link>
                    </div>

                    {/* Stats / Trust */}
                    <div className="flex items-center gap-6 animate-fade-in opacity-0 animate-delay-300 mt-4 border-t border-white/10 pt-6">
                        <div>
                            <div className="text-2xl font-bold text-white">99.9%</div>
                            <div className="text-xs text-blue-200 uppercase tracking-widest">Uptime</div>
                        </div>
                        <div className="w-px h-8 bg-white/20" />
                        <div>
                            <div className="text-2xl font-bold text-blue-300">50ms</div>
                            <div className="text-xs text-blue-200 uppercase tracking-widest">Latency</div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Holographic HUD */}
                <div className="lg:col-span-5 relative animate-fade-in opacity-0 animate-delay-300 perspective-1000">
                    {/* Glass Container */}
                    <div className="relative w-full aspect-[4/5] md:aspect-square bg-white/10 rounded-2xl border border-white/20 backdrop-blur-xl p-1 shadow-2xl overflow-hidden group">

                        {/* Scanning Laser Line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-400/50 shadow-[0_0_20px_#60A5FA] animate-scan z-20 pointer-events-none" />

                        {/* Internal UI Shell */}
                        <div className="absolute inset-2 rounded-xl border border-dashed border-white/10 flex flex-col p-6 bg-black/20">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs font-mono text-gray-300">LIVE_FEED</span>
                                </div>
                                <span className="text-xs font-mono text-blue-300">CPU: 32%</span>
                            </div>

                            {/* Dynamic Nodes Visualization - Empty for now */}
                            <div className="flex-1 relative w-full h-full flex items-center justify-center overflow-hidden">
                                {/* Content Removed */}
                            </div>

                            {/* Code Terminal */}
                            <div className="mt-auto h-24 bg-black/20 rounded-lg p-3 font-mono text-[10px] text-green-300 overflow-hidden border border-white/5">
                                <div className="flex flex-col gap-1 opacity-70">
                                    <span>{`> initializing_core_protocols...`}</span>
                                    <span>{`> connection_established: secure`}</span>
                                    <span>{`> optimizing_neural_paths [||||||||||] 100%`}</span>
                                    <span className="animate-pulse">{`> awaiting_user_input_`}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* Deep U-Shaped Vignette / Spotlight Effect */}
            <div
                className="absolute inset-0 z-[5] pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 90% at 50% 0%, transparent 35%, rgba(0,0,0,0.5) 75%, #000000 100%),
                        linear-gradient(to top, #000000 0%, transparent 30%)
                    `
                }}
            />
        </section>
    );
}
