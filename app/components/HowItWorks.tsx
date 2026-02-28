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
        <section className="relative py-32 bg-[#070707] border-y border-white/5 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Title Block */}
                <div className="text-center mb-40">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4"
                    >
                        Our Engineering Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-base md:text-lg font-medium max-w-xl mx-auto tracking-tight"
                    >
                        A structured lifecycle from workflow analysis to full system ownership.
                    </motion.p>
                </div>

                {/* Lifecycle Pipeline */}
                <div className="relative">
                    {/* Desktop Connecting Line Layer */}
                    <div className="hidden md:block absolute top-[22px] left-[15%] right-[15%] h-[1px] bg-white/[0.08] z-0">
                        {/* Gradient Accent Overlay */}
                        <div className="absolute inset-x-0 h-full bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />

                        {/* Animated Pulse - Desktop */}
                        <motion.div
                            animate={{
                                left: ['-5%', '105%'],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-10"
                        >
                            <div className="w-full h-full bg-blue-500 rounded-full blur-[2px]" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4">
                        {PHASES.map((phase, index) => (
                            <motion.div
                                key={phase.number}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative group px-4"
                            >
                                {/* Visual Marker (Number) */}
                                <div className="relative z-10 mb-8">
                                    <span className="inline-block font-mono text-sm font-medium text-gray-600 bg-[#070707] pr-4">
                                        [{phase.number}]
                                    </span>
                                </div>

                                {/* Content Container */}
                                <div className="border border-white/5 bg-white/[0.01] p-8 md:p-6 lg:p-8 transition-all duration-500 group-hover:border-blue-500/20 group-hover:bg-white/[0.02]">
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-50 transition-colors">
                                        {phase.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                                        {phase.description}
                                    </p>
                                </div>

                                {/* Mobile Connector */}
                                {index < PHASES.length - 1 && (
                                    <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/10">
                                        <motion.div
                                            animate={{
                                                top: ['0%', '100%'],
                                                opacity: [0, 1, 1, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full blur-[1px]"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Separation Layer */}
            <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />
        </section>
    );
}
