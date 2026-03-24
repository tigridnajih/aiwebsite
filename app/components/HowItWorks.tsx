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
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[10px] font-bold text-black uppercase tracking-[1px]">
                            How It Works
                        </span>
                    </div>
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4">
                        How We Turn Your Workflow Into a System
                    </h2>
                    <p className="text-[#4B5563] text-[16px] md:text-[18px] max-w-2xl mx-auto font-normal leading-[1.6]">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                <div className="relative pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[7px] relative z-10">
                        {PHASES.map((phase, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                key={phase.step}
                                className="group relative flex flex-row items-center p-3 sm:p-4 bg-white rounded-[18px] border border-[rgba(0,102,255,0.05)] shadow-[0_15px_30px_-5px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.12)] w-full"
                            >
                                {/* Image Area - 1:1 Aspect Ratio (Square) */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 relative overflow-hidden flex items-center justify-center bg-slate-50 rounded-[14px]">
                                    <img
                                        src={phase.image}
                                        alt={phase.title}
                                        className="w-full h-full object-contain p-2 filter transition-transform duration-700"
                                    />
                                </div>

                                {/* Text Content - Right Side */}
                                <div className="ml-4 flex-1 flex flex-col items-start text-left">
                                    <h3 className="text-[13px] md:text-[14px] font-bold text-slate-900 tracking-tight leading-tight mb-1">
                                        {phase.title}
                                    </h3>
                                    <p className="text-[10px] md:text-[11px] text-slate-500 font-medium leading-snug">
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
