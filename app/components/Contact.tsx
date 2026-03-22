'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="relative py-20 lg:py-[120px] bg-white text-slate-900 overflow-hidden">
            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold mb-6 tracking-tighter text-slate-900 leading-tight"
                    >
                        We're Here To Help
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto"
                    >
                        Our team is ready to support you with expert advice & solutions.
                    </motion.p>
                </div>

                {/* Main Contact Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-white border-2 border-slate-100 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 mb-20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                    
                    <form className="space-y-12 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {/* Name */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 tracking-[0.2em] block uppercase">Name *</label>
                                <input
                                    type="text"
                                    placeholder="David Johnson"
                                    className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-accent outline-none transition-all duration-300 placeholder:text-slate-300 text-slate-900 font-bold text-lg"
                                />
                            </div>
                            {/* Email */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 tracking-[0.2em] block uppercase">Email *</label>
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-accent outline-none transition-all duration-300 placeholder:text-slate-300 text-slate-900 font-bold text-lg"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-slate-400 tracking-[0.2em] block uppercase">Company Name *</label>
                            <input
                                type="text"
                                placeholder="Ex. StaticMania"
                                className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-accent outline-none transition-all duration-300 placeholder:text-slate-300 text-slate-900 font-bold text-lg"
                            />
                        </div>

                        {/* Select Service & Budget */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 tracking-[0.2em] block uppercase">Select Service *</label>
                                <div className="relative">
                                    <select className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-accent outline-none transition-all duration-300 appearance-none text-slate-400 cursor-pointer font-bold text-lg">
                                        <option>Select Your Service</option>
                                        <option>Bot Implementation</option>
                                        <option>Automation Workflow</option>
                                        <option>AI Training</option>
                                    </select>
                                    <div className="absolute right-0 bottom-4 pointer-events-none text-slate-300">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 tracking-[0.2em] block uppercase">Project Budget *</label>
                                <div className="relative">
                                    <select className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-accent outline-none transition-all duration-300 appearance-none text-slate-400 cursor-pointer font-bold text-lg">
                                        <option>Select Your Range</option>
                                        <option>$1,000 - $5,000</option>
                                        <option>$5,000 - $20,000</option>
                                        <option>$20,000+</option>
                                    </select>
                                    <div className="absolute right-0 bottom-4 pointer-events-none text-slate-300">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>
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

                {/* Info Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-50 pt-24 mt-24">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent ring-1 ring-slate-100 shadow-sm">
                            <MapPin size={28} />
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight">Head Office</h4>
                        <p className="text-slate-500 font-medium leading-relaxed max-w-[200px]">5899 Alexys Highway Suite 678, Nevada, USA</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 md:border-x border-slate-100">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent ring-1 ring-slate-100 shadow-sm">
                            <Phone size={28} />
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight">Phone</h4>
                        <p className="text-slate-500 font-medium italic">+1 234 567 890 <br /> +1 234 567 890</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent ring-1 ring-slate-100 shadow-sm">
                            <Mail size={28} />
                        </div>
                        <h4 className="text-2xl font-bold tracking-tight">Email</h4>
                        <p className="text-slate-500 font-medium italic">customer@automx.com <br /> client@automx.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
