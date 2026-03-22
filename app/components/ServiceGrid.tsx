'use client';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

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
    return (
        <section className="relative py-24 overflow-hidden">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 mt-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-2xl aspect-[4/5] bg-white/0 backdrop-blur-[4.5px] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                        >
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

                    {/* All Features Action Card */}
                    <div className="flex flex-col items-center justify-center p-8 text-center group">
                        <motion.div 
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            className="relative w-20 h-20 overflow-hidden rounded-full flex items-center justify-center text-white mb-6 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] cursor-pointer group-hover:scale-110 transition-transform duration-300"
                        >
                            <div className="absolute inset-0 z-0 backdrop-blur-[4.5px] bg-white/0" />
                            
                            <svg className="relative z-10 w-10 h-10 rotate-[-45deg]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </motion.div>
                        <span className="text-white font-bold text-base tracking-tight cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity">
                            View all features
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
