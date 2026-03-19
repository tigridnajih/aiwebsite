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
    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-4 hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group">
        <img
            src={`https://v1.simpleicons.org/${slug}/1e293b`}
            alt={name}
            className="w-8 h-8 md:w-10 md:h-10 opacity-60 group-hover:opacity-100 transition-opacity"
        />
    </div>
);

export default function Integrations() {
    // Split integrations into two sets for the two rows
    const firstRow = [...integrations, ...integrations]; // Duplicate for seamless scroll
    const secondRow = [...[...integrations].reverse(), ...[...integrations].reverse()];

    return (
        <section className="py-24 bg-white overflow-hidden relative border-y border-slate-50">
            <div className="container-custom relative z-10 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
                    Integrations
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                    Seamless integration
                </h2>

                <p className="text-slate-500 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed font-medium">
                    Connect with tools you already use. <br />
                    No code required, just plug and play.
                </p>

                {/* Infinite Scroll Rows */}
                <div className="w-full flex flex-col gap-6 md:gap-8">
                    {/* Row 1: Right Moving */}
                    <div className="flex overflow-hidden">
                        <div className="flex gap-6 md:gap-8 animate-infinite-scroll-reverse-slow-extremely whitespace-nowrap">
                            {firstRow.map((integration, i) => (
                                <IntegrationIcon key={`row1-${i}`} {...integration} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Left Moving */}
                    <div className="flex overflow-hidden">
                        <div className="flex gap-6 md:gap-8 animate-infinite-scroll-slow-extremely whitespace-nowrap">
                            {secondRow.map((integration, i) => (
                                <IntegrationIcon key={`row2-${i}`} {...integration} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <button className="flex items-center gap-2 px-10 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all group shadow-xl">
                        Explore all tools
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
