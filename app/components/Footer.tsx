'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative w-full bg-white pt-24 pb-0 overflow-hidden">
            
            <div className="container-custom max-w-7xl relative z-20 flex flex-col lg:flex-row gap-6 mb-16 px-4 md:px-8">
                
                {/* 🔵 Left Blue Card */}
                <div className="w-full lg:w-[35%] bg-gradient-to-br from-[#0633B0] to-[#3B5BFF] rounded-[32px] p-10 md:p-12 flex flex-col justify-between text-white shadow-xl min-h-[400px] md:min-h-[500px]">
                    
                    {/* Brand/Logo */}
                    <Link href="/" className="flex items-center gap-3 w-fit">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-[10px] bg-white">
                            <div className="h-4 w-4 rotate-45 rounded-[2px] bg-[#3B5BFF]" />
                        </div>
                        <span className="text-[34px] font-bold tracking-tight text-white mb-1">Tigrid</span>
                    </Link>

                    {/* Bottom Content */}
                    <div className="mt-auto space-y-12">
                        <h3 className="text-[26px] md:text-[34px] font-medium leading-[1.2] tracking-tight text-white">
                            Smarter sales automation,<br />
                            <span className="text-white/60">powered by AI.</span>
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <span className="font-serif italic text-2xl text-white tracking-wide">Stay in touch!</span>
                            
                            {/* Social Icons (Black Blocks) */}
                            <div className="flex items-center gap-2">
                                <a href="#" className="w-[42px] h-[42px] rounded-xl bg-[#111111] hover:bg-black flex items-center justify-center transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-white"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                                </a>
                                <a href="#" className="w-[42px] h-[42px] rounded-xl bg-[#111111] hover:bg-black flex items-center justify-center transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="#" className="w-[42px] h-[42px] rounded-xl bg-[#111111] hover:bg-black flex items-center justify-center transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                                <a href="#" className="w-[42px] h-[42px] rounded-xl bg-[#111111] hover:bg-black flex items-center justify-center transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🤍 Right Light Card */}
                <div className="w-full lg:w-[65%] bg-[#F2F2F2] rounded-[32px] p-10 md:p-14 flex flex-col justify-between relative shadow-sm min-h-[400px] md:min-h-[500px]">
                    
                    {/* Navigation Columns */}
                    <div className="flex flex-wrap gap-16 md:gap-32">
                        <div>
                            <h4 className="font-serif italic text-slate-500 text-xl md:text-2xl mb-6">Navigation</h4>
                            <ul className="flex flex-col gap-5">
                                {['How it works', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-900 font-bold text-[15px] hover:text-[#2563EB] transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif italic text-slate-500 text-xl md:text-2xl mb-6">Company</h4>
                            <ul className="flex flex-col gap-5">
                                {['Blog', 'About', 'Terms and Condition', 'Privacy Policy'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-900 font-bold text-[15px] hover:text-[#2563EB] transition-colors">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Row inside Card */}
                    <div className="flex flex-col xl:flex-row justify-between xl:items-end mt-20 xl:mt-auto gap-8">
                        {/* Copyright */}
                        <div className="text-slate-400 text-xs font-semibold order-2 xl:order-1">
                            © 2025 Tigrid. All rights reserved.
                        </div>

                        {/* Newsletter */}
                        <div className="w-full xl:w-auto order-1 xl:order-2">
                            <h4 className="text-slate-400 text-[16px] mb-1 font-semibold">AI moves fast.</h4>
                            <h3 className="text-slate-900 text-[20px] font-bold mb-5 tracking-tight">Stay ahead with Tigrid.</h3>
                            
                            <div className="flex items-center bg-white rounded-[22px] p-2 shadow-sm max-w-[360px] w-full">
                                <input 
                                    type="email" 
                                    placeholder="Enter email address" 
                                    className="bg-transparent border-none outline-none px-4 flex-1 text-[14px] text-slate-900 min-w-0" 
                                />
                                <button className="bg-[#111111] text-white text-[14px] font-bold px-7 py-3 rounded-2xl hover:bg-black transition-colors whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Huge Background Text at Bottom */}
            <div className="relative text-center pointer-events-none select-none z-0 overflow-hidden leading-[.8] flex items-end justify-center pt-10 -mb-16 md:-mb-24 lg:-mb-32">
                <h1 className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] xl:text-[450px] font-extrabold text-slate-50 tracking-tighter w-full uppercase">
                    TIGRID
                </h1>
            </div>
        </footer>
    );
}
