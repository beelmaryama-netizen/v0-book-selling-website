export interface Book {
  id: string
  title: string
  author: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isBestseller?: boolean
}

export const books: Book[] = [
  {
    id: "1",
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    price: 18.50,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    category: "Classiques",
    isBestseller: true,
  },
  {
    id: "2",
    title: "L'Étranger",
    author: "Albert Camus",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    category: "Philosophie",
  },
  {
    id: "3",
    title: "Les Fleurs du Mal",
    author: "Charles Baudelaire",
    price: 22.00,
    originalPrice: 28.00,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    category: "Poésie",
    isNew: true,
  },
  {
    id: "4",
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    category: "Romans",
  },
  {
    id: "5",
    title: "Les Misérables",
    author: "Victor Hugo",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    category: "Classiques",
    isBestseller: true,
  },
  {
    id: "6",
    title: "Du côté de chez Swann",
    author: "Marcel Proust",
    price: 24.50,
    image: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=400&h=600&fit=crop",
    category: "Romans",
    isNew: true,
  },
  {
    id: "7",
    title: "Germinal",
    author: "Émile Zola",
    price: 21.00,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    category: "Classiques",
  },
  {
    id: "8",
    title: "Le Rouge et le Noir",
    author: "Stendhal",
    price: 17.50,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
    category: "Romans",
  },
]

export const categories = [
  { name: "Tous", count: books.length },
  { name: "Classiques", count: books.filter(b => b.category === "Classiques").length },
  { name: "Romans", count: books.filter(b => b.category === "Romans").length },
  { name: "Poésie", count: books.filter(b => b.category === "Poésie").length },
  { name: "Philosophie", count: books.filter(b => b.category === "Philosophie").length },
]
