'use client';
import { useState, useEffect } from 'react';
import { Quote, ArrowRight, ArrowLeft } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        id: 1,
        quote: "Our lead generation increased by 300% within the first month of implementing Bima's AI chatbots.",
        author: "Sarah Jenkins",
        role: "CMO, TechFlow",
        rating: 5
    },
    {
        id: 2,
        quote: "The automation workflows they built saved our team 20+ hours per week. It's like having an extra employee.",
        author: "Michael Chen",
        role: "Founder, GrowthHacker",
        rating: 5
    },
    {
        id: 3,
        quote: "Professional, fast, and incredibly knowledgeable about AI. Highly recommend for any agency scaling up.",
        author: "Jessica Li",
        role: "Director, CreativePulse",
        rating: 5
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-gray-50 dark:bg-black">
            <div className="container-custom">
                <SectionHeader
                    badge="Testimonials"
                    title="What Our Clients Say"
                    description="Real results from businesses that transformed their operations with AI."
                />

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
                                        <Quote className="w-12 h-12 text-accent/20 mb-6" />
                                        <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">&quot;{t.quote}&quot;</p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-200 rounded-full" /> {/* Avatar Placeholder */}
                                            <div>
                                                <h4 className="font-bold text-lg">{t.author}</h4>
                                                <p className="text-sm text-gray-500">{t.role}</p>
                                            </div>
                                            <div className="ml-auto flex gap-1">
                                                {[...Array(t.rating)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400">★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors dark:bg-zinc-800 dark:border-zinc-700"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors dark:bg-zinc-800 dark:border-zinc-700"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
