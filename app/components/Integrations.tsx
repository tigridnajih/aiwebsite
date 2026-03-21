'use client';

import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
    'notion', 'slack', 'github', 'zapier', 'discord', 'figma', 'linear', 'trello', 'intercom', 'hubspot'
];

export default function Integrations() {
    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-[800px] lg:min-h-[1000px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#3B5BFF]/10 to-[#A855F7]/10 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Orbiting Icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] md:w-[700px] lg:w-[900px] aspect-square z-10 pointer-events-none">
                <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full relative"
                >
                    {integrations.map((slug, i) => {
                        const angle = (i * 360) / integrations.length;
                        return (
                            <div 
                                key={slug}
                                style={{ transform: `rotate(${angle}deg)` }}
                                className="absolute inset-0 origin-center pointer-events-none"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 md:-mt-12 w-[72px] h-[72px] md:w-[96px] md:h-[96px]">
                                    {/* Reverse rotation to keep icons upright */}
                                    <motion.div
                                        animate={{ rotate: [-angle, -angle - 360] }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        className="w-full h-full bg-white/95 backdrop-blur-md rounded-[24px] md:rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white flex items-center justify-center pointer-events-auto hover:scale-110 transition-transform cursor-pointer"
                                    >
                                        <img src={`https://v1.simpleicons.org/${slug}/1a203f`} alt={slug} className="w-8 h-8 md:w-10 md:h-10 opacity-70" />
                                    </motion.div>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>

            {/* Center Content */}
            <div className="relative z-20 flex flex-col items-center text-center max-w-3xl px-6 w-full mt-10 md:mt-20 pointer-events-auto">
                {/* Pill */}
                <div className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-sm text-[13px] font-bold tracking-wide text-[#1a203f] mb-8">
                    Integrations
                </div>
                
                {/* Title */}
                <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold text-[#1a203f] tracking-tight leading-[1.1] mb-6 shadow-sm drop-shadow-sm">
                    Connect your tools
                </h2>
                
                {/* Paragraph */}
                <p className="text-slate-500 text-[17px] md:text-[20px] font-medium leading-[1.6] max-w-[640px] mb-10 inline-block">
                    Tigrid brings tasks, messages, files, and schedules together by syncing your existing tools into one shared workspace.
                </p>
                
                {/* Feature Tags/Checks */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
                    {[
                        { text: 'Secure connections', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                        { text: 'Read only', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
                        { text: 'Disconnect anytime', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
                    ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                            <div className="w-[22px] h-[22px] rounded-full bg-[#1a203f]/10 flex items-center justify-center shrink-0">
                                <svg className="w-3.5 h-3.5 text-[#1a203f] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                    <path d={feature.icon} />
                                </svg>
                            </div>
                            <span className="text-slate-600 font-bold text-[14px] md:text-[15px]">{feature.text}</span>
                        </div>
                    ))}
                </div>
                
                {/* CTA Button */}
                <button className="px-8 py-4 bg-[#1a203f] text-white rounded-[14px] font-bold text-[15px] hover:bg-black transition-all hover:-translate-y-0.5 shadow-lg shadow-black/10">
                    Start with Tigrid
                </button>
            </div>
        </section>
    );
}
