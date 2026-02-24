'use client';

import React from 'react';
import { Mail, Calendar, Play, List, NotebookPen, FileText, Check, Share2, Shield, Cpu, Gauge, Bot, RotateCw, File, Search, Puzzle, MoveLeft, MoveRight, Minus, Square, X, MessageSquare, Settings, Filter, ArrowUp, RefreshCw } from 'lucide-react';
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
        className={`relative group p-6 md:p-8 rounded-[32px] bg-[#111111] transition-all duration-700 flex flex-col items-start min-h-[480px] md:min-h-[520px] overflow-hidden ${className}`}
        style={{
            ...style,
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}
    >
        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 rounded-[32px] z-[1]" />

        {/* Step Badge */}
        <div
            className="relative z-10 w-11 h-11 rounded-full bg-[#EDEDED] flex items-center justify-center text-[#0A0A0A] font-extrabold text-xl mb-10 border border-black/5"
        >
            {number}
        </div>

        <h3 className="relative z-10 text-[28px] md:text-[32px] font-bold text-[#F5F7FF] mb-4 md:mb-5 tracking-tight transition-colors drop-shadow-md">
            {title}
        </h3>

        <p className="relative z-10 text-zinc-400 text-base md:text-lg leading-[1.6] md:leading-[1.8] mb-auto max-w-[95%]">
            {description}
        </p>

        {/* Animation Container */}
        <div className="relative z-10 w-full h-auto md:h-72 mt-8 flex items-center justify-center">
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
        <section id="how-it-works" className="py-24 bg-[#050505] overflow-hidden relative">
            {/* Soft Neutral Radial Glow behind section */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.04), transparent 60%)'
                }}
            />
            <div className="container-custom">
                <SectionHeader
                    badge="Process"
                    title="How it works"
                    description="Our seamless process to take your agency to the next level with custom AI solutions."
                />

                <div className="grid lg:grid-cols-3 gap-10 mt-12 pb-20 relative z-10">
                    {/* Card 1: Share Your Workflow - GRADIENT ORBS */}
                    <Card
                        number="1"
                        title="Share Your Workflow"
                        description="From lead gen to client onboarding, just share your workflow and the tools you use."
                        className=""
                    >
                        <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between z-[2] px-2 gap-8 sm:gap-4 py-8 sm:py-0">
                            {/* Left Side: Radar Scanner */}
                            <div className="w-full sm:flex-1 flex flex-col items-center justify-center">
                                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center">
                                    {/* Radar Rings */}
                                    <div className="absolute inset-0 border border-white/5 rounded-full" />
                                    <div className="absolute inset-4 border border-white/[0.08] rounded-full" />
                                    <div className="absolute inset-10 border border-white/[0.12] rounded-full" />
                                    <div className="absolute inset-16 border border-white/[0.16] rounded-full" />

                                    {/* Radar Sweep */}
                                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_70%,rgba(60,110,255,0.15)_100%)] animate-spin-slow-extremely" />

                                    {/* Radar Center Dot */}
                                    <div className="relative w-1.5 h-1.5 bg-[#3c6eff] rounded-full shadow-[0_0_10px_rgba(60,110,255,0.3)]" />
                                </div>
                                <div className="mt-6">
                                    <span className="text-sm font-medium text-[#F5F7FF]/40">Analyzing Workflow</span>
                                </div>
                            </div>

                            {/* Right Side: Check Items */}
                            <div className="w-full sm:flex-1 flex flex-col gap-2.5">
                                {[
                                    { Icon: Shield, text: "System check" },
                                    { Icon: Cpu, text: "Process check" },
                                    { Icon: Gauge, text: "Speed check" },
                                    { Icon: Bot, text: "Manual work" },
                                    { Icon: RotateCw, text: "Repetitive task" }
                                ].map((item, i) => (
                                    <div key={i} className="group/item flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/[0.05] bg-[#111114] hover:bg-[#16161a] transition-all duration-300">
                                        <div className="shrink-0 w-8 h-8 rounded-lg bg-[#3c6eff]/[0.12] border border-[#3c6eff]/[0.25] flex items-center justify-center text-blue-400 group-hover/item:scale-110 transition-transform">
                                            <item.Icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-[#F5F7FF]/80 tracking-wide uppercase">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </Card>

                    {/* Card 2: We Build the System - GRADIENT DUAL LINEAR ORBS */}
                    <Card
                        number="2"
                        title="We Build the System"
                        description="We design and set up custom automations that connect your tools with AI—so work happens while you sleep."
                        className=""
                    >
                        <div className="relative w-full h-full flex items-center justify-center z-[2] px-0 md:px-2">
                            {/* IDE Mockup Window */}
                            <div className="relative w-full h-[260px] md:h-[280px] bg-[#0A0A0B] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
                                {/* IDE Header */}
                                <div className="h-9 bg-[#121214] border-b border-white/5 flex items-center px-4 gap-4">
                                    <div className="flex items-center gap-2">
                                        <MoveLeft className="w-3.5 h-3.5 text-zinc-600" />
                                        <MoveRight className="w-3.5 h-3.5 text-zinc-600" />
                                    </div>
                                    <div className="flex-1 h-5 bg-[#0A0A0B] border border-white/5 rounded-md mx-4" />
                                    <div className="flex items-center gap-3">
                                        <Minus className="w-3 h-3 text-zinc-600" />
                                        <Square className="w-2.5 h-2.5 text-zinc-600" />
                                        <X className="w-3 h-3 text-zinc-600" />
                                    </div>
                                </div>

                                <div className="flex-1 flex overflow-hidden">
                                    {/* IDE Sidebar */}
                                    <div className="w-12 bg-[#121214] border-r border-white/5 flex flex-col items-center py-4 gap-6">
                                        <div className="w-8 h-8 rounded-lg bg-[#3c6eff]/[0.12] border border-[#3c6eff]/[0.25] flex items-center justify-center text-blue-400">
                                            <File className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <Search className="w-4 h-4 text-blue-400/20 hover:text-blue-400 transition-colors cursor-pointer" />
                                        <Puzzle className="w-4 h-4 text-blue-400/20 hover:text-blue-400 transition-colors cursor-pointer" />
                                    </div>

                                    {/* IDE Code Area */}
                                    <div className="flex-1 relative overflow-hidden bg-black p-6 font-mono text-[13px] leading-relaxed">
                                        <div className="flex flex-col gap-0 animate-infinite-scroll-vertical" style={{ animationDuration: '15s' }}>
                                            {[1, 2].map((group) => (
                                                <div key={group} className="flex flex-col gap-6 py-4">
                                                    <div className="space-y-1">
                                                        <div className="flex gap-4">
                                                            <span className="text-[#A78BFA]">def</span>
                                                            <span className="text-[#F5F7FF]">__init__(self, threshold):</span>
                                                        </div>
                                                        <div className="flex gap-4 pl-8">
                                                            <span className="text-[#F5F7FF]">self.threshold = threshold</span>
                                                        </div>
                                                        <div className="flex gap-4 pl-8">
                                                            <span className="text-[#F5F7FF]">self.status = </span>
                                                            <span className="text-[#2DD4BF]">&quot;inactive&quot;</span>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <div className="flex gap-4">
                                                            <span className="text-[#A78BFA]">def</span>
                                                            <span className="text-[#F5F7FF]">check_trigger(self, value):</span>
                                                        </div>
                                                        <div className="flex gap-4 pl-8">
                                                            <span className="text-[#A78BFA]">if</span>
                                                            <span className="text-[#F5F7FF]">value &gt; self.threshold:</span>
                                                        </div>
                                                        <div className="flex gap-4 pl-16">
                                                            <span className="text-[#F5F7FF]">self.status = </span>
                                                            <span className="text-[#2DD4BF]">&quot;active&quot;</span>
                                                        </div>
                                                        <div className="flex gap-4 pl-16">
                                                            <span className="text-[#A78BFA]">return</span>
                                                            <span className="text-[#2DD4BF]">&quot;Automation triggered!&quot;</span>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <div className="flex gap-4">
                                                            <span className="text-[#A78BFA]">def</span>
                                                            <span className="text-[#F5F7FF]">sync_database(data):</span>
                                                        </div>
                                                        <div className="flex gap-4 pl-8">
                                                            <span className="text-[#A78BFA]">for</span>
                                                            <span className="text-[#F5F7FF]">item in data:</span>
                                                        </div>
                                                        <div className="flex gap-4 pl-16">
                                                            <span className="text-[#F5F7FF]">record.update(id=item.id)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Code Shadow Overlays */}
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#000] via-transparent to-[#000] opacity-60" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Card>

                    {/* Card 3: Launch and Take Control - GRADIENT DASHBOARD */}
                    <Card
                        number="3"
                        title="Launch and Take Control"
                        description="You get a plug-and-play dashboard with a walkthrough to manage everything easily."
                        className="border border-white/[0.06] !p-5 md:!p-7"
                    >
                        <div className="relative w-full h-full flex flex-col gap-3 z-[2] pt-8">
                            {/* Chatbot System */}
                            <div className="group/item flex items-center gap-4 px-5 py-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#3c6eff]/[0.12] border border-[#3c6eff]/[0.25] flex items-center justify-center text-blue-400">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[#F5F7FF] font-bold text-base leading-tight">Chatbot system</h4>
                                    <p className="text-zinc-500 text-[11px] font-medium mt-1">Efficiency will increase by 20%</p>
                                </div>
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center">
                                    <RefreshCw className="w-4 h-4 text-blue-400 animate-spin-slow" />
                                </div>
                            </div>

                            {/* Workflow System */}
                            <div className="group/item flex items-center gap-4 px-5 py-3 rounded-2xl border border-white/[0.05] bg-[#111114] hover:bg-[#16161a] transition-all duration-300">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#3c6eff]/[0.12] border border-[#3c6eff]/[0.25] flex items-center justify-center text-blue-400">
                                    <Settings className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[#F5F7FF] font-bold text-base leading-tight">Workflow system</h4>
                                    <p className="text-zinc-500 text-[11px] font-medium mt-1">Update available..</p>
                                </div>
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#3c6eff]/[0.05] border border-[#3c6eff]/[0.15] flex items-center justify-center">
                                    <ArrowUp className="w-4 h-4 text-blue-400 animate-bounce" />
                                </div>
                            </div>

                            {/* Sales System */}
                            <div className="group/item flex items-center gap-4 px-5 py-3 rounded-2xl border border-white/[0.05] bg-[#111114] hover:bg-[#16161a] transition-all duration-300">
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#3c6eff]/[0.12] border border-[#3c6eff]/[0.25] flex items-center justify-center text-blue-400">
                                    <Filter className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[#F5F7FF] font-bold text-base leading-tight">Sales system</h4>
                                    <p className="text-zinc-500 text-[11px] font-medium mt-1">Up to date</p>
                                </div>
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#3c6eff]/[0.05] border border-[#3c6eff]/[0.15] flex items-center justify-center">
                                    <Check className="w-5 h-5 text-blue-400 animate-pulse" />
                                </div>
                            </div>

                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
