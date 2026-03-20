'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        label: 'PROVEN RESULTS',
        title: '200+ businesses automated',
        icon: '/section_assets/proven_result.avif',
    },
    {
        label: 'SEAMLESS AI INTEGRATION',
        title: 'Works with your existing tools',
        icon: '/section_assets/seamless_aiintegration.avif',
    },
    {
        label: 'TAILORED FOR YOU',
        title: 'Custom AI solutions',
        icon: '/section_assets/tailored_for_you.avif',
    },
    {
        label: 'ONGOING SUPPORT',
        title: 'We ensure your AI runs smoothly',
        icon: '/section_assets/ongoing_support.avif',
    }
];

export default function WhyTrustUs() {
    return (
        <section className="py-24 bg-white text-slate-900 overflow-hidden relative">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-900">
                        Why top brands trust us
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            className="group relative flex flex-col p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:border-accent/20 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 overflow-hidden min-h-[420px]"
                        >
                            {/* Card Header Label */}
                            <div className="text-[10px] md:text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-12 relative z-10">
                                [ {feature.label} ]
                            </div>

                            {/* Headline - Moved to middle/bottom as per visual flow */}
                            <div className="relative z-10 mt-auto">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-[1.1] tracking-tight group-hover:text-accent transition-colors duration-300">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* 🎥 Right-Aligned & Cropped Icon */}
                            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-4">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain filter drop-shadow-[10px_20px_30px_rgba(59,91,255,0.15)]"
                                />
                            </div>

                            {/* Subtle Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />
        </section>
    );
}
