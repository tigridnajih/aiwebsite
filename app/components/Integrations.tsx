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
    const firstRow = [...integrations, ...integrations]; 
    const secondRow = [...[...integrations].reverse(), ...[...integrations].reverse()];

    return (
        <section className="relative py-20 lg:py-[120px] bg-white text-slate-900 overflow-hidden border-t border-slate-50">
            <div className="container-custom relative z-10 flex flex-col items-center text-center">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-8 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
                    INTEGRATIONS
                </div>

                <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold text-[#141B3B] mb-8 tracking-tight leading-[1.1]">
                    Seamless integration
                </h2>

                <p className="text-slate-500 text-lg md:text-xl font-medium leading-[1.6] max-w-xl mb-16 tracking-wide">
                    Connect with tools you already use. <br />
                    No code required, just plug and play.
                </p>

                {/* Infinite Scroll Rows */}
                <div className="w-full flex flex-col gap-10 lg:gap-16 max-w-full relative">
                    <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden relative">
                        <div className="flex gap-6 md:gap-10 animate-infinite-scroll-reverse-slow-extremely whitespace-nowrap pl-6 md:pl-10">
                            {firstRow.map((integration, i) => (
                                <IntegrationIcon key={`row1-${i}`} {...integration} />
                            ))}
                        </div>
                    </div>

                    <div className="flex overflow-hidden relative w-[95%] mx-auto">
                        <div className="flex gap-6 md:gap-10 animate-infinite-scroll-slow-extremely whitespace-nowrap pl-6 md:pl-10">
                            {secondRow.map((integration, i) => (
                                <IntegrationIcon key={`row2-${i}`} {...integration} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <button className="flex items-center gap-3 px-10 py-4 rounded-full bg-[#141B3B] text-white font-bold text-base hover:bg-black transition-all group shadow-xl">
                        Explore all tools
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-slate-50 blur-[120px] rounded-full pointer-events-none opacity-50" />
        </section>
    );
}
