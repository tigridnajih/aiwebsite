import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1440px] pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center text-center">
                <div className="animate-fade-in opacity-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        AI Automation Agency
                    </div>
                </div>

                <h1 className="text-h1 max-w-4xl mb-6 animate-fade-in opacity-0 animate-delay-100 text-black dark:text-white leading-tight">
                    Scale Your Agency With <span className="text-accent">Intelligent Automation</span>
                </h1>

                <p className="text-body text-secondary max-w-2xl mb-10 animate-fade-in opacity-0 animate-delay-200 dark:text-gray-300">
                    We help agencies and businesses save time, reduce costs, and focus on growth by implementing custom AI workflows and chatbots.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300">
                    <Link href="#contact" className="btn-primary">
                        Get a Free Strategy Session
                    </Link>
                    <Link href="#solutions" className="px-6 py-3 rounded-lg border border-gray-200 font-semibold text-btn hover:bg-gray-50 transition-all dark:border-gray-800 dark:hover:bg-gray-900">
                        View Our Services
                    </Link>
                </div>
            </div>

            {/* Hero Image / Illustration Placeholder */}
            <div className="container-custom mt-16 md:mt-24 relative z-10 animate-fade-in opacity-0 animate-delay-300">
                <div className="aspect-[16/9] rounded-2xl bg-gray-100 border border-gray-200 shadow-2xl overflow-hidden relative group dark:bg-gray-900 dark:border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white flex items-center justify-center text-gray-400 dark:from-gray-900 dark:to-black">
                        <span className="text-sm">Dashboard / Platform Preview</span>
                    </div>
                    {/* Interactive hover subtle effect */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>
        </section>
    );
}
