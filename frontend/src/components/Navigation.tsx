import { useState, useEffect } from 'react';
import { Menu, X, Trophy, ChevronDown } from 'lucide-react';
import { useMobileMenu } from '../hooks/useMobileMenu';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sports', href: '#categories' },
  { label: 'Casino', href: '#games' },
  { label: 'Promotions', href: '#promotions' },
  { label: 'About', href: '#about' },
];

export default function Navigation() {
  const { isOpen, toggle, close } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    close();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-600/98 backdrop-blur-md shadow-lg border-b border-gold-400/20'
            : 'bg-gradient-to-b from-dark-600/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group" onClick={() => handleNavClick('Home', '#home')}>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold-sm group-hover:shadow-gold-md transition-all">
                <Trophy className="w-5 h-5 text-dark-600" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold text-gold-400 tracking-wider">JEET</span>
                <span className="font-heading text-xs font-semibold text-crimson-500 tracking-[0.2em]">WIN PRO</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`nav-link text-sm ${activeLink === link.label ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-5 py-2 rounded text-sm font-display font-semibold tracking-wider uppercase text-gold-400 border border-gold-400/40 hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-200">
                Login
              </button>
              <button className="btn-gold px-5 py-2 rounded text-sm">
                Register
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggle}
              className="md:hidden p-2 rounded-lg text-gold-400 hover:bg-gold-400/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Live Ticker */}
        <div className="ticker-wrap py-1.5 hidden sm:block">
          <div className="ticker-content">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 px-4">
                <span className="text-xs font-display font-semibold text-white/90 tracking-wider">🏏 IND vs AUS — Live Betting Open</span>
                <span className="text-gold-400">•</span>
                <span className="text-xs font-display font-semibold text-white/90 tracking-wider">🎰 Mega Jackpot: ₹50,00,000</span>
                <span className="text-gold-400">•</span>
                <span className="text-xs font-display font-semibold text-white/90 tracking-wider">⚽ EPL Live Odds Updated</span>
                <span className="text-gold-400">•</span>
                <span className="text-xs font-display font-semibold text-white/90 tracking-wider">🎁 New User Bonus: 200% on First Deposit</span>
                <span className="text-gold-400">•</span>
                <span className="text-xs font-display font-semibold text-white/90 tracking-wider">🃏 Live Poker Tournament — Register Now</span>
                <span className="text-gold-400">•</span>
                <span className="text-xs font-display font-semibold text-white/90 tracking-wider">🎟️ Lottery Draw Tonight at 8 PM</span>
                <span className="text-gold-400">•</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-dark-600/95 backdrop-blur-md" onClick={close} />
          <nav className="absolute top-16 left-0 right-0 bg-dark-400 border-b border-gold-400/20 shadow-xl">
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`text-left px-4 py-3 rounded-lg font-display font-semibold text-base tracking-wider uppercase transition-all ${
                    activeLink === link.label
                      ? 'text-gold-400 bg-gold-400/10'
                      : 'text-white/80 hover:text-gold-400 hover:bg-gold-400/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-gold-400/20">
                <button className="w-full py-3 rounded text-sm font-display font-semibold tracking-wider uppercase text-gold-400 border border-gold-400/40 hover:border-gold-400 hover:bg-gold-400/10 transition-all">
                  Login
                </button>
                <button className="btn-gold w-full py-3 rounded text-sm">
                  Register Now
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
