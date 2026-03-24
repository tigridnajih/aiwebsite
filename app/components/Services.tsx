'use client';
import React from 'react';
import { motion, AnimatePresence, useInView, useSpring, useTransform } from 'framer-motion';

function CountUp({ value, suffix = "", once = false }: { value: number; suffix?: string; once?: boolean }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once, amount: 0.5 });

    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (latest) =>
        Math.floor(latest).toLocaleString()
    );

    React.useEffect(() => {
        if (isInView) {
            springValue.set(value);
        } else if (!once) {
            springValue.set(0);
        }
    }, [isInView, value, springValue, once]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative py-24 bg-white text-slate-900 overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24 font-inter">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[10px] font-bold text-black uppercase tracking-[1px]">
                            Features
                        </span>
                    </div>
                    <h2 className="text-[28px] md:text-[36px] font-sans font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4 text-center">
                        Experience the <span className="text-blue-600">Future</span> of Automation
                    </h2>
                    <p className="text-[#4B5563] text-[15px] md:text-[16px] max-w-2xl mx-auto font-normal leading-[1.6]">
                        Scale your operations with intelligent automation that handles the heavy lifting while you focus on growth.
                    </p>
                </div>

                {/* 🚀 Feature 1: AI Agent Builder */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center mb-32 md:mb-48">
                    <div className="flex-1 space-y-10 font-inter">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                AI Agent Builder
                            </div>
                            <h2 className="text-[20px] md:text-[26px] font-sans font-semibold tracking-tight text-slate-900 leading-[1.2]">
                                Build custom AI agents in minutes
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: 'No-Code Setup', desc: 'Build fully functional agents in under 5 minutes.', icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' },
                                { title: 'API Integration', desc: 'Connect to apps like CRM, booking, or shipping.', icon: 'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z' }
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5"><path d={f.icon} /></svg>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base font-sans font-bold text-slate-900 leading-none">{f.title}</h4>
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full max-w-[440px] ml-auto mr-0 aspect-square bg-white rounded-3xl overflow-hidden shadow-sm shadow-blue-500/5"
                        >
                            <img src="/section_assets/bg_services1.avif" alt="AI Agent Builder" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>


                {/* 📊 Feature 2: Actionable Insights */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center mb-32 md:mb-48">
                    {/* Image Column */}
                    <div className="flex-1 w-full order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[440px] ml-0 mr-auto aspect-square bg-white rounded-3xl overflow-hidden shadow-sm shadow-blue-500/5"
                        >
                            <img 
                                src="/section_assets/bg_services2.avif" 
                                alt="AI Insights Dashboard" 
                                className="w-full h-full object-cover" 
                            />
                        </motion.div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 space-y-10 order-1 md:order-2 font-inter">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-2 font-bold text-slate-400 text-[10px] uppercase tracking-widest leading-none">
                                <div className="w-1 h-1 rounded-full bg-blue-600" />
                                Data Intelligence
                            </div>
                            <h3 className="text-[20px] md:text-[26px] font-sans font-semibold tracking-tight text-slate-900 leading-[1.2]">
                                Actionable insights <br />
                                from your data.
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-base max-w-xl font-medium">
                                Turn complex datasets into clear, visual intelligence. Understand your customer behavior and business trends at a glance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            {[
                                { title: 'Live Dashboards', desc: 'Real-time monitoring of every critical business KPI.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                                { title: 'Automated Reports', desc: 'Smarter business decisions with AI-driven summaries.', icon: 'M9 17v-2m3 2v-4m3 4v-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                            ].map((f, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5"><path d={f.icon} /></svg>
                                    </div>
                                    <h4 className="text-base font-sans font-bold text-slate-900 leading-none">{f.title}</h4>
                                    <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 🚀 Feature 3: Accelerated Sales Growth */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center mb-32 md:mb-48">
                    <div className="flex-1 space-y-10 font-inter">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 font-bold text-slate-400 text-[10px] uppercase tracking-widest leading-none">
                                <div className="w-1 h-1 rounded-full bg-blue-600" />
                                Advanced Feature
                            </div>
                            <h3 className="text-[20px] md:text-[26px] font-sans font-semibold tracking-tight text-slate-900 leading-[1.2]">
                                Accelerated Sales Growth
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-base max-w-xl font-medium">
                                Manage every customer interaction through a clear, visual pipeline — from lead generation to after-sales support.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            {[
                                { label: 'Multiple Boards', icon: 'M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3M19 19H5V5H19V19Z M7 10h10v2H7z M7 7h10v2H7z M7 13h10v2H7z' },
                                { label: 'Automation Rules', icon: 'M13 3L11 3L11 7.2L9.4 5.6L8 7L12 11L16 7L14.6 5.6L13 7.2L13 3Z M16 13h-8v2h8v-2z' },
                                { label: 'Analytics & Insights', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' }
                            ].map((pill, i) => (
                                <div key={i} className="flex items-center gap-3 px-5 py-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-5 h-5 text-blue-600 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-full h-full fill-current"><path d={pill.icon} /></svg>
                                    </div>
                                    <span className="text-slate-700 font-bold text-sm tracking-tight">{pill.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[440px] ml-auto mr-0 aspect-square bg-white rounded-3xl overflow-hidden shadow-sm shadow-blue-500/5"
                        >
                            <img src="/section_assets/bg_services4.avif" alt="Pipeline Management" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>

                {/* 🚀 Feature 4: Build Smarter Systems (REPLACED) */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                    <div className="flex-1 w-full order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[440px] ml-0 mr-auto aspect-square bg-white rounded-3xl overflow-hidden shadow-sm shadow-blue-500/5"
                        >
                            <img src="/section_assets/bg_services3.avif" alt="Flow Builder" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    <div className="flex-1 space-y-8 order-1 md:order-2 font-inter">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 font-bold text-slate-400 text-[10px] uppercase tracking-widest leading-none">
                                <div className="w-1 h-1 rounded-full bg-blue-600" />
                                Automation Flow
                            </div>
                            <h3 className="text-[20px] md:text-[26px] font-sans font-semibold tracking-tight text-slate-900 leading-[1.2]">
                                Build Smarter Systems
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-base max-w-xl font-medium">
                                Design and manage complex conversation systems effortlessly. Route customers to the right AI or human agent based on their needs.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                'Detect and assign sales, support, or billing chats.',
                                'Build conversation flows with drag & drop.',
                                'Let AI take over after hours.'
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-slate-700 font-bold text-base md:text-lg tracking-tight">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
