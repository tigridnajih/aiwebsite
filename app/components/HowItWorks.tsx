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
        <div className="flex-1 relative overflow-hidden bg-slate-50/30">
            <div className="h-full p-3 flex gap-3">
                {children}
            </div>
            {/* Smooth white gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none z-30" />
        </div>
    </div>
);

const PhaseOneMockup = () => (
    <MockupWindow>
        <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 bg-gradient-to-br from-[#385BFF] to-[#1E3A8A] rounded-lg flex items-end justify-center gap-1.5 p-2 px-2 shadow-inner">
                {[40, 70, 45, 90, 60].map((h, i) => (
                    <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        key={i}
                        className={`w-3 rounded-t-sm bg-gradient-to-t from-white/20 to-white`}
                    />
                ))}
            </div>
            <div className="h-8 md:h-10 bg-white/20 rounded-lg border border-white/10 p-2 flex flex-col gap-1.5 justify-center">
                <div className="w-full h-1 bg-white rounded-full" />
                <div className="w-3/4 h-1 bg-white rounded-full" />
            </div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-[#385BFF] to-[#1E3A8A] rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-10"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, white 360deg)",
                        maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
                        opacity: 0.3
                    }}
                />
                <div className="absolute inset-0 rounded-full border border-white/30" />
            </div>
        </div>
    </MockupWindow>
);

const PhaseTwoMockup = () => (
    <MockupWindow>
        <div className="w-full h-full bg-gradient-to-br from-[#385BFF] to-[#1E3A8A] rounded-lg relative overflow-hidden flex flex-col p-4 gap-3">
            <div className="flex flex-col gap-2 relative z-10 w-full">
                <motion.div
                    animate={{ y: [0, -100] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="flex flex-col gap-4"
                >
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <div className="h-1.5 w-12 bg-white rounded-full" />
                                <div className="h-1.5 w-24 bg-white/40 rounded-full" />
                            </div>
                            <div className="flex gap-2 ml-4">
                                <div className="h-1.5 w-32 bg-white/20 rounded-full" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-900/40 to-transparent z-20 opacity-40" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-900/40 to-transparent z-20 opacity-40" />
        </div>
    </MockupWindow>
);

const PhaseThreeMockup = () => (
    <MockupWindow>
        <div className="w-1/2 flex flex-col justify-center gap-1.5 pr-1">
            {[
                { label: 'Security', active: false },
                { label: 'Efficiency', active: true },
                { label: 'Speed', active: false },
                { label: 'Accuracy', active: false }
            ].map((item, i) => (
                <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] font-medium transition-colors ${item.active ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-400 bg-slate-100'}`}>
                    {item.active ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    ) : (
                        <div className="w-1.5 h-1.5 rounded-full border border-slate-300 flex-shrink-0" />
                    )}
                    {item.label}
                </div>
            ))}
        </div>
        <div className="w-1/2 bg-gradient-to-br from-[#385BFF] to-[#1E3A8A] rounded-lg p-2 flex flex-col items-center justify-center relative text-center shadow-inner overflow-hidden">
            <div className="flex flex-col items-center -mt-4 gap-4">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center"
                >
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/40 rounded-full"
                            style={{ transform: `rotate(${i * 45}deg) translateY(-16px)` }}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    </MockupWindow>
);

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
        <section className="relative py-24 md:py-32 bg-white border-y border-slate-50 overflow-hidden text-slate-900 selection:bg-accent/10">
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
                            className="group relative flex flex-col items-start p-8 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50"
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
