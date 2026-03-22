import Link from 'next/link';
import SectionHeader from './SectionHeader';

const posts = [
    {
        title: "Why Most AI Chatbots Fail (And How to Fix Them)",
        date: "Sep 24, 2024",
        snippet: "Implementing a chatbot isn't just about the prompting...",
        category: "Strategy"
    },
    {
        title: "10 Steps to Automate Your Agency Client Onboarding",
        date: "Aug 15, 2024",
        snippet: "Speed up time-to-value and reduce manual work by 90%.",
        category: "Automation"
    },
    {
        title: "Case Study: Scaling to $100k/mo with AI",
        date: "Jul 10, 2024",
        snippet: "How we helped TechFlow scale their operations using AI agents.",
        category: "Growth"
    },
];

export default function Blog() {
    return (
        <section className="relative py-20 lg:py-[120px] bg-white">
            <div className="container-custom">
                <SectionHeader
                    badge="Insights"
                    title="Latest Blog Posts"
                    description="Stay updated with the latest trends in AI automation."
                />

                <div className="flex justify-end mb-8 mt-12">
                    <Link href="/blog" className="text-accent font-bold hover:underline hidden md:inline-block tracking-tight">View All Articles →</Link>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {posts.map((p, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[16/10] rounded-3xl bg-slate-50 border border-slate-100 mb-6 overflow-hidden relative shadow-sm group-hover:shadow-xl transition-all duration-500">
                                <div className="w-full h-full bg-slate-100 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent" />
                            </div>
                            <p className="text-[10px] text-accent font-bold mb-3 uppercase tracking-widest leading-none">{p.date}</p>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight text-slate-900 tracking-tight">{p.title}</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-2">{p.snippet}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
