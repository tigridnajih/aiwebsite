'use client';

import React from 'react';

const projects = [
    { url: 'https://i.pinimg.com/1200x/d5/ac/3a/d5ac3a9cd282c1bd0aa44ce6b7f52221.jpg' },
    { url: 'https://i.pinimg.com/1200x/8b/72/e7/8b72e7904f2d3f687bd6051cf36962d6.jpg' },
    { url: 'https://i.pinimg.com/1200x/80/13/81/801381ce1ef3c4f08ecc58055a5f6a44.jpg' },
    { url: 'https://i.pinimg.com/736x/16/9b/c1/169bc12e57821b9ee9de2cfb0c02d156.jpg' },
    { url: 'https://i.pinimg.com/1200x/9a/73/1d/9a731d7608517e4bcd7f9716d5187424.jpg' },
    { url: 'https://i.pinimg.com/736x/a5/80/66/a58066e9c111c772958a21960ed5f9e9.jpg' },
    { url: 'https://i.pinimg.com/736x/ab/ab/b9/ababb9436999e8bd6531c56ca7e1efd4.jpg' }
];

// Double items for the continuous circular layout
const allProjects = [...projects, ...projects];

export default function PortfolioShowcase() {
    // Math computations based perfectly on the user's CSS formula
    const n = allProjects.length;
    const w = 280; // 17.5em (approx 280px)
    const emOffset = 8; // 0.5em
    const ba = 360 / n; // Base Angle
    const angleRadians = (ba / 2) * (Math.PI / 180);
    // radius = (.5 * w + .5em) / tan(.5 * ba)
    const radius = ((0.5 * w) + emOffset) / Math.tan(angleRadians);

    return (
        <section className="relative w-full bg-[#FFF3ED] py-32 md:py-40 min-h-[600px] md:min-h-[750px] scene">
            <style>{`
                .scene {
                    display: grid;
                    overflow: hidden;
                    perspective: 35em;
                    mask-image: linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent);
                    -webkit-mask-image: linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent);
                }
                .a3d {
                    place-self: center;
                    transform-style: preserve-3d;
                    animation: ry 32s linear infinite;
                    display: grid;
                }
                @keyframes ry { 
                    to { transform: rotateY(1turn); } 
                }
                @media (prefers-reduced-motion: reduce) {
                    .a3d { animation-duration: 128s; }
                }
            `}</style>

            <div className="a3d">
                {allProjects.map((project, idx) => {
                    return (
                        <div
                            key={idx}
                            className="bg-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300"
                            style={{
                                gridArea: '1 / 1',
                                width: `${w}px`,
                                aspectRatio: '7 / 10',
                                borderRadius: '1.5em',
                                backfaceVisibility: 'hidden',
                                WebkitBackfaceVisibility: 'hidden',
                                transform: `rotateY(${idx * ba}deg) translateZ(-${radius}px)`
                            }}
                        >
                            <img
                                src={project.url}
                                alt={`Project ${idx}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
