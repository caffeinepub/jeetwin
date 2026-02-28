export interface Game {
  id: string;
  title: string;
  category: string;
  image: string;
  badge?: string;
  isHot?: boolean;
  isNew?: boolean;
}

export const games: Game[] = [
  {
    id: 'slots',
    title: 'Mega Slots',
    category: 'Slots',
    image: '/assets/generated/game-slots.dim_400x300.jpg',
    badge: 'JACKPOT',
    isHot: true,
  },
  {
    id: 'poker',
    title: 'Live Poker',
    category: 'Card Games',
    image: '/assets/generated/game-poker.dim_400x300.jpg',
    badge: 'LIVE',
    isHot: true,
  },
  {
    id: 'cricket',
    title: 'Cricket Betting',
    category: 'Cricket',
    image: '/assets/generated/game-cricket.dim_400x300.jpg',
    badge: 'LIVE',
    isNew: false,
  },
  {
    id: 'football',
    title: 'Football Betting',
    category: 'Football',
    image: '/assets/generated/game-football.dim_400x300.jpg',
    isNew: true,
  },
  {
    id: 'baccarat',
    title: 'Baccarat',
    category: 'Live Casino',
    image: '/assets/generated/game-baccarat.dim_400x300.jpg',
    badge: 'VIP',
    isHot: false,
  },
  {
    id: 'lottery',
    title: 'Lucky Lottery',
    category: 'Lottery',
    image: '/assets/generated/game-lottery.dim_400x300.jpg',
    isNew: true,
  },
];

export const categories = [
  { id: 'All', label: 'All Games', icon: '🎮' },
  { id: 'Cricket', label: 'Cricket', icon: '🏏' },
  { id: 'Football', label: 'Football', icon: '⚽' },
  { id: 'Live Casino', label: 'Live Casino', icon: '🎰' },
  { id: 'Slots', label: 'Slots', icon: '🎲' },
  { id: 'Card Games', label: 'Card Games', icon: '🃏' },
  { id: 'Lottery', label: 'Lottery', icon: '🎟️' },
];
