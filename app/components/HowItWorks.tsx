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

                {/* 3-Card Grid with Connector */}
                <div className="relative">
                    {/* Animated Connector Line - Desktop */}
                    <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-white/[0.08] z-0">
                        <motion.div
                            animate={{
                                backgroundPosition: ['0% 0%', '200% 0%'],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ backgroundSize: '200% 100%' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {PHASES.map((phase, index) => (
                            <div
                                key={phase.number}
                                className="group relative flex flex-col items-start p-8 md:p-10 border border-white/10 bg-white/[0.02] rounded-3xl transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.04]"
                            >
                                {/* White Circular Number Badge */}
                                <div className="relative z-10 flex items-center justify-center w-11 h-11 bg-white rounded-full mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    <span className="text-black font-extrabold text-lg leading-none">
                                        {parseInt(phase.number)}
                                    </span>
                                </div>

                                {/* Title & Description (Left-Aligned) */}
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-50 transition-colors">
                                    {phase.title}
                                </h3>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed tracking-tight group-hover:text-gray-400 transition-colors">
                                    {phase.description}
                                </p>

                                {/* Mobile Connector Line */}
                                {index < PHASES.length - 1 && (
                                    <div className="md:hidden absolute -bottom-10 left-11 w-px h-10 bg-gradient-to-b from-white/10 to-transparent overflow-hidden">
                                        <motion.div
                                            animate={{ y: ['-100%', '100%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="w-full h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
