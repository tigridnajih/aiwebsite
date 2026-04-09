'use client';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const cases = [
    {
        id: "001",
        title: "Aureon Digital",
        description: "How we deployed an AI chatbot that qualified inbound traffic and routed high-intent visitors directly to the sales team.",
        image: "https://docupile.com/wp-content/uploads/2025/02/Future-AI-Driven-Document-AUTOMATION-800x452.png",
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
        image: "https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/mediacentre/pressreleases/2022/02/aidata.jpg",
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

export default function CaseStudies() {
    return (
        <section id="case-studies" className="relative py-20 lg:py-[120px] bg-white overflow-hidden font-inter">
            <div className="container-custom">
                <SectionHeader
                    badge="Results"
                    title={<span className="text-slate-900 font-sans font-bold">Propelling businesses forward</span>}
                    description="We don't just build AI; we build competitive advantages through measurable outcomes."
                />
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24">
                    {cases.slice(0, 2).map((c, idx) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            className="group flex flex-col bg-white rounded-[28px] border border-[#eaeaea] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Image Container - FLUSH WITH BORDERS */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
 
                            {/* Text Content */}
                            <div className="p-6 md:p-6 flex flex-col">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors font-sans">
                                    {c.title} Case Study
                                </h3>
                                <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed font-medium">
                                    {c.description}
                                </p>
 

                            </div>
                        </motion.div>
                    ))}
                </div>
 
                {/* View More Button - Bottom Right */}
                <div className="flex justify-end mt-12">
                    <button className="group flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#eaeaea] bg-white text-slate-900 font-bold text-sm transition-all hover:bg-slate-50 hover:border-slate-300">
                        View more Cases
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
