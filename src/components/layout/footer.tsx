import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const defaultFooterSections: FooterSection[] = [
  {
    title: "Produits",
    links: [
      { name: "Huiles CBD", href: "/catalog/huiles-cbd" },
      { name: "Fleurs CBD", href: "/catalog/fleurs-cbd" },
      { name: "Cosmetiques CBD", href: "/catalog/cosmetiques-cbd" },
      { name: "Infusions CBD", href: "/catalog/infusions-cbd" },
      { name: "Resines CBD", href: "/catalog/resines-cbd" },
      { name: "Coffrets", href: "/catalog/coffrets" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Comment ca marche", href: "/how-it-works" },
      { name: "Marque Blanche", href: "/marque-blanche" },
      { name: "Dropshipping CBD", href: "/dropshipping" },
      { name: "Fulfillment", href: "/fulfillment-shipping" },
      { name: "Tarifs", href: "/pricing" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Centre d'aide", href: "/help" },
      { name: "Blog", href: "/blog" },
      { name: "A propos", href: "/about" },
      { name: "Contact", href: "/about#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Conditions generales", href: "/legal/terms" },
      { name: "Politique de confidentialite", href: "/legal/privacy" },
      { name: "Livraison & retours", href: "/legal/shipping" },
      { name: "Paiements", href: "/legal/payments" },
      { name: "Accessibilite", href: "/legal/accessibility" },
    ],
  },
];

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  disclaimer?: string;
  tagline?: string;
}

export function Footer({ sections, disclaimer, tagline }: FooterProps = {}) {
  const footerSections = sections && sections.length > 0 ? sections : defaultFooterSections;
  const finalDisclaimer = disclaimer || "Produits non destines a diagnostiquer, traiter ou guerir une maladie.";
  const finalTagline = tagline || "Lancez votre marque CBD en marque blanche. Sans stock, sans minimum, 100% conforme EU/FR.";
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">cbd3</span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">{finalTagline}</p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} CBD3. Tous droits reserves. Taux THC &lt; 0.3% (EU) / &lt; 0.2% (FR).
          </p>
          <p className="text-xs text-white/40">{finalDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
