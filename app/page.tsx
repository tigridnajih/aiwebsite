import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import TrustLogos from './components/TrustLogos';
import TechStack from './components/TechStack';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans selection:bg-accent/30">
      <Navbar />
      <Hero />
      <Testimonials />
      <Problem />
      <Solutions />
      <CaseStudies />
      <TrustLogos />
      <TechStack />
      <Stats />
      <Pricing />
      <Team />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
