import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#0E1117] text-white">
            {/* 2. Background Design - Controlled, Subtle */}
            <div className="absolute inset-0 z-0">
                {/* Subtle radial glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
                {/* Faint Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-16 items-center">

                {/* 1. Left Side - 7 Columns */}
                <div className="lg:col-span-7 flex flex-col gap-8">

                    {/* 6. Micro-Interactions - Staggered Fade In */}
                    <div className="animate-fade-in opacity-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-indigo-300 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                            AI Systems Architecture
                        </div>

                        {/* 3. Typography - Premium, Heavy Headline */}
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-2 text-white/95">
                            Build Intelligent <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
                                AI Systems
                            </span> <br />
                            That Scale Revenue
                        </h1>
                    </div>

                    {/* 4. Subheadline & Copy */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed animate-fade-in opacity-0 animate-delay-200 font-light">
                        We design, build, and deploy production-grade AI workflows that eliminate manual work and reduce operational costs within 30–90 days.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animate-delay-300 pt-2">
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/25 text-center min-w-[200px]"
                        >
                            Book a Strategy Call
                        </Link>
                        <Link
                            href="#works"
                            className="px-8 py-4 rounded-lg border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white font-medium transition-all duration-300 text-center min-w-[180px]"
                        >
                            See How It Works
                        </Link>
                    </div>

                    {/* 8. Trust Badge */}
                    <div className="flex items-center gap-4 animate-fade-in opacity-0 animate-delay-300 mt-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border border-[#0E1117] flex items-center justify-center text-[10px] text-gray-500">
                                    {/* Placeholder for faces */}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Trusted by 150+ founders to automate scale.</p>
                    </div>
                </div>

                {/* 5. Right Side - Animated Workflow Visualization */}
                <div className="lg:col-span-5 relative animate-fade-in opacity-0 animate-delay-300">
                    {/* Option A: Abstract Workflow Visualization */}
                    <div className="relative w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm p-8 shadow-2xl shadow-black/50 overflow-hidden group">

                        {/* Inner Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-[60px]" />

                        {/* Workflow Nodes */}
                        <div className="relative h-full flex flex-col justify-between z-10">
                            {/* Top Node */}
                            <div className="self-center p-4 bg-[#1A1D24] border border-white/10 rounded-xl shadow-lg flex items-center gap-3 w-48 transition-transform duration-700 group-hover:translate-y-[-5px]">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <div className="h-2 w-16 bg-gray-700 rounded mb-1.5" />
                                    <div className="h-1.5 w-10 bg-gray-800 rounded" />
                                </div>
                            </div>

                            {/* Animated Connecting Line */}
                            <div className="absolute top-[60px] left-1/2 -translate-x-[1px] h-[calc(50%-60px)] w-[2px] bg-gradient-to-b from-indigo-500/50 to-transparent overflow-hidden">
                                <div className="w-full h-1/2 bg-indigo-400 blur-[1px] animate-[slideDown_2s_linear_infinite]" />
                            </div>

                            {/* Middle Row Nodes */}
                            <div className="flex justify-between w-full mt-12 mb-12">
                                {/* Left Branch */}
                                <div className="p-3 bg-[#1A1D24] border border-white/10 rounded-xl shadow-lg w-40 transition-transform duration-700 delay-100 group-hover:translate-x-[-5px]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-6 rounded bg-emerald-500/20" />
                                        <div className="h-2 w-12 bg-gray-700 rounded" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-1.5 w-full bg-gray-800 rounded" />
                                        <div className="h-1.5 w-2/3 bg-gray-800 rounded" />
                                    </div>
                                </div>

                                {/* Right Branch */}
                                <div className="p-3 bg-[#1A1D24] border border-white/10 rounded-xl shadow-lg w-40 transition-transform duration-700 delay-200 group-hover:translate-x-[5px]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-6 rounded bg-purple-500/20" />
                                        <div className="h-2 w-12 bg-gray-700 rounded" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-1.5 w-full bg-gray-800 rounded" />
                                        <div className="h-1.5 w-2/3 bg-gray-800 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Node */}
                            <div className="self-center p-4 bg-[#1A1D24] border border-white/10 rounded-xl shadow-lg w-56 transition-transform duration-700 delay-300 group-hover:translate-y-[5px]">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[10px] text-gray-500 font-mono">EXECUTION_LOG</span>
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1.5 w-full bg-gray-800 rounded overflow-hidden">
                                        <div className="h-full w-2/3 bg-indigo-500/50 rounded animate-[widthGrow_3s_ease-out_infinite]" />
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-800 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Depth Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-2xl border border-white/5 backdrop-blur-md animate-[float_6s_ease-in-out_infinite]" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-20 bg-purple-500/10 rounded-xl border border-white/5 backdrop-blur-md animate-[float_8s_ease-in-out_infinite_reverse]" />
                </div>
            </div>

            <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes widthGrow {
          0% { width: 0%; }
          100% { width: 75%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
        </section>
    );
}
