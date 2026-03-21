'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const integrations = [
    { name: 'Notion', slug: 'notion' },
    { name: 'Slack', slug: 'slack' },
    { name: 'GitHub', slug: 'github' },
    { name: 'Zapier', slug: 'zapier' },
    { name: 'Discord', slug: 'discord' },
    { name: 'Figma', slug: 'figma' },
    { name: 'n8n', slug: 'n8n' },
    { name: 'Airtable', slug: 'airtable' },
    { name: 'Hubspot', slug: 'hubspot' },
    { name: 'Shopify', slug: 'shopify' },
    { name: 'Linear', slug: 'linear' },
    { name: 'Stripe', slug: 'stripe' },
    { name: 'GitLab', slug: 'gitlab' },
    { name: 'Trello', slug: 'trello' },
    { name: 'Intercom', slug: 'intercom' },
];

const IntegrationIcon = ({ slug, name }: { slug: string; name: string }) => (
    <div className="flex-shrink-0 w-[85px] h-[85px] md:w-[110px] md:h-[110px] rounded-[24px] bg-white border border-slate-50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex items-center justify-center p-4 hover:border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group">
        <img
            src={`https://v1.simpleicons.org/${slug}/8a94a6`}
            alt={name}
            className="w-10 h-10 md:w-12 md:h-12 opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
        />
    </div>
);

export default function Integrations() {
    // Split integrations into two sets for the two rows
    const firstRow = [...integrations, ...integrations]; // Duplicate for seamless scroll
    const secondRow = [...[...integrations].reverse(), ...[...integrations].reverse()];

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative border-t border-slate-50">
            <div className="container-custom relative z-10 flex flex-col items-center text-center">
                
                <div className="px-5 py-1.5 rounded-full bg-slate-50 border border-slate-100/80 mb-8 font-bold text-slate-400 text-[11px] uppercase tracking-widest shadow-sm">
                    INTEGRATIONS
                </div>

                <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-extrabold text-[#141B3B] mb-6 tracking-tight leading-[1.1]">
                    Seamless integration
                </h2>

                <p className="text-[#64748b] text-lg md:text-[20px] font-medium leading-[1.6] max-w-xl mb-20 tracking-wide">
                    Connect with tools you already use. <br />
                    No code required, just plug and play.
                </p>

                {/* Infinite Scroll Rows */}
                <div className="w-full flex flex-col gap-6 md:gap-10 max-w-[1400px] mx-auto relative px-4">
                    {/* Fade Edge Masks */}
                    <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Right Moving */}
                    <div className="flex overflow-hidden relative">
                        <div className="flex gap-6 md:gap-10 animate-infinite-scroll-reverse-slow-extremely whitespace-nowrap pl-6 md:pl-10">
                            {firstRow.map((integration, i) => (
                                <IntegrationIcon key={`row1-${i}`} {...integration} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Left Moving */}
                    <div className="flex overflow-hidden relative w-[95%] mx-auto">
                        <div className="flex gap-6 md:gap-10 animate-infinite-scroll-slow-extremely whitespace-nowrap pl-6 md:pl-10">
                            {secondRow.map((integration, i) => (
                                <IntegrationIcon key={`row2-${i}`} {...integration} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <button className="flex items-center gap-2.5 px-8 flex-row py-4 rounded-full bg-[#141B3B] text-white font-bold text-[15px] hover:bg-black transition-all group shadow-xl">
                        Explore all tools
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </button>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-slate-100/50 blur-[100px] rounded-[100%] pointer-events-none" />
        </section>
    );
}
