'use client';

import React, { useEffect } from 'react';
import { LucideIcon, Mail, FileText, Calendar, Layout, Play, RefreshCw, Layers, List, StickyNote, NotebookPen } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface CardProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    noHover?: boolean;
    style?: React.CSSProperties;
    badgeGlow?: string;
    onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: () => void;
}

const Card = ({ number, title, description, children, className = "", noHover = false, style, badgeGlow, onMouseMove, onMouseLeave }: CardProps) => (
    <div
        className={`relative group p-8 rounded-[32px] bg-black border border-white/5 transition-all duration-700 flex flex-col items-start min-h-[520px] overflow-hidden ${!noHover ? 'hover:border-blue-500/30' : ''} ${className}`}
        style={style}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
    >
        {/* Bottom-Right Dark Blue Glow */}
        <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background: 'radial-gradient(circle at bottom right, rgba(30, 90, 255, 0.12), transparent 70%)'
            }}
        />

        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 rounded-[32px] z-[1]" />

        {/* Subtle Blue Glow Backdrop (if not custom) */}
        {!noHover && !style?.background && (
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]" />
        )}

        {/* Step Badge */}
        <div
            className="relative z-10 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-xl mb-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={badgeGlow ? { boxShadow: badgeGlow } : {}}
        >
            {number}
        </div>

        <h3 className="relative z-10 text-[32px] font-bold text-[#F5F7FF] mb-5 tracking-tight group-hover:text-blue-400 transition-colors drop-shadow-md">
            {title}
        </h3>

        <p className="relative z-10 text-[rgba(200,210,255,0.8)] text-lg leading-[1.8] mb-auto max-w-[95%]">
            {description}
        </p>

        {/* Animation Container */}
        <div className="relative z-10 w-full h-72 mt-8 flex items-center justify-center">
            {children}
        </div>
    </div>
);

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-black overflow-hidden">
            <div className="container-custom">
                <SectionHeader
                    title="How it works"
                    description="Our seamless process to take your agency to the next level with custom AI solutions."
                />

                <div className="grid lg:grid-cols-3 gap-10 mt-20 pb-20">
                    {/* Card 1: Share Your Workflow */}
                    <Card
                        number="1"
                        title="Share Your Workflow"
                        description="From lead gen to client onboarding, just share your workflow and the tools you use."
                        className="border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                        noHover={true}
                    >
                        <div className="relative w-full h-full flex items-center justify-center z-[2]">
                            <div className="relative w-48 h-48">
                                {/* Email - Blue 3D breathing */}
                                <div className="absolute top-4 right-0 w-24 h-24 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath">
                                    <Mail className="text-white w-10 h-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* List - Blue 3D breathing */}
                                <div className="absolute top-12 left-0 w-20 h-20 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-1.2s]">
                                    <List className="text-white w-8 h-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* Calendar - Blue 3D breathing */}
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-2.5s]">
                                    <Calendar className="text-white w-6 h-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                            </div>
                            {/* Blue Core Glow */}
                            <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-[80px] z-[1]" />
                        </div>
                    </Card>

                    {/* Card 2: We Build the System */}
                    <Card
                        number="2"
                        title="We Build the System"
                        description="We design and set up custom automations that connect your tools with AI—so work happens while you sleep."
                        className="border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                        noHover={true}
                    >
                        <div className="relative w-full h-full flex items-center justify-center z-[2]">
                            <div className="relative w-48 h-48">
                                {/* Layout - Blue 3D breathing */}
                                <div className="absolute top-4 right-0 w-24 h-24 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath">
                                    <Layout className="text-white w-10 h-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* RefreshCw - Blue 3D breathing */}
                                <div className="absolute top-12 left-0 w-20 h-20 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-1.2s]">
                                    <RefreshCw className="text-white w-8 h-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* Layers - Blue 3D breathing */}
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-2.5s]">
                                    <Layers className="text-white w-6 h-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                            </div>
                            {/* Blue Core Glow */}
                            <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-[80px] z-[1]" />
                        </div>
                    </Card>

                    {/* Card 3: Launch and Take Control */}
                    <Card
                        number="3"
                        title="Launch and Take Control"
                        description="You get a plug-and-play dashboard with a walkthrough to manage everything easily."
                        className="border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                    >
                        <div className="relative w-64 h-36 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 z-[2]">
                            {/* Dashboard Header UI */}
                            <div className="h-6 bg-zinc-800 border-b border-white/5 flex items-center px-3 gap-1.5 focus:outline-none">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <div className="ml-auto w-8 h-2 bg-zinc-700 rounded-full" />
                            </div>

                            {/* Live Indicator */}
                            <div className="absolute top-8 right-3 flex items-center gap-1.5 bg-red-500/10 px-2 py-0.5 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Live</span>
                            </div>

                            {/* Dashboard Content Mock */}
                            <div className="p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
                                        <Play className="text-blue-500 fill-blue-500 w-4 h-4" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="w-24 h-2 bg-zinc-800 rounded-full" />
                                        <div className="w-16 h-2 bg-zinc-700 rounded-full" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-10 bg-zinc-800/50 rounded-lg border border-white/5" />
                                    <div className="h-10 bg-zinc-800/50 rounded-lg border border-white/5" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
