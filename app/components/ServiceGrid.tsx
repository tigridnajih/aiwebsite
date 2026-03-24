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
        icon: <Users className="w-5 h-5" />,
    },
    {
        title: 'Financial Automation',
        description: 'Automate invoicing, expense tracking, and reporting.',
        icon: <CreditCard className="w-5 h-5" />,
    },
    {
        title: 'Workflow Automation',
        description: 'Connect your favorite tools and automate repetitive tasks.',
        icon: <Zap className="w-5 h-5" />,
    },
    {
        title: 'Marketing Automation',
        description: 'Drive growth with automated email and lead scoring.',
        icon: <Target className="w-5 h-5" />,
    },
    {
        title: 'Chatbots',
        description: 'Provide 24/7 instant support with intelligent AI agents.',
        icon: <MessageSquare className="w-5 h-5" />,
    },
    {
        title: 'Process Automation',
        description: 'Optimize complex operations and reduce overhead.',
        icon: <Settings className="w-5 h-5" />,
    },
    {
        title: 'HR Automation',
        description: 'Simplify recruitment and onboarding with smart flows.',
        icon: <UserPlus className="w-5 h-5" />,
    },
    {
        title: 'Sales Automation',
        description: 'Accelerate your sales cycle with automated prospecting.',
        icon: <TrendingUp className="w-5 h-5" />,
    },
    {
        title: 'Document AI',
        description: 'Extract insights from unstructured data automatically.',
        icon: <FileText className="w-5 h-5" />,
    }
];

export default function ServiceGrid() {
    return (
        <section className="relative py-24 bg-[#f4f9ff] overflow-hidden text-slate-900 font-inter">
            <div className="container-custom">
                {/* Reference Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full mb-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                        <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                        <span className="text-[10px] font-bold text-black uppercase tracking-[1px]">
                            Solutions
                        </span>
                    </div>
                    <h2 className="text-[28px] md:text-[36px] font-semibold text-[#111827] mb-4 tracking-[-0.02em] leading-tight">
                        AI Solutions Designed for Your Business
                    </h2>
                    <p className="text-[#4B5563] text-[16px] md:text-[18px] max-w-2xl mx-auto font-normal leading-[1.6]">
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
                            className="group flex items-center gap-5 p-7 bg-white rounded-[16px] border border-[rgba(0,102,255,0.05)] shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-12px_rgba(15,23,42,0.12)]"
                        >
                            {/* Icon Box */}
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                                {solution.icon}
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                                <h3 className="text-[17px] font-bold text-slate-900 mb-1 tracking-tight">
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
