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
        <section id="pricing" className="py-24 bg-white">
            <div className="container-custom">
                <SectionHeader
                    badge="Pricing"
                    title="Transparent Pricing"
                    description="Choose the plan that fits your growth stage. Scale as you automate."
                />

                <div className="text-center mb-16">
                    {/* Toggle */}
                    <div className="inline-flex items-center p-1 bg-slate-100 rounded-full">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isYearly ? 'bg-white shadow-md text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${isYearly ? 'bg-white shadow-md text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Yearly <span className="text-green-600 text-xs ml-1">-20%</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((p, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 rounded-2xl border ${p.popular ? 'border-accent shadow-2xl scale-105 z-10 bg-white ring-4 ring-accent/5' : 'border-slate-200 bg-white hover:border-accent/40 shadow-xl shadow-slate-200/50'} transition-all duration-300`}
                        >
                            {p.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2 text-slate-900">{p.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-extrabold text-slate-900">
                                    {isYearly && typeof p.priceYearly === 'number'
                                        ? `$${Math.floor(p.priceYearly / 12)}`
                                        : typeof p.priceMonthly === 'number'
                                            ? `$${p.priceMonthly}`
                                            : p.priceMonthly}
                                </span>
                                {typeof p.priceMonthly === 'number' && <span className="text-slate-500">/mo</span>}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {p.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${p.popular ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                                {p.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
