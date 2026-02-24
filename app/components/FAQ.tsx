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
        <section className="py-20 bg-[##070707]">
            <div className="container-custom">
                <SectionHeader
                    badge="Support"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our AI implementation process and security."
                />

                <div className="space-y-4">
                    {faq.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden dark:bg-[#0d0d0d] dark:border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                            >
                                {item.question}
                                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
