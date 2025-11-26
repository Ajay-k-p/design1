export interface Shoe {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  featured?: boolean;
  trending?: boolean;
  bestSeller?: boolean;
}
export const heroShoes: Shoe[] = [{
  id: 1,
  name: 'Air Quantum Elite',
  category: 'Running',
  price: 189,
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  featured: true
}, {
  id: 2,
  name: 'Urban Stride Pro',
  category: 'Lifestyle',
  price: 159,
  image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
  featured: true
}, {
  id: 3,
  name: 'Velocity Max',
  category: 'Performance',
  price: 219,
  image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
  featured: true
}, {
  id: 4,
  name: 'Street Legend',
  category: 'Casual',
  price: 139,
  image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
  featured: true
}];
export const trendingShoes: Shoe[] = [{
  id: 5,
  name: 'Neon Wave',
  category: 'Running',
  price: 175,
  image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
  trending: true
}, {
  id: 6,
  name: 'Shadow Elite',
  category: 'Basketball',
  price: 199,
  image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80',
  trending: true
}, {
  id: 7,
  name: 'Cloud Runner',
  category: 'Running',
  price: 165,
  image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80',
  trending: true
}, {
  id: 8,
  name: 'Retro Fusion',
  category: 'Lifestyle',
  price: 149,
  image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80',
  trending: true
}];
export const bestSellers: Shoe[] = [{
  id: 9,
  name: 'Apex Pro',
  category: 'Training',
  price: 189,
  image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80',
  bestSeller: true
}, {
  id: 10,
  name: 'Swift Motion',
  category: 'Running',
  price: 169,
  image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80',
  bestSeller: true
}, {
  id: 11,
  name: 'Urban Legend',
  category: 'Casual',
  price: 129,
  image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
  bestSeller: true
}, {
  id: 12,
  name: 'Flex Elite',
  category: 'Training',
  price: 179,
  image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&q=80',
  bestSeller: true
}];
export const categories = [{
  name: 'Running',
  icon: '⚡',
  count: 45
}, {
  name: 'Basketball',
  icon: '🏀',
  count: 32
}, {
  name: 'Lifestyle',
  icon: '✨',
  count: 58
}, {
  name: 'Training',
  icon: '💪',
  count: 41
}];
export const testimonials = [{
  id: 1,
  name: 'Marcus Johnson',
  role: 'Professional Athlete',
  content: 'These shoes transformed my performance. The comfort and support are unmatched.',
  rating: 5,
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
}, {
  id: 2,
  name: 'Sarah Chen',
  role: 'Fitness Enthusiast',
  content: "Best investment I've made. Style meets performance perfectly.",
  rating: 5,
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
}, {
  id: 3,
  name: 'David Rodriguez',
  role: 'Marathon Runner',
  content: "Incredible durability and comfort. I've run over 500 miles in these.",
  rating: 5,
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
}];