import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold tracking-tight">
              Librairie<br />
              <span className="italic font-normal">Lumière</span>
            </h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Une librairie en ligne dédiée aux amoureux de la belle littérature depuis 2010.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Boutique
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Tous les livres</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nouveautés</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Best-sellers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Promotions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Informations
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Service client
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Retours</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Conditions générales</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Librairie Lumière. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
