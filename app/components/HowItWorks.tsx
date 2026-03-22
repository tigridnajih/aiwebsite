'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PHASES = [
    {
        step: 'Step 1',
        title: 'Connect your data',
        description: 'Integrate your favorite tools and import data in minutes — no coding or heavy setup needed.',
        image: '/section_assets/connect_your_data.avif'
    },
    {
        step: 'Step 2',
        title: 'Automate the workflow',
        description: 'Set up smart triggers and recurring tasks so your team can focus on what matters most.',
        image: '/section_assets/automate_the_workflow.avif'
    },
    {
        step: 'Step 3',
        title: 'Track and improve',
        description: 'Monitor performance in real-time and optimize your workflow with clear, actionable insights.',
        image: '/section_assets/track_and_improve.avif'
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-20 lg:py-[120px] bg-white border-y border-slate-50 overflow-hidden text-slate-900">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-[clamp(2.25rem,6vw,4rem)] font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                        How We Turn Your Workflow Into a System
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto tracking-tight font-medium">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 pt-8">
                    {PHASES.map((phase, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            key={phase.step}
                            className="group relative flex flex-col p-8 bg-white rounded-[2.5rem] border border-slate-100 [box-shadow:0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)] transition-all duration-500"
                        >
                            {/* Image Area - High Quality 2D Asset */}
                            <div className="w-full aspect-[4/3] relative mb-8 overflow-hidden flex items-center justify-center">
                                <img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(59,91,255,0.08)] transition-transform duration-700"
                                />
                            </div>

                            {/* Compact Step Blue Pill (Matching Screenshot 2) */}
                            <div className="flex mb-4">
                                <div className="px-3.5 py-1 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                                    <span className="text-white font-bold text-[11px] leading-none">
                                        {phase.step}
                                    </span>
                                </div>
                            </div>

                            {/* Text Content - Left Aligned */}
                            <div className="relative z-10 w-full text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-tight transition-colors duration-300">
                                    {phase.title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed tracking-tight font-medium opacity-70">
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
