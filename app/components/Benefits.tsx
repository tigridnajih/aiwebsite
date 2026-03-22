'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BENEFITS = [
    {
        title: 'Unified Analytics',
        description: 'Get every metric in one dashboard — no more spreadsheets or missed signals.',
        image: '/section_assets/benefits_1.avif'
    },
    {
        title: 'Seamless Collaboration',
        description: 'Real-time updates keep your whole team on the same page, across every project.',
        image: '/section_assets/benefits_2.avif'
    },
    {
        title: 'Automated Processes',
        description: 'Cut manual work with built-in alerts, reporting, and task automation.',
        image: '/section_assets/benefits_3.avif'
    }
];

export default function Benefits() {
    return (
        <section className="relative py-20 lg:py-[100px] bg-white overflow-hidden text-slate-900">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {BENEFITS.map((benefit, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={benefit.title}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Image Container */}
                            <div className="w-full aspect-square relative mb-8 rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100/50 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/5 group-hover:-translate-y-1">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[280px] font-medium opacity-80">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
