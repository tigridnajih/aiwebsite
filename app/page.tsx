import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioShowcase from './components/PortfolioShowcase';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Problem from './components/Problem';
import CaseStudies from './components/CaseStudies';
import TrustLogos from './components/TrustLogos';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-accent/30">
      <Navbar />
      <Hero />
      <PortfolioShowcase />
      <HowItWorks />
      <Services />
      <Integrations />
      <Testimonials />
      <Problem />
      <CaseStudies />
      <Stats />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
