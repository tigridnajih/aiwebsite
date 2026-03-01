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
        className="sticky w-full bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/[0.05] shadow-2xl mb-12 hover:border-[#385BFF]/60 hover:shadow-[0_0_40px_rgba(56,91,255,0.15)] transition-all duration-500 group/card"
        style={{ top: `${80 + index * 40}px` }}
    >
        <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Content Left */}
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
                <div>
                    <span className="text-zinc-600 font-mono text-[10px] md:text-xs tracking-widest block mb-4">// {c.id}</span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4 group-hover/card:text-[#385BFF] transition-colors duration-500">{c.title}</h3>
                    <p className="text-[#888888] text-base md:text-lg leading-relaxed max-w-md">
                        {c.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:mt-16">
                    {c.stats.map((stat, sIdx) => (
                        <div key={sIdx}>
                            <p className="text-zinc-500 text-[10px] md:text-xs font-medium mb-1 uppercase tracking-wider">{stat.label}</p>
                            <p className="text-white text-xl md:text-2xl font-bold">{stat.value}</p>
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
                        className="w-full h-full object-cover transition-transform duration-700"
                    />
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
