'use client';

import Image from 'next/image';

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
        <section className="pt-0 pb-12 bg-[##070707] overflow-hidden relative">
            {/* Infinite Scroll Wrapper with CSS Mask for transparent Fading */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, ##070707 15%, ##070707 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, ##070707 15%, ##070707 85%, transparent 100%)'
                }}
            >
                {/* Scrolling Container */}
                <div className="flex animate-infinite-scroll-right gap-6 whitespace-nowrap py-8">
                    {allProjects.map((project, idx) => (
                        <div key={idx} className="flex flex-col gap-3 flex-shrink-0">
                            {/* Image with Refined Minimal Border and Depth Shadow */}
                            <div
                                className="relative h-[260px] md:h-[340px] w-auto rounded-[20px] overflow-hidden bg-[#0d0d0d]"
                                style={{
                                    border: '1px solid rgba(255, 255, 255, 0.06)',
                                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
                                }}
                            >
                                <img
                                    src={project.url}
                                    alt={project.title}
                                    className="h-full w-auto object-contain"
                                />
                            </div>

                            {/* Caption Text Below Image - Styled to match reference */}
                            <div className="px-1">
                                <p className="text-[#666] font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase">
                                    {project.title.split(' - ')[0]} <span className="mx-2 opacity-30">—</span> <span className="text-[#999]">{project.title.split(' - ')[1]}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
