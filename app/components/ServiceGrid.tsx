'use client';
import { motion } from 'framer-motion';
import { 
    Zap, 
    ShoppingCart, 
    Globe, 
    Layers, 
    AppWindow, 
    Cpu, 
    BarChart3, 
    ShieldCheck, 
    FastForward 
} from 'lucide-react';

const SOLUTIONS = [
    {
        title: 'AI Apps',
        description: 'Deploy at the speed of AI',
        icon: <Zap className="w-5 h-5 text-purple-500" />,
        bgColor: 'bg-purple-50'
    },
    {
        title: 'Composable Commerce',
        description: 'Power storefronts that convert',
        icon: <ShoppingCart className="w-5 h-5 text-orange-500" />,
        bgColor: 'bg-orange-50'
    },
    {
        title: 'Marketing Sites',
        description: 'Launch campaigns fast',
        icon: <Globe className="w-5 h-5 text-emerald-500" />,
        bgColor: 'bg-emerald-50'
    },
    {
        title: 'Multi-tenant Platforms',
        description: 'Scale apps with one codebase',
        icon: <Layers className="w-5 h-5 text-rose-500" />,
        bgColor: 'bg-rose-50'
    },
    {
        title: 'Web Apps',
        description: 'Ship features, not infrastructure',
        icon: <AppWindow className="w-5 h-5 text-blue-500" />,
        bgColor: 'bg-blue-50'
    },
    {
        title: 'Rendering',
        description: 'Fast, scalable, and reliable',
        icon: <Cpu className="w-5 h-5 text-orange-400" />,
        bgColor: 'bg-orange-50/50'
    },
    {
        title: 'Observability',
        description: 'Fast, scalable, and reliable',
        icon: <BarChart3 className="w-5 h-5 text-green-500" />,
        bgColor: 'bg-green-50'
    },
    {
        title: 'Security',
        description: 'Trace every step',
        icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
        bgColor: 'bg-purple-50/50'
    },
    {
        title: 'Previews',
        description: 'Helping teams share 6x faster',
        icon: <FastForward className="w-5 h-5 text-cyan-500" />,
        bgColor: 'bg-cyan-50'
    }
];

export default function ServiceGrid() {
    return (
        <section className="relative py-24 bg-white overflow-hidden text-slate-900 border-b border-slate-50">
            <div className="container-custom">
                {/* Reference Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-4 tracking-tight">
                        Our Solutions
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-medium">
                        See what we can help you with!
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SOLUTIONS.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group flex items-start gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200"
                        >
                            {/* Icon Box */}
                            <div className={`flex-shrink-0 w-12 h-12 ${solution.bgColor} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                                {solution.icon}
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col pt-1">
                                <h3 className="text-[17px] font-bold text-slate-900 mb-1 tracking-tight">
                                    {solution.title}
                                </h3>
                                <p className="text-slate-400 text-sm font-medium leading-tight">
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
