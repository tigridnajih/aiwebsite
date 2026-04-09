'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-white text-slate-900 overflow-hidden">
            <div className="container-custom relative z-10">
                <SectionHeader
                    badge="Contact"
                    title="We're Here To Help"
                    description="Our team is ready to support you with expert advice & solutions."
                />

                {/* Main Contact Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                    
                    <form className="space-y-12 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {/* Name */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-black block">Name *</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-blue-600 outline-none transition-all duration-300 text-slate-900 font-bold text-lg"
                                />
                            </div>
                            {/* Email */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-black block">Email *</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-blue-600 outline-none transition-all duration-300 text-slate-900 font-bold text-lg"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-black block">Company Name *</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-blue-600 outline-none transition-all duration-300 text-slate-900 font-bold text-lg"
                            />
                        </div>

                        {/* Button and Info */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8">
                            <button
                                className="px-12 py-4 rounded-full bg-slate-900 text-white font-bold flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:bg-slate-800"
                            >
                                Submit <ArrowUpRight size={22} strokeWidth={3} />
                            </button>
                            <p className="text-slate-400 text-sm font-bold italic tracking-tight">
                                We will contact you within 24 business hours.
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
