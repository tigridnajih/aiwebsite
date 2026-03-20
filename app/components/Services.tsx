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

const CustomProjectsMockup = () => {
    const items = [
        { name: "Gmail", action: "Processing inbound", icon: "M1.5 8.67V10.33C1.5 11.25 2.25 12 3.17 12H12.83C13.75 12 14.5 11.25 14.5 10.33V8.67", status: "Active" },
        { name: "AirTable", action: "Updating records", icon: "M10 2L2 7L10 12L18 7L10 2Z", status: "Syncing..." },
        { name: "Zoom", action: "Meeting logs", icon: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z", status: "Idle" }
    ];
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });

    return (
        <div ref={containerRef} className="w-full max-w-lg mx-auto flex flex-col items-center">
            <motion.div
                animate={isInView ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B5BFF] to-[#2563EB] flex items-center justify-center shadow-xl shadow-blue-500/20 relative z-20"
            >
                <div className="w-5 h-5 rounded-full bg-white animate-pulse" />
            </motion.div>
            <div className="w-[2px] h-12 bg-gradient-to-b from-blue-500 to-slate-200" />
            <div className="w-full space-y-4 relative z-20">
                {items.map((item, i) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-accent">
                                <svg viewBox="0 0 16 16" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d={item.icon} />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                                <p className="text-[10px] text-slate-500 font-medium">{item.action}</p>
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-accent px-2 py-1 bg-blue-50 rounded-full">{item.status}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white text-slate-900 overflow-hidden">
            <div className="container-custom">
                {/* 🚀 Feature 1: AI Agent Builder */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center mb-32 md:mb-48">
                    <div className="flex-1 space-y-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                AI Agent Builder
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                Build custom AI agents in minutes
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3B5BFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">No-Code Setup</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">Build fully functional agents in under 5 minutes.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3B5BFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5zM6.5 2H20v20H6.5" /><path d="M6.5 18H20" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Custom Knowledge</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">Upload SOPs or FAQs for accurate answers.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3B5BFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">API Integration</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">Connect to apps like CRM, booking, or shipping.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-[#3B5BFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2"><path d="m4.5 16.5-1.5 3 3 1.5 9-11-4.5-4.5zm15-15 1.5 1.5M10.5 4.5l3 3m-3 3 3 3" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Instant Deployment</h4>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">Launch agents across multiple channels easily.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden"
                        >
                            <img 
                                src="/section_assets/bg_services1.avif" 
                                alt="AI Agent Builder Interface" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>

                {/* 📊 Feature 2: Data Processing & Insights */}
                <div className="flex flex-col md:flex-row gap-16 items-center mb-32 md:mb-48">
                    <div className="flex-1 w-full max-w-2xl order-2 md:order-1">
                        <div className="relative w-full aspect-[4/3] p-8 flex flex-col justify-center bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
                            <div className="absolute top-[20px] left-[20px] px-6 py-3 rounded-2xl bg-gradient-to-br from-[#3B5BFF] to-[#2563EB] flex items-center justify-center z-20 shadow-lg shadow-blue-500/20 font-bold text-white">
                                <CountUp value={87} suffix="% +" />
                            </div>
                            <div className="flex-1 w-full flex items-end justify-between gap-3 pt-12">
                                {[72, 48, 85, 63, 91, 54, 76, 58, 82, 65].map((val, idx) => (
                                    <div key={idx} className="flex-1 h-full flex items-end">
                                        <motion.div
                                            initial={{ height: "0%" }}
                                            whileInView={{ height: `${val}%` }}
                                            className="w-full rounded-t-lg bg-gradient-to-t from-blue-100 to-[#3B5BFF]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-6 order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-2 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
                            AI Assistant
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Data Processing & Insights</h3>
                        <p className="text-slate-500 leading-relaxed text-lg max-w-xl font-medium">Turn raw data into actionable insights with AI-driven analysis and reporting.</p>
                    </div>
                </div>

                {/* 🚀 Feature 3: Ticketing System & Sales Pipeline (REPLACED) */}
                <div className="flex flex-col md:flex-row gap-16 items-center mb-32 md:mb-48">
                    <div className="flex-1 space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 font-bold text-slate-400 text-[10px] uppercase tracking-widest leading-none">
                                <div className="w-1 h-1 rounded-full bg-blue-600" />
                                Advanced Feature
                            </div>
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                Ticketing System & Sales Pipeline
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-lg max-w-xl font-medium">
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
                            className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden"
                        >
                            <img 
                                src="/section_assets/bg_services4.avif" 
                                alt="Sales Pipeline Interface" 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* 🌌 Feature 4: Custom Projects */}
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 w-full max-w-2xl order-2 md:order-1">
                        <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 min-h-[450px] flex items-center justify-center overflow-hidden">
                            <CustomProjectsMockup />
                        </div>
                    </div>
                    <div className="flex-1 space-y-6 order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-2 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
                            Custom Projects
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Build Smarter Systems</h3>
                        <p className="text-slate-500 leading-relaxed text-lg max-w-xl font-medium">Whether you're starting from scratch or enhancing an existing system, we build custom AI projects aligned with your goals.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
