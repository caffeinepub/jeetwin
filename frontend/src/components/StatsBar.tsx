import { Users, Trophy, Zap, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '5M+', label: 'Active Players', color: 'text-gold-400' },
  { icon: Trophy, value: '₹500Cr+', label: 'Winnings Paid', color: 'text-gold-400' },
  { icon: Zap, value: '24/7', label: 'Live Support', color: 'text-gold-400' },
  { icon: Shield, value: '100%', label: 'Secure & Licensed', color: 'text-gold-400' },
];

export default function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-dark-400 via-dark-300 to-dark-400 border-y border-gold-400/15">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stats-item flex flex-col sm:flex-row items-center justify-center gap-3 py-5 px-4 ${
                index < stats.length - 1 ? 'border-b md:border-b-0 border-gold-400/10' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-heading text-xl font-bold text-gold-400">{stat.value}</div>
                <div className="text-xs text-white/50 font-body tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
