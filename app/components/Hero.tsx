'use client';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden text-white bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
            />

            {/* Bottom gradient mask for smooth transition to next section */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

            {/* Top gradient mask for Navbar readability - Softened for better background visibility */}
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-10" />


            {/* Main Content Area - Flexible height to prevent overlap */}
            <div className="flex-1 flex items-center justify-center relative z-20 w-full py-12 md:py-20 lg:py-0">
                <div className="container-custom flex flex-col items-center justify-center text-center md:-translate-y-4">
                    {/* Content */}
                    <div className="flex flex-col gap-4 max-w-4xl items-center pt-4">
                        {/* Trusted Proof */}
                        <div className="animate-fade-in opacity-0 animate-delay-100 mb-2">
                            <span className="text-sm md:text-base font-bold tracking-tight text-white">
                                Supercharge your Business
                            </span>
                        </div>

                        <div className="animate-fade-in opacity-0">
                            {/* Headline */}
                            <h1 className="text-4xl md:text-7xl font-semibold font-heading tracking-tight leading-[1.1] text-white drop-shadow-2xl">
                                Intelligent Automation for <br />
                                Modern Businesses.
                            </h1>
                        </div>

                        <p className="text-sm md:text-base text-gray-300/80 max-w-xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 tracking-wide px-4">
                            Bringing AI automation to your fingertips & streamlining operational tasks for accelerated business growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300 pt-4 items-center">
                            <Link
                                href="#contact"
                                className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Book a Strategy Call
                                <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
            </div>

            {/* Integrated TrustLogos - Using flow instead of absolute to maintain spacing */}
            <div className="relative z-30 pb-12 md:pb-8 mt-auto">
                <TrustLogos />
            </div>
        </section>
    );
}
