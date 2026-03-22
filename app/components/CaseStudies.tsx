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
        description: "Designing a predictive analytics dashboard that identifies churn risk and suggests personalized retention strategies.",
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
        className="sticky w-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-2xl mb-12 hover:border-accent transition-all duration-500 group/card"
        style={{ top: `${80 + index * 40}px` }}
    >
        <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Content Left */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <span className="text-slate-400 font-mono text-[10px] md:text-xs tracking-widest block mb-4 uppercase font-bold">// {c.id}</span>
                    <h3 className="text-[clamp(1.875rem,5vw,3rem)] font-bold text-slate-900 tracking-tight mb-4 group-hover/card:text-accent transition-colors duration-500">{c.title}</h3>
                    <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md font-medium">
                        {c.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                    {c.stats.map((stat, sIdx) => (
                        <div key={sIdx}>
                            <p className="text-slate-400 text-[10px] md:text-xs font-bold mb-1 uppercase tracking-wider">{stat.label}</p>
                            <p className="text-slate-900 text-xl md:text-3xl font-bold tracking-tight">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Right */}
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                    <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover grayscale-[0.2] group-hover/card:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </div>
    </motion.div>
);

export default function CaseStudies() {
    return (
        <section id="case-studies" className="relative py-20 lg:py-[120px] bg-white border-y border-slate-50">
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
