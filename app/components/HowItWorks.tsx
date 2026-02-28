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
        <section className="relative py-24 md:py-32 bg-[#070707] border-y border-white/5 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Title Block - Higher Authority & Tightened Tracking */}
                <div className="text-center mb-24 md:mb-36">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase"
                    >
                        Our Engineering Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-base md:text-lg font-medium max-w-xl mx-auto tracking-tight opacity-70"
                    >
                        A structured lifecycle from workflow analysis to full system ownership.
                    </motion.p>
                </div>

                {/* Structured Lifecycle Pipeline */}
                <div className="relative">
                    {/* Continuous Lifecycle Backbone - Enterprise Engineering Standard */}
                    <div className="hidden md:block absolute top-[100px] left-0 w-full h-[1px] bg-white/[0.04] z-0">
                        {/* Progressing Gradient Layer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-blue-500/10 to-blue-400/30" />

                        {/* Procedural Signal Pulse */}
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
                            className="absolute top-1/2 -translate-y-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent z-10"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10">
                        {PHASES.map((phase, index) => {
                            // Enterprise Progression Hierarchy
                            const accentColor = index === 0 ? "text-gray-600" : index === 1 ? "text-blue-500/80" : "text-blue-400";
                            const dotColor = index === 0 ? "bg-gray-600" : index === 1 ? "bg-blue-500" : "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.3)]";

                            return (
                                <motion.div
                                    key={phase.number}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.12 }}
                                    viewport={{ once: true }}
                                    className="relative flex flex-col items-start px-8 md:px-12 group"
                                >
                                    {/* Phase Number - Anchored Above Backbone Line */}
                                    <div className={`font-mono text-[11px] font-bold mb-6 tracking-widest transition-colors duration-500 ${accentColor}`}>
                                        {phase.number}
                                    </div>

                                    {/* Desktop Backbone Node & Vertical Tick */}
                                    <div className="hidden md:flex items-center justify-center w-full h-[1px] relative mb-12">
                                        {/* Structural Node (The intersection point) */}
                                        <div className={`absolute left-0 w-1.5 h-1.5 rounded-full -translate-x-1/2 transition-all duration-500 ${dotColor}`} />
                                        {/* Vertical Tick Drop */}
                                        <div className="absolute left-0 top-0 w-[1px] h-6 bg-white/[0.08]" />
                                    </div>

                                    {/* Title - Heavy Weight & Architectural Alignment */}
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter mb-4 transition-colors duration-500 group-hover:text-blue-50">
                                        {phase.title}
                                    </h3>

                                    {/* Description - Muted & Concise */}
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px] tracking-tight transition-colors duration-500 group-hover:text-gray-400">
                                        {phase.description}
                                    </p>

                                    {/* Mobile Lifecycle Connector */}
                                    {index < PHASES.length - 1 && (
                                        <div className="md:hidden absolute left-12 bottom-0 w-[1px] h-12 bg-white/5">
                                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Background Separation Overlay */}
            <div className="absolute inset-0 bg-blue-500/[0.01] pointer-events-none" />
        </section>
    );
}
