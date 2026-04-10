import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Integrations from './components/Integrations';

import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import TrustLogos from './components/TrustLogos';
import Services from './components/Services';
import ServiceGrid from './components/ServiceGrid';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Benefits from './components/Benefits';
import ProblemSection from './components/ProblemSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-accent/10">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Benefits />
      <HowItWorks />
      <Services />
      <ServiceGrid />
      <Integrations />

      <Testimonials />
      <CaseStudies />
      <Stats />
      <FAQ />
      {/* <Blog /> */}
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
