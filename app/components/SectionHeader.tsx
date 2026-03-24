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
        <div className={`relative flex flex-col items-center text-center pt-20 pb-12 overflow-hidden ${className}`}>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl">
                {badge && (
                    <div className="mb-6 px-4 py-1.5 rounded-full border border-accent/10 bg-accent/5 inline-flex items-center justify-center transition-shadow duration-300">
                        <span className="text-[10px] font-bold tracking-[0.15em] text-accent pl-[0.15em]">
                            {badge}
                        </span>
                    </div>
                )}
                <h2 className="text-[clamp(2rem,6vw,4rem)] font-sans font-bold tracking-tight mb-8 text-slate-900 leading-tight">
                    {title}
                </h2>

                {description && (
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
