import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
            <div className="container-custom grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-2xl font-bold flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-accent rounded-lg"></div>
                        <span>Bima</span>
                    </Link>
                    <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
                        Helping forward-thinking agencies and businesses automate their operations with cutting-edge AI solutions.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Services</h4>
                    <ul className="space-y-4 text-zinc-400">
                        <li><Link href="#" className="hover:text-white transition-colors">AI Chatbots</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Workflow Automation</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Consulting</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Custom Development</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Company</h4>
                    <ul className="space-y-4 text-zinc-400">
                        <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
                <p>&copy; {new Date().getFullYear()} Bima Automation. All rights reserved.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
