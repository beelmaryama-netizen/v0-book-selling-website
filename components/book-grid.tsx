"use client"

import { useState } from "react"
import { BookCard } from "./book-card"
import { books, categories, type Book } from "@/lib/books-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BookGridProps {
  onAddToCart: (book: Book) => void
}

export function BookGrid({ onAddToCart }: BookGridProps) {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredBooks = activeCategory === "Tous" 
    ? books 
    : books.filter(book => book.category === activeCategory)

  return (
    <section id="boutique" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Notre sélection
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Explorez nos livres
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Une collection soigneusement choisie pour les amateurs de belle littérature.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "text-sm",
                activeCategory === category.name && "bg-primary text-primary-foreground"
              )}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-60">({category.count})</span>
            </Button>
          ))}
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredBooks.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Voir tous les livres
          </Button>
        </div>
      </div>
    </section>
  )
}
