'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

const faq = [
    {
        question: "Do I need to know coding or complex setup?",
        answer: "Not at all! Our platform is designed to be user-friendly and intuitive. You can build and deploy complex AI agents without writing a single line of code our team handles the heavy lifting while you focus on business growth."
    },
    {
        question: "Can Agently work with WhatsApp, Instagram, or website chat?",
        answer: "Yes, Agently integrates seamlessly with popular messaging platforms including WhatsApp, Instagram, Facebook Messenger, and of course, your own live website chat — all manageable from one central dashboard."
    },
    {
        question: "How accurate is the AI in replying to customers?",
        answer: "Our state-of-the-art AI is highly accurate and constantly learning from every interaction. It provides human-like responses while maintaining your brand voice and strictly following your company's policy and documentation."
    },
    {
        question: "Is my customer data safe?",
        answer: "Security is our top priority. We use enterprise-grade encryption and comply with global data protection standards to ensure your customer data remains private and secure. Your proprietary data is never used to train public models."
    },
    {
        question: "How fast can I see results?",
        answer: "Most teams start seeing significant improvements in support efficiency and lead response times within the first 24-48 hours of deployment, with detectable ROI appearing in the first month."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <SectionHeader
                    badge="• FAQs"
                    title={<span className="text-slate-900">Everything You Need to Know</span>}
                    description="We’ve answered the most common questions teams ask before making the leap to smarter workflows."
                    className="!pb-16"
                />

                <div className="max-w-4xl mx-auto flex flex-col gap-4">
                    {faq.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative overflow-hidden transition-all duration-500 rounded-[1.5rem] bg-white border ${openIndex === idx ? 'border-blue-100 shadow-xl shadow-blue-500/5' : 'border-slate-100 shadow-sm hover:shadow-md'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between px-8 py-4 md:px-10 md:py-5 text-left transition-all"
                            >
                                <span className={`text-base md:text-[18px] font-sans font-semibold tracking-tight leading-snug pr-8 transition-colors ${openIndex === idx ? 'text-blue-600' : 'text-slate-900'}`}>
                                    {item.question}
                                </span>
                                
                                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-all duration-500 ${openIndex === idx ? 'bg-blue-600 rotate-45' : 'bg-blue-600 hover:scale-110'}`}>
                                    <div className="absolute w-3.5 h-[2px] bg-white rounded-full" />
                                    <div className="absolute w-[2px] h-3.5 bg-white rounded-full" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-8 pb-8 md:px-10 md:pb-10 text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
