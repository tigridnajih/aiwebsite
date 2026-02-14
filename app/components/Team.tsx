import Link from 'next/link';

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
        <section className="py-24 border-t border-gray-100 bg-white dark:bg-black dark:border-zinc-800">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-h2 font-bold mb-4">Meet the Experts</h2>
                        <p className="text-body text-gray-500">The human intelligence behind the artificial one.</p>
                    </div>
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
