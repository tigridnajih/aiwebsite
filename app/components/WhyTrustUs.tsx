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
        <section className="relative py-20 lg:py-[120px] bg-white text-slate-900 overflow-hidden">
            {/* Perspective wrapper for 3D effect */}
            <div className="container-custom relative z-10" style={{ perspective: '2000px' }}>
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-[clamp(2.25rem,6vw,4rem)] font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                        Why top brands trust us
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative flex flex-col p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden min-h-[460px] text-center"
                        >
                            {/* Card Header Label */}
                            <div className="text-[10px] md:text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-12 relative z-10 opacity-70">
                                [ {feature.label} ]
                            </div>

                            {/* 🎥 Centered 3D Icon Area with Floating Effect */}
                            <div className="flex-1 flex items-center justify-center relative z-10 mb-8">
                                <div className="relative w-48 h-48 md:w-60 md:h-60">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-full h-full object-contain filter drop-shadow-[20px_40px_60px_rgba(59,91,255,0.2)] transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Headline - Centered & Premium Typography */}
                            <div className="relative z-10 mt-auto">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-[1.2] tracking-tight transition-colors duration-300 mx-auto max-w-[200px]">
                                    {feature.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Atmosphere Lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/[0.015] blur-[150px] pointer-events-none rounded-full" />
        </section>
    );
}
