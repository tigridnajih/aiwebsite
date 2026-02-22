import SectionHeader from './SectionHeader';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-black overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-32" />

            <div className="container-custom relative z-10">
                <SectionHeader
                    badge="Contact"
                    title="Ready to Automate Your Growth?"
                    description="The future belongs to those who move fast. Book a free strategy session to see specifically how we can help you scale."
                />

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>

                        <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Save 20+ hours per week per employee
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Reduce operational costs by 40%
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Launch AI agents in days, not months
                            </li>
                        </ul>
                    </div>

                    <form className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800">
                        <h3 className="text-2xl font-bold mb-6">Book Your Strategy Call</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Data Sharing Agreement</label>
                                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Work Email</label>
                                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all dark:bg-zinc-800 dark:border-zinc-700" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">How can we help?</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all dark:bg-zinc-800 dark:border-zinc-700">
                                    <option>Chatbot Implementation</option>
                                    <option>Workflow Automation</option>
                                    <option>Consulting / Strategy</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full btn-primary py-4 text-sm font-bold uppercase tracking-wide">
                                Schedule Free Consultation
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                By submitting, you agree to our privacy policy. No spam, ever.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
