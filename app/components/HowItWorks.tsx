'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PHASES = [
    {
        step: 'Step 1',
        title: 'Connect',
        description: 'Connect with your tools and data',
        image: '/section_assets/connect_your_data.avif'
    },
    {
        step: 'Step 2',
        title: 'Automate',
        description: 'Automate your workflows and process',
        image: '/section_assets/automate_the_workflow.avif'
    },
    {
        step: 'Step 3',
        title: 'Track & Improve',
        description: 'Monitor performance a & optmize it',
        image: '/section_assets/track_and_improve.avif'
    },
    {
        step: 'Step 4',
        title: 'Deploy & Scale',
        description: 'Deploy & visualise the growth',
        image: '/section_assets/deploy and scale.png'
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 bg-[#f4f9ff] overflow-hidden text-slate-900 font-inter">
            <div className="container-custom relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-md">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[9px] font-bold text-black uppercase tracking-[1px]">
                            How It Works
                        </span>
                    </div>
                    <h2 className="text-[28px] md:text-[40px] font-sans font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4">
                        How We Turn Your Workflow Into a System
                    </h2>
                    <p className="text-[#4B5563] text-[15px] max-w-2xl mx-auto font-normal leading-[1.6]">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                <div className="relative pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                        {PHASES.map((phase, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                key={phase.step}
                                className="group flex flex-col bg-white rounded-[26px] border-[3px] border-[#F1F5F9] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Top Half - Light Grey Background with Icon */}
                                <div className="bg-[#F1F5F9] p-6 pb-8 flex items-start">
                                    <div className="w-20 h-20 relative flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100/50 shadow-sm">
                                        <img
                                            src={phase.image}
                                            alt={phase.title}
                                            className="w-14 h-14 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Blue Separator Line */}
                                <div className="h-[2px] bg-[#3B82F6] w-full" />

                                {/* Bottom Half - White Background with Content */}
                                <div className="p-6 pt-5 bg-white flex flex-col items-start text-left flex-1">
                                    <h3 className="text-[16px] md:text-[18px] font-sans font-bold text-slate-900 leading-tight mb-2">
                                        {phase.title}
                                    </h3>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
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
