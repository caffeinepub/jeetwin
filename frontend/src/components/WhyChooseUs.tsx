import { Shield, Zap, Headphones, CreditCard, Award, Lock } from 'lucide-react';
import { openWhatsApp } from '../constants/whatsapp';
import { useViewportAnimation } from '../hooks/useViewportAnimation';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Secure',
    description: 'Fully licensed and regulated platform with SSL encryption and secure transactions.',
  },
  {
    icon: Zap,
    title: 'Instant Withdrawals',
    description: 'Get your winnings instantly with our fast withdrawal system. No delays.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support via live chat, email, and phone.',
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Multiple payment options including UPI, Paytm, PhonePe, and crypto.',
  },
  {
    icon: Award,
    title: 'Best Odds',
    description: 'Industry-leading odds on all sports and casino games for maximum returns.',
  },
  {
    icon: Lock,
    title: 'Fair Play',
    description: 'Certified RNG technology ensures completely fair and transparent gameplay.',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useViewportAnimation();

  return (
    <section id="about" className="bg-dark-600 py-16 border-t border-gold-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold-400 text-sm font-display font-semibold tracking-[0.15em] uppercase">Why JeetWin Pro</span>
          <h2 className="section-heading text-2xl sm:text-3xl text-white mt-2">
            The <span className="gold-gradient-text">Best Platform</span> for Online Gaming
          </h2>
          <div className="divider-gold w-24 mx-auto mt-3" />
        </div>

        {/* Features Grid */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={openWhatsApp}
              className={`dark-card rounded-xl p-6 group text-left w-full card-enter ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.09}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
