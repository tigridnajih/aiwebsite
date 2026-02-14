import { Cpu } from 'lucide-react';

const stack = [
    { name: "GPT-4o", description: "Advanced Language Model" },
    { name: "Claude 3.5 Sonnet", description: "Creative Writing AI" },
    { name: "Zapier", description: "Automation Workflows" },
    { name: "Make.com", description: "Complex Integrations" },
    { name: "Vercel", description: "Frontend Hosting" },
    { name: "Pinecone", description: "Vector Database" },
    { name: "Python", description: "Backend Logic" },
    { name: "Framer", description: "Design System" },
];

export default function TechStack() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-950">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-h2 font-bold mb-4">Our Tech Stack</h2>
                    <p className="text-body text-gray-500">
                        We leverage the latest AI models and automation platforms to build robust solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stack.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-accent hover:shadow-md transition-all dark:bg-zinc-900 dark:border-zinc-800">
                            <div className="w-12 h-12 mb-4 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 dark:bg-zinc-800">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                            <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
