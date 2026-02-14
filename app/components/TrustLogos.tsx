

const logos = [
    "Microsoft", "Google", "Shopify", "HubSpot", "OpenAI", "Zapier", "Meta", "Amazon"
];

export default function TrustLogos() {
    return (
        <section className="py-12 border-y border-gray-100 bg-white dark:bg-black dark:border-zinc-800">
            <div className="container-custom">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                    Trusted by Innovative Teams
                </p>

                {/* Infinite Scroll Wrapper */}
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {logos.map((logo, i) => (
                            <li key={i} className="text-2xl font-bold text-gray-300 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all cursor-default select-none dark:text-gray-700">
                                {logo}
                            </li>
                        ))}
                        {/* DUPLICATE FOR INFINITE LOOP */}
                        {logos.map((logo, i) => (
                            <li key={`dup-${i}`} className="text-2xl font-bold text-gray-300 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all cursor-default select-none dark:text-gray-700">
                                {logo}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
