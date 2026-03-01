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
            <div className="flex-1 bg-gradient-to-b from-[#385BFF]/10 to-transparent rounded-lg border border-[#385BFF]/20 flex items-end justify-center gap-1.5 p-2 px-2 shadow-[inset_0_0_15px_rgba(56,91,255,0.05)]">
                {[40, 70, 45, 90, 60].map((h, i) => (
                    <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        key={i}
                        className={`w-3 rounded-t-sm ${i === 3 ? 'bg-gradient-to-t from-[#385BFF] to-white' : 'bg-[#385BFF]/40'}`}
                    />
                ))}
            </div>
            <div className="h-8 md:h-10 bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-1.5 justify-center">
                <div className="w-full h-1 bg-white/10 rounded-full" />
                <div className="w-3/4 h-1 bg-white/10 rounded-full" />
                <div className="w-5/6 h-1 bg-white/10 rounded-full" />
            </div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-[#385BFF]/20 to-transparent rounded-lg border border-[#385BFF]/20 flex items-center justify-center relative overflow-hidden">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-white/20"
                />
                <div className="absolute inset-2 rounded-full border border-white/20" />
                <div className="absolute inset-4 rounded-full border border-[#385BFF]" />
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden">
                    <motion.div
                        initial={{ x: "100%", y: "-100%" }}
                        whileInView={{ x: 0, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full h-[2px] bg-gradient-to-r from-transparent to-white absolute top-1/2 left-0 -rotate-45 origin-left"
                    />
                </div>
            </div>
        </div>
    </MockupWindow>
);

const PhaseTwoMockup = () => (
    <MockupWindow>
        <div className="w-full h-full bg-gradient-to-br from-[#385BFF]/10 via-transparent to-transparent rounded-lg border border-[#385BFF]/20 relative overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#385BFF]/20 blur-[30px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 blur-[20px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="flex flex-col items-start gap-2 w-3/4 absolute top-4 left-4">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="h-1.5 bg-[#385BFF] rounded-full opacity-80" />
                <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }} className="h-1.5 bg-white/20 rounded-full" />
                <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }} className="h-1.5 bg-white/20 rounded-full" />
                <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.3 }} className="h-1.5 bg-white/20 rounded-full mt-2" />
                <motion.div initial={{ width: 0 }} whileInView={{ width: "50%" }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.4 }} className="h-1.5 bg-white/20 rounded-full" />
            </div>
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
                <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] font-medium transition-colors ${item.active ? 'bg-gradient-to-r from-[#385BFF]/80 to-transparent border border-[#385BFF]/50 text-white shadow-[0_0_10px_rgba(56,91,255,0.2)]' : 'text-white/40 bg-white/5 border border-transparent'}`}>
                    {item.active ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_#fff] flex-shrink-0" />
                    ) : (
                        <div className="w-1.5 h-1.5 rounded-full border border-white/30 flex-shrink-0" />
                    )}
                    {item.label}
                </div>
            ))}
        </div>
        <div className="w-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-lg border border-[#385BFF]/20 p-2 flex flex-col items-center justify-center relative text-center">
            <span className="text-white/40 text-[8px] absolute top-2 left-2 uppercase tracking-wider">Status:</span>

            <div className="relative flex items-center justify-center w-8 h-8 mb-3 mt-2">
                <div className="absolute inset-0 border-2 border-[#385BFF]/20 rounded-full" />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-transparent border-t-white rounded-full"
                />
            </div>

            <div className="w-[80%] bg-white/10 h-1 rounded-full overflow-hidden mt-1 relative">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#385BFF] to-transparent"
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 pt-16">
                    {PHASES.map((phase) => (
                        <div
                            key={phase.number}
                            className="group relative flex flex-col items-start p-6 md:p-8 bg-gradient-to-b from-black to-[#385BFF]/80 rounded-[2.5rem] mt-6 transition-all shadow-[0_10px_40px_rgba(56,91,255,0.1)] duration-300"
                        >
                            {/* Number Badge floating at the absolute top boundary */}
                            <div className="absolute top-0 left-8 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] z-30">
                                <span className="text-black font-extrabold text-xl leading-none">
                                    {parseInt(phase.number)}
                                </span>
                            </div>

                            <div className="relative z-10 w-full mt-4">
                                {phase.mockup}
                            </div>

                            <div className="relative z-10 w-full mt-6">
                                {/* Title & Description */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-50 transition-colors duration-300">
                                    {phase.title}
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-tight group-hover:text-gray-200 transition-colors duration-300">
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
