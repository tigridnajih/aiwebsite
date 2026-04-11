'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const integrations = [
    { name: 'Excel', path: '/Icons/Integration_icons/icons8-excel-96.png' },
    { name: 'GitHub', path: '/Icons/Integration_icons/icons8-github-96.png' },
    { name: 'Google Drive', path: '/Icons/Integration_icons/icons8-google-drive-96.png' },
    { name: 'Gmail', path: '/Icons/Integration_icons/icons8-google-mail-96.png' },
    { name: 'Instagram', path: '/Icons/Integration_icons/icons8-instagram-96.png' },
    { name: 'LinkedIn', path: '/Icons/Integration_icons/icons8-linkedin-96.png' },
    { name: 'Notion', path: '/Icons/Integration_icons/icons8-notion-96.png' },
    { name: 'OneDrive', path: '/Icons/Integration_icons/icons8-onedrive-96.png' },
    { name: 'Outlook', path: '/Icons/Integration_icons/icons8-outlook-96.png' },
    { name: 'PDF', path: '/Icons/Integration_icons/icons8-pdf-96.png' },
    { name: 'Shopify', path: '/Icons/Integration_icons/icons8-shopify-96.png' },
    { name: 'Telegram', path: '/Icons/Integration_icons/icons8-telegram-app-96.png' },
    { name: 'WhatsApp', path: '/Icons/Integration_icons/icons8-whatsapp-96.png' },
    { name: 'YouTube', path: '/Icons/Integration_icons/icons8-youtube-96.png' },
];

const IntegrationIcon = ({ name, path }: { name: string; path: string }) => (
    <div className="flex-shrink-0 w-[85px] h-[85px] md:w-[110px] md:h-[110px] rounded-[24px] bg-white border border-slate-50 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex items-center justify-center p-4 transition-all duration-300">
        <img
            src={path}
            alt={name}
            className="w-10 h-10 md:w-12 md:h-12"
        />
    </div>
);

export default function Integrations() {
    // Split 14 icons into 7 and 7
    const row1 = integrations.slice(0, 7);
    const row2 = integrations.slice(7, 14);

    const firstRow = [...row1, ...row1]; 
    const secondRow = [...row2, ...row2];

    return (
        <section className="relative py-20 md:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-50">
            <div className="container-custom relative z-10 flex flex-col items-center text-center">
                
                <div className="text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-md">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[9px] font-bold text-black uppercase tracking-[1px]">
                            Integrations
                        </span>
                    </div>
                    <h2 className="text-[28px] md:text-[40px] font-sans font-semibold text-[#111827] tracking-[-0.02em] leading-tight mb-4 text-center">
                        <span className="text-blue-600">Seamless</span> Integration
                    </h2>
                </div>

                <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl mb-16 font-inter">
                    Connect with tools you already use. <br />
                    No code required, just plug and play.
                </p>

                {/* Infinite Scroll Rows */}
                <div className="w-full flex flex-col gap-4 lg:gap-6 max-w-full relative">
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

            </div>

            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-slate-50 blur-[120px] rounded-full pointer-events-none opacity-50" />
        </section>
    );
}
