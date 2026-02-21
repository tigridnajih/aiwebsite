
export default function TrustLogos() {
    // Array of demo logo items to match the screenshot style
    const logos = [
        { name: "Logoipsum", icon: true },
        { name: "Logoipsum", icon: true },
        { name: "Logoipsum", icon: true },
        { name: "Logoipsum", icon: true },
        { name: "Logoipsum", icon: true },
        { name: "Logoipsum", icon: true },
        { name: "Logoipsum", icon: true },
        { name: "Logoipsum", icon: true },
    ];

    return (
        <section className="py-12 bg-black overflow-hidden select-none">
            <div className="container-custom">
                <p className="text-center text-xs md:text-sm font-medium text-gray-400 mb-10 tracking-tight">
                    Over 50+ business trust us
                </p>

                {/* Infinite Scroll Wrapper with Side Masks */}
                <div className="relative w-full flex overflow-hidden">
                    {/* Fade Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                    <div className="flex animate-infinite-scroll whitespace-nowrap items-center">
                        {/* FIRST SET */}
                        {logos.map((logo, i) => (
                            <div key={`logo-1-${i}`} className="flex items-center gap-2 mx-8 md:mx-12 opacity-40 hover:opacity-100 transition-opacity">
                                <div className="w-6 h-6 rounded-md bg-white/20 border border-white/10 flex-shrink-0" />
                                <span className="text-lg md:text-xl font-bold tracking-tight text-white">{logo.name}</span>
                            </div>
                        ))}
                        {/* SECOND SET (DUPLICATE FOR CONTINUITY) */}
                        {logos.map((logo, i) => (
                            <div key={`logo-2-${i}`} className="flex items-center gap-2 mx-8 md:mx-12 opacity-40 hover:opacity-100 transition-opacity">
                                <div className="w-6 h-6 rounded-md bg-white/20 border border-white/10 flex-shrink-0" />
                                <span className="text-lg md:text-xl font-bold tracking-tight text-white">{logo.name}</span>
                            </div>
                        ))}
                        {/* THIRD SET (EXTRA BUFFER) */}
                        {logos.map((logo, i) => (
                            <div key={`logo-3-${i}`} className="flex items-center gap-2 mx-8 md:mx-12 opacity-40 hover:opacity-100 transition-opacity">
                                <div className="w-6 h-6 rounded-md bg-white/20 border border-white/10 flex-shrink-0" />
                                <span className="text-lg md:text-xl font-bold tracking-tight text-white">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
