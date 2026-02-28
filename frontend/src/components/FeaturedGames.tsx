import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import CategoryTabs from './CategoryTabs';
import GameCard from './GameCard';
import { games } from '../data/games';

export default function FeaturedGames() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGames = selectedCategory === 'All'
    ? games
    : games.filter(g => g.category === selectedCategory);

  return (
    <section id="games">
      <CategoryTabs selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

      <div className="bg-dark-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-heading text-2xl sm:text-3xl text-white">
                <span className="gold-gradient-text">Featured</span> Games
              </h2>
              <div className="divider-gold w-24 mt-2" />
            </div>
            <button className="flex items-center gap-1 text-gold-400 text-sm font-display font-semibold tracking-wider uppercase hover:text-gold-300 transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Games Grid */}
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/40 font-display text-lg">No games found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
