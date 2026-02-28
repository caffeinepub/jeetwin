export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  badge?: string;
  highlight?: string;
}

export const promotions: Promotion[] = [
  {
    id: 'welcome',
    title: 'Welcome Bonus',
    subtitle: '200% on First Deposit',
    description: 'Start your winning journey with a massive 200% bonus on your first deposit. Maximum bonus up to ₹20,000!',
    image: '/assets/generated/promo-welcome.dim_600x300.jpg',
    ctaText: 'Claim Now',
    badge: 'NEW PLAYER',
    highlight: '200%',
  },
  {
    id: 'refer',
    title: 'Refer a Friend',
    subtitle: 'Earn ₹500 Per Referral',
    description: 'Invite your friends and earn ₹500 for every friend who registers and makes their first deposit.',
    image: '/assets/generated/promo-refer.dim_600x300.jpg',
    ctaText: 'Refer Now',
    badge: 'UNLIMITED',
    highlight: '₹500',
  },
  {
    id: 'cashback',
    title: 'Daily Cashback',
    subtitle: 'Up to 15% Every Day',
    description: 'Get up to 15% cashback on your daily losses. Cashback credited every morning at 9 AM.',
    image: '/assets/generated/promo-cashback.dim_600x300.jpg',
    ctaText: 'Get Cashback',
    badge: 'DAILY',
    highlight: '15%',
  },
];
