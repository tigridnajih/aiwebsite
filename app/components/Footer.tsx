'use client';

import Link from 'next/link';
import { Youtube, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
            <div className="container-custom">
                {/* CTA BOX SECTION */}
                <div className="relative w-full rounded-[48px] bg-[#020617] border border-white/5 overflow-hidden mb-24 min-h-[500px] flex items-center justify-center">
                    {/* Oversized Background Text */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden opacity-[0.03] flex items-center justify-center">
                        <span className="text-[280px] font-bold text-white whitespace-nowrap tracking-tighter transform scale-110">
                            You need better systems. You need
                        </span>
                    </div>

                    {/* Blue Radial Glow - Replaces Green */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_75%)]" />

                    {/* Content Area */}
                    <div className="relative z-10 flex flex-col items-center text-center px-6">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-white">
                            Your Business.<br />
                            Supercharged with AI.
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Save time, boost efficiency, and streamline<br className="hidden md:block" />
                            your business with AI automation from Bima.
                        </p>
                        <Link
                            href="#contact"
                            className="bg-white text-black px-10 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>

                {/* LINKS SECTION */}
                <div className="pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
                    {/* Brand Meta */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-sm bg-black/20" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">Bima</span>
                        </Link>
                        <p className="text-zinc-500 text-sm max-w-[240px] leading-relaxed">
                            Powering businesses with AI-driven automation.
                        </p>
                    </div>

                    {/* Explore Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-white mb-8 opacity-60">EXPLORE</h4>
                        <ul className="flex flex-col gap-5">
                            {['Services', 'Case Studies', 'Pricing', 'Blogs', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-400 text-[14px] hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="md:col-span-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-white mb-8 opacity-60">LEGAL</h4>
                        <ul className="flex flex-col gap-5">
                            {['Terms & Conditions', 'Privacy Policy', '404'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-400 text-[14px] hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-1 text-[13px] text-zinc-500 font-medium">
                        <p>© 2025 Bima. All rights reserved.</p>
                        <p>Made by <span className="text-white font-bold">Nee Say</span></p>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* YouTube */}
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <Youtube className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </Link>
                        {/* Facebook */}
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <Facebook className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </Link>
                        {/* LinkedIn */}
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </Link>
                        {/* Instagram */}
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </Link>
                        {/* X (Twitter) SVG */}
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                        {/* Bluesky (Butterfly) SVG */}
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 10.8c-1.32-2.4-5.16-5.4-7.8-5.4-3.6 0-3.6 3.6-1.8 5.4 1.8 1.8 4.2 1.8 6 1.2-1.8.6-4.2.6-6 2.4-1.8 1.8-1.8 5.4 1.8 5.4 2.64 0 6.48-3 7.8-5.4 1.32 2.4 5.16 5.4 7.8 5.4 3.6 0 3.6-3.6 1.8-5.4-1.8-1.8-4.2-1.8-6-2.4 1.8.6 4.2.6 6-1.2 1.8-1.8 1.8-5.4-1.8-5.4-2.64 0-6.48 3-7.8 5.4z" />
                            </svg>
                        </Link>
                        {/* Threads SVG */}
                        <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.886 11.284c-.057-.5-.224-.871-.5-1.114-.275-.24-.627-.361-1.054-.361-.413 0-.756.115-1.028.344s-.442.548-.511.956h3.093zm-3.14 2.768c.071.424.254.763.548 1.018.293.255.65.383 1.07.383s.766-.118 1.055-.353.486-.549.589-.94h3.142c-.172 1.27-.698 2.277-1.577 3.019S14.59 18.25 13.314 18.25c-1.393 0-2.54-.428-3.442-1.285-1-1-1.486-2.316-1.486-4.09 0-1.782.494-3.13 1.482-4.043.916-.843 2.062-1.264 3.438-1.264 1.385 0 2.503.418 3.352 1.255.848.837 1.296 1.956 1.343 3.358h-6.255zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12m-6.035 0c0-1.238-.288-2.288-.865-3.15-.576-.862-1.422-1.527-2.538-1.996-1.116-.469-2.352-.703-3.708-.703s-2.593.234-3.709.703c-1.116.469-1.962 1.134-2.538 1.996-.577.862-.865 1.912-.865 3.15s.288 2.288.865 3.15c.576.862 1.422 1.527 2.538 1.996s2.352.703 3.709.703 2.592-.234 3.708-.703c1.116-.469 1.962-1.134 2.538-1.996s.865-1.912.865-3.15" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
