'use client';

import { LucideIcon, Mail, FileText, Calendar, Layout, Play, RefreshCw, Layers, List, StickyNote, NotebookPen } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface CardProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    noHover?: boolean;
}

const Card = ({ number, title, description, children, className = "", noHover = false }: CardProps) => (
    <div className={`relative group p-8 rounded-3xl bg-black border border-white/5 transition-all duration-500 flex flex-col items-start min-h-[480px] overflow-hidden ${!noHover ? 'hover:border-blue-500/30' : ''} ${className}`}>
        {/* Subtle Blue Glow Backdrop */}
        {!noHover && (
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        )}

        <div className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg mb-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            {number}
        </div>

        <h3 className="relative z-10 text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
            {title}
        </h3>

        <p className="relative z-10 text-gray-400 leading-relaxed mb-auto">
            {description}
        </p>

        {/* Animation Container */}
        <div className="relative z-10 w-full h-56 mt-6 flex items-center justify-center">
            {children}
        </div>
    </div>
);

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-black">
            <div className="container-custom">
                <SectionHeader
                    title="How it works"
                    description="Our seamless process to take your agency to the next level with custom AI solutions."
                />

                <div className="grid lg:grid-cols-3 gap-8 mt-16 pb-20">
                    {/* Card 1: Share Your Workflow */}
                    <Card
                        number="1"
                        title="Share Your Workflow"
                        description="From lead gen to client onboarding, just share your workflow and the tools you use."
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Floating Icons Orbit - Matching Ref Image Style */}
                            <div className="relative w-48 h-48">
                                {/* Email - Large Circle */}
                                <div className="absolute top-4 right-0 w-24 h-24 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-xl border border-white/10 animate-custom-float">
                                    <Mail className="text-white w-10 h-10 drop-shadow-lg" />
                                </div>
                                {/* List - Medium Circle */}
                                <div className="absolute top-12 left-0 w-20 h-20 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-xl border border-white/10 animate-custom-float [animation-delay:-1.5s]">
                                    <List className="text-white w-8 h-8 drop-shadow-lg" />
                                </div>
                                {/* Calendar - Small Circle */}
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-xl border border-white/10 animate-custom-float [animation-delay:-3s]">
                                    <Calendar className="text-white w-6 h-6 drop-shadow-lg" />
                                </div>
                                {/* Note - Small Circle */}
                                <div className="absolute bottom-0 right-12 w-14 h-14 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-xl border border-white/10 animate-custom-float [animation-delay:-0.5s]">
                                    <NotebookPen className="text-white w-6 h-6 drop-shadow-lg" />
                                </div>
                                {/* Page - Tiny Circle */}
                                <div className="absolute top-1/2 right-6 w-12 h-12 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-xl border border-white/10 animate-custom-float [animation-delay:-2.2s]">
                                    <FileText className="text-white w-5 h-5 drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Card 2: We Build the System - BLUE 3D STYLE */}
                    <Card
                        number="2"
                        title="We Build the System"
                        description="We design and set up custom automations that connect your tools with AI—so work happens while you sleep."
                        className="bg-gradient-to-br from-blue-900/40 via-blue-950/40 to-black border-blue-500/40 shadow-[inset_0_0_30px_rgba(59,130,246,0.1)]"
                        noHover={true}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
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
                                {/* Notes - Blue 3D breathing */}
                                <div className="absolute bottom-0 right-12 w-14 h-14 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-0.8s]">
                                    <StickyNote className="text-white w-6 h-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* Page - Blue 3D breathing */}
                                <div className="absolute top-1/2 right-6 w-12 h-12 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-1.8s]">
                                    <FileText className="text-white w-5 h-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                            </div>
                            {/* Blue Core Glow */}
                            <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-[80px]" />
                        </div>
                    </Card>

                    {/* Card 3: Launch and Take Control */}
                    <Card
                        number="3"
                        title="Launch and Take Control"
                        description="You get a plug-and-play dashboard with a walkthrough to manage everything easily."
                    >
                        <div className="relative w-64 h-36 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
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
