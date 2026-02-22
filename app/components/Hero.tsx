'use client';
import Link from 'next/link';
import HeroParticles from './HeroParticles';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-16 pb-24 overflow-hidden text-white bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
            />
            <HeroParticles />

            {/* Bottom gradient mask for smooth transition to next section */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Top gradient mask for Navbar readability - Softened for better background visibility */}
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-10" />

            {/* Subtle radial glow to match screenshot's positioning of light */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)]" />

            <div className="container-custom relative z-20 flex flex-col items-center justify-center text-center -translate-y-4">
                {/* Content */}
                <div className="flex flex-col gap-4 max-w-4xl items-center pt-4">
                    {/* Badge */}
                    <div className="animate-fade-in opacity-0 animate-delay-100 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs md:text-sm text-gray-400 mb-1">
                        <span className="bg-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-tighter">New</span>
                        <span>Automated Lead Generation</span>
                    </div>

                    <div className="animate-fade-in opacity-0">
                        {/* Headline */}
                        <h1 className="text-4xl md:text-7xl font-semibold font-heading tracking-tight leading-[1.1] text-white drop-shadow-2xl">
                            Intelligent Automation for <br />
                            Modern Businesses.
                        </h1>
                    </div>

                    <p className="text-sm md:text-base text-gray-300/80 max-w-xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 tracking-wide">
                        Bringing AI automation to your fingertips & streamlining operational tasks for accelerated growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300 pt-4 items-center">
                        <Link
                            href="#contact"
                            className="group relative inline-flex h-12 items-center justify-center gap-2 px-8 rounded-full bg-gradient-to-r from-[#5A2DFF] to-[#2C0F66] text-white font-semibold text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 shadow-[0_8px_30px_rgba(90,45,255,0.35)] hover:shadow-[0_12px_40px_rgba(90,45,255,0.45)]"
                        >
                            {/* Inner Glow Overlay */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] pointer-events-none" />

                            <span className="relative z-10">Book a Strategy Call</span>
                            <svg className="relative z-10 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </Link>

                        <Link
                            href="#works"
                            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                        >
                            See How It Works
                        </Link>
                    </div>
                </div>
            </div>

            {/* Integrated TrustLogos at the bottom of the Hero section, overlaying the background */}
            <div className="absolute bottom-4 inset-x-0 z-30">
                <TrustLogos />
            </div>
        </section>
    );
}
