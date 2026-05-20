import { Truck, Gift, BookOpen, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Livraison gratuite",
    description: "Dès 35€ d'achat en France métropolitaine",
  },
  {
    icon: Gift,
    title: "Emballage cadeau",
    description: "Offrez un livre avec un emballage élégant",
  },
  {
    icon: BookOpen,
    title: "Livres de qualité",
    description: "Sélection rigoureuse de nos libraires",
  },
  {
    icon: RefreshCw,
    title: "Retours gratuits",
    description: "30 jours pour changer d'avis",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background mb-4">
                <feature.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
