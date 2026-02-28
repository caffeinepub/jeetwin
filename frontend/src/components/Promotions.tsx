import { Gift, ChevronRight } from 'lucide-react';
import PromoCard from './PromoCard';
import { promotions } from '../data/promotions';
import { openWhatsApp } from '../constants/whatsapp';
import { useViewportAnimation } from '../hooks/useViewportAnimation';

export default function Promotions() {
  const { ref, isVisible } = useViewportAnimation();

  return (
    <section id="promotions" className="bg-gradient-to-b from-dark-500 to-dark-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 text-sm font-display font-semibold tracking-[0.15em] uppercase">Exclusive Offers</span>
            </div>
            <h2 className="section-heading text-2xl sm:text-3xl text-white">
              <span className="gold-gradient-text">Bonuses</span> & Promotions
            </h2>
            <div className="divider-gold w-32 mt-2" />
          </div>
          <button
            onClick={openWhatsApp}
            className="hidden sm:flex items-center gap-1 text-gold-400 text-sm font-display font-semibold tracking-wider uppercase hover:text-gold-300 hover:scale-105 transition-all"
          >
            All Offers <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Promo Cards Grid */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {promotions.map((promo, index) => (
            <div
              key={promo.id}
              className={`card-enter ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <PromoCard promo={promo} />
            </div>
          ))}
        </div>

        {/* Terms Note */}
        <p className="text-center text-white/30 text-xs font-body mt-8">
          * Terms and conditions apply. 18+ only. Please gamble responsibly.
        </p>
      </div>
    </section>
  );
}
