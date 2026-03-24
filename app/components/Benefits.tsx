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
        <section className="relative py-24 bg-[#f4f9ff] overflow-hidden text-slate-900 font-sans">
            <div className="container-custom relative z-10">
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-md">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[10px] font-bold text-black uppercase tracking-[1px]">
                            Benefits
                        </span>
                    </div>
                    <h2 className="text-[28px] md:text-[36px] font-sans font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4">
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
                            className="flex flex-col h-full items-start text-left group p-[5px] bg-white rounded-[23px] border border-[rgba(0,102,255,0.05)] shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(15,23,42,0.12)]"
                        >
                            {/* Image Container */}
                            <div className="w-full aspect-[4/3] relative mb-3 rounded-[18px] overflow-hidden bg-slate-50 transition-transform duration-500 group-hover:scale-[1.02]">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Content Area */}
                            <div className="px-6 pb-6 pt-0 flex-1 flex flex-col items-center text-center">
                                <h3 className="text-[20px] font-semibold text-[#0F172A] leading-[1.2] tracking-normal mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-[#64748B] text-[13px] font-normal leading-[1.5] max-w-[280px] mx-auto">
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
