'use client';
import React from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import SectionHeader from './SectionHeader';

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
    const features = [
        {
            badge: "Workflow Automation",
            title: "Automate repetitive tasks",
            description: "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains, saving time and cutting down errors.",
            tags: ["Internal Task Bots", "100+ Automations"],
            imageSide: "left",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden shadow-xl flex items-center justify-center p-6 md:p-8">
                    <div className="relative w-full h-full flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        {/* Left: Bubble Column */}
                        <div className="w-full md:flex-[1.8] flex flex-col gap-3 md:gap-4">
                            <div className="relative bg-white border border-slate-200 rounded-2xl p-4 shadow-lg transform hover:-translate-y-1 transition-transform duration-500 group/emma">
                                <div className="flex items-start gap-3">
                                    <div className="relative shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden border border-slate-200">
                                            <img
                                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
                                                alt="Emma"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#25D366] rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                                            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-slate-900 font-bold text-sm">Emma, RetailSync</span>
                                            <span className="text-[10px] text-accent font-mono opacity-60">09:45 PM</span>
                                        </div>
                                        <p className="text-slate-500 text-[10px] md:text-[11px] font-medium italic leading-snug">
                                            &ldquo;We&apos;re looking to automate inventory updates. Can you help?&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            badge: "AI Assistant",
            title: "Data Processing & Insights",
            description: "Turn raw data into actionable insights with AI-driven analysis and reporting.",
            tags: ["Summaries", "Scheduling", "Many more"],
            imageSide: "right",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-[32px] overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col justify-center">
                    <div className="relative flex-1 mt-6 flex flex-col z-10 px-4">
                        <div className="absolute top-[-40px] left-0 px-6 py-3 rounded-2xl bg-accent flex items-center justify-center z-20">
                            <span className="text-white text-sm md:text-base font-bold tracking-tight">
                                <CountUp value={87} suffix="% +" />
                            </span>
                        </div>
                        <div className="flex-1 w-full flex items-end justify-between gap-3 md:gap-5 pt-8 relative z-10">
                            {[72, 48, 85, 63, 91, 54, 76, 58].map((val, idx) => (
                                <div key={idx} className="flex-1 h-full flex items-end justify-center">
                                    <motion.div
                                        initial={{ height: "0%" }}
                                        whileInView={{ height: `${val}%` }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1, delay: idx * 0.1 }}
                                        className="w-full rounded-t-lg bg-accent/20 border-t border-accent/40"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            badge: "Sales & Marketing",
            title: "Accelerate Sales Growth",
            description: "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts.",
            tags: ["Leads", "Content", "Social post"],
            imageSide: "left",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-[32px] overflow-hidden shadow-xl p-8">
                    <div className="flex items-end gap-2 h-48">
                        {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-accent/20 border-t border-accent/40 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between">
                        <div className="space-y-2">
                            <div className="w-20 h-2 bg-slate-200 rounded" />
                            <div className="w-12 h-4 bg-slate-100 rounded" />
                        </div>
                        <div className="space-y-2 text-right">
                            <div className="w-20 h-2 bg-slate-200 rounded" />
                            <div className="w-12 h-4 bg-green-500/10 rounded" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            badge: "Custom Projects",
            title: "Build Smarter Systems",
            description: "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects.",
            tags: ["Strategy", "Custom AI", "Consulting"],
            imageSide: "right",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-[32px] overflow-hidden shadow-xl p-8 font-mono text-[10px] text-accent/60">
                    {`{
  "project": "Intelligent_Sync",
  "status": "deploying",
  "nodes": [
    {"id": "ai-core", "load": 0.42},
    {"id": "data-bridge", "latency": "12ms"},
    {"id": "auth-layer", "secure": true}
  ],
  "intelligence_score": 0.98,
  "last_check": "2024-02-21T16:25:52Z"
}`}
                </div>
            )
        }
    ];

    return (
        <section id="services" className="py-20 bg-white text-slate-900">
            <div className="container-custom">
                <SectionHeader
                    badge="Our Services"
                    title="What we build"
                    description="We design, develop, and implement automation tools that help you work smarter, not harder"
                />

                <div className="flex flex-col gap-32 md:gap-48 mt-20 md:mt-32">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col gap-12 items-center ${feature.imageSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-lg max-w-xl">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="flex-1 w-full max-w-2xl">
                                {feature.mockup}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
