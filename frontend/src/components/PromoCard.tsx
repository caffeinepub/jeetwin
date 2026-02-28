import { ArrowRight, Tag } from 'lucide-react';
import type { Promotion } from '../data/promotions';

interface PromoCardProps {
  promo: Promotion;
}

export default function PromoCard({ promo }: PromoCardProps) {
  return (
    <div className="promo-card rounded-2xl overflow-hidden group">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-600/90 via-dark-600/30 to-transparent" />

        {/* Highlight Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-gold-400 text-dark-600 px-3 py-1 rounded-full font-heading font-bold text-lg leading-none">
            {promo.highlight}
          </div>
        </div>

        {/* Category Badge */}
        {promo.badge && (
          <div className="absolute top-3 left-3">
            <span className="flex items-center gap-1 px-2 py-1 rounded bg-crimson-500/90 text-white text-xs font-display font-bold tracking-wider uppercase">
              <Tag className="w-3 h-3" />
              {promo.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-gold-400 mb-1">{promo.title}</h3>
        <p className="font-display font-semibold text-white/80 text-sm mb-3 tracking-wide">{promo.subtitle}</p>
        <p className="text-white/55 text-sm font-body leading-relaxed mb-5">{promo.description}</p>

        <button className="btn-crimson w-full py-3 rounded-lg text-sm flex items-center justify-center gap-2 group-hover:shadow-crimson-md">
          {promo.ctaText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
