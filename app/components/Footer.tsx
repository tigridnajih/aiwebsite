'use client';

import Link from 'next/link';
import { Youtube, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-[#050914] text-white pt-6 pb-12 border-t border-white/[0.03]">
            {/* 🌌 Atmospheric Background System */}
            <div className="absolute inset-0 z-0">
                {/* 🌌 Base Layer: Very dark navy base */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050914] to-[#070C1F]" />

                {/* 🌊 Primary Blue Flow: Large radial glow from the right */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 80% 40%, rgba(40, 90, 255, 0.35) 0%, rgba(20, 45, 140, 0.25) 30%, transparent 65%)',
                        filter: 'blur(40px)'
                    }}
                />

                {/* 🌑 Secondary Depth: Subtle darker radial from bottom-left */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 20% 90%, rgba(10, 20, 60, 0.5) 0%, transparent 60%)',
                        filter: 'blur(30px)'
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
                    <div className="flex whitespace-nowrap overflow-hidden py-10">
                        <div className="flex animate-infinite-scroll-slow-extremely pause-on-hover">
                            {[1, 2].map((group) => (
                                <h1 key={group} className="text-[120px] md:text-[220px] font-bold tracking-tighter text-[#F2F5FF] opacity-90 px-10 leading-none select-none">
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
                <div className="container-custom border-t border-[rgba(255,255,255,0.06)] pt-16 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
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
                        <div className="flex items-center gap-6">
                            {[
                                { Icon: Youtube, href: "#" },
                                { Icon: Facebook, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Instagram, href: "#" }
                            ].map((social, idx) => (
                                <Link key={idx} href={social.href} className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                    <social.Icon size={18} strokeWidth={1.5} />
                                </Link>
                            ))}
                            {/* X (Twitter) */}
                            <Link href="#" className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                            {/* Bluesky */}
                            <Link href="#" className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 10.8c-1.32-2.4-5.16-5.4-7.8-5.4-3.6 0-3.6 3.6-1.8 5.4 1.8 1.8 4.2 1.8 6 1.2-1.8.6-4.2.6-6 2.4-1.8 1.8-1.8 5.4 1.8 5.4 2.64 0 6.48-3 7.8-5.4 1.32 2.4 5.16 5.4 7.8 5.4 3.6 0 3.6-3.6 1.8-5.4-1.8-1.8-4.2-1.8-6-2.4 1.8.6 4.2.6 6-1.2 1.8-1.8 1.8-5.4-1.8-5.4-2.64 0-6.48 3-7.8 5.4z" />
                                </svg>
                            </Link>
                            {/* Threads */}
                            <Link href="#" className="text-[rgba(200,210,255,0.75)] hover:text-white transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.886 11.284c-.057-.5-.224-.871-.5-1.114-.275-.24-.627-.361-1.054-.361-.413 0-.756.115-1.028.344s-.442.548-.511.956h3.093zm-3.14 2.768c.071.424.254.763.548 1.018.293.255.65.383 1.07.383s.766-.118 1.055-.353.486-.549.589-.94h3.142c-.172 1.27-.698 2.277-1.577 3.019S14.59 18.25 13.314 18.25c-1.393 0-2.54-.428-3.442-1.285-1-1-1.486-2.316-1.486-4.09 0-1.782.494-3.13 1.482-4.043.916-.843 2.062-1.264 3.438-1.264 1.385 0 2.503.418 3.352 1.255.848.837 1.296 1.956 1.343 3.358h-6.255zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12m-6.035 0c0-1.238-.288-2.288-.865-3.15-.576-.862-1.422-1.527-2.538-1.996-1.116-.469-2.352-.703-3.708-.703s-2.593.234-3.709.703c-1.116.469-1.962 1.134-2.538 1.996-.577.862-.865 1.912-.865 3.15s.288 2.288.865 3.15c.576.862 1.422 1.527 2.538 1.996s2.352.703 3.709.703 2.592-.234 3.708-.703c1.116-.469 1.962-1.134 2.538-1.996s.865-1.912.865-3.15" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
