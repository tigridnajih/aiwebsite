'use client';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const cases = [
    {
        id: "001",
        title: "Aureon Digital",
        description: "How we deployed an AI chatbot that qualified inbound traffic and routed high-intent visitors directly to the sales team.",
        image: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1200",
        stats: [
            { label: "Work Reduction", value: "3x" },
            { label: "Leads Growth", value: "62%" },
            { label: "Cost Savings", value: "28%" }
        ]
    },
    {
        id: "002",
        title: "Nexa Logistics",
        description: "Implementing an AI-driven route optimization engine that reduced fuel costs and improved delivery times across global regions.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        stats: [
            { label: "Efficiency Boost", value: "45%" },
            { label: "Fuel Savings", value: "$2.4M" },
            { label: "Delivery Time", value: "-18%" }
        ]
    },
    {
        id: "003",
        title: "CloudScale SaaS",
        description: "Designing a predictive analytics dashboard that identifies churn risk and suggests personalized retention strategies for enterprise clients.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        stats: [
            { label: "Churn Reduction", value: "22%" },
            { label: "Retention", value: "+34%" },
            { label: "LTV Growth", value: "15%" }
        ]
    }
];

const CaseCard = ({ c, index }: { c: typeof cases[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 * index }}
        className="sticky w-full bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/[0.05] shadow-2xl mb-12"
        style={{ top: `${80 + index * 40}px` }}
    >
        <div className="flex flex-col md:flex-row min-h-[450px]">
            {/* Content Left */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <span className="text-zinc-500 font-mono text-sm tracking-widest block mb-6">// {c.id}</span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">{c.title}</h3>
                    <p className="text-[#a1a1a1] text-lg md:text-xl leading-relaxed max-w-md">
                        {c.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 md:mt-24">
                    {c.stats.map((stat, sIdx) => (
                        <div key={sIdx}>
                            <p className="text-zinc-500 text-xs md:text-sm font-medium mb-2 uppercase tracking-wider">{stat.label}</p>
                            <p className="text-white text-2xl md:text-3xl font-bold">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Right */}
            <div className="flex-1 flex items-center justify-center p-2 md:p-3 group">
                <div className="relative w-full h-full min-h-[300px] md:min-h-full rounded-lg md:rounded-xl overflow-hidden border border-white/[0.05]">
                    <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Logo Placeholder like screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg" />
                            <span className="text-white font-bold text-xl tracking-tight">Logoipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 bg-[#070707]">
            <div className="container-custom">
                <SectionHeader
                    badge="Results"
                    title="Propelling businesses forward"
                    description="We don't just build AI; we build competitive advantages through measurable outcomes."
                />

                <div className="relative mt-24">
                    {cases.map((c, idx) => (
                        <CaseCard key={c.id} c={c} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
