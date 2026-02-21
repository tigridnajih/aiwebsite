'use client';
import Link from 'next/link';
import ShaderBackground from './ShaderBackground';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden text-white bg-black">
            <ShaderBackground />

            <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">

                {/* Content */}
                <div className="flex flex-col gap-8 max-w-4xl items-center">
                    {/* Badge */}
                    <div className="animate-fade-in opacity-0">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-widest text-blue-200 uppercase backdrop-blur-md shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60A5FA]" />
                            Neural System v4.0 Active
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-8xl font-extrabold font-heading tracking-tight leading-[1.1] mb-4 mt-6 text-white drop-shadow-2xl">
                            Rebuilding Businesses <br />
                            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#fff_10%,#8B5CF6_40%,#EC4899_70%,#F59E0B_100%)] text-6xl md:text-8xl">
                                into Intelligent Systems
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-2xl text-blue-100/80 max-w-2xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 font-light tracking-wide shadow-black">
                        Deploy autonomous AI architectures that evolve with your business. Processing logic, scaling revenue, and eliminating operational friction.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 animate-fade-in opacity-0 animate-delay-300 pt-4 items-center">
                        <Link
                            href="#contact"
                            className="group relative px-10 py-5 rounded-xl bg-blue-600 overflow-hidden font-semibold text-white text-lg tracking-wide shadow-lg transition-all hover:shadow-blue-500/50 hover:scale-105"
                        >
                            <span className="relative z-10">Initialize System</span>
                            {/* Button Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="#works"
                            className="px-10 py-5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-gray-200 hover:text-white font-medium text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                        >
                            Explore Documentation
                        </Link>
                    </div>

                    {/* Stats / Trust */}
                    <div className="flex items-center gap-8 animate-fade-in opacity-0 animate-delay-300 mt-8 border-t border-white/10 pt-8 w-full justify-center">
                        <div>
                            <div className="text-3xl font-bold text-white">99.9%</div>
                            <div className="text-xs text-blue-200 uppercase tracking-widest mt-1">Uptime</div>
                        </div>
                        <div className="w-px h-10 bg-white/20" />
                        <div>
                            <div className="text-3xl font-bold text-blue-300">50ms</div>
                            <div className="text-xs text-blue-200 uppercase tracking-widest mt-1">Latency</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
