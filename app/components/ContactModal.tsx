'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-white/40 backdrop-blur-xl pointer-events-auto"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col max-h-[90vh] overflow-hidden pointer-events-auto"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-black transition-all z-20 group"
                        >
                            <X size={20} className="transition-transform group-hover:rotate-90" />
                        </button>

                        <div className="flex-1 overflow-y-auto p-8 md:p-16 custom-scrollbar">
                            <SectionHeader
                                badge="Book a call"
                                title="Let's build something great"
                                description="Our team is ready to support you with expert advice & solutions."
                                className="!pb-12"
                            />

                            <form className="space-y-12 relative z-10 max-w-3xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    {/* Name */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-black tracking-[0.2em] block uppercase">Name *</label>
                                        <input
                                            type="text"
                                            className="w-full bg-transparent border-b-2 border-blue-600 py-3 focus:border-blue-800 outline-none transition-all duration-300 text-slate-900 font-bold text-lg"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-black tracking-[0.2em] block uppercase">Email *</label>
                                        <input
                                            type="email"
                                            className="w-full bg-transparent border-b-2 border-blue-600 py-3 focus:border-blue-800 outline-none transition-all duration-300 text-slate-900 font-bold text-lg"
                                        />
                                    </div>
                                </div>

                                {/* Company Name */}
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-black tracking-[0.2em] block uppercase">Company Name *</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b-2 border-blue-600 py-3 focus:border-blue-800 outline-none transition-all duration-300 text-slate-900 font-bold text-lg"
                                    />
                                </div>

                                {/* Button and Info */}
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8">
                                    <button
                                        type="button"
                                        className="px-12 py-4 rounded-full bg-black text-white font-bold flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 hover:shadow-2xl"
                                    >
                                        Submit <ArrowUpRight size={22} strokeWidth={3} />
                                    </button>
                                    <p className="text-slate-400 text-xs font-bold italic tracking-tight">
                                        We will contact you within 24 business hours.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
