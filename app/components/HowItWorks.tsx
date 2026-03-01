'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MockupWindow = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full aspect-[16/11] bg-gradient-to-br from-[#0a0f25] to-[#04060e] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col relative z-20 mb-6 group-hover:-translate-y-2 transition-transform duration-500">
        <div className="h-5 md:h-6 bg-white/5 flex items-center px-3 gap-1.5 border-b border-white/10 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 p-3 flex gap-3">
            {children}
        </div>
    </div>
);

const PhaseOneMockup = () => (
    <MockupWindow>
        <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 bg-[#385BFF] rounded-lg border border-white/20 flex items-end justify-center gap-1.5 p-2 px-2 shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]">
                {[40, 70, 45, 90, 60].map((h, i) => (
                    <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        key={i}
                        className={`w-3 rounded-t-sm bg-white`}
                    />
                ))}
            </div>
            <div className="h-8 md:h-10 bg-black/40 rounded-lg border border-white/10 p-2 flex flex-col gap-1.5 justify-center">
                <div className="w-full h-1 bg-white rounded-full" />
                <div className="w-3/4 h-1 bg-white rounded-full" />
                <div className="w-5/6 h-1 bg-white rounded-full" />
            </div>
        </div>
        <div className="flex-1 bg-[#385BFF] rounded-lg border border-white/20 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                {/* Dynamic Radar Sweep */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-10"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, white 360deg)",
                        maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
                        WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
                        opacity: 0.5
                    }}
                />

                {/* Fixed Circles */}
                <div className="absolute inset-0 rounded-full border border-white/30" />
                <div className="absolute inset-2 rounded-full border border-white/30" />
                <div className="absolute inset-4 rounded-full border border-white/50" />

                {/* Center Point */}
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full z-20" />
            </div>
        </div>
    </MockupWindow>
);

const PhaseTwoMockup = () => (
    <MockupWindow>
        <div className="w-full h-full bg-[#385BFF] rounded-lg border border-white/20 relative overflow-hidden flex flex-col p-4 gap-3">
            <div className="flex flex-col gap-2 relative z-10 w-full">
                <motion.div
                    animate={{ y: [0, -100] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
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
                            <div className="flex gap-2 ml-4">
                                <div className="h-1.5 w-20 bg-white/20 rounded-full" />
                                <div className="h-1.5 w-16 bg-white/60 rounded-full" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade Overlays */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#385BFF] to-transparent z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#385BFF] to-transparent z-20" />
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
                <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] font-medium transition-colors ${item.active ? 'bg-[#385BFF] border border-white/30 text-white' : 'text-white/40 bg-white/5 border border-transparent'}`}>
                    {item.active ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    ) : (
                        <div className="w-1.5 h-1.5 rounded-full border border-white/30 flex-shrink-0" />
                    )}
                    {item.label}
                </div>
            ))}
        </div>
        <div className="w-1/2 bg-[#385BFF] rounded-lg border border-white/20 p-2 flex flex-col items-center justify-center relative text-center shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]">
            <span className="text-white text-[8px] absolute top-2 left-2 uppercase tracking-wider font-bold">Status:</span>

            <div className="relative flex items-center justify-center w-8 h-8 mb-3 mt-2">
                <div className="absolute inset-0 border-2 border-white/20 rounded-full" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-transparent border-t-white rounded-full"
                />
            </div>

            <div className="w-[80%] bg-white/20 h-1 rounded-full overflow-hidden mt-1 relative">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/2 bg-white"
                />
            </div>
            <span className="text-white text-[9px] mt-1.5 font-bold uppercase tracking-wider">Updating</span>
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
        <section className="relative py-24 md:py-32 bg-black border-y border-white/5 overflow-hidden text-white selection:bg-[#385BFF]/30">
            <div className="container-custom relative z-10">
                {/* Centered Heading */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">
                        Our Engineering Process
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto tracking-tight">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 pt-10">
                    {PHASES.map((phase) => (
                        <div
                            key={phase.number}
                            className="group relative flex flex-col items-start p-6 md:p-8 bg-black rounded-[2.5rem] border border-white/10 transition-all duration-300"
                        >
                            {/* Number Badge inside the card */}
                            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <span className="text-black font-extrabold text-lg leading-none">
                                    {parseInt(phase.number)}
                                </span>
                            </div>

                            <div className="relative z-10 w-full">
                                {phase.mockup}
                            </div>

                            <div className="relative z-10 w-full mt-6">
                                {/* Title & Description */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#385BFF] transition-colors duration-300">
                                    {phase.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-tight group-hover:text-gray-300 transition-colors duration-300">
                                    {phase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
