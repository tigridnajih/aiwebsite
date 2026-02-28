'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        id: 1,
        quote: "Scalable's sales pipeline management is intuitive and has streamlined our entire sales process.",
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
        quote: "Role-based access control gives us peace of mind, knowing our data is secure and accessible.",
        author: "Rachel Harris",
        role: "Director of Saturday",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 4,
        quote: "The advanced analytics feature helped us identify key trends and boost our sales strategy.",
        author: "Mark Thompson",
        role: "Founder of Tuesday",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 5,
        quote: "Scalable has transformed how we manage our analytics and sales. The unified dashboard is a game-changer!",
        author: "Sarah Johnson",
        role: "Co-founder of Monday",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 6,
        quote: "Integration with our existing tools was seamless. Scalable fits perfectly into our workflow.",
        author: "Sarah Yanna",
        role: "Director of Saturday",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 7,
        quote: "With Scalable, our reporting process is 10x faster and much more accurate. Truly impressive.",
        author: "David Miller",
        role: "Head of Operations, Nexa",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 8,
        quote: "The customer support team is outstanding. They helped us set up everything in record time.",
        author: "Elena Petrova",
        role: "CEO of Bloom",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 9,
        quote: "Our conversion rates have never been higher. Scalable is the ultimate tool for any sales team.",
        author: "James Wilson",
        role: "Sales Lead at Peak",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="w-[300px] shrink-0 bg-[#0d0d0d] border border-white/[0.05] rounded-[24px] p-6 flex flex-col gap-5 mx-3">
        {/* Stars */}
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white opacity-80">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>

        {/* Quote */}
        <p className="text-[#a1a1a1] text-base font-medium leading-relaxed italic">
            &quot;{testimonial.quote}&quot;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 shrink-0">
                <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
                <h4 className="text-white font-bold text-xs truncate">{testimonial.author}</h4>
                <p className="text-[#666] text-[10px] font-medium truncate">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ direction = 'left', items }: { direction?: 'left' | 'right', items: typeof testimonials }) => {
    // Duplicate items to ensure a seamless loop
    const displayItems = [...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden py-4 -mx-4 group">
            <motion.div
                animate={{
                    x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                    duration: 40,
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
    // Split testimonials for different rows to add variety
    const row1 = testimonials.slice(0, 3);
    const row2 = testimonials.slice(3, 6);
    const row3 = testimonials.slice(6, 9);

    return (
        <section className="py-24 bg-[#070707] overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16 px-4">
                    <p className="text-white/60 text-lg font-medium mb-4">Scalable isn't another fancy piece of software.</p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">It's engineered to make a difference.</h2>
                </div>

                <div className="relative w-full">
                    {/* Masking Gradients */}
                    <div className="absolute left-0 top-0 bottom-0 w-[20%] md:w-[30%] bg-gradient-to-r from-[#070707] via-[#070707]/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-[20%] md:w-[30%] bg-gradient-to-l from-[#070707] via-[#070707]/80 to-transparent z-10 pointer-events-none" />

                    <div className="flex flex-col gap-2">
                        <MarqueeRow direction="left" items={[...row1, ...row2, ...row3]} />
                        <MarqueeRow direction="right" items={[...row2, ...row3, ...row1]} />
                        <MarqueeRow direction="left" items={[...row3, ...row1, ...row2]} />
                    </div>
                </div>
            </div>
        </section>
    );
}
