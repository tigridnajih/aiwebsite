'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { url: 'https://i.pinimg.com/1200x/d5/ac/3a/d5ac3a9cd282c1bd0aa44ce6b7f52221.jpg' },
    { url: 'https://i.pinimg.com/1200x/8b/72/e7/8b72e7904f2d3f687bd6051cf36962d6.jpg' },
    { url: 'https://i.pinimg.com/1200x/80/13/81/801381ce1ef3c4f08ecc58055a5f6a44.jpg' },
    { url: 'https://i.pinimg.com/736x/16/9b/c1/169bc12e57821b9ee9de2cfb0c02d156.jpg' },
    { url: 'https://i.pinimg.com/1200x/9a/73/1d/9a731d7608517e4bcd7f9716d5187424.jpg' },
    { url: 'https://i.pinimg.com/736x/a5/80/66/a58066e9c111c772958a21960ed5f9e9.jpg' },
    { url: 'https://i.pinimg.com/736x/ab/ab/b9/ababb9436999e8bd6531c56ca7e1efd4.jpg' }
];

// Double it for smooth looping completely around the 3D cylinder
const allProjects = [...projects, ...projects];

export default function PortfolioShowcase() {
    return (
        <section className="relative w-full overflow-hidden bg-[#FFFDFB] py-28 md:py-36 flex items-center justify-center min-h-[600px] md:min-h-[700px]">
            {/* 3D Perspective Container */}
            <div className="w-full h-full flex items-center justify-center" style={{ perspective: '1100px' }}>
                
                {/* Translate Z back by the exact radius so the front-most card passes perfectly at screen depth (z=0) */}
                <div style={{ transform: `translateZ(-900px)`, transformStyle: 'preserve-3d' }}>
                    
                    {/* The Rotating Drum */}
                    {/* Positive rotation produces Left to Right movement of the front face as requested */}
                    <motion.div
                        animate={{ rotateY: [0, 360] }} 
                        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                        className="relative flex items-center justify-center w-[240px] h-[340px] md:w-[300px] md:h-[440px] lg:w-[320px] lg:h-[480px]"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {allProjects.map((project, idx) => {
                            const angle = (idx * 360) / allProjects.length;
                            return (
                                <div
                                    key={idx}
                                    className="absolute inset-0 rounded-[24px] md:rounded-[32px] overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_25px_50px_rgba(0,0,0,0.18)] bg-slate-100 border border-black/5"
                                    style={{
                                        transform: `rotateY(${angle}deg) translateZ(900px)`,
                                        // Prevents rendering cards when they are on the back side of the cylinder
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}
                                >
                                    <div className="w-full h-full relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
                                        <img
                                            src={project.url}
                                            alt={`Project ${idx}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
