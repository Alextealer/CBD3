import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, ShieldCheck, Users, Globe, Mail, MapPin, Phone } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Qualite premium",
    description: "Nous selectionnons uniquement les meilleurs producteurs de chanvre europeens pour garantir des produits CBD d'exception.",
  },
  {
    icon: ShieldCheck,
    title: "Transparence totale",
    description: "Chaque lot est teste par un laboratoire independant. Les COA sont accessibles pour chaque produit, sans exception.",
  },
  {
    icon: Users,
    title: "Accessibilite",
    description: "Pas de minimum de commande, pas de stock a gerer. Nous rendons la creation de marque CBD accessible a tous les entrepreneurs.",
  },
  {
    icon: Globe,
    title: "Conformite EU/FR",
    description: "Notre equipe juridique veille en permanence au respect de la reglementation CBD en vigueur en France et en Europe.",
  },
];

const stats = [
  { value: "200+", label: "Marques lancees" },
  { value: "50+", label: "Produits CBD" },
  { value: "48h", label: "Delai d'expedition" },
  { value: "99.8%", label: "Taux de conformite" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
              A propos
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
              Nous democratisons la creation de marques CBD
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              CBD3 est ne d&apos;une conviction : chaque entrepreneur devrait
              pouvoir lancer sa marque CBD sans les contraintes de la
              production, du stockage et de la conformite reglementaire.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">Notre mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le marche du CBD en Europe represente 5 milliards d&apos;euros et
                  connait une croissance exponentielle. Pourtant, lancer une
                  marque CBD reste complexe : production, conformite, stockage,
                  logistique...
                </p>
                <p>
                  CBD3 simplifie tout. Nous offrons une plateforme complete de
                  marque blanche CBD qui permet a n&apos;importe quel entrepreneur
                  de creer, personnaliser et vendre des produits CBD premium
                  sous sa propre marque.
                </p>
                <p>
                  Pas de minimum de commande, pas de stock a gerer, une
                  conformite EU/FR garantie. Vous vous concentrez sur votre
                  marque et vos ventes, nous gerons le reste.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <Leaf className="h-32 w-32 text-green-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16">
            Nos valeurs
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border shadow-sm">
                <v.icon className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge variant="outline" className="mb-4 rounded-full px-4">
                Contact
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Vous avez des questions ou un projet de marque CBD ? Notre
                equipe est la pour vous accompagner a chaque etape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contact@cbd3.fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Telephone</p>
                    <p className="text-sm text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Adresse</p>
                    <p className="text-sm text-muted-foreground">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 border">
              <h3 className="text-lg font-semibold mb-6">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Nom</label>
                    <input id="name" type="text" className="w-full rounded-lg border bg-white px-3 py-2 text-sm" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
                    <input id="email" type="email" className="w-full rounded-lg border bg-white px-3 py-2 text-sm" placeholder="votre@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-1.5 block">Sujet</label>
                  <input id="subject" type="text" className="w-full rounded-lg border bg-white px-3 py-2 text-sm" placeholder="Votre projet CBD" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Message</label>
                  <textarea id="message" rows={4} className="w-full rounded-lg border bg-white px-3 py-2 text-sm resize-none" placeholder="Decrivez votre projet..." />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Envoyer
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
