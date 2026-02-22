import { AlertCircle, Clock, TrendingDown, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';

const problems = [
    {
        icon: Clock,
        title: "Wating Hours on Repetitive Tasks",
        description: "Your team spends valuable time on manual data entry, scheduling, and basic customer support."
    },
    {
        icon: TrendingDown,
        title: "Inconsistent Lead Follow-up",
        description: "leads slip through the cracks because you can't respond instantly 24/7."
    },
    {
        icon: Users,
        title: "Scaling Requires More Headcount",
        description: "Growing your agency means hiring more staff, increasing overhead and management complexity."
    },
    {
        icon: AlertCircle,
        title: "Human Error & Inconsistency",
        description: "Manual processes lead to mistakes, forgotten tasks, and inconsistent client experiences."
    },
];

export default function Problem() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-black">
            <div className="container-custom">
                <SectionHeader
                    badge="The Bottleneck"
                    title="Is This Your Business?"
                    description="Sound familiar? Many companies struggle with these common bottlenecks before they decide to automate."
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {problems.map((p, idx) => (
                        <div key={idx} className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors dark:hover:bg-zinc-900 border border-transparent hover:border-gray-100 dark:hover:border-zinc-800">
                            <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-red-50 text-red-500 flex items-center justify-center dark:bg-red-900/20">
                                <p.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
