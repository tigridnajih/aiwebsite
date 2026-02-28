'use client';

import React from 'react';
import { Mail, Calendar, Play, List, NotebookPen, FileText, Check, Share2, Shield, Cpu, Gauge, Bot, RotateCw, File, Search, Puzzle, MoveLeft, MoveRight, Minus, Square, X, MessageSquare, Settings, Filter, ArrowUp, RefreshCw, Layout } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface CardProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({ number, title, description, children, className = "" }: CardProps) => (
    <div
        className={`relative group p-6 rounded-[32px] bg-[#0d0d0d] transition-all duration-700 flex flex-col min-h-[500px] overflow-hidden border border-white/5 ${className}`}
    >
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]" />

        {/* Animation/Visual Container (Top) */}
        <div className="relative w-full aspect-[4/3] mb-8 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
            {children}
        </div>

        {/* Content (Bottom) */}
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <span className="text-[28px] font-bold text-white/40 font-mono tracking-tighter leading-none">
                    {number.padStart(2, '0')}
                </span>
                <h3 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight">
                    {title}
                </h3>
            </div>

            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-[90%]">
                {description}
            </p>
        </div>
    </div>
);

export default function HowItWorks() {
    return (
        <section id="works" className="py-24 bg-[#070707] overflow-hidden relative">
            <div className="container-custom">
                <SectionHeader
                    badge="Process"
                    title="How it works"
                    description="Our seamless process to take your agency to the next level with custom AI solutions."
                />

                <div className="grid lg:grid-cols-3 gap-8 mt-16 relative z-10">
                    {/* Card 1: Analyze */}
                    <Card
                        number="1"
                        title="Analyze"
                        description="We start with a thorough analysis of your current workflows to see how AI could improve your processes."
                    >
                        <div className="grid grid-cols-3 gap-3 p-8 w-full max-w-[280px]">
                            {[
                                Mail, Shield, MessageSquare,
                                Cpu, Bot, Search,
                                Layout, NotebookPen, List
                            ].map((Icon, i) => (
                                <div
                                    key={i}
                                    className={`aspect-square rounded-xl border flex items-center justify-center transition-all duration-500 ${i === 4
                                        ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.2)]'
                                        : 'bg-white/5 border-white/10 opacity-40'
                                        }`}
                                >
                                    <Icon className={`w-6 h-6 ${i === 4 ? 'text-blue-400' : 'text-white'}`} />
                                    {i === 4 && (
                                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Card 2: Build & Implement */}
                    <Card
                        number="2"
                        title="Build & Implement"
                        description="Then, our developers will start crafting custom AI-solutions for your company, continuously prioritising quality and safety."
                    >
                        <div className="w-full h-full p-4 flex flex-col gap-3">
                            {/* Window Tabs */}
                            <div className="flex items-center gap-2 px-2">
                                <div className="flex gap-1.5 mr-4">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <div className="flex gap-2">
                                    {['HTML', 'React', 'CSS'].map((tab, i) => (
                                        <div key={i} className={`text-[10px] px-3 py-1 rounded-md border font-medium ${i === 1 ? 'bg-white/10 border-white/20 text-white' : 'border-white/5 text-zinc-500'}`}>
                                            {tab}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Code Area */}
                            <div className="flex-1 bg-black/40 rounded-xl p-4 font-mono text-[11px] leading-relaxed border border-white/5 relative">
                                <div className="flex flex-col gap-1 opacity-50">
                                    <div className="flex gap-4"><span className="text-white/20">1</span><span className="text-zinc-500">&lt;html lang=&quot;en&quot;&gt;</span></div>
                                    <div className="flex gap-4"><span className="text-white/20">2</span><span className="text-zinc-500">&nbsp;&nbsp;&lt;head&gt;</span></div>
                                    <div className="flex gap-4"><span className="text-white/20">3</span><span className="text-zinc-500">&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset=&quot;UTF-8&quot;&gt;</span></div>
                                    <div className="flex gap-4 items-center bg-blue-500/10 -mx-2 px-2 py-0.5 border-y border-blue-500/20">
                                        <span className="text-white/20">4</span>
                                        <span className="text-blue-400">&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name=&quot;viewport&quot;&gt;</span>
                                        <div className="ml-auto flex items-center gap-1 bg-blue-500 px-1.5 py-0.5 rounded text-[8px] text-white">
                                            <div className="w-1 h-1 rounded-full bg-white animate-ping" />
                                            Tibor
                                        </div>
                                    </div>
                                    <div className="flex gap-4"><span className="text-white/20">5</span><span className="text-zinc-500">&nbsp;&nbsp;&nbsp;&nbsp;content=&quot;width=dev</span></div>
                                    <div className="flex gap-4"><span className="text-white/20">6</span><span className="text-zinc-500">&nbsp;&nbsp;&nbsp;&nbsp;width, initial-</span></div>
                                    <div className="flex gap-4"><span className="text-white/20">7</span><span className="text-zinc-500">&nbsp;&nbsp;&nbsp;&nbsp;scale=1.0&quot;&gt;</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3: Maintain & improve */}
                    <Card
                        number="3"
                        title="Maintain & improve"
                        description="After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions."
                    >
                        <div className="w-full h-full p-8 flex flex-col gap-4">
                            {[
                                { label: 'Software speed', value: '+38%', color: 'text-green-400' },
                                { label: 'Workflow efficiency', value: '+25%', color: 'text-blue-400' },
                                { label: 'Operational cost', value: '-11%', color: 'text-red-400' }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                    <span className="text-sm font-medium text-zinc-400">{stat.label}</span>
                                    <span className={`text-sm font-bold ${stat.color}`}>{stat.value}</span>
                                </div>
                            ))}
                            <div className="mt-2 flex items-center justify-between p-4 rounded-xl border border-white/10 bg-gradient-to-r from-blue-600/10 to-transparent">
                                <span className="text-sm font-medium text-white">Update available</span>
                                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/20 transition-colors text-xs font-bold text-white uppercase tracking-wider">
                                    Update <ArrowUp className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}


