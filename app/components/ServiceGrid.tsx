'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
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
        icon: <Users className="w-5 h-5" />,
        bgColor: 'bg-blue-50',
        activeColor: 'text-blue-400'
    },
    {
        title: 'Financial Automation',
        description: 'Automate invoicing, expense tracking, and reporting.',
        icon: <CreditCard className="w-5 h-5" />,
        bgColor: 'bg-emerald-50',
        activeColor: 'text-emerald-400'
    },
    {
        title: 'Workflow Automation',
        description: 'Connect your favorite tools and automate repetitive tasks.',
        icon: <Zap className="w-5 h-5" />,
        bgColor: 'bg-orange-50',
        activeColor: 'text-orange-400'
    },
    {
        title: 'Marketing Automation',
        description: 'Drive growth with automated email and lead scoring.',
        icon: <Target className="w-5 h-5" />,
        bgColor: 'bg-rose-50',
        activeColor: 'text-rose-400'
    },
    {
        title: 'Chatbots',
        description: 'Provide 24/7 instant support with intelligent AI agents.',
        icon: <MessageSquare className="w-5 h-5" />,
        bgColor: 'bg-indigo-50',
        activeColor: 'text-indigo-400'
    },
    {
        title: 'Process Automation',
        description: 'Optimize complex operations and reduce overhead.',
        icon: <Settings className="w-5 h-5" />,
        bgColor: 'bg-slate-50',
        activeColor: 'text-slate-400'
    },
    {
        title: 'HR Automation',
        description: 'Simplify recruitment and onboarding with smart flows.',
        icon: <UserPlus className="w-5 h-5" />,
        bgColor: 'bg-purple-50',
        activeColor: 'text-purple-400'
    },
    {
        title: 'Sales Automation',
        description: 'Accelerate your sales cycle with automated prospecting.',
        icon: <TrendingUp className="w-5 h-5" />,
        bgColor: 'bg-cyan-50',
        activeColor: 'text-cyan-400'
    },
    {
        title: 'Document AI',
        description: 'Extract insights from unstructured data automatically.',
        icon: <FileText className="w-5 h-5" />,
        bgColor: 'bg-amber-50',
        activeColor: 'text-amber-400'
    }
];

export default function ServiceGrid() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

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
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    onMouseLeave={() => setActiveCardIndex(0)}
                >
                    {SOLUTIONS.map((solution, index) => {
                        const isActive = activeCardIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onMouseEnter={() => setActiveCardIndex(index)}
                                className={`group flex items-center gap-5 p-7 rounded-2xl transition-all duration-500 cursor-default ${
                                    isActive 
                                    ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] scale-[1.02] z-10' 
                                    : 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.06)] scale-100 z-0'
                                }`}
                            >
                                {/* Icon Box */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                    isActive 
                                    ? 'bg-white/10 text-white' 
                                    : `${solution.bgColor} text-blue-600`
                                }`}>
                                    {solution.icon}
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col">
                                    <h3 className={`text-[17px] font-bold mb-1 tracking-tight transition-colors duration-500 ${
                                        isActive ? 'text-white' : 'text-slate-900'
                                    }`}>
                                        {solution.title}
                                    </h3>
                                    <p className={`text-[13px] md:text-sm font-medium leading-tight transition-colors duration-500 ${
                                        isActive ? 'text-white/60' : 'text-slate-400'
                                    }`}>
                                        {solution.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
