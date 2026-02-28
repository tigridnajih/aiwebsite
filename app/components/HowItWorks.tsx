'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Cpu, Zap, Bot, RotateCw,
    MessageSquare, Settings, ArrowUp, Check,
    Filter, Search, FileCode, Terminal, X,
    Maximize2, Minimize2
} from 'lucide-react';
import SectionHeader from './SectionHeader';

const SAPPHIRE = "#0F52BA";

interface CardProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({ number, title, description, children, className = "" }: CardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative group p-8 rounded-[32px] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 flex flex-col min-h-[580px] overflow-hidden border border-white/[0.05] hover:border-blue-500/20 hover:bg-white/[0.03] ${className}`}
    >
        {/* Sapphire Glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-colors" />

        {/* Visual Container (Top) */}
        <div className="relative w-full aspect-[4/3] mb-10 bg-black/40 rounded-3xl border border-white/[0.05] overflow-hidden flex items-center justify-center shadow-2xl">
            {children}
        </div>

        {/* Content (Bottom) */}
        <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-4">
                <span className="text-[32px] font-bold text-white/20 font-mono tracking-tighter leading-none group-hover:text-blue-500/40 transition-colors">
                    {number.padStart(2, '0')}
                </span>
                <h3 className="text-[26px] md:text-[30px] font-bold text-white tracking-tight">
                    {title}
                </h3>
            </div>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-[95%]">
                {description}
            </p>
        </div>
    </motion.div>
);

const RadarScanner = () => {
    const statusItems = [
        { label: 'SYSTEM CHECK', icon: Shield },
        { label: 'PROCESS CHECK', icon: Cpu },
        { label: 'SPEED CHECK', icon: Zap },
        { label: 'MANUAL WORK', icon: Bot },
        { label: 'REPETITIVE TASK', icon: RotateCw },
    ];

    return (
        <div className="w-full h-full p-6 flex flex-row items-center justify-between gap-4">
            {/* Left: Radar */}
            <div className="flex-1 flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Concentric Circles */}
                    <div className="absolute inset-4 rounded-full border border-white/5" />
                    <div className="absolute inset-10 rounded-full border border-white/5" />

                    {/* Rotating Scanner Beam */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_20%,rgba(15,82,186,0.3)_50%,transparent_60%)]"
                    />

                    {/* Central Blip */}
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] relative z-20"
                    />

                    {/* Faint Grid lines */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-full h-px bg-white" />
                        <div className="w-px h-full bg-white absolute" />
                    </div>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-zinc-500 uppercase tracking-[0.2em]">Analyzing Workflow</span>
            </div>

            {/* Right: Status List */}
            <div className="flex-1 flex flex-col gap-2.5">
                {statusItems.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                    >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                            <item.icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-bold text-white/70 tracking-wider font-mono">{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const PythonEditor = () => {
    const code = `def check_trigger(self, value):
  if value > self.threshold:
      self.status = "active"
      return "Automation 
              triggered!"

def sync_database(data):
  for item in data:
      record.update(id=item.id)`;

    return (
        <div className="w-full h-full p-4 flex flex-col bg-[#0d0d0d]">
            {/* Window Header */}
            <div className="flex items-center justify-between px-2 mb-4 border-b border-white/5 pb-2">
                <div className="flex items-center gap-1.5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                    <ArrowUp className="w-3 h-3 rotate-45" />
                    <ArrowUp className="w-3 h-3 rotate-135" />
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
                </div>
            </div>

            <div className="flex flex-1 gap-4">
                {/* Left Sidebar Mock */}
                <div className="w-8 flex flex-col gap-4 items-center opacity-30 pt-2 border-r border-white/5">
                    <FileCode className="w-4 h-4" />
                    <Search className="w-4 h-4" />
                    <Settings className="w-4 h-4" />
                </div>

                {/* Code Content */}
                <div className="flex-1 font-mono text-[11px] md:text-[12px] leading-relaxed py-2">
                    <pre className="text-zinc-500">
                        {code.split('\n').map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-2"
                            >
                                <span className="opacity-40 select-none text-right">{i + 1}</span>
                                <span className={
                                    line.includes('def') || line.includes('if') || line.includes('for') || line.includes('return')
                                        ? "text-blue-500"
                                        : line.includes('"')
                                            ? "text-cyan-400"
                                            : "text-zinc-300"
                                }>
                                    {line}
                                </span>
                            </motion.div>
                        ))}
                    </pre>
                </div>
            </div>
        </div>
    );
};

const SystemStatusCards = () => {
    const systems = [
        {
            title: 'Chatbot system',
            desc: 'Efficiency will increase by 20%',
            icon: MessageSquare,
            endIcon: RotateCw
        },
        {
            title: 'Workflow system',
            desc: 'Update available..',
            icon: Settings,
            endIcon: ArrowUp
        },
        {
            title: 'Sales system',
            desc: 'Up to date',
            icon: Filter,
            endIcon: Check
        },
    ];

    return (
        <div className="w-full h-full p-8 flex flex-col gap-4 justify-center">
            {systems.map((sys, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between group/sys hover:bg-blue-600/5 transition-all duration-500"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover/sys:scale-110 transition-transform">
                            <sys.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-bold text-white mb-0.5">{sys.title}</span>
                            <span className="text-xs text-zinc-500 tracking-tight font-medium">{sys.desc}</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-500 group-hover/sys:text-blue-400 group-hover/sys:border-blue-500/30 transition-all">
                        <sys.endIcon className="w-4 h-4" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default function HowItWorks() {
    return (
        <section id="works" className="py-32 bg-[#070707] overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,82,186,0.03),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <SectionHeader
                    badge="The Process"
                    title="How it works"
                    description="Our multi-stage approach to integrating high-performance AI into your business architecture."
                />

                <div className="grid lg:grid-cols-3 gap-8 mt-24">
                    <Card
                        number="1"
                        title="Analyze"
                        description="We start with a thorough analysis of your current workflows to see how AI could improve your processes."
                    >
                        <RadarScanner />
                    </Card>

                    <Card
                        number="2"
                        title="Build & Implement"
                        description="Then, our developers will start crafting custom AI-solutions for your company, continuously prioritising quality and safety."
                    >
                        <PythonEditor />
                    </Card>

                    <Card
                        number="3"
                        title="Maintain & improve"
                        description="After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions."
                    >
                        <SystemStatusCards />
                    </Card>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        </section>
    );
}


