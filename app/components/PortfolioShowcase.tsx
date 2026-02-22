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
        <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
            {/* Infinite Scroll Wrapper with CSS Mask for transparent Fading */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}
            >
                {/* Scrolling Container */}
                <div className="flex animate-infinite-scroll-right hover:[animation-play-state:paused] gap-12 whitespace-nowrap py-8">
                    {allProjects.map((project, idx) => (
                        <div key={idx} className="flex flex-col gap-6 flex-shrink-0 group">
                            {/* Image with Blue Glowing Border */}
                            <div className="relative h-[350px] md:h-[450px] w-auto rounded-[20px] overflow-hidden border border-blue-500/20 group-hover:border-blue-400 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] bg-zinc-900">
                                <img
                                    src={project.url}
                                    alt={project.title}
                                    className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                {/* Glass Overlay on hover */}
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 pointer-events-none" />
                            </div>

                            {/* Caption Text Below Image - Styled to match reference */}
                            <div className="px-1">
                                <p className="text-[#666] font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-blue-400">
                                    {project.title.split(' - ')[0]} <span className="mx-2 opacity-30">—</span> <span className="text-[#999] group-hover:text-white transition-colors">{project.title.split(' - ')[1]}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
