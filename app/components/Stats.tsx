export default function Stats() {
    return (
        <section className="py-20 bg-accent text-white">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2">50+</h3>
                        <p className="text-white/80 font-medium">Clients Served</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2">10k+</h3>
                        <p className="text-white/80 font-medium">Hours Saved</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2">300%</h3>
                        <p className="text-white/80 font-medium">ROI Average</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2">24/7</h3>
                        <p className="text-white/80 font-medium">Support Coverage</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
