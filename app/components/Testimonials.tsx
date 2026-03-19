'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        id: 1,
        quote: "Tigrid's automation pipeline is intuitive and has streamlined our entire sales process.",
        author: "Belinda Meyers",
        role: "COO of Friday",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 2,
        quote: "Real-time notifications ensure we're always on top of our sales activities. Highly recommend!",
        author: "Melissa Reid",
        role: "Founder of Tuesday",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 3,
        quote: "The custom AI solutions built for us have saved over 40 hours of manual work every single week.",
        author: "Rachel Harris",
        role: "Director of Saturday",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 4,
        quote: "The advanced insight analysis helped us identify key trends and boost our revenue by 40%.",
        author: "Mark Thompson",
        role: "Founder of Tuesday",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 5,
        quote: "Tigrid has transformed how we manage our analytics. The unified dashboard is a absolute game-changer!",
        author: "Sarah Johnson",
        role: "Co-founder of Monday",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 6,
        quote: "Integration with our existing tools was seamless. Tigrid fits perfectly into our workflow.",
        author: "Sarah Yanna",
        role: "Director of Saturday",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 7,
        quote: "With Tigrid, our reporting process is 10x faster and much more accurate. Truly impressive stuff.",
        author: "David Miller",
        role: "Head of Operations, Nexa",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 8,
        quote: "The technical support team is outstanding. They helped us set up everything in record time.",
        author: "Elena Petrova",
        role: "CEO of Bloom",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 9,
        quote: "Our conversion rates have never been higher. Tigrid is the ultimate tool for any growth-minded team.",
        author: "James Wilson",
        role: "Sales Lead at Peak",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="w-[320px] shrink-0 bg-white border border-slate-100 rounded-[28px] p-8 flex flex-col gap-6 mx-4 shadow-sm hover:shadow-xl transition-all duration-500 group">
        {/* Quote */}
        <p className="text-slate-600 text-base font-medium leading-relaxed italic">
            &quot;{testimonial.quote}&quot;
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-100 shrink-0">
                <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
                <h4 className="text-slate-900 font-bold text-sm tracking-tight">{testimonial.author}</h4>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{testimonial.role}</p>
            </div>
            <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-[10px]">★</span>
                ))}
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ direction = 'left', items }: { direction?: 'left' | 'right', items: typeof testimonials }) => {
    const displayItems = [...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden py-4 -mx-4 group">
            <motion.div
                animate={{
                    x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex shrink-0 min-w-full"
            >
                {displayItems.map((item, idx) => (
                    <TestimonialCard key={`${item.id}-${idx}`} testimonial={item} />
                ))}
            </motion.div>
        </div>
    );
};

export default function Testimonials() {
    const row1 = testimonials.slice(0, 3);
    const row2 = testimonials.slice(3, 6);
    const row3 = testimonials.slice(6, 9);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <SectionHeader 
                    badge="Testimonials"
                    title="Engineered to make a difference"
                    description="Real results from businesses that transformed their operations with Tigrid."
                />

                <div className="relative w-full mt-16">
                    {/* Masking Gradients */}
                    <div className="absolute left-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    <div className="flex flex-col gap-4">
                        <MarqueeRow direction="left" items={[...row1, ...row2, ...row3]} />
                        <MarqueeRow direction="right" items={[...row2, ...row3, ...row1]} />
                    </div>
                </div>
            </div>
        </section>
    );
}
