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
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4 justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-md bg-purple-500/20" />
                                        <div className="w-24 h-2 bg-white/10 rounded" />
                                    </div>
                                    <div className="w-12 h-2 bg-green-500/20 rounded" />
                                </div>
                            ))}
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
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
                    <div className="flex flex-col items-center justify-center h-full p-10 text-center">
                        <div className="w-20 h-20 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-6 animate-pulse">
                            <div className="w-12 h-12 rounded-full bg-purple-500/40" />
                        </div>
                        <div className="w-48 h-3 bg-white/20 rounded mb-3" />
                        <div className="w-32 h-2 bg-white/10 rounded" />
                        <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                            <div className="h-10 bg-white/5 rounded-lg border border-white/10" />
                            <div className="h-10 bg-white/5 rounded-lg border border-white/10" />
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
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
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
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
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
                            <div className="w-1/2 h-20 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 rounded bg-purple-500/20" />
                            </div>
                            <div className="w-1/2 h-20 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[20px]">
                                +
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="services" className="pb-32 pt-0 bg-black text-white selection:bg-purple-500/30">
            <div className="container-custom">
                <SectionHeader
                    badge="Our Services"
                    title={<>AI Solutions That Take Your <br className="hidden md:block" /> Business to the Next Level</>}
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
                            <div className="flex-1 w-full max-w-2xl px-4 md:px-0">
                                {feature.mockup}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
