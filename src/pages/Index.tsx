import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useMouseTrail } from '@/hooks/useMouseTrail';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  useScrollReveal();
  useMouseTrail();
  useParallax();

  useEffect(() => {
    // Set document title
    document.title = 'Alex Johnson - Full-Stack Developer & UI/UX Designer';
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
