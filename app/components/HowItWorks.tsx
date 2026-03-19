'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MockupWindow = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full aspect-[16/11] bg-white rounded-xl border border-slate-100 overflow-hidden shadow-xl flex flex-col relative z-20 mb-6 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="h-5 md:h-7 bg-slate-50 flex items-center px-3 gap-1.5 shrink-0 border-b border-slate-100">
            <div className="w-2 h-2 rounded-full bg-[#FF5F56] shadow-sm" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E] shadow-sm" />
            <div className="w-2 h-2 rounded-full bg-[#27C93F] shadow-sm" />
        </div>
        <div className="flex-1 relative overflow-hidden bg-white">
            <div className="h-full p-4 flex items-center justify-center">
                {children}
            </div>
        </div>
    </div>
);

const PhaseOneMockup = () => (
    <div className="w-full">
        <MockupWindow>
            <div className="w-full h-full relative flex flex-col justify-end p-2 md:p-4">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-6 px-4 md:px-8">
                    {[500, 400, 300, 200, 100, 0].map((v) => (
                        <div key={v} className="w-full flex items-center gap-2">
                            <span className="text-[8px] md:text-[10px] text-slate-400 font-bold w-6">$ {v}K</span>
                            <div className="flex-1 h-[1px] bg-slate-100" />
                        </div>
                    ))}
                </div>
                
                <div className="relative z-10 flex items-end justify-center gap-4 md:gap-8 h-full pt-12 pb-4">
                    {/* Bar 1 */}
                    <div className="flex flex-col items-center flex-1 max-w-[60px]">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '60%' }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="w-full bg-gradient-to-t from-blue-50/50 via-blue-100 to-blue-200 rounded-lg shadow-inner ring-1 ring-blue-100/50"
                        />
                        <span className="text-[7px] md:text-[9px] text-slate-500 font-bold tracking-tighter uppercase mt-2">&lt; 1 year</span>
                    </div>
                    
                    {/* Bar 2 (3D Main) */}
                    <div className="flex flex-col items-center flex-1 max-w-[60px]">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '95%' }}
                            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                            className="w-full bg-gradient-to-t from-[#2563EB] to-[#3B5BFF] rounded-lg shadow-[8px_-8px_25px_rgba(59,91,255,0.25)] relative overflow-hidden ring-1 ring-blue-400/20"
                        >
                            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 to-transparent" />
                            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/10 to-transparent" />
                        </motion.div>
                        <span className="text-[7px] md:text-[9px] text-slate-900 font-black tracking-tighter uppercase mt-2">1-3 years</span>
                    </div>
                    
                    {/* Bar 3 */}
                    <div className="flex flex-col items-center flex-1 max-w-[60px]">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '40%' }}
                            transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                            className="w-full bg-gradient-to-t from-blue-50/50 via-blue-100 to-blue-200 rounded-lg shadow-inner ring-1 ring-blue-100/50"
                        />
                        <span className="text-[7px] md:text-[9px] text-slate-500 font-bold tracking-tighter uppercase mt-2">&gt; 3 years</span>
                    </div>
                </div>
            </div>
        </MockupWindow>
    </div>
);

const PhaseTwoMockup = () => (
    <div className="w-full">
        <MockupWindow>
            <div className="w-full h-full flex flex-col items-center justify-center relative pt-4">
                <div className="relative w-40 h-20 md:w-56 md:h-28 overflow-hidden">
                    {/* Gauge SVG for 3D accuracy */}
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                        {/* Shadow path */}
                        <path 
                            d="M 20 100 A 80 80 0 0 1 180 100" 
                            fill="none" 
                            stroke="rgba(0,0,0,0.02)" 
                            strokeWidth="32" 
                            strokeLinecap="round" 
                            style={{ transform: 'translateY(4px)' }}
                        />
                        {/* Background Arc */}
                        <path 
                            d="M 20 100 A 80 80 0 0 1 180 100" 
                            fill="none" 
                            stroke="#EFF6FF" 
                            strokeWidth="28" 
                            strokeLinecap="round" 
                        />
                        {/* Progress Arc */}
                        <motion.path 
                            d="M 20 100 A 80 80 0 0 1 180 100" 
                            fill="none" 
                            stroke="url(#gauge-grad)" 
                            strokeWidth="28" 
                            strokeLinecap="round" 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 0.8 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                        />
                        <defs>
                            <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B5BFF" />
                                <stop offset="100%" stopColor="#2563EB" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    {/* Core Centered Text */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center p-0"
                    >
                        <span className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter drop-shadow-sm leading-none">80%</span>
                    </motion.div>
                </div>
            </div>
        </MockupWindow>
    </div>
);

const PhaseThreeMockup = () => {
    const bars = [40, 70, 55, 90, 65, 45, 30, 60, 80, 50, 95, 70, 40, 60];
    return (
        <div className="w-full">
            <MockupWindow>
                <div className="w-full h-full flex items-center justify-center gap-1 md:gap-2 px-2 md:px-6">
                    {bars.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ 
                                duration: 1, 
                                delay: i * 0.04,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                            className="w-1.5 md:w-3 rounded-full bg-gradient-to-t from-blue-50/50 via-blue-400 to-[#3B5BFF] shadow-[2px_10px_15px_rgba(59,91,255,0.1)] relative overflow-hidden ring-1 ring-blue-200/20"
                        >
                            {/* Inner Shine for 3D depth */}
                            <div className="absolute top-1 left-[20%] w-[30%] h-1/4 bg-white/20 rounded-full blur-[1px]" />
                        </motion.div>
                    ))}
                </div>
            </MockupWindow>
        </div>
    );
};

const PHASES = [
    {
        number: '01',
        title: 'Analyze Client Workflow',
        description: 'We audit your systems and identify automation opportunities.',
        mockup: <PhaseOneMockup />
    },
    {
        number: '02',
        title: 'Architect & Implement Automation',
        description: 'We engineer custom solutions tailored to your operational requirements.',
        mockup: <PhaseTwoMockup />
    },
    {
        number: '03',
        title: 'Deploy & Transfer Ownership',
        description: 'We integrate systems and provide full operational independence.',
        mockup: <PhaseThreeMockup />
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 md:py-32 bg-white border-y border-slate-50 overflow-hidden text-slate-900 selection:bg-accent/10">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                        Our Engineering Process
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto tracking-tight font-medium">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 pt-10">
                    {PHASES.map((phase, index) => (
                        <div
                            key={phase.number}
                            className="group relative flex flex-col items-start p-8 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 font-sans"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-slate-900 rounded-2xl mb-6 shadow-xl">
                                <span className="text-white font-extrabold text-xl leading-none">
                                    {parseInt(phase.number)}
                                </span>
                            </div>

                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="relative z-10 w-full"
                            >
                                {phase.mockup}
                            </motion.div>

                            <div className="relative z-10 w-full mt-6">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                                    {phase.title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed tracking-tight group-hover:text-slate-600 transition-colors duration-300">
                                    {phase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
