import HeroCarousel from './components/HeroCarousel';
import Navigation from './components/Navigation';
import StatsBar from './components/StatsBar';
import FeaturedGames from './components/FeaturedGames';
import Promotions from './components/Promotions';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-600 text-white">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Carousel - full viewport */}
        <div className="pt-0">
          <HeroCarousel />
        </div>

        {/* Stats Bar */}
        <StatsBar />

        {/* Featured Games with Category Tabs */}
        <FeaturedGames />

        {/* Promotions Section */}
        <Promotions />

        {/* Why Choose Us */}
        <WhyChooseUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
