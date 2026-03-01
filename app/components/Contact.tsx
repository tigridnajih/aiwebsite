'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background Grain/Grid subtle effect if desired, but keeping it clean for now */}

            <div className="container-custom relative z-10 px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        We're Here To Help
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Our team is ready to support you with expert advice & solutions.
                    </motion.p>
                </div>

                {/* Main Contact Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl mb-20"
                >
                    <form className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {/* Name */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-white/90 tracking-wide block uppercase">Name *</label>
                                <input
                                    type="text"
                                    placeholder="David Johnson"
                                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#385BFF] outline-none transition-all duration-300 placeholder:text-gray-700 text-white"
                                />
                            </div>
                            {/* Email */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-white/90 tracking-wide block uppercase">Email *</label>
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#385BFF] outline-none transition-all duration-300 placeholder:text-gray-700 text-white"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-white/90 tracking-wide block uppercase">Company Name *</label>
                            <input
                                type="text"
                                placeholder="Ex. StaticMania"
                                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#385BFF] outline-none transition-all duration-300 placeholder:text-gray-700 text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {/* Select Service */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-white/90 tracking-wide block uppercase">Select Service *</label>
                                <div className="relative">
                                    <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#385BFF] outline-none transition-all duration-300 appearance-none text-gray-500 cursor-pointer">
                                        <option className="bg-[#0A0A0A]">Select Your Service</option>
                                        <option className="bg-[#0A0A0A]">Bot Implementation</option>
                                        <option className="bg-[#0A0A0A]">Automation Workflow</option>
                                        <option className="bg-[#0A0A0A]">AI Training</option>
                                    </select>
                                    <div className="absolute right-0 bottom-4 pointer-events-none text-white/20">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>
                            {/* Project Budget */}
                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-white/90 tracking-wide block uppercase">Project Budget *</label>
                                <div className="relative">
                                    <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#385BFF] outline-none transition-all duration-300 appearance-none text-gray-500 cursor-pointer">
                                        <option className="bg-[#0A0A0A]">Select Your Range</option>
                                        <option className="bg-[#0A0A0A]">$1,000 - $5,000</option>
                                        <option className="bg-[#0A0A0A]">$5,000 - $20,000</option>
                                        <option className="bg-[#0A0A0A]">$20,000+</option>
                                    </select>
                                    <div className="absolute right-0 bottom-4 pointer-events-none text-white/20">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-white/90 tracking-wide block uppercase">Project Details</label>
                            <textarea
                                placeholder="Tell us more about your project"
                                rows={2}
                                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#385BFF] outline-none transition-all duration-300 placeholder:text-gray-700 text-white resize-none"
                            />
                        </div>

                        {/* Button and Info */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
                            <button
                                className="bg-gradient-to-br from-[#385BFF] to-black hover:from-[#4D6CFF] hover:to-[#0A0C1A] text-white px-10 py-3.5 rounded-lg font-bold flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,91,255,0.3)] hover:shadow-[0_0_30px_rgba(56,91,255,0.5)]"
                            >
                                Submit <ArrowUpRight size={20} />
                            </button>
                            <p className="text-gray-500 text-[15px] font-medium italic text-center md:text-left">
                                We will contact you within 24 business hours.
                            </p>
                        </div>
                    </form>
                </motion.div>

                {/* Footer Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 border-t border-white/5 pt-20 mt-20 max-w-5xl mx-auto">
                    {/* Head Office */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center text-center space-y-5 px-6"
                    >
                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/80 ring-1 ring-white/10 shadow-inner">
                            <MapPin size={26} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold tracking-tight">Head Office</h4>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                            5899 Alexys Highway Suite 678, NR, Nevada, USA
                        </p>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center text-center space-y-5 px-6 md:border-x border-white/10"
                    >
                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/80 ring-1 ring-white/10 shadow-inner">
                            <Phone size={26} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold tracking-tight">Phone</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            +1 234 567 890 <br />
                            +1 234 567 890
                        </p>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col items-center text-center space-y-5 px-6"
                    >
                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/80 ring-1 ring-white/10 shadow-inner">
                            <Mail size={26} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold tracking-tight">Email</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            customer@automx.com <br />
                            client@automx.com
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
