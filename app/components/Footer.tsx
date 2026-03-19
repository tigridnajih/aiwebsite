'use client';

import Link from 'next/link';
import { Youtube, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
<<<<<<< HEAD
        <footer className="relative w-full overflow-hidden bg-white text-slate-900 pt-16 pb-12 border-t border-slate-100">
            <div className="container-custom">
                {/* 🎭 2. Large Moving Text Section */}
                <div
                    className="relative w-full mb-24 overflow-hidden"
=======
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
>>>>>>> 454c6f9e9e7aa5f1dd7b3964fa48f9c3385bea78
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                    }}
                >
<<<<<<< HEAD
                    <div className="flex whitespace-nowrap overflow-hidden py-4">
                        <div className="flex animate-infinite-scroll-slow-extremely">
=======
                    <div className="flex whitespace-nowrap overflow-hidden pt-4 pb-12">
                        <div className="flex w-max animate-infinite-scroll-slow-extremely pause-on-hover">
>>>>>>> 454c6f9e9e7aa5f1dd7b3964fa48f9c3385bea78
                            {[1, 2].map((group) => (
                                <h1 key={group} className="text-[65px] md:text-[110px] font-bold tracking-tighter text-slate-100 px-10 leading-none select-none">
                                    Better systems. Fewer people. Higher margins.
                                </h1>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✨ 4. Main CTA Block */}
<<<<<<< HEAD
                <div className="flex flex-col items-center text-center pb-32">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight max-w-2xl">
=======
                <div className="container-custom flex flex-col items-center text-center pt-24 pb-32">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F2F5FF] mb-6 tracking-tight leading-tight max-w-2xl">
>>>>>>> 454c6f9e9e7aa5f1dd7b3964fa48f9c3385bea78
                        Your Business.<br />
                        Supercharged with AI.
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium">
                        Save time, boost efficiency, and streamline your business with AI automation from Tigrid.
                    </p>
                    <Link
                        href="#contact"
                        className="px-10 py-4 rounded-full bg-accent text-white font-bold text-sm transition-all hover:scale-[1.05] hover:shadow-xl shadow-accent/20 active:scale-[0.98]"
                    >
                        Book a Strategy Call
                    </Link>
                </div>

                {/* 🧩 5. Footer Content Grid */}
                <div className="border-t border-slate-100 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8">
                        {/* Brand Column */}
                        <div className="md:col-span-5">
                            <Link href="/" className="flex items-center gap-2 mb-6 group/logo">
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 group-hover/logo:border-accent/40 transition-colors">
                                    <div className="h-4 w-4 rotate-45 rounded-[2px] bg-accent shadow-sm" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-slate-900 uppercase">Tigrid</span>
                            </Link>
                            <p className="text-slate-500 text-sm max-w-[240px] leading-relaxed font-medium">
                                Powering modern businesses with AI-driven automation.
                            </p>
                        </div>

                        {/* Explore Links */}
                        <div className="md:col-span-3">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">EXPLORE</h4>
                            <ul className="flex flex-col gap-4">
                                {['Services', 'Case Studies', 'Pricing', 'Blogs', 'About Us', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-600 text-[14px] font-semibold hover:text-accent transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="md:col-span-4">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">LEGAL</h4>
                            <ul className="flex flex-col gap-4">
                                {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-600 text-[14px] font-semibold hover:text-accent transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-50 text-[13px] text-slate-400 font-medium">
                        <div>
                            <p>© 2026 Tigrid. All rights reserved.</p>
                        </div>

                        {/* Social Icons Row */}
                        <div className="flex items-center gap-7">
                            <Link href="#" className="text-slate-400 hover:text-accent transition-colors">
                                <Instagram size={20} strokeWidth={2} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-accent transition-colors">
                                <Linkedin size={20} strokeWidth={2} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-accent transition-colors">
                                <Youtube size={20} strokeWidth={2} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
