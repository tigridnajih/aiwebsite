'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrolled, setScrolled] = useState(0);

    // Track mouse movement for subtle parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10
                y: (e.clientY / window.innerHeight - 0.5) * 20  // -10 to 10
            });
        };

        const handleScroll = () => {
            setScrolled(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-hero-base text-white perspective-1000">

            {/* 1. THE MATRIX: 3D Grid Floor & Ceiling */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    transform: `perspective(1000px) rotateX(60deg) translateY(${scrolled * 0.5}px) translateZ(-200px)`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Floor Grid */}
                <div className="absolute inset-[-100%] bg-[linear-gradient(to_right,rgba(30,79,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,79,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-flow opacity-40 will-change-transform" />

                {/* Horizontal Horizon Glow */}
                <div className="absolute top-[40%] left-[-50%] right-[-50%] h-[200px] bg-gradient-to-b from-hero-neon/0 via-hero-glow/50 to-hero-neon/0 blur-[100px]" />
            </div>

            {/* 2. THE CORE: Interactive Energy Orb */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                style={{ transform: `translate(calc(-50% + ${mousePosition.x * -2}px), calc(-50% + ${mousePosition.y * -2}px))` }}
            >
                {/* Core Nucleus */}
                <div className="w-[400px] h-[400px] rounded-full bg-hero-glow blur-[80px] opacity-60 animate-pulse" />
                {/* Inner Brightness */}
                <div className="absolute inset-0 w-[200px] h-[200px] m-auto rounded-full bg-blue-500 blur-[40px] opacity-40 mix-blend-screen animate-breathe-slow" />
                {/* Outer Field */}
                <div className="absolute -inset-[200px] rounded-full border border-hero-neon/5 opacity-20 animate-spin-slow" />
                <div className="absolute -inset-[300px] rounded-full border border-dashed border-hero-flow/10 opacity-20 animate-spin-reverse-slow" />
            </div>

            {/* Vignette & Noise for Texture */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(transparent_20%,#020408_100%)] pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-16 items-center">

                {/* Left Side Content */}
                <div
                    className="lg:col-span-7 flex flex-col gap-8 transform transition-transform duration-100 ease-out"
                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                >
                    {/* Badge */}
                    <div className="animate-fade-in opacity-0">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hero-glow/30 border border-hero-neon/20 text-xs font-medium tracking-widest text-hero-neon uppercase backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-hero-neon animate-pulse shadow-[0_0_10px_#00F0FF]" />
                            Neural System v4.0 Active
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 mt-6 text-white drop-shadow-2xl">
                            Forging the <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-hero-neon to-blue-500">
                                Future Intelligence
                                {/* Glitch/Scanline effect overlay could go here */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[50%] animate-[scan_3s_linear_infinite] pointer-events-none h-full skew-x-12 opacity-30" />
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-blue-100/70 max-w-xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 font-light tracking-wide">
                        Deploy autonomous AI architectures that evolve with your business. Processing logic, scaling revenue, and eliminating operational friction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300 pt-4">
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 rounded-lg bg-blue-600 overflow-hidden font-semibold text-white tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-105"
                        >
                            <span className="relative z-10">Initialize System</span>
                            {/* Button Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="#works"
                            className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 hover:text-white hover:border-hero-neon/50 font-medium transition-all duration-300 hover:bg-white/10"
                        >
                            Explore Documentation
                        </Link>
                    </div>

                    {/* Stats / Trust */}
                    <div className="flex items-center gap-6 animate-fade-in opacity-0 animate-delay-300 mt-4 border-t border-white/5 pt-6">
                        <div>
                            <div className="text-2xl font-bold text-white">99.9%</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Uptime</div>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                            <div className="text-2xl font-bold text-hero-neon">50ms</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">Latency</div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Holographic HUD */}
                <div
                    className="lg:col-span-5 relative animate-fade-in opacity-0 animate-delay-300 perspective-1000"
                    style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
                >
                    {/* Glass Container */}
                    <div className="relative w-full aspect-[4/5] md:aspect-square bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl p-1 shadow-2xl overflow-hidden group">

                        {/* Scanning Laser Line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-hero-neon/50 shadow-[0_0_20px_#00F0FF] animate-scan z-20 pointer-events-none" />

                        {/* Internal UI Shell */}
                        <div className="absolute inset-2 rounded-xl border border-dashed border-white/10 flex flex-col p-6 bg-[#020408]/50">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-xs font-mono text-gray-400">LIVE_FEED</span>
                                </div>
                                <span className="text-xs font-mono text-hero-neon">CPU: 32%</span>
                            </div>

                            {/* Dynamic Nodes Visualization */}
                            <div className="flex-1 relative">
                                {/* Center Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-hero-neon/30 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                                    <div className="w-16 h-16 rounded-full bg-hero-neon/10 border border-hero-neon flex items-center justify-center">
                                        <svg className="w-8 h-8 text-hero-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                    </div>
                                </div>

                                {/* Satellites */}
                                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3B82F6]" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#A855F7]" />
                                </div>
                            </div>

                            {/* Code Terminal */}
                            <div className="mt-auto h-24 bg-black/40 rounded-lg p-3 font-mono text-[10px] text-green-400 overflow-hidden border border-white/5">
                                <div className="flex flex-col gap-1 opacity-70">
                                    <span>{`> initializing_core_protocols...`}</span>
                                    <span>{`> connection_established: secure`}</span>
                                    <span>{`> optimizing_neural_paths [||||||||||] 100%`}</span>
                                    <span className="animate-pulse">{`> awaiting_user_input_`}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Floating Decorative Cubes */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 border border-hero-neon/20 rounded-xl animate-float-tech backdrop-blur-sm" />
                    <div className="absolute -bottom-5 -left-5 w-16 h-16 border border-purple-500/20 rounded-xl animate-float-tech animation-delay-200 backdrop-blur-sm" />
                </div>

            </div>
        </section>
    );
}
