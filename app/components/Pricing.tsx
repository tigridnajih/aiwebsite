'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import SectionHeader from './SectionHeader';

const plans = [
    {
        name: "Starter",
        priceMonthly: 999,
        priceYearly: 8990,
        features: ["Standard Support", "5 Chatbot Flows", "Basic Analytics"],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Growth",
        priceMonthly: 2499,
        priceYearly: 22990,
        features: ["Priority Support", "Unlimited Chatbot Flows", "Advanced Analytics", "Custom Integration"],
        cta: "Scale Now",
        popular: true
    },
    {
        name: "Enterprise",
        priceMonthly: "Custom",
        priceYearly: "Custom",
        features: ["Dedicated Account Manager", "Custom LLM Fine-tuning", "SLA", "On-premise Deployment"],
        cta: "Contact Sales",
        popular: false
    }
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-[##070707]">
            <div className="container-custom">
                <SectionHeader
                    badge="Pricing"
                    title="Transparent Pricing"
                    description="Choose the plan that fits your growth stage. Scale as you automate."
                />

                <div className="text-center mb-16">
                    {/* Toggle */}
                    <div className="inline-flex items-center p-1 bg-gray-100 rounded-full dark:bg-zinc-800">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isYearly ? 'bg-white shadow text-black dark:bg-zinc-700 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${isYearly ? 'bg-white shadow text-black dark:bg-zinc-700 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                        >
                            Yearly <span className="text-green-500 text-xs ml-1">-20%</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((p, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 rounded-2xl border ${p.popular ? 'border-accent shadow-2xl scale-105 z-10 bg-white ring-2 ring-accent/20 dark:bg-[#0d0d0d] shadow-[0_20px_50px_rgba(0,0,0,0.6)]' : 'border-gray-200 bg-white hover:border-accent/50 dark:bg-[#0d0d0d] shadow-[0_20px_50px_rgba(0,0,0,0.6)] dark:border-white/[0.06]'} transition-all duration-300`}
                        >

                            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-extrabold">
                                    {isYearly && typeof p.priceYearly === 'number'
                                        ? `$${Math.floor(p.priceYearly / 12)}`
                                        : typeof p.priceMonthly === 'number'
                                            ? `$${p.priceMonthly}`
                                            : p.priceMonthly}
                                </span>
                                {typeof p.priceMonthly === 'number' && <span className="text-gray-500">/mo</span>}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {p.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${p.popular ? 'bg-accent text-white hover:bg-accent/90' : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'}`}>
                                {p.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
