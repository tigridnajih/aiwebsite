'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BENEFITS = [
    {
        title: 'Unified Analytics',
        description: 'Get every metric in one dashboard — no more spreadsheets or missed signals.',
        image: '/section_assets/benefits1.avif'
    },
    {
        title: 'Seamless Collaboration',
        description: 'Real-time updates keep your whole team on the same page, across every project.',
        image: '/section_assets/benefits2.avif'
    },
    {
        title: 'Automated Processes',
        description: 'Cut manual work with built-in alerts, reporting, and task automation.',
        image: '/section_assets/benefits3.avif'
    }
];

export default function Benefits() {
    return (
        <section className="relative pt-4 pb-24 bg-white overflow-hidden text-slate-900 font-sans">
            <div className="container-custom relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[9px] font-bold text-black uppercase tracking-[1px]">
                            Benefits
                        </span>
                    </div>
                    <h2 className="text-[28px] md:text-[40px] font-sans font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4">
                        Unlock New Levels of <span className="text-blue-600">Efficiency</span>
                    </h2>
                    <p className="text-[#4B5563] text-[15px] max-w-2xl mx-auto font-normal leading-[1.6]">
                        Discover how our AI-driven systems transform your daily operations and accelerate growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={benefit.title}
                            className="flex flex-col h-full bg-white rounded-[26px] border-[3px] border-[#F1F5F9] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Top Half - Light Grey Background with Icon */}
                            <div className="bg-[#F8FAFC] p-8 pb-10 flex items-start">
                                <div className="w-12 h-12 relative grayscale-0 opacity-100 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100/50 shadow-sm">
                                    <img
                                        src={benefit.image}
                                        alt={benefit.title}
                                        className="w-7 h-7 object-contain"
                                    />
                                </div>
                            </div>
 
                            {/* Blue Separator Line */}
                            <div className="h-[2px] bg-[#3B82F6] w-full" />
 
                            {/* Bottom Half - White Background with Content */}
                            <div className="p-8 pt-6 bg-white flex flex-col items-start text-left flex-1">
                                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0F172A] leading-tight mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#64748B] text-[14px] font-normal leading-[1.6]">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
