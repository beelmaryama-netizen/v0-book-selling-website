"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest opacity-70">
            Newsletter
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Restez informé
          </h2>
          <p className="mt-4 opacity-80 leading-relaxed">
            Inscrivez-vous pour recevoir nos recommandations littéraires, 
            les nouvelles parutions et des offres exclusives.
          </p>

          {isSubscribed ? (
            <div className="mt-8 p-6 bg-primary-foreground/10 rounded-lg">
              <p className="text-lg font-medium">Merci pour votre inscription ! 📚</p>
              <p className="mt-2 text-sm opacity-80">
                Vous recevrez bientôt nos dernières actualités.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-primary-foreground focus:border-primary-foreground/50"
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="whitespace-nowrap"
              >
                S&apos;inscrire
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs opacity-60">
            En vous inscrivant, vous acceptez de recevoir nos communications. 
            Désabonnement possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}
