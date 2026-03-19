'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MockupContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full aspect-[16/11] bg-white rounded-xl overflow-hidden flex flex-col relative z-20 mb-6 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="h-full flex items-center justify-center relative">
            {children}
        </div>
    </div>
);

const PhaseOneMockup = () => (
    <div className="w-full h-full">
        <MockupContainer>
            <div className="w-full h-full relative flex flex-col justify-end p-4 md:p-6">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-10 px-2 md:px-4">
                    {[500, 400, 300, 200, 100, 0].map((v) => (
                        <div key={v} className="w-full flex items-center gap-2">
                            <span className="text-[8px] md:text-[10px] text-slate-300 font-bold w-6 whitespace-nowrap">$ {v}K</span>
                            <div className="flex-1 h-[1px] bg-slate-50" />
                        </div>
                    ))}
                </div>
                
                <div className="relative z-10 flex items-end justify-center gap-4 md:gap-8 h-[60%] mb-4">
                    {/* Bar 1 */}
                    <div className="flex flex-col items-center flex-1 max-w-[50px] h-full justify-end">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '60%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="w-full bg-gradient-to-t from-blue-50/50 via-blue-100 to-blue-200 rounded-lg shadow-inner ring-1 ring-blue-100/50"
                        />
                        <span className="text-[7px] md:text-[8px] text-slate-400 font-bold tracking-tighter uppercase mt-3 whitespace-nowrap">&lt; 1 year</span>
                    </div>
                    
                    {/* Bar 2 (3D Main) */}
                    <div className="flex flex-col items-center flex-1 max-w-[50px] h-full justify-end">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '95%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
                            className="w-full bg-gradient-to-t from-[#2563EB] to-[#3B5BFF] rounded-lg shadow-[0_10px_25px_rgba(59,91,255,0.2)] relative overflow-hidden ring-1 ring-blue-400/20"
                        >
                            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 to-transparent" />
                        </motion.div>
                        <span className="text-[7px] md:text-[8px] text-slate-900 font-black tracking-tighter uppercase mt-3 whitespace-nowrap">1-3 years</span>
                    </div>
                    
                    {/* Bar 3 */}
                    <div className="flex flex-col items-center flex-1 max-w-[50px] h-full justify-end">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '40%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
                            className="w-full bg-gradient-to-t from-blue-50/50 via-blue-100 to-blue-200 rounded-lg shadow-inner ring-1 ring-blue-100/50"
                        />
                        <span className="text-[7px] md:text-[8px] text-slate-400 font-bold tracking-tighter uppercase mt-3 whitespace-nowrap">&gt; 3 years</span>
                    </div>
                </div>
            </div>
        </MockupContainer>
    </div>
);

const PhaseTwoMockup = () => (
    <div className="w-full h-full">
        <MockupContainer>
            <div className="w-full h-full flex flex-col items-center justify-center relative pb-4">
                <div className="relative w-40 h-20 md:w-56 md:h-28 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 200 100">
                        <path 
                            d="M 20 100 A 80 80 0 0 1 180 100" 
                            fill="none" 
                            stroke="#F8FAFC" 
                            strokeWidth="24" 
                            strokeLinecap="round" 
                        />
                        <motion.path 
                            d="M 20 100 A 80 80 0 0 1 180 100" 
                            fill="none" 
                            stroke="url(#gauge-grad-2)" 
                            strokeWidth="24" 
                            strokeLinecap="round" 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 0.8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, ease: "circOut" }}
                        />
                        <defs>
                            <linearGradient id="gauge-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B5BFF" />
                                <stop offset="100%" stopColor="#2563EB" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute bottom-1 inset-x-0 flex flex-col items-center justify-center"
                    >
                        <span className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">80%</span>
                    </motion.div>
                </div>
            </div>
        </MockupContainer>
    </div>
);

const PhaseThreeMockup = () => {
    const bars = [30, 60, 45, 80, 55, 35, 25, 50, 70, 40, 85, 60, 30, 50];
    return (
        <div className="w-full h-full">
            <MockupContainer>
                <div className="w-full h-full flex items-center justify-center gap-1.5 md:gap-2 px-6">
                    {bars.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1, 
                                delay: i * 0.05,
                                ease: "circOut"
                            }}
                            className="w-1.5 md:w-2.5 rounded-full bg-gradient-to-t from-blue-50/50 via-blue-400 to-[#3B5BFF] relative overflow-hidden"
                        >
                            <div className="absolute top-1 left-[25%] w-[30%] h-1/4 bg-white/30 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </MockupContainer>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 pt-10">
                    {PHASES.map((phase, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            key={phase.number}
                            className="group relative flex flex-col items-start p-8 bg-white"
                        >
                            <div className="flex items-center justify-center w-12 h-12 bg-slate-900 rounded-2xl mb-8 shadow-xl">
                                <span className="text-white font-extrabold text-xl leading-none">
                                    {parseInt(phase.number)}
                                </span>
                            </div>

                            <div className="w-full">
                                {phase.mockup}
                            </div>

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
