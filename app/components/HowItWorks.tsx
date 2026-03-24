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

                <div className="relative pt-0 lg:pt-4 min-h-[500px]">
                    {/* Thick Connecting Line - Desktop (4 cols) */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block z-0">
                        <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
                            <path 
                                d="M 125 100 L 200 100 Q 250 100 250 150 L 250 300 Q 250 350 300 350 L 375 350 L 450 350 Q 500 350 500 300 L 500 150 Q 500 100 550 100 L 625 100 L 700 100 Q 750 100 750 150 L 750 300 Q 750 350 800 350 L 875 350" 
                                stroke="#2563EB" strokeWidth="6" strokeOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" 
                            />
                        </svg>
                    </div>

                    {/* Z-Pattern Connecting Line - Tablet (2 cols) */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden sm:block lg:hidden z-0">
                        <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" preserveAspectRatio="none">
                            <path 
                                d="M 250 150 L 750 150 C 950 150, 950 350, 500 350 C 50 350, 50 550, 250 550 L 750 550" 
                                stroke="#2563EB" strokeWidth="10" strokeOpacity="0.1" strokeLinecap="round" strokeLinejoin="round" 
                            />
                        </svg>
                    </div>

                    {/* Vertical Connecting Line - Mobile (1 col) */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-blue-600/10 pointer-events-none sm:hidden z-0 rounded-full" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-0 relative z-10 pt-2">
                        {PHASES.map((phase, index) => (
                            <div 
                                key={phase.step}
                                className={`relative z-10 ${index % 2 !== 0 ? 'lg:pt-48' : ''}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
