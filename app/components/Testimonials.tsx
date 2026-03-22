'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
        author: "Sarah Jonas",
        handle: "Product Designer @gabrun",
        date: "3:00 AM · Sep 27, 2024",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 2,
        quote: "This is a top quality product. No need to think twice before making it live on web. The efficiency is unmatched.",
        author: "Marcus Chen",
        handle: "Software Engineer @techhub",
        date: "11:45 AM · Oct 02, 2024",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 3,
        quote: "Finally, I've found a service that covers all bases for a bootstrap startup. The support is phenomenal.",
        author: "Elena Rodriguez",
        handle: "Founder @startuply",
        date: "2:15 PM · Sep 30, 2024",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 4,
        quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users alike.",
        author: "David Wilson",
        handle: "Creative Lead @designco",
        date: "9:00 AM · Oct 05, 2024",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 5,
        quote: "It's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
        author: "Jessica Lee",
        handle: "Product Manager @innovate",
        date: "4:30 PM · Sep 25, 2024",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 6,
        quote: "The visual intelligence these reports provide is just incredible. My team loves the clear direction it gives us.",
        author: "Michael Brown",
        handle: "Operations Director @global",
        date: "10:15 AM · Oct 08, 2024",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col gap-5 mb-5 hover:border-slate-200 transition-colors duration-300">
        <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div>
                <h4 className="text-slate-900 font-bold text-[14px] leading-tight">{testimonial.author}</h4>
                <p className="text-slate-400 text-[12px] font-medium leading-tight mt-0.5">{testimonial.handle}</p>
            </div>
        </div>

        <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
            {testimonial.quote}
        </p>

        <p className="text-slate-300 text-[11px] font-medium uppercase tracking-tight">
            {testimonial.date}
        </p>
    </div>
);

const VerticalMarquee = ({ items, direction = 'up', speed = 40 }: { items: typeof testimonials, direction?: 'up' | 'down', speed?: number }) => {
    // Duplicate items for infinite scroll
    const marqueeItems = [...items, ...items, ...items];

    return (
        <div className="relative h-[650px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            <motion.div
                animate={{
                    y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex flex-col"
            >
                {marqueeItems.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="px-2">
                        <TestimonialCard testimonial={item} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Testimonials() {
    // 3 columns
    const col1 = [testimonials[0], testimonials[3]];
    const col2 = [testimonials[1], testimonials[4]];
    const col3 = [testimonials[2], testimonials[5]];

    return (
        <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
            <div className="container-custom max-w-6xl">

                {/* Centered Heading */}
                <div className="text-center space-y-4 mb-20">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-50 border border-slate-100 font-bold text-slate-400 text-[10px] uppercase tracking-[0.2em] leading-none mb-4">
                        Pricing
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Built for Businesses That Can’t Afford Inefficiency
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto">
                        Testimonials from our users around globe
                    </p>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 relative">
                    {/* Column 1 - Moving Up */}
                    <VerticalMarquee items={[...col1, ...col2]} direction="up" speed={30} />

                    {/* Column 2 - Moving Down */}
                    <VerticalMarquee items={[...col2, ...col3]} direction="down" speed={35} />

                    {/* Column 3 - Moving Up */}
                    <VerticalMarquee items={[...col3, ...col1]} direction="up" speed={28} />
                </div>

            </div>
        </section>
    );
}
