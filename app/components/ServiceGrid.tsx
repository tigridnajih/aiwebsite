'use client';
import { motion } from 'framer-motion';
import { 
    Users, 
    CreditCard, 
    Zap, 
    Target, 
    MessageSquare, 
    Settings, 
    UserPlus,
    TrendingUp,
    FileText
} from 'lucide-react';

const SOLUTIONS = [
    {
        title: 'CRM Automation',
        description: 'Streamline customer relationships with automated workflows.',
        icon: <Users className="w-5 h-5 text-blue-500" />,
        bgColor: 'bg-blue-50'
    },
    {
        title: 'Financial Automation',
        description: 'Automate invoicing, expense tracking, and reporting.',
        icon: <CreditCard className="w-5 h-5 text-emerald-500" />,
        bgColor: 'bg-emerald-50'
    },
    {
        title: 'Workflow Automation',
        description: 'Connect your favorite tools and automate repetitive tasks.',
        icon: <Zap className="w-5 h-5 text-orange-500" />,
        bgColor: 'bg-orange-50'
    },
    {
        title: 'Marketing Automation',
        description: 'Drive growth with automated email and lead scoring.',
        icon: <Target className="w-5 h-5 text-rose-500" />,
        bgColor: 'bg-rose-50'
    },
    {
        title: 'Chatbots',
        description: 'Provide 24/7 instant support with intelligent AI agents.',
        icon: <MessageSquare className="w-5 h-5 text-indigo-500" />,
        bgColor: 'bg-indigo-50'
    },
    {
        title: 'Process Automation',
        description: 'Optimize complex operations and reduce overhead.',
        icon: <Settings className="w-5 h-5 text-slate-500" />,
        bgColor: 'bg-slate-50'
    },
    {
        title: 'HR Automation',
        description: 'Simplify recruitment and onboarding with smart flows.',
        icon: <UserPlus className="w-5 h-5 text-purple-500" />,
        bgColor: 'bg-purple-50'
    },
    {
        title: 'Sales Automation',
        description: 'Accelerate your sales cycle with automated prospecting.',
        icon: <TrendingUp className="w-5 h-5 text-cyan-500" />,
        bgColor: 'bg-cyan-50'
    },
    {
        title: 'Document AI',
        description: 'Extract insights from unstructured data automatically.',
        icon: <FileText className="w-5 h-5 text-amber-500" />,
        bgColor: 'bg-amber-50'
    }
];

export default function ServiceGrid() {
    return (
        <section className="relative py-24 bg-white overflow-hidden text-slate-900 border-b border-slate-50">
            <div className="container-custom">
                {/* Reference Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-slate-900 mb-4 tracking-tight">
                        Our Solutions
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-medium">
                        See what we can help you with!
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {SOLUTIONS.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group flex items-center gap-5 p-7 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1"
                        >
                            {/* Icon Box */}
                            <div className={`flex-shrink-0 w-12 h-12 ${solution.bgColor} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                {solution.icon}
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h3 className="text-[17px] font-bold text-slate-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="text-slate-400 text-[13px] md:text-sm font-medium leading-tight opacity-70">
                                    {solution.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
