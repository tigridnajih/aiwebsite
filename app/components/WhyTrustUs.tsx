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
            {/* Perspective wrapper for 3D effect */}
            <div className="container-custom relative z-10" style={{ perspective: '2000px' }}>
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-900">
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
                            whileHover={{ 
                                y: -15, 
                                rotateX: 2, 
                                rotateY: 2,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            className="group relative flex flex-col p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(59,91,255,0.1)] transition-all duration-500 overflow-hidden min-h-[460px] text-center"
                        >
                            {/* Card Header Label */}
                            <div className="text-[10px] md:text-[11px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-12 relative z-10 opacity-70">
                                [ {feature.label} ]
                            </div>

                            {/* 🎥 Centered 3D Icon Area with Floating Effect */}
                            <div className="flex-1 flex items-center justify-center relative z-10 mb-8">
                                <motion.div
                                    animate={{ 
                                        y: [0, -8, 0],
                                        rotate: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5
                                    }}
                                    className="relative w-48 h-48 md:w-60 md:h-60"
                                >
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-full h-full object-contain filter drop-shadow-[20px_40px_60px_rgba(59,91,255,0.2)] group-hover:drop-shadow-[30px_60px_80px_rgba(59,91,255,0.25)] transition-all duration-500"
                                    />
                                </motion.div>
                            </div>

                            {/* Headline - Centered & Premium Typography */}
                            <div className="relative z-10 mt-auto">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-[1.2] tracking-tight group-hover:text-accent transition-colors duration-300 mx-auto max-w-[200px]">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Glassmorphism Inner Shine (3D effect) */}
                            <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-25deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Atmosphere Lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/[0.015] blur-[150px] pointer-events-none rounded-full" />
        </section>
    );
}
