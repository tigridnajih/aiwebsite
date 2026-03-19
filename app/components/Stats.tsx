export default function Stats() {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 text-accent">50+</h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Clients Served</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 text-accent">10k+</h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Hours Saved</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 text-accent">300%</h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">ROI Average</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 text-accent">24/7</h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Support Coverage</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
