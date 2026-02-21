'use client';
import Link from 'next/link';
import ShaderBackground from './ShaderBackground';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden text-white bg-black">
            <ShaderBackground />

            <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">
                {/* Content */}
                <div className="flex flex-col gap-10 max-w-4xl items-center">
                    <div className="animate-fade-in opacity-0">
                        {/* Headline */}
                        <h1 className="text-5xl md:text-[82px] font-semibold font-heading tracking-tight leading-[1.05] mb-6 mt-8 text-white drop-shadow-2xl">
                            Engineering Businesses <br />
                            into Intelligent Systems
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-blue-100/60 max-w-3xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 tracking-wide">
                        <span className="text-white">A performance-focused AI automation partner</span> reducing operational drag, automating workflows, and accelerating growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300 pt-2 items-center">
                        <Link
                            href="#contact"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white font-semibold text-black text-lg transition-all hover:scale-105"
                        >
                            Book a Free Demo
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="right-arrow-placeholder" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link
                            href="#works"
                            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-gray-200 hover:text-white font-medium text-lg transition-all hover:bg-white/20"
                        >
                            See How It Works
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
