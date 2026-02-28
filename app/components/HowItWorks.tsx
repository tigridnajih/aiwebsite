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

                {/* Structured Pipeline Container */}
                <div className="relative">
                    {/* Central Backbone Line - Desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.05] -translate-y-1/2 z-0">
                        {/* Gradient Accent Overlay */}
                        <div className="absolute inset-x-0 h-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0" />

                        {/* Animated Pulse - Moving through the backbone */}
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
                            className="absolute top-1/2 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
                        {PHASES.map((phase, index) => {
                            // Visual Progression Logic
                            const opacityClass = index === 0 ? "opacity-60" : index === 1 ? "opacity-80" : "opacity-100";
                            const accentColor = index === 0 ? "bg-white/10" : index === 1 ? "bg-blue-500/20" : "bg-blue-500/40";
                            const borderAccent = index === 0 ? "border-white/10" : index === 1 ? "border-blue-500/20" : "border-blue-500/40";

                            return (
                                <motion.div
                                    key={phase.number}
                                    initial={{ opacity: 0, y: 5 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex flex-col items-start px-8 md:px-12 py-10 md:py-16 transition-all duration-500 group ${opacityClass}`}
                                >
                                    {/* Phase Number - Mono & Subtle */}
                                    <div className="font-mono text-xs font-bold text-gray-600 mb-6 tracking-widest">
                                        {phase.number}
                                    </div>

                                    {/* Title - Bold & Left Aligned */}
                                    <h3 className="text-xl font-bold text-white mb-6 tracking-tight group-hover:text-blue-50 transition-colors">
                                        {phase.title}
                                    </h3>

                                    {/* Internal Divider Line (The Backbone intersection) */}
                                    <div className={`w-full h-[1px] mb-6 transition-colors duration-500 ${accentColor}`} />

                                    {/* Concise Explanation */}
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] group-hover:text-gray-400 transition-colors">
                                        {phase.description}
                                    </p>

                                    {/* Mobile Vertical Backbone Link */}
                                    {index < PHASES.length - 1 && (
                                        <div className="md:hidden absolute bottom-0 left-12 w-[1px] h-10 bg-white/5" />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Background Separation Layer */}
            <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />
        </section>
    );
}
