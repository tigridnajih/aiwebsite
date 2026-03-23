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
        <section id="how-it-works" className="relative py-20 lg:py-[120px] bg-[#f4f9ff] overflow-hidden text-slate-900">
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
                            className="group relative flex flex-col p-[5px] bg-white rounded-[23px] border border-[rgba(0,102,255,0.05)] transition-all duration-300 hover:-translate-y-1"
                            style={{ 
                                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' 
                            }}
                        >
                            {/* Image Area - Match Benefits aspect-square */}
                            <div className="w-full aspect-square relative mb-6 overflow-hidden flex items-center justify-center bg-slate-50 rounded-[18px]">
                                <img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="w-full h-full object-contain filter transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Circular Step Badge - Placed inside text area for better sizing */}
                            <div className="px-6 flex flex-col items-start pb-8">
                                <div className="flex mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transition-transform duration-500 group-hover:scale-110">
                                        <span className="text-lg font-black leading-none">
                                            {index + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                                    {phase.title}
                                </h3>
                                <p className="text-[#64748b] text-[13px] md:text-sm leading-relaxed font-medium opacity-90">
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
