import Link from 'next/link';
import SectionHeader from './SectionHeader';

const members = [
    {
        name: "Alex Bima",
        role: "Founder & AI Architect",
        image: "/placeholder-team-1.jpg"
    },
    {
        name: "Sarah Chen",
        role: "Lead Prompt Engineer",
        image: "/placeholder-team-2.jpg"
    },
    {
        name: "Marcus Johnson",
        role: "Automation Specialist",
        image: "/placeholder-team-3.jpg"
    }
];

export default function Team() {
    return (
        <section className="py-20 border-t border-gray-100 bg-[##070707] dark:border-white/[0.06]">
            <div className="container-custom">
                <SectionHeader
                    badge="Experts"
                    title="Meet the Team"
                    description="The human intelligence behind the artificial one. Dedicated to your growth."
                />

                <div className="flex justify-end mb-8">
                    <Link href="#about" className="text-accent font-semibold hover:underline">Join our team →</Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {members.map((m, idx) => (
                        <div key={idx} className="group text-center">
                            <div className="aspect-square rounded-full bg-gray-100 mb-6 mx-auto overflow-hidden relative w-48 h-48 dark:bg-zinc-800">
                                <div className="w-full h-full bg-gray-200 group-hover:scale-110 transition-transform duration-500 dark:bg-zinc-700" />
                            </div>
                            <h3 className="text-xl font-bold">{m.name}</h3>
                            <p className="text-accent font-medium text-sm">{m.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
