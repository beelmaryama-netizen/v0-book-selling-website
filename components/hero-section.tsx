"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-balance">
            L&apos;art de la lecture
            <br />
            <span className="italic font-normal">rencontre l&apos;élégance</span>
          </h1>
          
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Découvrez notre collection soigneusement sélectionnée de livres rares et contemporains. 
            Chaque ouvrage est une invitation au voyage littéraire.
          </p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6 group">
              Découvrir la boutique
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6">
              Notre histoire
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs tracking-widest uppercase vertical-text">Découvrir</span>
            <div className="w-px h-20 bg-border" />
            <ArrowRight className="h-4 w-4 rotate-90 text-accent" />
          </div>
        </div>

        <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs tracking-widest uppercase vertical-text">Acheter</span>
            <div className="w-px h-20 bg-border" />
            <ArrowRight className="h-4 w-4 rotate-90 text-accent" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}
