'use client';

import { motion } from 'framer-motion';

const PHASES = [
    {
        number: '01',
        title: 'Analyze Client Workflow',
        description: 'We audit your systems and identify automation opportunities.',
    },
    {
        number: '02',
        title: 'Architect & Implement Automation',
        description: 'We engineer custom solutions tailored to your operational requirements.',
    },
    {
        number: '03',
        title: 'Deploy & Transfer Ownership',
        description: 'We integrate systems and provide full operational independence.',
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-24 md:py-32 bg-black border-y border-white/5 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Centered Heading */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                        Our Engineering Process
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto tracking-tight">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {PHASES.map((phase) => (
                        <div
                            key={phase.number}
                            className="group flex flex-col items-start p-8 md:p-10 border border-white/10 bg-white/[0.02] rounded-[4px] transition-colors duration-300 hover:border-white/30"
                        >
                            {/* White Circular Number Badge */}
                            <div className="flex items-center justify-center w-11 h-11 bg-white rounded-full mb-8">
                                <span className="text-black font-bold text-lg leading-none">
                                    {parseInt(phase.number)}
                                </span>
                            </div>

                            {/* Title & Description (Left-Aligned) */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                                {phase.title}
                            </h3>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed tracking-tight group-hover:text-gray-400 transition-colors duration-300">
                                {phase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
