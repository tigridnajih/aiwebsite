'use client';
import Link from 'next/link';
import TrustLogos from './TrustLogos';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden text-slate-900 bg-white">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Bottom gradient mask for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center relative z-20 w-full py-12 md:py-20 lg:py-0">
                <div className="container-custom flex flex-col items-center justify-center text-center md:-translate-y-4">
                    {/* Content */}
                    <div className="flex flex-col gap-4 max-w-4xl items-center pt-4">
                        {/* Trusted Proof */}
                        <div className="animate-fade-in opacity-0 animate-delay-100 mb-2">
                            <span className="text-sm md:text-base font-bold tracking-tight text-accent bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10">
                                Supercharge your Business
                            </span>
                        </div>

                        <div className="animate-fade-in opacity-0">
                            {/* Headline */}
                            <h1 className="text-4xl md:text-7xl font-semibold font-heading tracking-tight leading-[1.1] text-slate-900 drop-shadow-sm">
                                Intelligent Automation for <br />
                                Modern Businesses.
                            </h1>
                        </div>

                        <p className="text-sm md:text-base text-slate-600 max-w-xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 tracking-wide px-4">
                            Bringing AI automation to your fingertips & streamlining operational tasks for accelerated business growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300 pt-4 items-center">
                            <Link
                                href="#contact"
                                className="group flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-white font-semibold text-sm transition-all hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
                            >
                                Book a Strategy Call
                                <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </Link>

                            <Link
                                href="#works"
                                className="px-8 py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-semibold text-sm transition-all duration-300 hover:bg-slate-200"
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
