'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const cases = [
    {
        id: 1,
        title: "Automating Lead Qualification for Real Estate",
        metric: "98% faster response · 3× qualified leads",
        category: "REAL ESTATE · WORKFLOW",
        year: "2024",
        // Mock UI inside the card
        preview: (
            <div className="w-full h-full flex flex-col gap-3 p-2">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                    <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                </div>
                {[90, 60, 78, 45, 100].map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="h-1 rounded-full bg-white/5" style={{ width: `${20 + i * 8}px` }} />
                        <div className="h-1.5 flex-1 bg-white/[0.06] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#3B82F6]/40 rounded-full"
                                style={{ width: `${w}%`, transition: 'width 1s ease' }}
                            />
                        </div>
                        <span className="text-[9px] font-mono text-white/20">{w}%</span>
                    </div>
                ))}
                <div className="mt-auto pt-3 border-t border-white/[0.04] flex justify-between items-center">
                    <div className="h-1 w-16 bg-white/5 rounded-full" />
                    <div className="px-2 py-0.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded text-[9px] font-mono text-[#3B82F6]">
                        LIVE
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "SaaS Customer Support Deflection Engine",
        metric: "70% tickets auto-resolved · $0 agent cost",
        category: "SAAS · AI CHATBOT",
        year: "2024",
        preview: (
            <div className="w-full h-full flex flex-col gap-2 p-2">
                {[
                    { sender: 'user', text: 'My invoice is wrong.', time: '09:41' },
                    { sender: 'ai', text: 'I found your invoice #1042. Refunding now.', time: '09:41' },
                    { sender: 'user', text: 'That was fast!', time: '09:42' },
                ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] px-2.5 py-1.5 rounded-lg text-[9px] leading-snug ${msg.sender === 'user'
                                ? 'bg-white/[0.08] text-white/60'
                                : 'bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6]/80'
                            }`}>
                            {msg.text}
                            <span className="block text-right text-[7px] mt-0.5 opacity-40">{msg.time}</span>
                        </div>
                    </div>
                ))}
                <div className="mt-auto flex items-center gap-2 border-t border-white/[0.04] pt-2">
                    <div className="flex-1 h-5 bg-white/[0.03] border border-white/[0.06] rounded-md" />
                    <div className="w-5 h-5 bg-[#3B82F6]/15 border border-[#3B82F6]/30 rounded-md flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 3,
        title: "E-commerce Product Description Generator",
        metric: "5,000+ descriptions · 48-hour delivery",
        category: "E-COMMERCE · CONTENT",
        year: "2024",
        preview: (
            <div className="w-full h-full flex flex-col gap-3 p-2">
                <div className="flex gap-2">
                    <div className="w-10 h-10 bg-white/[0.04] border border-white/[0.06] rounded-md flex-shrink-0" />
                    <div className="flex flex-col gap-1.5 flex-1 justify-center">
                        <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                        <div className="h-1 w-1/2 bg-white/5 rounded-full" />
                    </div>
                </div>
                <div className="flex-1 bg-white/[0.025] border border-white/[0.05] rounded-md p-2 text-[8px] font-mono text-white/25 leading-relaxed">
                    <span className="text-[#3B82F6]/60">→</span> Generating product copy...<br />
                    <span className="text-white/40">Premium wireless headphones with ANC...</span><br />
                    <span className="text-white/40">Experience studio-quality audio with...</span><br />
                    <span className="text-[#3B82F6]/40">█</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[8px] font-mono text-white/20">5,000 / 5,000</span>
                    <div className="h-1 w-24 bg-white/[0.06] rounded-full overflow-hidden">
                        <div className="h-full w-full bg-[#3B82F6]/40 rounded-full" />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        title: "Financial Report Automation Pipeline",
        metric: "12h → 4min · Zero manual errors",
        category: "FINTECH · AUTOMATION",
        year: "2025",
        preview: (
            <div className="w-full h-full flex flex-col gap-2 p-2">
                <div className="grid grid-cols-2 gap-1.5">
                    {[
                        { label: 'Revenue', value: '$2.4M', trend: '+12%' },
                        { label: 'Cost', value: '$890K', trend: '-4%' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/[0.03] border border-white/[0.05] rounded-md p-2">
                            <div className="text-[8px] font-mono text-white/25 mb-1">{stat.label}</div>
                            <div className="text-[11px] font-bold text-white/70">{stat.value}</div>
                            <div className={`text-[8px] font-mono mt-0.5 ${stat.trend.startsWith('+') ? 'text-emerald-500/60' : 'text-red-400/50'}`}>{stat.trend}</div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 flex items-end gap-0.5">
                    {[30, 55, 45, 70, 50, 80, 95, 65, 75, 88].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#3B82F6]/20 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 5,
        title: "Intelligent Inventory Management System",
        metric: "40% overstock reduced · 99.2% accuracy",
        category: "LOGISTICS · ML",
        year: "2025",
        preview: (
            <div className="w-full h-full flex flex-col gap-2.5 p-2">
                {['SKU-4821', 'SKU-2049', 'SKU-7731', 'SKU-9003'].map((sku, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="text-[8px] font-mono text-white/20 w-14">{sku}</span>
                        <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full ${i === 1 ? 'bg-red-400/40' : 'bg-[#3B82F6]/30'}`}
                                style={{ width: `${[78, 22, 91, 60][i]}%` }}
                            />
                        </div>
                        <span className="text-[8px] font-mono text-white/20">{[78, 22, 91, 60][i]}%</span>
                    </div>
                ))}
                <div className="mt-auto text-[8px] font-mono text-white/15 border-t border-white/[0.04] pt-2">
                    NEXT REORDER: 3 DAYS
                </div>
            </div>
        )
    }
];

export default function CaseStudies() {
    const [active, setActive] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback((index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActive(index);
        setTimeout(() => setIsAnimating(false), 400);
    }, [isAnimating]);

    const prev = () => goTo(active === 0 ? cases.length - 1 : active - 1);
    const next = () => goTo(active === cases.length - 1 ? 0 : active + 1);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [active]);

    // Visible window: center ± 2 (for 5-card layout wide enough for 3 visible)
    const getVisibleCards = () => {
        const total = cases.length;
        return [-1, 0, 1].map(offset => {
            const idx = (active + offset + total) % total;
            return { ...cases[idx], offset };
        });
    };

    const visibleCards = getVisibleCards();

    return (
        <section
            id="case-studies"
            className="relative py-32 overflow-hidden"
            style={{ background: '#030712' }}
        >
            {/* Hairline dividers */}
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'rgba(255,255,255,0.03)' }} />
            <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'rgba(255,255,255,0.03)' }} />

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <p className="text-[10px] tracking-[0.3em] text-[#64748B] mb-4 font-mono uppercase">
                            // Portfolio
                        </p>
                        <h2
                            className="text-4xl md:text-5xl font-medium text-white leading-tight"
                            style={{ letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}
                        >
                            Work that speaks<br />
                            <span className="text-[#64748B]">for itself.</span>
                        </h2>
                    </div>
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-[#64748B] hover:text-white transition-colors group"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        View all projects
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Carousel — full-bleed */}
            <div className="relative w-full flex items-center justify-center" style={{ height: '420px' }}>
                {visibleCards.map(({ offset, preview, title, metric, category, year }) => {
                    const isCenter = offset === 0;
                    const isLeft = offset === -1;
                    const translateX = offset * 340;
                    const scale = isCenter ? 1 : 0.85;
                    const opacity = isCenter ? 1 : 0.45;
                    const zIndex = isCenter ? 10 : 1;

                    return (
                        <div
                            key={`${title}-${offset}`}
                            onClick={() => !isCenter && (isLeft ? prev() : next())}
                            className="absolute"
                            style={{
                                width: '320px',
                                height: '400px',
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                opacity,
                                zIndex,
                                transition: 'all 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                cursor: isCenter ? 'default' : 'pointer',
                            }}
                        >
                            {/* Card */}
                            <div
                                className="w-full h-full rounded-2xl flex flex-col overflow-hidden"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                    border: isCenter
                                        ? '1px solid #3B82F6'
                                        : '0.5px solid rgba(255, 255, 255, 0.05)',
                                    boxShadow: isCenter
                                        ? '0 40px 100px -20px rgba(59, 130, 246, 0.12)'
                                        : 'none',
                                    transition: 'border 0.45s ease, box-shadow 0.45s ease',
                                }}
                            >
                                {/* Preview area */}
                                <div
                                    className="flex-1 overflow-hidden"
                                    style={{
                                        borderRadius: '14px 14px 0 0',
                                        borderBottom: '0.5px solid rgba(255, 255, 255, 0.05)',
                                        background: 'rgba(255, 255, 255, 0.01)',
                                    }}
                                >
                                    {preview}
                                </div>

                                {/* Card footer / meta */}
                                <div className="px-5 py-4 flex-shrink-0">
                                    {/* Category + Year */}
                                    <div className="flex items-center justify-between mb-2">
                                        <span
                                            className="text-[#64748B]"
                                            style={{
                                                fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
                                                fontSize: '9px',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {category}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: "'Fira Code', monospace",
                                                fontSize: '9px',
                                                color: 'rgba(255,255,255,0.15)',
                                                letterSpacing: '0.1em',
                                            }}
                                        >
                                            {year}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-white mb-2 leading-snug"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            letterSpacing: '-0.02em',
                                        }}
                                    >
                                        {title}
                                    </h3>

                                    {/* Metric */}
                                    <p
                                        style={{
                                            fontFamily: "'Fira Code', monospace",
                                            fontSize: '9px',
                                            color: isCenter ? 'rgba(59, 130, 246, 0.7)' : '#64748B',
                                            letterSpacing: '0.05em',
                                            transition: 'color 0.45s ease',
                                        }}
                                    >
                                        {metric}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation */}
            <div className="container-custom relative z-10 mt-12 flex items-center justify-between">
                {/* Dots */}
                <div className="flex items-center gap-2">
                    {cases.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className="transition-all duration-300"
                            style={{
                                width: i === active ? '20px' : '4px',
                                height: '4px',
                                borderRadius: '2px',
                                background: i === active ? '#3B82F6' : 'rgba(255,255,255,0.12)',
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <span
                    style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: '10px',
                        color: '#64748B',
                        letterSpacing: '0.15em',
                    }}
                >
                    {String(active + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}
                </span>

                {/* Arrow buttons */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={prev}
                        className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:border-white/20 hover:bg-white/5"
                        style={{
                            border: '0.5px solid rgba(255,255,255,0.08)',
                            background: 'transparent',
                        }}
                        aria-label="Previous"
                    >
                        <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:border-white/20 hover:bg-white/5"
                        style={{
                            border: '0.5px solid rgba(255,255,255,0.08)',
                            background: 'transparent',
                        }}
                        aria-label="Next"
                    >
                        <svg className="w-3.5 h-3.5 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
