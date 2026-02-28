import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';
import { openWhatsApp } from '../constants/whatsapp';

interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaSecondary?: string;
  accentColor: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: '/assets/generated/hero-banner-1.dim_1920x700.jpg',
    badge: '🎰 CASINO',
    headline: 'WIN BIG EVERY DAY',
    subheadline: 'India\'s Most Trusted Online Casino & Sports Betting Platform',
    ctaText: 'Play Now',
    ctaSecondary: 'View Games',
    accentColor: '#ffd700',
  },
  {
    id: 2,
    image: '/assets/generated/hero-banner-2.dim_1920x700.jpg',
    badge: '🏏 CRICKET',
    headline: 'BET ON CRICKET LIVE',
    subheadline: 'Real-time odds on IPL, T20 World Cup & all major cricket tournaments',
    ctaText: 'Bet Now',
    ctaSecondary: 'Live Matches',
    accentColor: '#ffd700',
  },
  {
    id: 3,
    image: '/assets/generated/hero-banner-3.dim_1920x700.jpg',
    badge: '🎡 LIVE CASINO',
    headline: 'LIVE ROULETTE & MORE',
    subheadline: 'Experience the thrill of a real casino from the comfort of your home',
    ctaText: 'Join Live',
    ctaSecondary: 'See Tables',
    accentColor: '#c0132f',
  },
  {
    id: 4,
    image: '/assets/generated/hero-banner-4.dim_1920x700.jpg',
    badge: '⚽ FOOTBALL',
    headline: 'FOOTBALL BETTING LIVE',
    subheadline: 'Best odds on Premier League, Champions League & all major leagues',
    ctaText: 'Bet Football',
    ctaSecondary: 'Live Odds',
    accentColor: '#ffd700',
  },
  {
    id: 5,
    image: '/assets/generated/hero-banner-5.dim_1920x700.jpg',
    badge: '🎁 BONUS',
    headline: '200% WELCOME BONUS',
    subheadline: 'Get up to ₹20,000 bonus on your first deposit. New players only.',
    ctaText: 'Claim Bonus',
    ctaSecondary: 'Learn More',
    accentColor: '#ffd700',
  },
];

export default function HeroCarousel() {
  const { currentSlide, handleNext, handlePrev, handleDotClick } = useCarousel({
    totalSlides: slides.length,
    autoPlayInterval: 5500,
  });

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 0px)', minHeight: '500px', maxHeight: '750px' }}>
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.headline}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-600/80 via-transparent to-dark-600/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div
            key={currentSlide}
            className="max-w-2xl animate-slide-in-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson-500/80 backdrop-blur-sm border border-crimson-400/40 mb-4">
              <span className="text-xs font-display font-bold tracking-[0.15em] text-white uppercase">
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-4"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
            >
              <span className="gold-gradient-text">{slide.headline.split(' ').slice(0, 2).join(' ')}</span>
              <br />
              <span className="text-white">{slide.headline.split(' ').slice(2).join(' ')}</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-base sm:text-lg text-white/80 font-body mb-8 max-w-lg leading-relaxed"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.8)' }}
            >
              {slide.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openWhatsApp}
                className="btn-gold px-8 py-3.5 rounded-lg text-base flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                {slide.ctaText}
              </button>
              {slide.ctaSecondary && (
                <button
                  onClick={openWhatsApp}
                  className="px-8 py-3.5 rounded-lg text-base font-display font-bold tracking-wider uppercase text-white border border-white/30 hover:border-gold-400/60 hover:text-gold-400 backdrop-blur-sm transition-all duration-200 hover:scale-105"
                >
                  {slide.ctaSecondary}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-600/60 backdrop-blur-sm border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400/20 hover:border-gold-400 transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-600/60 backdrop-blur-sm border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400/20 hover:border-gold-400 transition-all duration-200 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-2.5 bg-gold-400 shadow-gold-sm'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-1 text-white/60 text-sm font-display">
        <span className="text-gold-400 font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span>/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
