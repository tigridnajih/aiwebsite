'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

const faq = [
    {
        question: "What is the implementation process, and how does it work?",
        answer: "Our implementation process begins with a discovery phase to identify key automation opportunities. We then develop a custom strategy, build the AI solution, and integrate it seamlessly with your existing tech stack within 2-4 weeks."
    },
    {
        question: "Is there a free trial or proof-of-concept available?",
        answer: "Yes, we offer a 14-day proof-of-concept for qualified enterprises to demonstrate the tangible ROI and efficiency gains our AI solutions can provide for your specific use cases."
    },
    {
        question: "How secure is my proprietary data with your systems?",
        answer: "Security is our top priority. We use enterprise-grade encryption and isolated data environments. Your data is never used to train public models and stays strictly within your organization's private cloud."
    },
    {
        question: "Can I customize the automation dashboard?",
        answer: "Absolutely. We build fully white-labeled dashboards tailored to your specific reporting needs, allowing you to track KPIs, automation accuracy, and saved hours in real-time."
    },
    {
        question: "What integrations are available with your AI tools?",
        answer: "We support 500+ native integrations including HubSpot, Salesforce, Slack, Gmail, and Microsoft 365. We also provide custom API development for proprietary legacy systems."
    },
    {
        question: "What kind of ongoing support do you offer?",
        answer: "We provide 24/7 technical monitoring, dedicated account management, and monthly optimization reviews to ensure your AI systems evolve as your business grows."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#070707]">
            <div className="container-custom">
                <SectionHeader
                    badge="Support"
                    title="Frequently Asked Questions"
                    description="Everything you need to know about our AI implementation process and security."
                />

                <div className="max-w-4xl mx-auto border-t border-white/10">
                    {faq.map((item, idx) => (
                        <div
                            key={idx}
                            className="border-b border-white/10 group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between py-7 text-left transition-all duration-300 group-hover:pl-2"
                            >
                                <span className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug pr-8">
                                    {item.question}
                                </span>
                                <div className={`relative flex items-center justify-center w-6 h-6 shrink-0 transition-transform duration-500 ${openIndex === idx ? 'rotate-45' : ''}`}>
                                    <div className="absolute w-5 h-[2px] bg-white rounded-full" />
                                    <div className="absolute w-[2px] h-5 bg-white rounded-full" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 pr-12 text-[#a1a1a1] text-base md:text-lg leading-relaxed font-medium">
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
