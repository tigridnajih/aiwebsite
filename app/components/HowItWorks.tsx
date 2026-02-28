'use client';

import { motion } from 'framer-motion';

const PHASES = [
    {
        number: '01',
        title: 'Analyze Client Workflow',
        description: 'We audit your systems and identify automation opportunities.',
    },
    {
        number: '02',
        title: 'Architect & Implement Automation',
        description: 'We engineer custom solutions tailored to your operational requirements.',
    },
    {
        number: '03',
        title: 'Deploy & Transfer Ownership',
        description: 'We integrate systems and provide full operational independence.',
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-24 md:py-32 bg-black border-y border-white/5 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Centered Heading */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 uppercase">
                        Our Engineering Process
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto tracking-tight opacity-70">
                        A structured lifecycle from workflow analysis to full system ownership.
                    </p>
                </div>

                {/* 3-Card Grid with Procedural Animation */}
                <div className="relative">
                    {/* Central Flow Path - Desktop */}
                    <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[1px] bg-white/[0.05] z-0" />

                    {/* Sequential Glowing Dot - Desktop */}
                    <motion.div
                        initial={{ left: '16.5%', opacity: 0 }}
                        animate={{
                            left: [
                                '16.5%', // Card 1 center (approx)
                                '16.5%', // Pause for rotation
                                '50%',   // Card 2 center
                                '50%',   // Pause for rotation
                                '83.5%', // Card 3 center
                                '83.5%', // Pause for rotation
                                '83.5%'  // End loop
                            ],
                            opacity: [0, 1, 1, 1, 1, 1, 0]
                        }}
                        transition={{
                            duration: 9, // Total cycle time (2s rotation * 3 + 1.5s flow * 2)
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.22, 0.38, 0.61, 0.77, 1, 1]
                        }}
                        className="hidden md:block absolute top-[52px] -translate-y-1/2 w-3 h-3 z-30 pointer-events-none"
                    >
                        <div className="w-full h-full bg-blue-500 rounded-full blur-[4px] shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {PHASES.map((phase, index) => (
                            <div
                                key={phase.number}
                                className="group relative flex flex-col items-start p-8 md:p-10 bg-black/40 rounded-3xl overflow-hidden"
                            >
                                {/* Rotating Border Effect */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0, 1, 1, 0],
                                        rotate: [0, 360]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 6, // 9 total cycle - 3 active
                                        delay: index * 3, // Stagger based on position
                                        ease: "linear"
                                    }}
                                    className="absolute -inset-[2px] z-0 pointer-events-none"
                                >
                                    <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(59,130,246,0.6)_360deg)] rounded-3xl" />
                                </motion.div>

                                {/* Card Inner Border (Static) */}
                                <div className="absolute inset-0 border border-white/10 rounded-3xl z-0" />

                                {/* Card Content Layer */}
                                <div className="relative z-10 w-full">
                                    {/* White Circular Number Badge */}
                                    <div className="flex items-center justify-center w-11 h-11 bg-white rounded-full mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                        <span className="text-black font-extrabold text-lg leading-none">
                                            {parseInt(phase.number)}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-50 transition-colors">
                                        {phase.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed tracking-tight group-hover:text-gray-400 transition-colors">
                                        {phase.description}
                                    </p>
                                </div>

                                {/* Mobile Connector (Vertical Flow) */}
                                {index < PHASES.length - 1 && (
                                    <div className="md:hidden absolute -bottom-10 left-11 w-px h-10 bg-white/5 overflow-hidden">
                                        <motion.div
                                            animate={{ y: ['-100%', '100%'], opacity: [0, 1, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 3 }}
                                            className="w-full h-full bg-blue-500"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
