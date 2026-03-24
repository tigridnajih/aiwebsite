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
    {
        step: 'Step 4',
        title: 'Deploy & Scale',
        description: 'Deploy the automated process and visualise the growth of your business',
        image: '/section_assets/deploy and scale.png'
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-20 lg:py-[100px] bg-[#f4f9ff] overflow-hidden text-slate-900">
            <div className="container-custom relative z-10">
                <div className="text-center mb-10 lg:mb-12">
                    <h2 className="text-[clamp(2.25rem,6vw,4rem)] font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                        How We Turn Your Workflow Into a System
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto tracking-tight font-medium">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                <div className="relative pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10">
                        {PHASES.map((phase, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                key={phase.step}
                                className="group relative flex flex-col p-[4px] bg-white rounded-[20px] border border-[rgba(0,102,255,0.05)] shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(15,23,42,0.12)] max-w-[200px] mx-auto"
                            >
                                {/* Image Area - 4:3 Aspect Ratio */}
                                <div className="w-full aspect-[4/3] relative mb-1 overflow-hidden flex items-center justify-center bg-slate-50 rounded-[18px]">
                                    <img
                                        src={phase.image}
                                        alt={phase.title}
                                        className="w-full h-full object-contain p-3 filter transition-transform duration-700"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="px-4 pb-5 pt-2 flex flex-col items-center text-center">
                                    <h3 className="text-[14px] md:text-[15px] font-bold text-slate-900 tracking-tight leading-tight mb-2">
                                        {phase.title}
                                    </h3>
                                    <p className="text-[11px] md:text-[12px] text-slate-500 font-medium leading-relaxed max-w-[160px]">
                                        {phase.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
