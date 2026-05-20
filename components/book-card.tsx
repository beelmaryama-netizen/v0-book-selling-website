"use client"

import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Book } from "@/lib/books-data"

interface BookCardProps {
  book: Book
  onAddToCart: (book: Book) => void
}

export function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <div className="group relative">
      {/* Image container */}
      <div className="relative aspect-[2/3] overflow-hidden bg-muted rounded-sm">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {book.isNew && (
            <Badge className="bg-accent text-accent-foreground">Nouveau</Badge>
          )}
          {book.isBestseller && (
            <Badge variant="secondary">Best-seller</Badge>
          )}
          {book.originalPrice && (
            <Badge variant="destructive">Promo</Badge>
          )}
        </div>

        {/* Quick actions overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <div className="flex gap-2">
            <Button 
              className="flex-1 bg-background text-foreground hover:bg-background/90"
              onClick={() => onAddToCart(book)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Ajouter
            </Button>
            <Button variant="outline" size="icon" className="bg-background/90 hover:bg-background">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Ajouter aux favoris</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Book info */}
      <div className="mt-4 space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {book.category}
        </p>
        <h3 className="font-semibold text-base leading-tight group-hover:text-accent transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground italic">
          {book.author}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <span className="font-bold text-lg">
            {book.price.toFixed(2)} €
          </span>
          {book.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {book.originalPrice.toFixed(2)} €
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
