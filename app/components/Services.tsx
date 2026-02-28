'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

const AutomationMockup = () => {
    const messages = [
        {
            id: 1,
            name: "Emma",
            company: "RetailSync",
            text: "We're looking to automate inventory updates. Can you help?",
            time: "09:45 PM",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
            platform: "whatsapp"
        },
        {
            id: 2,
            name: "Liam",
            company: "FinEdge Analytics",
            text: "How does your AI handle financial data processing?",
            time: "12:45 AM",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
            platform: "whatsapp"
        },
        {
            id: 3,
            name: "Olivia",
            company: "GreenTech Solutions",
            text: "Looking for AI automation to streamline customer inquiries.",
            time: "02:45 AM",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
            platform: "email"
        },
        {
            id: 4,
            name: "Marcus",
            company: "Global Logistics",
            text: "Can we automate route optimization for our fleet?",
            time: "04:20 AM",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
            platform: "whatsapp"
        },
        {
            id: 5,
            name: "Sarah",
            company: "HealthPlus",
            text: "Searching for a solution to automate patient scheduling.",
            time: "06:15 AM",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
            platform: "email"
        }
    ];

    const [visibleMessages, setVisibleMessages] = React.useState(messages.slice(0, 3));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setVisibleMessages((prev) => {
                const currentIndex = messages.findIndex(m => m.id === prev[0].id);
                const nextStartIndex = (currentIndex + 1) % messages.length;

                const nextItems = [];
                for (let i = 0; i < 3; i++) {
                    nextItems.push(messages[(nextStartIndex + i) % messages.length]);
                }
                return nextItems;
            });
        }, 3500);
        return () => clearInterval(interval);
    }, [messages]);

    return (
        <div className="w-full max-w-md mx-auto relative px-4 min-h-[420px] flex flex-col justify-start">
            <AnimatePresence mode="popLayout" initial={false}>
                {visibleMessages.map((msg, idx) => (
                    <motion.div
                        key={msg.id}
                        layout
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{
                            opacity: idx === 0 ? 1 : idx === 1 ? 0.6 : 0.3,
                            x: 0,
                            scale: idx === 0 ? 1.05 : 1,
                            zIndex: 10 - idx,
                            filter: idx === 0 ? "blur(0px)" : `blur(${idx * 1}px)`,
                            marginTop: idx === 0 ? 0 : 16,
                        }}
                        exit={{
                            opacity: 0,
                            x: 20,
                            scale: 0.9,
                            transition: { duration: 0.3 }
                        }}
                        transition={{
                            layout: { type: "spring", stiffness: 250, damping: 30 },
                            opacity: { duration: 0.4 },
                            scale: { duration: 0.4 },
                            filter: { duration: 0.4 }
                        }}
                        style={{
                            originY: 0
                        }}
                        className={`relative rounded-2xl p-5 border overflow-hidden shadow-xl w-full transition-colors duration-500 bg-[#0d0d0d]/80 backdrop-blur-sm border-white/[0.06]`}
                    >
                        {/* Sapphire Gradient Overlay - Controlled via Opacity for Smoothness */}
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: idx === 0 ? 1 : 0,
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-[#3B5BFF] to-[#000000] z-0"
                        />

                        <div className="relative z-10 flex items-start gap-4">
                            <div className="relative shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-zinc-800 overflow-hidden border border-white/[0.06]">
                                    <img src={msg.image} alt={msg.name} className="w-full h-full object-cover" />
                                </div>
                                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center shadow-lg transition-colors duration-500 ${msg.platform === 'whatsapp' ? 'bg-[#25D366]' : 'bg-blue-500'
                                    } ${idx === 0 ? 'border-[#3B5BFF]' : 'border-black'}`}>
                                    {msg.platform === 'whatsapp' ? (
                                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <span className={`font-bold text-base transition-colors duration-500 ${idx === 0 ? 'text-white' : 'text-[#F5F7FF]'}`}>{msg.name}, {msg.company}</span>
                                    <span className={`text-xs font-mono opacity-60 transition-colors duration-500 ${idx === 0 ? 'text-blue-100' : 'text-zinc-500'}`}>{msg.time}</span>
                                </div>
                                <p className={`text-xs md:text-sm font-medium italic leading-relaxed transition-colors duration-500 ${idx === 0 ? 'text-blue-50' : 'text-zinc-400'}`}>
                                    &ldquo;{msg.text}&rdquo;
                                </p>
                                <AnimatePresence>
                                    {idx === 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-3 flex items-center gap-2 overflow-hidden"
                                        >
                                            <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase">Replying</span>
                                            <span className="flex gap-1 items-center">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-duration:1s]" />
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s] [animation-duration:1s]" />
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s] [animation-duration:1s]" />
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default function Services() {
    const features = [
        {
            badge: "Workflow Automation",
            title: "Automate repetitive tasks",
            description: "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains, saving time and cutting down errors.",
            tags: ["Internal Task Bots", "100+ Automations"],
            imageSide: "left",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-[#070707] rounded-[32px] border border-white/[0.06] overflow-hidden shadow-2xl flex items-center justify-center p-8 md:p-12">
                    <div className="relative w-full max-w-md mx-auto">
                        <AutomationMockup />
                    </div>
                </div>
            )
        },
        {
            badge: "AI Assistant",
            title: "Data Processing & Insights",
            description: "Turn raw data into actionable insights with AI-driven analysis and reporting.",
            tags: ["Summaries", "Scheduling", "Many more"],
            imageSide: "right",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-[#070707] rounded-[32px] border border-white/[0.06] overflow-hidden shadow-2xl p-8 md:p-12 flex flex-col justify-between">
                    <div className="relative flex justify-between items-start z-10 w-full mb-4">
                        <div className="flex flex-col gap-2">
                            <div className="w-[120px] h-[4px] bg-white/[0.1] rounded-full" />
                            <div className="w-[80px] h-[3px] bg-white/[0.05] rounded-full" />
                        </div>
                        <div className="w-[120px] h-[4px] bg-white/[0.1] rounded-full" />
                    </div>

                    <div className="relative flex-1 mt-6 flex flex-col z-10">
                        <div className="absolute top-0 left-0 px-6 py-3 rounded-2xl bg-gradient-to-br from-[#3B5BFF] to-[#000000] flex items-center justify-center z-20">
                            <span className="text-white text-sm md:text-base font-bold tracking-tight">87% +</span>
                        </div>

                        <div className="flex-1 w-full flex items-end justify-between gap-3 md:gap-5 pt-8 relative z-10">
                            {[72, 48, 85, 63, 91, 54, 76, 58].map((val, idx) => (
                                <div key={idx} className="flex-1 h-full flex items-end justify-center group">
                                    <motion.div
                                        initial={{ height: "0%" }}
                                        whileInView={{ height: `${val}%` }}
                                        viewport={{ once: false, amount: 0.4 }}
                                        transition={{
                                            duration: 1.2,
                                            delay: idx * 0.1,
                                            ease: "easeOut"
                                        }}
                                        style={{
                                            background: "linear-gradient(180deg, #3B5BFF 0%, #000000 100%)",
                                            boxShadow: "none"
                                        }}
                                        className="w-full rounded-t-md origin-bottom relative overflow-hidden"
                                    >
                                        <motion.div
                                            animate={{ y: ["-150%", "300%"] }}
                                            transition={{
                                                duration: 7,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: 1 + (idx * 0.2)
                                            }}
                                            className="absolute inset-0 w-full h-[60%]"
                                            style={{
                                                background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(59,91,255,0.08) 50%, rgba(255,255,255,0) 100%)",
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            badge: "Sales & Marketing",
            title: "Accelerate Sales Growth",
            description: "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
            tags: ["Leads", "Content", "Social post"],
            imageSide: "left",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-[#0d0d0d] rounded-[32px] border border-white/[0.06] overflow-hidden shadow-2xl p-8 md:p-12 flex flex-col justify-center">
                    <div className="relative w-full">
                        <div className="flex items-end gap-2 h-40 md:h-48">
                            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                                <div key={i} className="flex-1 bg-purple-500/20 border-t border-purple-500/40 rounded-t-sm" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                        <div className="mt-6 flex justify-between">
                            <div className="space-y-2">
                                <div className="w-20 h-2 bg-white/10 rounded" />
                                <div className="w-12 h-4 bg-white/20 rounded" />
                            </div>
                            <div className="space-y-2 text-right">
                                <div className="w-20 h-2 bg-white/10 rounded" />
                                <div className="w-12 h-4 bg-green-500/30 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            badge: "Custom Projects",
            title: "Build Smarter Systems",
            description: "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
            tags: ["Strategy", "Custom AI", "Consulting"],
            imageSide: "right",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-[#0d0d0d] rounded-[32px] border border-white/[0.06] overflow-hidden shadow-2xl p-8 md:p-12 flex flex-col justify-center">
                    <div className="relative w-full font-mono text-[10px] text-purple-400/60 break-all">
                        {`{
  "project": "Intelligent_Sync",
  "status": "deploying",
  "nodes": [
    {"id": "ai-core", "load": 0.42},
    {"id": "data-bridge", "latency": "12ms"},
    {"id": "auth-layer", "secure": true}
  ],
  "intelligence_score": 0.98,
  "last_check": "2024-02-21T16:25:52Z"
}`}
                        <div className="mt-8 flex gap-4">
                            <div className="w-1/2 h-20 bg-white/5 border border-white/[0.06] rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 rounded bg-purple-500/20" />
                            </div>
                            <div className="w-1/2 h-20 bg-white/5 border border-white/[0.06] rounded-lg flex items-center justify-center text-[20px]">
                                +
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="solutions" className="py-20 bg-[#070707] text-white selection:bg-purple-500/30">
            <div className="container-custom">
                <SectionHeader
                    badge="Our Services"
                    title="What we build"
                    description="We design, develop, and implement automation tools that help you work smarter, not harder"
                />

                <div className="flex flex-col gap-32 md:gap-48">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col gap-12 items-center ${feature.imageSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="flex-1 w-full max-w-2xl px-0 md:px-0">
                                {feature.mockup}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
