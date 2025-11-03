export interface Poster {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  sizes: string[];
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "1", name: "Abstract", slug: "abstract" },
  { id: "2", name: "Nature", slug: "nature" },
  { id: "3", name: "Typography", slug: "typography" },
  { id: "4", name: "Minimalist", slug: "minimalist" },
  { id: "5", name: "Geometric", slug: "geometric" },
  { id: "6", name: "Photography", slug: "photography" },
];

export const posters: Poster[] = [
  {
    id: "1",
    title: "Abstract Waves",
    description: "A mesmerizing blend of flowing curves and vibrant colors that brings energy to any space. Perfect for modern interiors.",
    price: 29.99,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "2",
    title: "Mountain Serenity",
    description: "Capture the tranquility of mountain peaks with this stunning nature photograph. Ideal for creating a peaceful atmosphere.",
    price: 34.99,
    category: "nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2", "A1"],
    featured: true,
  },
  {
    id: "3",
    title: "Bold Typography",
    description: "Make a statement with this bold typographic design. Clean lines and powerful messaging for the modern home.",
    price: 24.99,
    category: "typography",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    sizes: ["A4", "A3"],
    featured: true,
  },
  {
    id: "4",
    title: "Minimal Lines",
    description: "Less is more with this elegant minimalist design. Simple geometric lines that complement any decor style.",
    price: 27.99,
    category: "minimalist",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: false,
  },
  {
    id: "5",
    title: "Geometric Harmony",
    description: "A perfect balance of shapes and colors. This geometric composition adds sophistication to your walls.",
    price: 31.99,
    category: "geometric",
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "6",
    title: "Urban Photography",
    description: "Capture the essence of city life with this striking urban photograph. Perfect for contemporary spaces.",
    price: 36.99,
    category: "photography",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2", "A1"],
    featured: false,
  },
  {
    id: "7",
    title: "Color Burst",
    description: "An explosion of vibrant colors that energizes any room. Abstract art at its finest.",
    price: 29.99,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: false,
  },
  {
    id: "8",
    title: "Forest Path",
    description: "Walk through nature with this serene forest scene. Brings the outdoors inside your home.",
    price: 33.99,
    category: "nature",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: false,
  },
  {
    id: "9",
    title: "Stay Wild",
    description: "Inspirational typography that motivates and inspires. Perfect for your workspace or bedroom.",
    price: 24.99,
    category: "typography",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80",
    ],
    sizes: ["A4", "A3"],
    featured: false,
  },
  {
    id: "10",
    title: "Zen Circle",
    description: "Find your center with this minimalist zen-inspired design. Simplicity and elegance combined.",
    price: 26.99,
    category: "minimalist",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: true,
  },
  {
    id: "11",
    title: "Hexagon Pattern",
    description: "Modern geometric pattern that adds depth and interest to your walls. Contemporary design at its best.",
    price: 30.99,
    category: "geometric",
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2"],
    featured: false,
  },
  {
    id: "12",
    title: "Coastal Sunset",
    description: "Experience the beauty of a coastal sunset every day. Stunning photography that transports you.",
    price: 37.99,
    category: "photography",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    sizes: ["A4", "A3", "A2", "A1"],
    featured: true,
  },
];
