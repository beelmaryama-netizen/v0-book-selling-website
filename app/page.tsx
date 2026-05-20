"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BookGrid } from "@/components/book-grid"
import { CategoriesSection } from "@/components/categories-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import type { Book } from "@/lib/books-data"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function HomePage() {
  const [cartItems, setCartItems] = useState<Book[]>([])

  const handleAddToCart = (book: Book) => {
    setCartItems(prev => [...prev, book])
    toast.success(`${book.title} ajouté au panier`, {
      description: `Par ${book.author}`,
      action: {
        label: "Voir le panier",
        onClick: () => console.log("View cart"),
      },
    })
  }

  return (
    <main className="min-h-screen">
      <Header cartCount={cartItems.length} />
      <HeroSection />
      <FeaturesSection />
      <BookGrid onAddToCart={handleAddToCart} />
      <CategoriesSection />
      <NewsletterSection />
      <Footer />
      <Toaster position="bottom-right" richColors />
    </main>
  )
}
