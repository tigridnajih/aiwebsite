import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 border border-white/20 shadow-inner">
            <div className="h-4 w-4 rotate-45 rounded-[2px] bg-accent" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">bima</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link href="#case-studies" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Case Studies</Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="#contact" className="px-6 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10 hover:bg-white/20 transition-all backdrop-blur-sm shadow-lg shadow-purple-500/10">
            Work with Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
