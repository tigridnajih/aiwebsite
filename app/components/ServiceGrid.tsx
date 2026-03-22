'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const services = [
    { title: 'CRM Automation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /> },
    { title: 'Financial Automation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75m0 0a1.5 1.5 0 01-1.5 1.5H2.25v1.5a1.5 1.5 0 001.5 1.5H3.75m1.5-3v-1.5m0 1.5h1.5A1.5 1.5 0 018.25 4.5v-.75m0 0a1.5 1.5 0 011.5-1.5H11.25V1.5a1.5 1.5 0 00-1.5-1.5H9.75m4.5 1.5v.75m0 0a1.5 1.5 0 011.5 1.5h.75v1.5a1.5 1.5 0 00-1.5 1.5h-.75m-1.5-3V1.5m0 1.5H11.25a1.5 1.5 0 01-1.5-1.5v-.75m0 0a1.5 1.5 0 01-1.5-1.5H6.75v-.75a1.5 1.5 0 00-1.5-1.5H5.25m3 16.5v1.5m0-1.5h-1.5a1.5 1.5 0 00-1.5 1.5v.75m0 0a1.5 1.5 0 001.5 1.5h1.5m-3-1.5v-1.5m0 1.5H5.25a1.5 1.5 0 00-1.5 1.5v.75m0 0a1.5 1.5 0 001.5 1.5h1.5m5-1.5v.75m0 0a1.5 1.5 0 001.5 1.5h.75m-1.5-3v1.5m0-1.5H11.25a1.5 1.5 0 00-1.5 1.5v.75m0 0a1.5 1.5 0 001.5 1.5h1.5" /> },
    { title: 'Workflow Automation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 4.912L3 17.25m18-5.25l-1.457 4.912M12 18.75V21m-4.721-3.218L6 19.5m12-4.5l-1.279 3.032M12 5.25V3m4.721 3.218L18 4.5M6 4.5l1.279 3.032" /> },
    { title: 'Marketing Automation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L6 12zm0 0h7.5" /> },
    { title: 'Chatbots', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.023c.09-.457.133-.929.133-1.41 0-.354-.024-.703-.069-1.045C4.02 15.201 3 13.704 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /> },
    { title: 'Business Process Automation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /> },
    { title: 'HR Automation', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /> }
];

export default function ServiceGrid() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.5; // Scroll half of the visible area
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
                }
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-20 lg:py-[120px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-white">
                <img 
                    src="/section_assets/services_bg.png" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-100"
                />
            </div>

            <div className="container-custom relative z-10">
                <SectionHeader 
                    badge="SERVICES" 
                    title={<span className="text-white">This is what we do</span>} 
                    className="!pt-0 !text-white"
                />

                <div className="relative mt-8">
                    {/* Slider Container */}
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory relative pb-12 cursor-grab active:cursor-grabbing"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="relative flex-shrink-0 w-[calc(100%-32px)] sm:w-[350px] md:w-[400px] snap-start overflow-hidden group transition-all duration-300 rounded-2xl aspect-[4/5] bg-white/0 backdrop-blur-[4.5px] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                            >
                                {/* Large Background Icon */}
                                <div className="absolute -right-8 -bottom-8 w-48 h-48 text-blue-950/20 z-0 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                                    <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                                        {service.icon}
                                    </svg>
                                </div>

                                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            {service.icon}
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                                        {service.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}

                        {/* Special Feature Card - View All features */}
                        <div className="relative flex-shrink-0 w-[200px] snap-start flex flex-col items-center justify-center p-8 text-center group">
                            <motion.div 
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                className="relative w-20 h-20 overflow-hidden rounded-full flex items-center justify-center text-white mb-6 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] cursor-pointer group-hover:scale-110 transition-transform duration-300"
                            >
                                <div className="absolute inset-0 z-0 backdrop-blur-[4.5px] bg-white/0" />
                                <svg className="relative z-10 w-8 h-8 rotate-[-45deg]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </motion.div>
                            <span className="text-white font-bold text-base tracking-tight cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity">
                                View all features
                            </span>
                        </div>
                    </div>

                    {/* Navigation Buttons - Bottom Right Side inside circle */}
                    <div className="absolute bottom-0 right-0 flex gap-4 md:gap-6 pointer-events-none mt-12 md:mt-0 p-4">
                        <button 
                            onClick={() => scroll('left')}
                            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-white hover:text-blue-900 shadow-xl group"
                        >
                            <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white transition-all hover:bg-white hover:text-blue-900 shadow-xl group"
                        >
                            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
