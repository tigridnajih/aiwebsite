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
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-[clamp(2.25rem,6vw,4rem)] font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                        How We Turn Your Workflow Into a System
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto tracking-tight font-medium">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                <div className="relative pt-12 lg:pt-24 min-h-[500px]">
                    {/* Thick Connecting Line - Desktop Only */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block z-0">
                        <svg 
                            className="w-full h-full" 
                            viewBox="0 0 1000 400" 
                            fill="none" 
                            preserveAspectRatio="none"
                        >
                            <path 
                                d="M -50 100 C 50 100, 75 100, 125 100 C 250 100, 250 300, 375 300 C 500 300, 500 100, 625 100 C 750 100, 750 300, 875 300 C 925 300, 950 300, 1050 300" 
                                stroke="#3b82f6" 
                                strokeWidth="6" 
                                strokeOpacity="0.15" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-0 relative z-10">
                        {PHASES.map((phase, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                key={phase.step}
                                className={`group relative flex flex-col p-[5px] bg-white rounded-[23px] border border-[rgba(0,102,255,0.05)] shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(15,23,42,0.12)] max-w-[240px] mx-auto
                                    ${index % 2 !== 0 ? 'lg:translate-y-32' : ''}
                                `}
                            >
                                {/* Image Area - Match Benefits aspect-square */}
                                <div className="w-full aspect-square relative mb-1 overflow-hidden flex items-center justify-center bg-slate-50 rounded-[18px]">
                                    <img
                                        src={phase.image}
                                        alt={phase.title}
                                        className="w-full h-full object-contain p-4 filter transition-transform duration-700"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="px-4 pb-4 pt-2 flex flex-col items-center text-center">
                                    <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                                        {phase.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
