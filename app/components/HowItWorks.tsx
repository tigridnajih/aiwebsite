'use client';

import { LucideIcon, Mail, FileText, Calendar, Layout, Play, RefreshCw, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface CardProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Card = ({ number, title, description, children }: CardProps) => (
    <div className="relative group p-8 rounded-3xl bg-black border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col items-start min-h-[480px] overflow-hidden">
        {/* Subtle Blue Glow Backdrop */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
        <div className="relative z-10 w-full h-40 mt-6 flex items-center justify-center">
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
                            {/* Floating Icons Orbit */}
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                <div className="absolute w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center animate-custom-float">
                                    <Mail className="text-blue-400 w-6 h-6" />
                                </div>
                                <div className="absolute w-10 h-10 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center animate-custom-float [animation-delay:-1s] -translate-x-12 -translate-y-8">
                                    <FileText className="text-blue-300 w-4 h-4" />
                                </div>
                                <div className="absolute w-10 h-10 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center animate-custom-float [animation-delay:-2s] translate-x-12 -translate-y-4">
                                    <Calendar className="text-blue-500 w-4 h-4" />
                                </div>
                                <div className="absolute w-8 h-8 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center animate-custom-float [animation-delay:-3.5s] -translate-x-4 translate-y-12">
                                    <RefreshCw className="text-white/40 w-4 h-4" />
                                </div>
                            </div>
                            {/* Central Glow */}
                            <div className="absolute w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                        </div>
                    </Card>

                    {/* Card 2: We Build the System */}
                    <Card
                        number="2"
                        title="We Build the System"
                        description="We design and set up custom automations that connect your tools with AI—so work happens while you sleep."
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="relative">
                                {/* Connection Lines Simulation */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rotate-45 animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-45 animate-pulse" />

                                {/* Core Processing Icon */}
                                <div className="relative z-10 w-20 h-20 bg-zinc-900 border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] rounded-2xl flex items-center justify-center overflow-hidden">
                                    <Layers className="text-blue-400 w-10 h-10 animate-pulse" />
                                    {/* Scan Line */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-1/2 animate-custom-scan" />
                                </div>

                                {/* Floating Sub-icons */}
                                <div className="absolute -top-6 -right-6 w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center animate-bounce">
                                    <RefreshCw className="text-blue-500 w-5 h-5" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-black border border-white/10 rounded-lg flex items-center justify-center animate-custom-float">
                                    <div className="font-bold text-xs text-blue-400">AI</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3: Launch and Take Control */}
                    <Card
                        number="3"
                        title="Launch and Take Control"
                        description="You get a plug-and-play dashboard with a walkthrough to manage everything easily."
                    >
                        <div className="relative w-64 h-36 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
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

                            {/* Circular Hover Effect */}
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/0 transition-colors pointer-events-none" />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
