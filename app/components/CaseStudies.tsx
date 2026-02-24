import Link from 'next/link';
import SectionHeader from './SectionHeader';

const cases = [
    {
        id: 1,
        title: "Automating Lead Qualification for Real Estate",
        description: "Reduced response time by 98% and increased qualified leads by 3x.",
        category: "Real Estate",
        image: "/placeholder-case-1.jpg" // Placeholder path
    },
    {
        id: 2,
        title: "SaaS Customer Support Deflection",
        description: "AI Chatbot resolved 70% of support tickets without human intervention.",
        category: "SaaS",
        image: "/placeholder-case-2.jpg"
    },
    {
        id: 3,
        title: "E-commerce Product Description Generator",
        description: "Generated 5,000+ unique SEO-optimized descriptions in 48 hours.",
        category: "E-commerce",
        image: "/placeholder-case-3.jpg"
    }
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-20 bg-[#0A0A0A] overflow-hidden">
            <div className="container-custom">
                <SectionHeader
                    badge="Results"
                    title="Case Studies"
                    description="See how we've helped other businesses achieve measurable results with custom AI."
                />

                <div className="flex justify-end mb-8">
                    <Link href="#" className="hidden md:inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                        View All Projects →
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((c) => (
                        <div key={c.id} className="group cursor-pointer">
                            <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden mb-6 relative dark:bg-zinc-800">
                                {/* Image Placeholder */}
                                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500 dark:bg-zinc-700" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{c.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="#" className="inline-flex items-center gap-2 text-accent font-semibold">
                        View All Projects →
                    </Link>
                </div>
            </div>
        </section>
    );
}
