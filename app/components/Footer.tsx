'use client';

import Link from 'next/link';
import { Youtube, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-black text-white pt-0 pb-2 border-t border-white/[0.03]">
            {/* 🌌 Atmospheric Background System */}
            <div className="absolute inset-0 z-0">
                {/* 🌊 Linear Blue Gradient: #385BFF top to black bottom */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, #385BFF 0%, #000000 100%)'
                    }}
                />

                {/* 🌠 Atmospheric Dust: Extremely low-opacity floating particles */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-blue-100 rounded-full animate-pulse"
                            style={{
                                width: Math.random() * 1.5 + 'px',
                                height: Math.random() * 1.5 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                animationDuration: (Math.random() * 4 + 3) + 's',
                                opacity: Math.random() * 0.3 + 0.1
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10">
                {/* 🧠 2. Large Moving Text Section + 🎭 3. Edge Masking */}
                <div
                    className="relative w-full pt-0 overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                    }}
                >
                    <div className="flex whitespace-nowrap overflow-hidden pt-4 pb-12">
                        <div className="flex w-max animate-infinite-scroll-slow-extremely pause-on-hover">
                            {[1, 2].map((group) => (
                                <h1 key={group} className="text-[65px] md:text-[110px] font-medium tracking-tighter text-[#F2F5FF] opacity-90 px-10 leading-none select-none">
                                    You need better systems. You don&apos;t need more people.
                                </h1>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✨ 4. Main CTA Block */}
                <div className="container-custom flex flex-col items-center text-center pb-32">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F2F5FF] mb-6 tracking-tight leading-tight max-w-2xl">
                        Your Business.<br />
                        Supercharged with AI.
                    </h2>
                    <p className="text-[rgba(200,210,255,0.75)] text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                        Save time, boost efficiency, and streamline your business with AI automation from Bima.
                    </p>
                    <Link
                        href="#contact"
                        className="px-10 py-3.5 rounded-full bg-white text-[#0A0F25] font-bold text-sm transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(60,110,255,0.3)] active:scale-[0.98]"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* 🧩 5. Footer Content Grid */}
                <div className="container-custom border-t border-[rgba(255,255,255,0.06)] pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8">
                        {/* Brand Column */}
                        <div className="md:col-span-5">
                            <Link href="/" className="flex items-center gap-2 mb-6 group/logo">
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-600/30 group-hover/logo:border-[#2F5BFF]/60 transition-colors">
                                    <div className="h-4 w-4 rotate-45 rounded-[2px] bg-[#2F5BFF] shadow-[0_0_15px_rgba(47,91,255,0.5)]" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-[#F2F5FF] uppercase">Bima</span>
                            </Link>
                            <p className="text-[rgba(200,210,255,0.75)] text-sm max-w-[240px] leading-relaxed">
                                Powering businesses with AI-driven automation.
                            </p>
                        </div>

                        {/* Explore Links */}
                        <div className="md:col-span-3">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F2F5FF] mb-8 opacity-60">EXPLORE</h4>
                            <ul className="flex flex-col gap-5">
                                {['Services', 'Case Studies', 'Pricing', 'Blogs', 'About Us', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-[rgba(200,210,255,0.75)] text-[14px] hover:text-[#FFFFFF] transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="md:col-span-4">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F2F5FF] mb-8 opacity-60">LEGAL</h4>
                            <ul className="flex flex-col gap-5">
                                {['Terms & Conditions', 'Privacy Policy', '404'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-[rgba(200,210,255,0.75)] text-[14px] hover:text-[#FFFFFF] transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-[rgba(200,210,255,0.5)]">
                        <div>
                            <p>© 2025 Bima. All rights reserved. Made by <span className="text-white font-bold italic">Nee Say</span></p>
                        </div>

                        {/* Social Icons Row */}
                        <div className="flex items-center gap-7">
                            {/* Instagram */}
                            <Link href="#" className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                <Instagram size={22} strokeWidth={1.5} />
                            </Link>

                            {/* X (Twitter) */}
                            <Link href="#" className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>

                            {/* LinkedIn */}
                            <Link href="#" className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                <Linkedin size={22} strokeWidth={1.5} />
                            </Link>

                            {/* X (Twitter) again as requested */}
                            <Link href="#" className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
