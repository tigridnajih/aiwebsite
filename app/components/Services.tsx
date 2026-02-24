'use client';
import SectionHeader from './SectionHeader';

export default function Services() {
    const features = [
        {
            badge: "Workflow Automation",
            title: "Automate repetitive tasks",
            description: "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains, saving time and cutting down errors.",
            tags: ["Internal Task Bots", "100+ Automations"],
            imageSide: "left",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-[#111111] rounded-[32px] border border-white/[0.06] overflow-hidden shadow-2xl flex items-center justify-center p-6 md:p-8">

                    <div className="relative w-full h-full flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        {/* Left: Bubble Column */}
                        <div className="w-full md:flex-[1.8] flex flex-col gap-3 md:gap-4">
                            {/* Emma - Top Bubble (Replying) */}
                            <div className="relative bg-gradient-to-br from-[#0B1F5C] to-[#040816] border border-blue-500/30 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-transform duration-500 group/emma">
                                <div className="flex items-start gap-3">
                                    <div className="relative shrink-0">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-800 overflow-hidden border border-white/[0.06]">
                                            <img
                                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
                                                alt="Emma"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#25D366] rounded-full border-2 border-[#0B1F5C] flex items-center justify-center shadow-lg">
                                            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[#F5F7FF] font-bold text-sm">Emma, RetailSync</span>
                                            <span className="text-[10px] text-blue-400 font-mono opacity-60">09:45 PM</span>
                                        </div>
                                        <p className="text-zinc-400 text-[10px] md:text-[11px] font-medium italic leading-snug">
                                            &ldquo;We&apos;re looking to automate inventory updates. Can you help?&rdquo;
                                        </p>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span className="text-blue-400 text-[10px] font-bold tracking-wider uppercase">Replying</span>
                                            <span className="flex gap-0.5 items-center">
                                                <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-duration:1s]" />
                                                <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s] [animation-duration:1s]" />
                                                <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s] [animation-duration:1s]" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Liam - Middle Bubble */}
                            <div className="bg-[#121212]/80 border border-white/[0.06] rounded-2xl p-4 shadow-lg opacity-40 grayscale-[0.5] hover:opacity-70 transition-opacity">
                                <div className="flex items-start gap-3">
                                    <div className="relative shrink-0">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-800 overflow-hidden border border-white/[0.06]">
                                            <img
                                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                                                alt="Liam"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full border border-black flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[#F5F7FF] font-bold text-xs">Liam, FinEdge Analytics</span>
                                            <span className="text-[9px] text-zinc-500 font-mono">12:45 AM</span>
                                        </div>
                                        <p className="text-zinc-500 text-[10px] leading-snug truncate">
                                            &ldquo;How does your AI handle financial data processing?&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Olivia - Bottom Bubble */}
                            <div className="bg-[#121212]/80 border border-white/[0.06] rounded-2xl p-4 shadow-lg opacity-40 grayscale-[0.5] hover:opacity-70 transition-opacity">
                                <div className="flex items-start gap-3">
                                    <div className="relative shrink-0">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-800 overflow-hidden border border-white/[0.06]">
                                            <img
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                                                alt="Olivia"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border border-black flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[#F5F7FF] font-bold text-xs">Olivia, GreenTech Solutions</span>
                                            <span className="text-[9px] text-zinc-500 font-mono">02:45 AM</span>
                                        </div>
                                        <p className="text-zinc-500 text-[10px] leading-snug truncate">
                                            &ldquo;Looking for AI automation to streamline customer inquiries.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center: Animated Connecting Lines */}
                        <div className="hidden md:block flex-1 h-full relative">
                            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                {/* Emma Curve */}
                                <path
                                    d="M 0 60 C 40 60, 60 130, 100 130"
                                    fill="none"
                                    stroke="url(#blueFlowGradient)"
                                    strokeWidth="2"
                                    className="animate-pulse duration-[3s]"
                                    strokeDasharray="5 5"
                                />
                                {/* Liam Curve */}
                                <path
                                    d="M 0 150 C 40 150, 60 140, 100 140"
                                    fill="none"
                                    stroke="#2C4EDC"
                                    strokeWidth="1"
                                    strokeOpacity="0.2"
                                />
                                {/* Olivia Curve */}
                                <path
                                    d="M 0 220 C 40 220, 60 150, 100 150"
                                    fill="none"
                                    stroke="#2C4EDC"
                                    strokeWidth="1"
                                    strokeOpacity="0.1"
                                />
                                <defs>
                                    <linearGradient id="blueFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4E7BFF" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#2C4EDC" stopOpacity="1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Right: Automation Node */}
                        <div className="flex-none md:flex-[0.5] flex justify-center">
                            <div className="relative">
                                {/* Orbiting rings */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-green-500/20 rounded-full animate-spin-slow-extremely" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-green-500/10 rounded-full animate-spin-reverse-slow" />

                                {/* Central Node */}
                                <div className="relative w-16 h-16 bg-[#2C4EDC] rounded-2xl shadow-[0_0_50px_rgba(44,78,220,0.4)] flex items-center justify-center overflow-hidden animate-custom-float">
                                    <div className="w-8 h-8 bg-[#040816] rounded-lg shadow-inner flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-sm bg-[#4E7BFF]/30 animate-pulse" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />

                                    {/* Scanline effect */}
                                    <div className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent -translate-y-full animate-custom-scan" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            badge: "AI Assistant",
            title: "Delegate Daily Tasks",
            description: "From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.",
            tags: ["Summaries", "Scheduling", "Many more"],
            imageSide: "right",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl">

                    <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                        <div className="w-20 h-20 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-6 animate-pulse">
                            <div className="w-12 h-12 rounded-full bg-purple-500/40" />
                        </div>
                        <div className="w-48 h-3 bg-white/20 rounded mb-3" />
                        <div className="w-32 h-2 bg-white/10 rounded" />
                        <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                            <div className="h-10 bg-white/5 rounded-lg border border-white/[0.06]" />
                            <div className="h-10 bg-white/5 rounded-lg border border-white/[0.06]" />
                        </div>
                    </div>
                </div>
            )
        },
        {
            badge: "Sales & Marketing",
            title: "Accelerate Sales Growth",
            description: "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
            tags: ["Leads", "Content", "Social post"],
            imageSide: "left",
            mockup: (
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl">
                    <div className="p-8">
                        <div className="flex items-end gap-2 h-48">
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
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl">
                    <div className="p-8 font-mono text-[10px] text-purple-400/60 break-all">
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
        <section id="services" className="py-20 bg-[##070707] text-white selection:bg-purple-500/30">
            <div className="container-custom">
                <SectionHeader
                    badge="Our Services"
                    title="What we build"
                    description="We design, develop, and implement automation tools that help you work smarter, not harder"
                />

                {/* Features Loop */}
                <div className="flex flex-col gap-32 md:gap-48">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col gap-12 items-center ${feature.imageSide === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Mockup Content */}
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
