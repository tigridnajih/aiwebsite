'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
    badge?: string;
    title: ReactNode;
    description?: string;
    className?: string;
}

export default function SectionHeader({ badge, title, description, className = "" }: SectionHeaderProps) {
    return (
        <div className={`relative flex flex-col items-center text-center pb-12 overflow-hidden ${className}`}>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl text-center mb-12 lg:mb-16">
                {badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-md">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[9px] font-bold text-black uppercase tracking-[1px]">
                            {typeof badge === 'string' ? badge.replace('• ', '').replace('•', '') : badge}
                        </span>
                    </div>
                )}
                <h2 className="text-[28px] md:text-[40px] font-sans font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4">
                    {title}
                </h2>

                {description && (
                    <p className="text-[#4B5563] text-[15px] max-w-2xl mx-auto font-normal leading-[1.6]">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
