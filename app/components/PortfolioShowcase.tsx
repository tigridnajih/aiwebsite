'use client';

import React from 'react';

const projects = [
    {
        url: 'https://i.pinimg.com/1200x/d5/ac/3a/d5ac3a9cd282c1bd0aa44ce6b7f52221.jpg',
        title: 'Website Design - Wanderly'
    },
    {
        url: 'https://i.pinimg.com/1200x/8b/72/e7/8b72e7904f2d3f687bd6051cf36962d6.jpg',
        title: 'App Design - Waitlista'
    },
    {
        url: 'https://i.pinimg.com/1200x/80/13/81/801381ce1ef3c4f08ecc58055a5f6a44.jpg',
        title: 'Website Design - Regulate'
    },
    {
        url: 'https://i.pinimg.com/736x/16/9b/c1/169bc12e57821b9ee9de2cfb0c02d156.jpg',
        title: 'App Design - Appit'
    },
    {
        url: 'https://i.pinimg.com/1200x/9a/73/1d/9a731d7608517e4bcd7f9716d5187424.jpg',
        title: 'Dashboard Design - Analytics'
    },
    {
        url: 'https://i.pinimg.com/736x/a5/80/66/a58066e9c111c772958a21960ed5f9e9.jpg',
        title: 'SaaS Landing - TechFlow'
    },
    {
        url: 'https://i.pinimg.com/736x/ab/ab/b9/ababb9436999e8bd6531c56ca7e1efd4.jpg',
        title: 'User Interface - Nexus'
    }
];

// Double the projects array for seamless looping
const allProjects = [...projects, ...projects];

export default function PortfolioShowcase() {
    return (
        <section className="py-[120px] bg-[#030712] overflow-hidden relative">
            {/* Extremely Subtle Radial Blue Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 20%, rgba(40, 90, 255, 0.08), transparent 70%)'
                }}
            />

            {/* Infinite Scroll Wrapper with CSS Mask for transparent Fading */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}
            >
                {/* Scrolling Container - Slower Cinematic Motion */}
                <div className="flex animate-infinite-scroll-right-slow gap-12 whitespace-nowrap py-8">
                    {allProjects.map((project, idx) => {
                        const [category, title] = project.title.split(' - ');
                        return (
                            <div key={idx} className="flex flex-col gap-6 flex-shrink-0 group cursor-pointer">
                                {/* Refined Card Frame */}
                                <div className="relative h-[300px] md:h-[450px] w-auto aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.06] bg-[#0A0A0A] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/[0.12]">
                                    {/* Subtle Top Highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-none h-[40%]" />

                                    <img
                                        src={project.url}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                    />

                                    {/* Optional Shine Effect on Hover */}
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                                </div>

                                {/* Refined Typography Below Card */}
                                <div className="px-2 space-y-1">
                                    <p className="text-white/50 font-mono text-[12px] tracking-[0.15em] uppercase">
                                        {category}
                                    </p>
                                    <h3 className="text-white text-lg font-medium tracking-tight">
                                        {title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
