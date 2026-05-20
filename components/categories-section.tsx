"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Romans",
    count: 245,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=800&fit=crop",
  },
  {
    name: "Poésie",
    count: 89,
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600&h=800&fit=crop",
  },
  {
    name: "Classiques",
    count: 156,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop",
  },
]

export function CategoriesSection() {
  return (
    <section id="nouveautes" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Catégories
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Parcourez nos rayons
            </h2>
          </div>
          <Button variant="outline" className="w-fit">
            Toutes les catégories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a 
              key={category.name}
              href="#"
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs text-background/70 uppercase tracking-wider">
                  {category.count} ouvrages
                </p>
                <h3 className="mt-1 text-2xl font-bold text-background group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
