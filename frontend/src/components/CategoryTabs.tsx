import { categories } from '../data/games';

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryTabs({ selectedCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="bg-dark-400 border-b border-gold-400/15 sticky top-[calc(4rem+1.75rem)] sm:top-[calc(5rem+1.75rem)] z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`category-tab flex items-center gap-2 px-4 py-3 text-sm ${
                selectedCategory === cat.id ? 'active' : 'text-white/60'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
