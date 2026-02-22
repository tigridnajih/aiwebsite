'use client';

import React, { useEffect } from 'react';
import { Mail, Calendar, Play, RefreshCw, List, NotebookPen, FileText } from 'lucide-react';
import SectionHeader from './SectionHeader';

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
        {/* Bottom-Right Dark Blue Glow */}
        <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background: 'radial-gradient(circle at bottom right, rgba(30, 90, 255, 0.12), transparent 70%)'
            }}
        />

        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 rounded-[32px] z-[1]" />

        {/* Step Badge */}
        <div
            className="relative z-10 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-xl mb-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={badgeGlow ? { boxShadow: badgeGlow } : {}}
        >
            {number}
        </div>

        <h3 className="relative z-10 text-[32px] font-bold text-[#F5F7FF] mb-5 tracking-tight transition-colors drop-shadow-md">
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
                    {/* Card 1: Share Your Workflow - CLEAN BLUE & WHITE GRADIENT GLASS */}
                    <Card
                        number="1"
                        title="Share Your Workflow"
                        description="From lead gen to client onboarding, just share your workflow and the tools you use."
                        className="border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                    >
                        <div className="relative w-full h-full flex items-center justify-center z-[2]">
                            {/* Main Clockwise Orbit Container - Perfectly spinning clockwise */}
                            <div className="relative w-64 h-64 animate-spin-slow-extremely">

                                {/* 1. Email (0deg) */}
                                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 transform"
                                    style={{ transform: 'translate(calc(-50% + 115px), calc(-50% + 0px))' }}>
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500/40 via-blue-200/20 to-white/30 rounded-full flex items-center justify-center shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_4px_15px_rgba(255,255,255,0.4)] border border-white/40 backdrop-blur-md">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-blue-400/10 pointer-events-none" />
                                        <Mail className="relative z-10 text-white w-10 h-10 drop-shadow-[0_4px_12px_rgba(30,150,255,0.6)]" />
                                    </div>
                                </div>

                                {/* 2. List (72deg) */}
                                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 transform"
                                    style={{ transform: 'translate(calc(-50% + 35.5px), calc(-50% + 109.4px))' }}>
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500/40 via-blue-200/20 to-white/30 rounded-full flex items-center justify-center shadow-[0_25px_45px_rgba(0,0,0,0.5),inset_0_3px_12px_rgba(255,255,255,0.4)] border border-white/40 backdrop-blur-md">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-blue-400/10 pointer-events-none" />
                                        <List className="relative z-10 text-white w-10 h-10 drop-shadow-[0_4px_12px_rgba(30,150,255,0.6)]" />
                                    </div>
                                </div>

                                {/* 3. Calendar (144deg) */}
                                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 transform"
                                    style={{ transform: 'translate(calc(-50% - 93px), calc(-50% + 67.6px))' }}>
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500/40 via-blue-200/20 to-white/30 rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.4)] border border-white/40 backdrop-blur-md">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-blue-400/10 pointer-events-none" />
                                        <Calendar className="relative z-10 text-white w-10 h-10 drop-shadow-[0_4px_12px_rgba(30,150,246,0.6)]" />
                                    </div>
                                </div>

                                {/* 4. NotebookPen (216deg) */}
                                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 transform"
                                    style={{ transform: 'translate(calc(-50% - 93px), calc(-50% - 67.6px))' }}>
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500/40 via-blue-200/20 to-white/30 rounded-full flex items-center justify-center shadow-[0_25px_40px_rgba(0,0,0,0.5),inset_0_3px_12px_rgba(255,255,255,0.4)] border border-white/40 backdrop-blur-md">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-blue-400/10 pointer-events-none" />
                                        <NotebookPen className="relative z-10 text-white w-10 h-10 drop-shadow-[0_4px_12px_rgba(30,150,255,0.6)]" />
                                    </div>
                                </div>

                                {/* 5. FileText (288deg) */}
                                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 transform"
                                    style={{ transform: 'translate(calc(-50% + 35.5px), calc(-50% - 109.4px))' }}>
                                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500/40 via-blue-200/20 to-white/30 rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.4)] border border-white/40 backdrop-blur-md">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-blue-400/10 pointer-events-none" />
                                        <FileText className="relative z-10 text-white w-10 h-10 drop-shadow-[0_4px_12px_rgba(30,150,255,0.6)]" />
                                    </div>
                                </div>
                            </div>

                            {/* Central Warp Core Glow */}
                            <div className="absolute w-52 h-52 bg-blue-500/10 rounded-full blur-[100px] z-[1]" />
                        </div>
                    </Card>

                    {/* Card 2: We Build the System - NEURAL HUB */}
                    <Card
                        number="2"
                        title="We Build the System"
                        description="We design and set up custom automations that connect your tools with AI—so work happens while you sleep."
                        className="border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                    >
                        <div className="relative w-full h-full flex items-center justify-center z-[2]">
                            <div className="relative w-48 h-48 flex items-center justify-center">
                                {/* Neural Core Animation */}
                                <div className="relative w-32 h-32 bg-blue-600/10 rounded-full border border-blue-500/30 flex items-center justify-center animate-pulse-slow shadow-[0_0_50px_rgba(30,90,255,0.2)]">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-sm" />
                                    <NotebookPen className="text-blue-400 w-16 h-16 animate-breath drop-shadow-[0_0_15px_rgba(30,90,255,0.5)]" />
                                </div>

                                {/* Orbiting Pulse Rings */}
                                <div className="absolute w-44 h-44 rounded-full border border-blue-500/5 animate-spin-slow" />
                                <div className="absolute w-40 h-40 rounded-full border border-white/5 animate-spin-slow-extremely [animation-duration:15s]" />

                                {/* Floating Particles/Nodes */}
                                <div className="absolute top-0 right-4 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                <div className="absolute bottom-8 left-0 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse [animation-delay:1s]" />
                                <div className="absolute top-1/2 left-4 w-1 h-1 rounded-full bg-white/40 animate-pulse [animation-delay:2s]" />
                            </div>

                            {/* Blue Hub Glow */}
                            <div className="absolute w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] z-[1]" />
                        </div>
                    </Card>

                    {/* Card 3: Launch and Take Control */}
                    <Card
                        number="3"
                        title="Launch and Take Control"
                        description="You get a plug-and-play dashboard with a walkthrough to manage everything easily."
                        className="border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                    >
                        <div className="relative w-64 h-36 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 z-[2]">
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
