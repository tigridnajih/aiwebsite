'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MockupContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full aspect-[1.1] bg-white rounded-2xl overflow-hidden flex flex-col relative z-20 mb-6 group-hover:-translate-y-2 transition-transform duration-500 shadow-sm border border-slate-100">
        <div className="h-full flex items-center justify-center relative">
            {children}
        </div>
    </div>
);

const PhaseOneMockup = () => (
    <div className="w-full h-full p-4 md:p-8 flex flex-col justify-end">
        <div className="relative h-full w-full flex flex-col pt-8">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-x-0 inset-y-8 flex flex-col justify-between pointer-events-none">
                {[500, 400, 300, 200, 100, 0].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                        <span className="text-[9px] md:text-[11px] text-slate-300 font-bold w-10 text-right">$ {v}K</span>
                        <div className="flex-1 h-[1.5px] bg-slate-50" />
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex items-end justify-center gap-4 md:gap-10 h-full pb-4 ml-10">
                <div className="flex flex-col items-center flex-1 max-w-[60px]">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '55%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="w-full bg-gradient-to-t from-blue-50/50 via-blue-100 to-blue-200 rounded-lg shadow-sm ring-1 ring-blue-100/50"
                    />
                    <span className="text-[7px] md:text-[8px] text-slate-400 font-bold tracking-tighter uppercase mt-3 whitespace-nowrap opacity-60">&lt; 1 year</span>
                </div>
                
                <div className="flex flex-col items-center flex-1 max-w-[60px]">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                        className="w-full bg-gradient-to-t from-[#2563EB] to-[#3B5BFF] rounded-lg shadow-[0_12px_24px_rgba(59,91,255,0.25)] relative overflow-hidden ring-1 ring-blue-400/20"
                    >
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 to-transparent" />
                    </motion.div>
                    <span className="text-[7px] md:text-[8px] text-slate-900 font-black tracking-tighter uppercase mt-3 whitespace-nowrap">1-3 years</span>
                </div>
                
                <div className="flex flex-col items-center flex-1 max-w-[60px]">
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '35%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                        className="w-full bg-gradient-to-t from-blue-50/50 via-blue-100 to-blue-200 rounded-lg shadow-sm ring-1 ring-blue-100/50"
                    />
                    <span className="text-[7px] md:text-[8px] text-slate-400 font-bold tracking-tighter uppercase mt-3 whitespace-nowrap opacity-60">&gt; 3 years</span>
                </div>
            </div>
        </div>
    </div>
);

const PhaseTwoMockup = () => (
    <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-full aspect-square flex items-center justify-center">
            <svg className="w-[85%] h-[85%] -rotate-180" viewBox="0 0 100 50">
                <path 
                    d="M 10 50 A 40 40 0 0 1 90 50" 
                    fill="none" 
                    stroke="#EFF6FF" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                />
                <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    d="M 10 50 A 40 40 0 0 1 90 50" 
                    fill="none" 
                    stroke="url(#gauge-grad-final)" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                />
                <defs>
                    <linearGradient id="gauge-grad-final" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B5BFF" />
                        <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                </defs>
            </svg>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
                <span className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter -mt-4">80%</span>
            </motion.div>
        </div>
    </div>
);

const PhaseThreeMockup = () => {
    const bars = [35, 65, 40, 85, 50, 75, 30, 60, 80, 45, 95, 65, 35, 55];
    return (
        <div className="w-full h-full flex items-center justify-center p-6 pb-12">
            <div className="w-full h-full flex items-center justify-center gap-1.5 md:gap-2 px-2">
                {bars.map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.05, ease: "circOut" }}
                        className="w-1.5 md:w-2.5 rounded-full bg-gradient-to-t from-blue-50/50 via-blue-400 to-[#3B5BFF] relative overflow-hidden shadow-sm"
                    >
                        <div className="absolute top-[10%] left-[20%] w-[40%] h-[30%] bg-white/20 rounded-full blur-[0.5px]" />
                    </motion.div>
                ))}
            </div>
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
        <section id="how-it-works" className="relative py-24 md:py-32 bg-white border-y border-slate-50 overflow-hidden text-slate-900">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                        Our Engineering Process
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto tracking-tight font-medium">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10 pt-10">
                    {PHASES.map((phase, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            key={phase.number}
                            className="group relative flex flex-col items-start p-8 bg-white rounded-[2.5rem] border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-slate-900 rounded-2xl mb-8 shadow-xl">
                                <span className="text-white font-extrabold text-xl leading-none">
                                    {parseInt(phase.number)}
                                </span>
                            </div>

                            <MockupContainer>
                                {phase.mockup}
                            </MockupContainer>

                            <div className="relative z-10 w-full mt-2">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                                    {phase.title}
                                </h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed tracking-tight font-medium">
                                    {phase.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
