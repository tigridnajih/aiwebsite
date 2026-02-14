import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-black/80 dark:border-white/10">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg"></div>
          <span>Bima</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#solutions" className="text-sm font-medium hover:text-accent transition-colors">Solutions</Link>
          <Link href="#case-studies" className="text-sm font-medium hover:text-accent transition-colors">Case Studies</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">Pricing</Link>
          <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
        </div>
        
        {/* CTA */}
        <div className="hidden md:block">
          <Link href="#contact" className="px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-colors dark:bg-white dark:text-black">
            Book a Call
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
