import { Play, Star, Flame } from 'lucide-react';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="game-card rounded-xl overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="play-overlay absolute inset-0 flex items-center justify-center">
          <button className="btn-gold w-12 h-12 rounded-full flex items-center justify-center shadow-gold-md">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </button>
        </div>
        {/* Badge */}
        {game.badge && (
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-0.5 rounded text-xs font-display font-bold tracking-wider uppercase ${
              game.badge === 'LIVE' ? 'bg-crimson-500 text-white' :
              game.badge === 'JACKPOT' ? 'bg-gold-400 text-dark-600' :
              game.badge === 'VIP' ? 'bg-purple-600 text-white' :
              'bg-dark-300 text-gold-400'
            }`}>
              {game.badge === 'LIVE' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse" />}
              {game.badge}
            </span>
          </div>
        )}
        {game.isNew && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-0.5 rounded text-xs font-display font-bold tracking-wider uppercase bg-emerald-600 text-white">
              NEW
            </span>
          </div>
        )}
        {game.isHot && !game.isNew && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-0.5 rounded text-xs font-display font-bold tracking-wider uppercase bg-orange-600 text-white flex items-center gap-1">
              <Flame className="w-3 h-3" /> HOT
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-3 bg-gradient-to-b from-dark-300 to-dark-400">
        <h3 className="font-display font-bold text-white text-sm tracking-wide mb-2 truncate">{game.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-gold-400 fill-gold-400' : 'text-white/20'}`} />
            ))}
          </div>
          <button className="btn-gold px-3 py-1.5 rounded text-xs">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}
