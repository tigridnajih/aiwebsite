'use client';
import Link from 'next/link';
import Image from 'next/image';
import bgAnimated from '../herosection_assets/background_animated.gif';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden text-white">

            {/* Background GIF */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgAnimated}
                    alt="Background Animation"
                    layout="fill"
                    objectFit="cover"
                    priority
                    unoptimized
                    className="opacity-80" // Slight transparency to ensure text readability if needed
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

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

                            {/* Dynamic Nodes Visualization - Shader Cube */}
                            <div className="flex-1 relative w-full h-full flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full">
                                    <ShaderCube />
                                </div>
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
        </section>
    );
}
