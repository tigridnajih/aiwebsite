'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from './SectionHeader';

const faq = [
    {
        question: "How long does implementation take?",
        answer: "Most implementations, including custom chatbots and basic workflow automations, are completed within 2–4 weeks."
    },
    {
        question: "Do I need technical knowledge to manage the AI?",
        answer: "No. We build user-friendly dashboards and provide training so your team can manage everything without coding."
    },
    {
        question: "Safety and Data Privacy?",
        answer: "We adhere to strict data privacy protocols. Your data is isolated and never used to train public models unless explicitly authorized."
    },
    {
        question: "Can you integrate with my existing CRM?",
        answer: "Yes, we integrate with HubSpot, Salesforce, Pipedrive, and 50+ other tools seamlessly via API."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <SectionHeader
                    badge="Support"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our AI implementation process and security."
                />

                <div className="space-y-4 max-w-4xl mx-auto">
                    {faq.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-slate-50 transition-colors text-slate-900"
                            >
                                {item.question}
                                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-slate-600 leading-relaxed font-medium">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
