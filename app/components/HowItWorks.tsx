'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LucideIcon, Mail, FileText, Calendar, Layout, Play, RefreshCw, Layers, List, StickyNote, NotebookPen } from 'lucide-react';
import SectionHeader from './SectionHeader';

// Import background images
import card1Bg from '../assets_bg/card1_bg.png';
import card2Bg from '../assets_bg/card2_bg.png';
import card3Bg from '../assets_bg/card3_bg.png';

interface CardProps {
    number: string;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    noHover?: boolean;
    style?: React.CSSProperties;
    badgeGlow?: string;
    bgImage?: any;
    onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: () => void;
}

const Card = ({ number, title, description, children, className = "", noHover = false, style, badgeGlow, bgImage, onMouseMove, onMouseLeave }: CardProps) => (
    <div
        className={`relative group p-8 rounded-[32px] bg-black border border-white/5 transition-all duration-700 flex flex-col items-start min-h-[520px] overflow-hidden ${!noHover ? 'hover:border-blue-500/30' : ''} ${className}`}
        style={style}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
    >
        {/* Background Image Layer */}
        {bgImage && (
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
                style={{
                    backgroundImage: `url(${typeof bgImage === 'string' ? bgImage : bgImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        )}
        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 rounded-[32px]" />

        {/* Subtle Blue Glow Backdrop (if not custom) */}
        {!noHover && !style?.background && (
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]" />
        )}

        {/* Step Badge */}
        <div
            className="relative z-10 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black font-extrabold text-xl mb-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={badgeGlow ? { boxShadow: badgeGlow } : {}}
        >
            {number}
        </div>

        <h3 className="relative z-10 text-[32px] font-bold text-[#F5F7FF] mb-5 tracking-tight group-hover:text-blue-400 transition-colors drop-shadow-md">
            {title}
        </h3>

        <p className="relative z-10 text-[rgba(200,210,255,0.8)] text-lg leading-[1.8] mb-auto max-w-[95%]">
            {description}
        </p>

        {/* Animation Container */}
        <div className="relative z-10 w-full h-72 mt-8 flex items-center justify-center">
            {children}
        </div>
    </div>
);

const GlassyOrb = ({ children, size, className, delay, mousePos }: { children: React.ReactNode, size: string, className: string, delay: string, mousePos: { x: number, y: number } }) => {
    const factor = parseInt(size.split('-')[1]) / 20; // Larger orbs move more
    const translateX = mousePos.x * factor;
    const translateY = mousePos.y * factor;

    return (
        <div
            className={`absolute ${size} rounded-full flex items-center justify-center border border-white/10 backdrop-blur-2xl animate-drift-slow-subtle transition-transform duration-500 ease-out ${className}`}
            style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.1), 0 0 30px rgba(60,120,255,0.2)',
                animationDelay: delay,
                transform: `translate(${translateX}px, ${translateY}px)`
            }}
        >
            {/* Specular Highlight */}
            <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white/20 rounded-full blur-[4px] pointer-events-none" />

            {/* Internal Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent opacity-50" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default function HowItWorks() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 15;
        const y = (e.clientY - rect.top - rect.height / 2) / 15;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <section id="how-it-works" className="py-24 bg-black overflow-hidden">
            <div className="container-custom">
                <SectionHeader
                    title="How it works"
                    description="Our seamless process to take your agency to the next level with custom AI solutions."
                />

                <div className="grid lg:grid-cols-3 gap-10 mt-20 pb-20">
                    {/* Card 1: Share Your Workflow - 3D REFINEMENT */}
                    <div ref={cardRef} className="h-full">
                        <Card
                            number="1"
                            title="Share Your Workflow"
                            description="From lead gen to client onboarding, just share your workflow and the tools you use."
                            bgImage={card1Bg}
                            style={{
                                background: '#000000',
                                border: '1px solid rgba(30, 90, 255, 0.4)',
                                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(30, 90, 255, 0.2)'
                            }}
                            noHover={true}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Deep Atmospheric Glows */}
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-[1]" />
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-[1]" />

                            <div className="relative w-full h-full flex items-center justify-center z-[2]">
                                <div className="relative w-64 h-64">
                                    {/* Email - Extra Large Orb */}
                                    <GlassyOrb size="w-28 h-28" className="top-0 right-4 z-30" delay="0s" mousePos={mousePos}>
                                        <Mail className="text-white w-12 h-12 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
                                    </GlassyOrb>

                                    {/* List - Large Orb */}
                                    <GlassyOrb size="w-24 h-24" className="top-16 left-2 z-20" delay="-2s" mousePos={mousePos}>
                                        <List className="text-white w-10 h-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    </GlassyOrb>

                                    {/* Calendar - Medium Orb */}
                                    <GlassyOrb size="w-20 h-20" className="bottom-8 left-10 z-10" delay="-4s" mousePos={mousePos}>
                                        <Calendar className="text-white w-8 h-8 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                    </GlassyOrb>

                                    {/* Note - Medium Orb */}
                                    <GlassyOrb size="w-16 h-16" className="bottom-4 right-16 z-20" delay="-1.5s" mousePos={mousePos}>
                                        <NotebookPen className="text-white w-7 h-7 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                    </GlassyOrb>

                                    {/* Page - Small Orb */}
                                    <GlassyOrb size="w-14 h-14" className="top-1/2 right-0 z-10" delay="-5s" mousePos={mousePos}>
                                        <FileText className="text-white w-6 h-6 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                    </GlassyOrb>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Card 2: We Build the System - BLUE 3D STYLE WITH BG */}
                    <Card
                        number="2"
                        title="We Build the System"
                        description="We design and set up custom automations that connect your tools with AI—so work happens while you sleep."
                        bgImage={card2Bg}
                        className="bg-gradient-to-br from-blue-900/40 via-blue-950/40 to-black border-blue-500/40 shadow-[inset_0_0_30px_rgba(59,130,246,0.1)]"
                        noHover={true}
                    >
                        <div className="relative w-full h-full flex items-center justify-center z-[2]">
                            <div className="relative w-48 h-48">
                                {/* Email - Blue 3D breathing */}
                                <div className="absolute top-4 right-0 w-24 h-24 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath">
                                    <Mail className="text-white w-10 h-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* List - Blue 3D breathing */}
                                <div className="absolute top-12 left-0 w-20 h-20 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-1.2s]">
                                    <List className="text-white w-8 h-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* Calendar - Blue 3D breathing */}
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-2.5s]">
                                    <Calendar className="text-white w-6 h-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* Notes - Blue 3D breathing */}
                                <div className="absolute bottom-0 right-12 w-14 h-14 bg-gradient-to-b from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-0.8s]">
                                    <StickyNote className="text-white w-6 h-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                                {/* Page - Blue 3D breathing */}
                                <div className="absolute top-1/2 right-6 w-12 h-12 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-blue-400/30 animate-breath [animation-delay:-1.8s]">
                                    <FileText className="text-white w-5 h-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                                </div>
                            </div>
                            {/* Blue Core Glow */}
                            <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-[80px] z-[1]" />
                        </div>
                    </Card>

                    {/* Card 3: Launch and Take Control WITH BG */}
                    <Card
                        number="3"
                        title="Launch and Take Control"
                        description="You get a plug-and-play dashboard with a walkthrough to manage everything easily."
                        bgImage={card3Bg}
                    >
                        <div className="relative w-64 h-36 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105 z-[2]">
                            {/* Dashboard Header UI */}
                            <div className="h-6 bg-zinc-800 border-b border-white/5 flex items-center px-3 gap-1.5 focus:outline-none">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <div className="ml-auto w-8 h-2 bg-zinc-700 rounded-full" />
                            </div>

                            {/* Live Indicator */}
                            <div className="absolute top-8 right-3 flex items-center gap-1.5 bg-red-500/10 px-2 py-0.5 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Live</span>
                            </div>

                            {/* Dashboard Content Mock */}
                            <div className="p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg border border-blue-500/20 flex items-center justify-center">
                                        <Play className="text-blue-500 fill-blue-500 w-4 h-4" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="w-24 h-2 bg-zinc-800 rounded-full" />
                                        <div className="w-16 h-2 bg-zinc-700 rounded-full" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-10 bg-zinc-800/50 rounded-lg border border-white/5" />
                                    <div className="h-10 bg-zinc-800/50 rounded-lg border border-white/5" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
