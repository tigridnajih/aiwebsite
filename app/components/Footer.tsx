'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Github, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
            {/* Top CTA Section with Blue Gradient */}
            <div className="container-custom relative mb-32 group">
                <div className="relative w-full rounded-[40px] bg-gradient-to-br from-[#0B1F5C] via-[#040816] to-black border border-white/10 p-12 md:p-24 overflow-hidden flex flex-col items-center text-center">

                    {/* Large Background Text */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center overflow-hidden pointer-events-none opacity-10 select-none">
                        <span className="text-[120px] md:text-[200px] font-bold text-white whitespace-nowrap -translate-y-1/2">
                            You need better systems.
                        </span>
                    </div>

                    {/* Blue Radial Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-[80px]" />

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
                            Your Business.<br />
                            Supercharged with AI.
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Save time, boost efficiency, and streamline your business with AI automation from Bima.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-bold text-lg transition-transform hover:scale-[1.05] active:scale-[0.98]"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Links Area */}
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-white/5">
                    {/* Logo & Tagline */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-2 mb-6 group/logo">
                            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 border border-white/20 shadow-inner group-hover/logo:border-blue-500/50 transition-colors">
                                <div className="h-4 w-4 rotate-45 rounded-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white uppercase">Bima</span>
                        </Link>
                        <p className="text-zinc-500 text-sm max-w-[240px] leading-relaxed">
                            Powering businesses with AI-driven automation.
                        </p>
                    </div>

                    {/* Explore Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">EXPLORE</h4>
                        <ul className="flex flex-col gap-4">
                            {['Services', 'Case Studies', 'Pricing', 'Blogs', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-400 text-sm hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">LEGAL</h4>
                        <ul className="flex flex-col gap-4">
                            {['Terms & Conditions', 'Privacy Policy', '404'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-400 text-sm hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright & Social Icons Area */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6 text-zinc-500">
                    <div className="flex flex-col gap-1 text-[13px]">
                        <p>© 2025 Bima. All rights reserved.</p>
                        <p>Made by <span className="text-white/80">Nee Say</span></p>
                    </div>

                    <div className="flex items-center gap-5">
                        {[Youtube, Facebook, Linkedin, Instagram, Twitter, Github].map((Icon, idx) => (
                            <Link key={idx} href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Icon className="w-5 h-5" strokeWidth={1.5} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
