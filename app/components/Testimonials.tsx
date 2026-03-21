'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
        author: "Guy Hawkins",
        handle: "@leslie",
        tags: "#webflow #development",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 2,
        quote: "This is a top quality product. No need to think twice before making it live on web.",
        author: "Guy Hawkins",
        handle: "@leslie",
        tags: "",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 3,
        quote: "It's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
        author: "Guy Hawkins",
        handle: "@leslie",
        tags: "#dev #tools",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 4,
        quote: "Finally, I've found a service that covers all bases for a bootstrap startup.",
        author: "Guy Hawkins",
        handle: "@leslie",
        tags: "",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 5,
        quote: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
        author: "Guy Hawkins",
        handle: "@leslie",
        tags: "#webflow_development",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        id: 6,
        quote: "This is a top quality product. No need to think twice before making it live on web.",
        author: "Guy Hawkins",
        handle: "@leslie",
        tags: "",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-slate-100 border border-slate-200/50 rounded-3xl p-6 md:p-8 flex flex-col gap-4 mb-6 max-w-full hover:bg-slate-200/50 transition-colors duration-300">
        <div className="flex items-center gap-4 border-b border-transparent">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="text-slate-900 font-bold text-[15px]">{testimonial.author}</h4>
                <p className="text-slate-400 text-[13px] font-semibold">{testimonial.handle}</p>
            </div>
        </div>
        
        <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
            {testimonial.quote}
        </p>
        
        {testimonial.tags && (
            <p className="text-blue-500 font-semibold text-[13px] tracking-wide">
                {testimonial.tags}
            </p>
        )}
    </div>
);

const VerticalMarquee = ({ items, direction = 'down', speed = 40 }: { items: typeof testimonials, direction?: 'up' | 'down', speed?: number }) => {
    // Triplicate items to allow smooth infinite seamless scrolling
    const marqueeItems = [...items, ...items, ...items];
    
    return (
        <div className="relative h-[800px] overflow-hidden rounded-3xl [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <motion.div
                animate={{
                    y: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex flex-col gap-0"
            >
                {marqueeItems.map((item, idx) => (
                    <div key={`${item.id}-${idx}`}>
                        <TestimonialCard testimonial={item} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Testimonials() {
    // Split into 2 columns for the vertical layout
    const col1 = [testimonials[0], testimonials[2], testimonials[4]]; // Webflow + dev tools + webflow
    const col2 = [testimonials[1], testimonials[3], testimonials[5]]; // Top quality + bootstrap

    return (
        <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
            <div className="container-custom max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Left Sticky Content */}
                    <div className="lg:w-[45%] lg:sticky lg:top-12 space-y-12 shrink-0">
                        <div className="space-y-6">
                            <h4 className="text-[#3B5BFF] text-[11px] font-bold tracking-[0.2em] uppercase">
                                TESTIMONIALS
                            </h4>
                            <h2 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                                What our clients say
                            </h2>
                            <p className="text-slate-500 text-lg md:text-[20px] leading-[1.6] font-medium max-w-lg mt-4">
                                We've worked with the best in the industry to produce millions of dollars in return on ad spend. We do away with the inefficiencies & formalities that plague most agencies.
                            </p>
                        </div>
                        
                        <div className="flex gap-16 pt-8">
                            <div>
                                <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-3 tracking-tight">52+</h3>
                                <p className="text-slate-400 text-[11px] font-bold tracking-[0.15em] uppercase">TESTIMONIALS</p>
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-3 tracking-tight">2M+</h3>
                                <p className="text-slate-400 text-[11px] font-bold tracking-[0.15em] uppercase">TESTIMONIALS</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Scrolling Columns */}
                    <div className="flex-1 w-full relative">
                        {/* Desktop: 2 columns overlapping */}
                        <div className="hidden md:flex flex-1 gap-6 pb-12 w-full">
                            {/* Column 1 - Moving Down */}
                            <div className="flex-1"> 
                                <VerticalMarquee items={col1} direction="down" speed={45} />
                            </div>
                            
                            {/* Column 2 - Moving Up */}
                            <div className="flex-1"> 
                                <VerticalMarquee items={col2} direction="up" speed={40} />
                            </div>
                        </div>

                        {/* Mobile: 1 column moving up */}
                        <div className="flex md:hidden flex-1 w-full gap-6">
                            <div className="flex-1">
                                <VerticalMarquee items={[...col1, ...col2]} direction="up" speed={50} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
