import { Trophy, Heart, ExternalLink } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiYoutube, SiTelegram } from 'react-icons/si';
import { quickLinks, gameLinks, supportLinks, paymentMethods } from '../data/footer';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'jeetwin-pro');

  return (
    <footer className="bg-dark-700 border-t border-gold-400/15">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-dark-600" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold text-gold-400 tracking-wider">JEET</span>
                <span className="font-heading text-xs font-semibold text-crimson-500 tracking-[0.2em]">WIN PRO</span>
              </div>
            </div>
            <p className="text-white/45 text-sm font-body leading-relaxed mb-6">
              India's most trusted online casino and sports betting platform. Play responsibly and win big with JeetWin Pro.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: SiFacebook, label: 'Facebook', color: 'hover:text-blue-400' },
                { Icon: SiX, label: 'X (Twitter)', color: 'hover:text-white' },
                { Icon: SiInstagram, label: 'Instagram', color: 'hover:text-pink-400' },
                { Icon: SiYoutube, label: 'YouTube', color: 'hover:text-red-500' },
                { Icon: SiTelegram, label: 'Telegram', color: 'hover:text-sky-400' },
              ].map(({ Icon, label, color }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-dark-300 border border-gold-400/15 flex items-center justify-center text-white/40 ${color} hover:border-gold-400/40 transition-all duration-200`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-gold-400 tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm font-body hover:text-gold-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div>
            <h4 className="font-heading text-base font-bold text-gold-400 tracking-wider uppercase mb-5">Games</h4>
            <ul className="space-y-2.5">
              {gameLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm font-body hover:text-gold-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-base font-bold text-gold-400 tracking-wider uppercase mb-5">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm font-body hover:text-gold-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 p-4 rounded-xl bg-dark-400 border border-gold-400/10">
              <p className="text-xs text-white/40 font-body mb-1">24/7 Support</p>
              <p className="text-gold-400 text-sm font-display font-semibold">support@jeetwinpro.com</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gold-400/10">
          <p className="text-white/30 text-xs font-body uppercase tracking-wider mb-4">Accepted Payment Methods</p>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 rounded-lg bg-dark-300 border border-gold-400/10 text-white/40 text-xs font-display font-semibold tracking-wide hover:border-gold-400/30 hover:text-white/60 transition-all cursor-default"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-400/10 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Legal */}
            <div className="text-center sm:text-left">
              <p className="text-white/30 text-xs font-body leading-relaxed max-w-2xl">
                <strong className="text-white/50">18+ Only.</strong> Gambling can be addictive. Please play responsibly.
                JeetWin Pro is licensed and regulated. This website is for entertainment purposes only.
                © {year} JeetWin Pro. All rights reserved.
              </p>
            </div>

            {/* Attribution */}
            <div className="flex items-center gap-1.5 text-white/30 text-xs font-body flex-shrink-0">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-crimson-500 fill-crimson-500" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400/70 hover:text-gold-400 transition-colors flex items-center gap-0.5"
              >
                caffeine.ai
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
