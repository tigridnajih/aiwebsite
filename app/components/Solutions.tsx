import { Bot, MessageSquare, Database, Zap, Sparkles, Workflow } from 'lucide-react';

const services = [
    {
        icon: Bot,
        title: "AI Chatbots & Agents",
        description: "Intelligent, conversational agents that handle customer support, sales, and lead qualification 24/7."
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        description: "Streamline complex business processes, from onboarding to invoicing, using advanced automation."
    },
    {
        icon: Database,
        title: "Data Extraction & Enrichment",
        description: "Automatically pull data from documents, emails, and websites to enrich your CRM instantly."
    },
    {
        icon: MessageSquare,
        title: "Personalized Outreach",
        description: "AI-driven email and LinkedIn campaigns that personalize messaging at scale for higher conversion."
    },
    {
        icon: Zap,
        title: "Custom AI Tools",
        description: "We build bespoke internal tools tailored to your specific operational needs."
    },
    {
        icon: Sparkles,
        title: "Content Generation",
        description: "Automate social media posts, blog articles, and ad copy creation with brand-aligned AI models."
    }
];

export default function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-gray-50 dark:bg-black">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-h2 font-bold mb-4">Our Core Solutions</h2>
                    <p className="text-body text-gray-500">
                        We deliver end-to-end AI automation services designed to transform how your business operates.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <div
                            key={idx}
                            className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:bg-zinc-900/50 dark:border-zinc-800"
                        >
                            <div className="w-14 h-14 bg-accent/5 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <s.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
