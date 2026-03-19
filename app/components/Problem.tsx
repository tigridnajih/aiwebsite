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
        <section id="about" className="py-20 bg-white">
            <div className="container-custom">
                <SectionHeader
                    badge="The Bottleneck"
                    title="Is This Your Business?"
                    description="Sound familiar? Many companies struggle with these common bottlenecks before they decide to automate."
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {problems.map((p, idx) => (
                        <div key={idx} className="flex gap-6 p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl shadow-slate-200/50 transition-all duration-300 group">
                            <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center transition-transform group-hover:scale-110">
                                <p.icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{p.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
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
