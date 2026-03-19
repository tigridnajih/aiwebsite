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
        <section className="py-20 bg-white">
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
                                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                                        <Quote className="w-12 h-12 text-accent/10 mb-6" />
                                        <p className="text-xl md:text-2xl font-bold mb-8 leading-relaxed text-slate-900 italic">&ldquo;{t.quote}&rdquo;</p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-accent font-bold text-xl">
                                                {t.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-slate-900">{t.author}</h4>
                                                <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                                            </div>
                                            <div className="ml-auto flex gap-1">
                                                {[...Array(t.rating)].map((_, i) => (
                                                    <span key={i} className="text-yellow-400 text-lg">★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                            className="p-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:scale-110 active:scale-95 shadow-sm text-slate-900"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                            className="p-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all hover:scale-110 active:scale-95 shadow-sm text-slate-900"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
