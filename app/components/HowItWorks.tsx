'use client';

import React from 'react';
import { Mail, Calendar, Play, List, NotebookPen, FileText, Check, Share2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Custom Brand Icons for Automation Card - Optimized for White Icons on Orbs
const BrandIcons = {
    ChatGPT: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M22.28 12c0-2.048-1.356-3.846-3.387-4.192-.462-.145-1.064-.247-1.383-.357A10.852 10.852 0 0015.5 1.054c-.653-.406-1.464-.216-1.896.425-.262.388-.415.748-.485 1.15-.175.986-.145 2.103-.145 3.102 0 .425.035.85.08 1.258-2.614-.23-5.23-.23-7.844 0a17.228 17.228 0 00.08-1.258c0-.999.03-2.116-.145-3.102-.07-.402-.223-.762-.485-1.15-.432-.641-1.243-.831-1.896-.425A10.859 10.859 0 001.644 7.451c-.319.11-.921.212-1.383.357C-1.744 8.154-3.1 9.952-3.1 12c0 2.048 1.356 3.846 3.387 4.192.462.145 1.064.247 1.383.357.348 1.574.969 3.016 1.856 4.394.653.406 1.464.216 1.896-.425.262-.388.415-.748.485-1.15.175-.986.145-2.103.145-3.102 0-.425-.035-.85-.08-1.258 2.614.23 5.23.23 7.844 0-.045.408-.08.833-.08 1.258 0 .999-.03 2.116.145 3.102.07.402.223.762.485 1.15.432.641 1.243.831 1.896.425.887-1.378 1.508-2.82 1.856-4.394.319-.11.921-.212 1.383-.357 2.031-.346 3.387-2.144 3.387-4.192zM12 13.125a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z" />
        </svg>
    ),
    Gemini: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
        </svg>
    ),
    Airtable: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12.5 3.5L3.5 8v8l9 4.5 9-4.5V8l-9-4.5zM12.5 17l-6-3V9l6 3 6-3v5l-6 3z" />
        </svg>
    ),
    Figma: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2C9.5 2 7.5 4 7.5 6.5S9.5 11 12 11h2.5c2.5 0 4.5-2 4.5-4.5S17 2 14.5 2H12zm0 11C9.5 13 7.5 15 7.5 17.5S9.5 22 12 22s4.5-2 4.5-4.5S14.5 13 12 13zM7.5 12c0 2.5 2 4.5 4.5 4.5V7.5C9.5 7.5 7.5 9.5 7.5 12z" />
        </svg>
    ),
    Notion: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M4 3h16c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm2 4v10h2V7H6zm5 0v10h2V7h-2zm5 0v10h2V7h-2z" />
        </svg>
    ),
    Zapier: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2l1.6 6.3 6.4 1.7-5.5 4.1 2.3 6.9-5.8-4.2-5.8 4.2 2.3-6.9-5.5-4.1 6.4-1.7z" />
        </svg>
    ),
    n8n: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="19" r="2" />
            <circle cx="5" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
            <path d="M12 7v2M12 15v2M7 12h2M15 12h2" stroke="currentColor" strokeWidth="1" />
        </svg>
    )
};

interface CardProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    badgeGlow?: string;
}

const Card = ({ number, title, description, children, className = "", style, badgeGlow }: CardProps) => (
    <div
        className={`relative group p-8 rounded-[32px] bg-black border border-white/5 transition-all duration-700 flex flex-col items-start min-h-[520px] overflow-hidden ${className}`}
        style={style}
    >
        {/* Top-Left Medium Glow */}
        <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background: 'radial-gradient(circle at top left, rgba(44, 78, 220, 0.2), transparent 70%)'
            }}
        />

        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 rounded-[32px] z-[1]" />

        {/* Step Badge */}
        <div
            className="relative z-10 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-xl mb-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={badgeGlow ? { boxShadow: badgeGlow ? badgeGlow : undefined } : {}}
        >
            {number}
        </div>

        <h3 className="relative z-10 text-[32px] font-bold text-[#F5F7FF] mb-5 tracking-tight transition-colors drop-shadow-md">
            {title}
        </h3>

        <p className="relative z-10 text-zinc-400 text-lg leading-[1.8] mb-auto max-w-[95%]">
            {description}
        </p>

        {/* Animation Container */}
        <div className="relative z-10 w-full h-72 mt-8 flex items-center justify-center">
            {children}
        </div>
    </div>
);

export default function HowItWorks() {
    const automationIcons = [
        { Icon: BrandIcons.ChatGPT, name: 'ChatGPT' },
        { Icon: BrandIcons.Gemini, name: 'Gemini' },
        { Icon: BrandIcons.Airtable, name: 'Airtable' },
        { Icon: BrandIcons.Figma, name: 'Figma' },
        { Icon: BrandIcons.Notion, name: 'Notion' },
        { Icon: BrandIcons.Zapier, name: 'Zapier' },
        { Icon: BrandIcons.n8n, name: 'n8n' },
    ];

    const orbGradient = {
        background: 'radial-gradient(circle, #4E7BFF 0%, #2C4EDC 50%, #0C1B4F 100%)'
    };

    return (
        <section id="how-it-works" className="py-24 bg-black overflow-hidden">
            <div className="container-custom">
                <SectionHeader
                    badge="Process"
                    title="How it works"
                    description="Our seamless process to take your agency to the next level with custom AI solutions."
                />

                <div className="grid lg:grid-cols-3 gap-10 mt-12 pb-20">
                    {/* Card 1: Share Your Workflow - GRADIENT ORBS */}
                    <Card
                        number="1"
                        title="Share Your Workflow"
                        description="From lead gen to client onboarding, just share your workflow and the tools you use."
                        className="border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                    >
                        <div className="relative w-full h-full flex items-center justify-center z-[2]">
                            <div className="relative w-64 h-64 animate-spin-slow-extremely">
                                {[
                                    { Icon: Mail, angle: 0, dist: 110 },
                                    { Icon: List, angle: 72, dist: 110 },
                                    { Icon: Calendar, angle: 144, dist: 110 },
                                    { Icon: NotebookPen, angle: 216, dist: 110 },
                                    { Icon: FileText, angle: 288, dist: 110 }
                                ].map((item, i) => (
                                    <div key={i} className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 transform"
                                        style={{ transform: `translate(calc(-50% + ${Math.cos(item.angle * Math.PI / 180) * item.dist}px), calc(-50% + ${Math.sin(item.angle * Math.PI / 180) * item.dist}px))` }}>
                                        <div className="relative w-full h-full rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(44,78,220,0.4),inset_0_4px_12px_rgba(255,255,255,0.2)] border border-white/10 backdrop-blur-sm" style={orbGradient}>
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                            <item.Icon className="relative z-10 text-white w-7 h-7" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute w-52 h-52 bg-blue-900/10 rounded-full blur-[100px] z-[1]" />
                        </div>
                    </Card>

                    {/* Card 2: We Build the System - GRADIENT DUAL LINEAR ORBS */}
                    <Card
                        number="2"
                        title="We Build the System"
                        description="We design and set up custom automations that connect your tools with AI—so work happens while you sleep."
                        className="border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                    >
                        <div className="relative w-full h-full flex items-center justify-between z-[2] px-4">
                            {/* Left Side: Upward Scrolling Icons */}
                            <div className="relative flex-1 h-full overflow-hidden"
                                style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
                                <div className="flex flex-col items-center gap-8 animate-infinite-scroll-vertical py-12">
                                    {[...automationIcons, ...automationIcons].map((item, i) => (
                                        <div key={i} className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(44,78,220,0.3),inset_0_4px_12px_rgba(255,255,255,0.1)] border border-white/10 backdrop-blur-sm shrink-0" style={orbGradient}>
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                            <div className="text-white relative z-10 flex items-center justify-center">
                                                <item.Icon />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Downward Scrolling Icons */}
                            <div className="relative flex-1 h-full overflow-hidden"
                                style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
                                <div className="flex flex-col items-center gap-8 animate-infinite-scroll-vertical-reverse py-12">
                                    {[...[...automationIcons].reverse(), ...[...automationIcons].reverse()].map((item, i) => (
                                        <div key={i} className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(44,78,220,0.3),inset_0_4px_12px_rgba(255,255,255,0.1)] border border-white/10 backdrop-blur-sm shrink-0" style={orbGradient}>
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                            <div className="text-white relative z-10 flex items-center justify-center">
                                                <item.Icon />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Central Glow Balance */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-900/5 rounded-full blur-[60px] z-[0]" />
                        </div>
                    </Card>

                    {/* Card 3: Launch and Take Control - GRADIENT DASHBOARD */}
                    <Card
                        number="3"
                        title="Launch and Take Control"
                        description="You get a plug-and-play dashboard with a walkthrough to manage everything easily."
                        className="border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                    >
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            {/* Animated Gradient Dashboard Mockup */}
                            <div className="relative w-72 h-44 bg-black border border-white/20 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(44,78,220,0.25)] animate-float-x z-[2]">
                                {/* Dashboard Header - Using Orb Gradient */}
                                <div className="h-7 flex items-center px-3 gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.5)]" style={orbGradient}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    <div className="ml-auto w-10 h-2 bg-white/20 rounded-full" />
                                </div>

                                {/* Dashboard Body - Black with Animated LIVE Button */}
                                <div className="flex items-center justify-center h-full -mt-4">
                                    <div className="relative group/live flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(44,78,220,0.2)]" style={{ background: 'rgba(44, 78, 220, 0.1)' }}>
                                        <div className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                                        </div>
                                        <span className="text-white font-bold text-xl tracking-widest uppercase drop-shadow-[0_0_10px_rgba(44,78,220,0.5)]">Live</span>

                                        {/* External Glow */}
                                        <div className="absolute inset-0 rounded-full bg-blue-600/5 blur-md -z-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Share Orbit in Bottom-Left - Gradient */}
                            <div className="absolute bottom-2 left-2 w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(44,78,220,0.4),inset_0_4px_12px_rgba(255,255,255,0.2)] border border-white/10 backdrop-blur-sm z-[2]" style={orbGradient}>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                <Share2 className="text-white w-7 h-7" />
                            </div>

                            {/* Background Glows */}
                            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-blue-900/10 rounded-full blur-[80px] z-[1] animate-pulse" />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
