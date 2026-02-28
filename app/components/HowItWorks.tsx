'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Database, MessageSquare, List, Workflow,
    Search, Layout, Bot, ArrowUp, Cpu, Shield,
    Code, Settings, RefreshCw, Layers, Zap
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
        className={`relative group p-8 rounded-[32px] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 flex flex-col min-h-[550px] overflow-hidden border border-white/[0.05] hover:border-blue-500/20 hover:bg-white/[0.03] ${className}`}
    >
        {/* Sapphire Glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-colors" />
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        {/* Animation/Visual Container (Top) */}
        <div className="relative w-full aspect-[4/3] mb-10 bg-black/40 rounded-2xl border border-white/[0.05] overflow-hidden flex items-center justify-center shadow-inner">
            {children}
        </div>

        {/* Content (Bottom) */}
        <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-4">
                <span className="text-[32px] font-bold text-white/20 font-mono tracking-tighter leading-none group-hover:text-blue-500/40 transition-colors">
                    {number.padStart(2, '0')}
                </span>
                <h3 className="text-[26px] md:text-[30px] font-bold text-white tracking-tight group-hover:text-blue-50 shadow-blue-500/20">
                    {title}
                </h3>
            </div>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-[95%]">
                {description}
            </p>
        </div>
    </motion.div>
);

const WorkflowScanner = () => {
    const icons = [Mail, MessageSquare, Database, List, Search, Layout, Settings, Workflow];
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Rotating Scanning Beam */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div className="w-[120%] h-[120%] bg-gradient-to-tr from-blue-600/20 via-transparent to-transparent blur-2xl"
                    style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }} />
            </motion.div>

            {/* Orbiting Icons */}
            <div className="relative w-48 h-48">
                {icons.map((Icon, i) => {
                    const angle = (i * 360) / icons.length;
                    return (
                        <motion.div
                            key={i}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <motion.div
                                style={{
                                    transform: `rotate(${-angle}deg) translate(80px) rotate(${angle}deg)`
                                }}
                                className="p-3 rounded-xl bg-white/5 border border-white/10 text-blue-400/60 shadow-lg backdrop-blur-md"
                            >
                                <Icon className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    );
                })}

                {/* Central Core */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-20 h-20 rounded-full bg-blue-600/20 blur-xl absolute -inset-2"
                    />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-blue-400/30">
                        <Bot className="w-8 h-8 text-white" />
                        <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CodeEditor = () => {
    const [line, setLine] = useState(0);
    const codeLines = [
        "const AI_Agent = new WorkflowAnalyzer({",
        "  detectPatterns: true,",
        "  optimizeSpeed: 'ULTRA',",
        "  security: 'ENTERPRISE_SHIELD',",
        "  deploy: () => sync(client.daily_tasks)",
        "});",
        "AI_Agent.start();"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLine(prev => (prev + 1) % codeLines.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full p-6 flex flex-col font-mono text-[13px] leading-relaxed">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/40" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                    <div className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>
                <div className="text-[10px] text-zinc-500 ml-2">builder.ts</div>
            </div>
            <div className="space-y-1.5 overflow-hidden">
                {codeLines.map((l, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                            opacity: i <= line ? 1 : 0.2,
                            x: i <= line ? 0 : -10,
                            color: i === line ? SAPPHIRE : '#71717a'
                        }}
                        className="flex gap-4"
                    >
                        <span className="text-zinc-700 w-4 text-right select-none">{i + 1}</span>
                        <span className={i === line ? "text-blue-400 font-bold" : ""}>{l}</span>
                    </motion.div>
                ))}
            </div>
            {/* Cursor cursor */}
            <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-2 h-4 bg-blue-500/60 mt-1 ml-8"
            />
        </div>
    );
};

const SuccessStats = () => {
    const stats = [
        { label: 'Workflows Optimized', value: '+45%', color: 'text-blue-400' },
        { label: 'Manual Time Saved', value: '250h/mo', color: 'text-cyan-400' },
        { label: 'System Reliability', value: '99.9%', color: 'text-indigo-400' }
    ];

    return (
        <div className="w-full h-full p-6 flex flex-col gap-4 justify-center">
            {stats.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between group/stat hover:bg-blue-600/5 transition-colors"
                >
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">{s.label}</span>
                        <motion.span
                            className={`text-2xl font-bold ${s.color}`}
                        >
                            {s.value}
                        </motion.span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center opacity-0 group-hover/stat:opacity-100 transition-opacity">
                        <Zap className="w-4 h-4 text-blue-400" />
                    </div>
                </motion.div>
            ))}

            <motion.div
                animate={{
                    boxShadow: ["0 0 10px rgba(37,99,235,0)", "0 0 20px rgba(37,99,235,0.2)", "0 0 10px rgba(37,99,235,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-2 p-4 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center gap-3"
            >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-semibold text-blue-100 italic">Continuously learning...</span>
            </motion.div>
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

                <div className="grid lg:grid-cols-3 gap-8 mt-20">
                    <Card
                        number="1"
                        title="Deep Analysis"
                        description="We conduct a high-fidelity audit of your daily operations to identify specific, high-ROI automation opportunities."
                    >
                        <WorkflowScanner />
                    </Card>

                    <Card
                        number="2"
                        title="Build & Deploy"
                        description="Our team engineers bespoke neural networks and automation logic tailored to your specific infrastructure."
                    >
                        <CodeEditor />
                    </Card>

                    <Card
                        number="3"
                        title="Continuous Evolution"
                        description="We provide real-time updates and performance hardening to ensure your AI systems stay ahead of the curve."
                    >
                        <SuccessStats />
                    </Card>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        </section>
    );
}


