'use client';
import React from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    React.useEffect(() => {
        if (!isInView) return;

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
    }, [messages, isInView]);

    return (
        <div ref={containerRef} className="w-full max-w-full mx-auto relative px-4 min-h-[420px] flex flex-col justify-start">
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
                            marginTop: idx === 0 ? 0 : 16,
                            borderWidth: idx === 0 ? 0 : 1,
                            borderColor: "rgba(255, 255, 255, 0.06)",
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
                            borderWidth: { duration: 0.3 }
                        }}
                        style={{
                            originY: 0,
                            borderStyle: "solid"
                        }}
                        className={`relative rounded-2xl p-5 overflow-hidden shadow-xl w-full transition-colors duration-500 bg-[#0d0d0d]/80 backdrop-blur-sm`}
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

const SalesMarketingMockup = () => {
    const [step, setStep] = React.useState(0);
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    React.useEffect(() => {
        if (!isInView) return;

        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(timer);
    }, [isInView]);

    return (
        <div ref={containerRef} className="w-full max-w-lg mx-auto space-y-6">
            <AnimatePresence mode="wait">
                {step >= 0 && (
                    <div className="space-y-6">
                        {/* Customer Query */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-2"
                        >
                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Customer Query</span>
                            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 rounded-tl-none max-w-[85%]">
                                <p className="text-sm text-zinc-300">"What are your business hours and do you offer enterprise pricing?"</p>
                            </div>
                        </motion.div>

                        {/* AI Response Bubble */}
                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex flex-col items-end space-y-2"
                            >
                                <div className="flex items-center gap-2 mb-1 mr-1">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#3B5BFF] to-[#000000] flex items-center justify-center p-1">
                                        <div className="w-full h-full rounded-full bg-white/20 animate-pulse" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest text-[#3B5BFF] font-bold">AI Assistant</span>
                                </div>
                                <div className="bg-gradient-to-br from-[#3B5BFF] to-[#000000] rounded-2xl p-4 rounded-tr-none max-w-[90%]">
                                    {step === 1 ? (
                                        <div className="flex gap-1 py-1">
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-duration:0.8s]" />
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.2s] [animation-duration:0.8s]" />
                                            <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.4s] [animation-duration:0.8s]" />
                                        </div>
                                    ) : (
                                        <p className="text-sm text-white font-medium italic">
                                            "We operate 24/7! I've attached our customized enterprise tier proposal based on your current scale."
                                        </p>
                                    )}
                                </div>
                                {step >= 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-[10px] text-zinc-500 italic font-medium mr-1"
                                    >
                                        Automated Response • Sent via Email
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CustomProjectsMockup = () => {
    const [items, setItems] = React.useState([
        { name: "Gmail", action: "Processing inbound", icon: "M1.5 8.67V10.33C1.5 11.25 2.25 12 3.17 12H12.83C13.75 12 14.5 11.25 14.5 10.33V8.67", status: "Active" },
        { name: "AirTable", action: "Updating records", icon: "M10 2L2 7L10 12L18 7L10 2Z", status: "Syncing..." },
        { name: "Zoom", action: "Meeting logs", icon: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z", status: "Idle" }
    ]);
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    React.useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            setItems((prev) => {
                const newItems = [...prev];
                [newItems[1], newItems[2]] = [newItems[2], newItems[1]];
                return newItems;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div ref={containerRef} className="w-full max-w-lg mx-auto flex flex-col items-center">
            {/* Top Controller Node */}
            <motion.div
                animate={isInView ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B5BFF] to-[#000000] flex items-center justify-center shadow-[0_0_40px_rgba(59,91,255,0.4)] relative z-20 mb-[-2px]"
            >
                <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
            </motion.div>

            {/* Connecting Line */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#3B5BFF] to-white/5 relative z-10" />

            {/* Integration Cards */}
            <div className="w-full space-y-6 relative z-20">
                {items.map((item, i) => (
                    <motion.div
                        key={item.name}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            layout: { type: "spring", stiffness: 200, damping: 20 },
                            delay: i * 0.1
                        }}
                        className="bg-gradient-to-br from-[#3B5BFF] to-[#000000] rounded-2xl p-4 flex items-center justify-between shadow-xl"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                <svg viewBox="0 0 16 16" className="w-5 h-5" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                                    <path d={item.icon} />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                                <p className="text-[10px] text-white/50 font-medium">{item.action}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            {i === 0 ? (
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    <span className="text-[10px] font-bold text-white uppercase">Running</span>
                                </div>
                            ) : (
                                <span className="text-xs text-white/40 font-bold tracking-tight">{item.name === "AirTable" ? "Syncing..." : item.name === "Zoom" ? "Standby" : ""}</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Vertical Guide Line */}
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/10 to-transparent" />
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
                <div className="relative w-full aspect-[4/3] bg-[#070707] rounded-[32px] overflow-hidden shadow-2xl flex items-center justify-center p-4 md:p-6">
                    <div className="relative w-full max-w-xl mx-auto">
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
                <div className="relative w-full aspect-[4/3] bg-[#070707] rounded-[32px] overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col justify-between">
                    <div className="relative flex justify-between items-start z-10 w-full mb-4 px-4 pt-4">
                        <div className="flex flex-col gap-2">
                            <div className="w-[120px] h-[4px] bg-white/[0.1] rounded-full" />
                            <div className="w-[80px] h-[3px] bg-white/[0.05] rounded-full" />
                        </div>
                        <div className="w-[120px] h-[4px] bg-white/[0.1] rounded-full" />
                    </div>

                    <div className="relative flex-1 mt-6 flex flex-col z-10 px-4">
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
                <div className="relative w-full aspect-[4/3] bg-[#070707] rounded-[32px] overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col justify-center">
                    <div className="relative w-full max-w-xl mx-auto">
                        <SalesMarketingMockup />
                    </div>

                    {/* Background Decorative Elements to match Card 1/2 */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B5BFF]/5 blur-[60px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full" />
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
                <div className="relative w-full aspect-[4/3] bg-[#070707] rounded-[32px] overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col justify-center">
                    <div className="relative w-full max-w-xl mx-auto">
                        <CustomProjectsMockup />
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
