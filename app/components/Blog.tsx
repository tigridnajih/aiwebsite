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
        <section className="py-20 bg-gray-50 dark:bg-black">
            <div className="container-custom">
                <SectionHeader
                    badge="Insights"
                    title="Latest Blog Posts"
                    description="Stay updated with the latest trends in AI automation and business scaling."
                />

                <div className="flex justify-end mb-8">
                    <Link href="/blog" className="text-accent font-semibold hover:underline hidden md:inline-block">View All Articles →</Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((p, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[16/9] rounded-xl bg-gray-200 mb-6 overflow-hidden relative dark:bg-zinc-800">
                                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-500 dark:bg-zinc-700" />
                            </div>
                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-semibold">{p.date}</p>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">{p.title}</h3>
                            <p className="text-gray-600 font-medium text-sm line-clamp-2 dark:text-gray-400">{p.snippet}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
