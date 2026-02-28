import { useRef } from 'react';
import HeroCarousel from './components/HeroCarousel';
import Navigation from './components/Navigation';
import StatsBar from './components/StatsBar';
import FeaturedGames from './components/FeaturedGames';
import Promotions from './components/Promotions';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import { useViewportAnimation } from './hooks/useViewportAnimation';

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useViewportAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-enter ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-600 text-white">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Carousel - full viewport, no entrance animation needed */}
        <div className="pt-0">
          <HeroCarousel />
        </div>

        {/* Stats Bar */}
        <AnimatedSection>
          <StatsBar />
        </AnimatedSection>

        {/* Featured Games with Category Tabs */}
        <AnimatedSection>
          <FeaturedGames />
        </AnimatedSection>

        {/* Promotions Section */}
        <AnimatedSection>
          <Promotions />
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
