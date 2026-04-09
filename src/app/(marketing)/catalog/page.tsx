import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Flower2, Coffee, Gift, CircleDot } from "lucide-react";

const categories = [
  {
    slug: "huiles-cbd",
    name: "Huiles CBD",
    description: "Huiles sublinguales, huiles MCT, huiles broad & full spectrum. Concentrations de 5% a 30% CBD.",
    productCount: 12,
    icon: Droplets,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    slug: "fleurs-cbd",
    name: "Fleurs CBD",
    description: "Fleurs indoor, outdoor et greenhouse. Varietes premium avec profils terpeniques uniques.",
    productCount: 15,
    icon: Flower2,
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    slug: "cosmetiques-cbd",
    name: "Cosmetiques CBD",
    description: "Cremes, baumes, serums et huiles de massage. Formulations clean beauty infusees au CBD.",
    productCount: 10,
    icon: Leaf,
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    slug: "infusions-cbd",
    name: "Infusions CBD",
    description: "Tisanes et infusions au chanvre. Melanges bien-etre avec plantes complementaires.",
    productCount: 6,
    icon: Coffee,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    slug: "coffrets",
    name: "Coffrets Decouverte",
    description: "Coffrets cadeaux et decouverte. Ideaux pour l'echantillonnage et les offres speciales.",
    productCount: 4,
    icon: Gift,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    slug: "resines-cbd",
    name: "Resines CBD",
    description: "Hash et resines CBD artisanales. Extractions premium avec des taux de CBD eleves.",
    productCount: 8,
    icon: CircleDot,
    color: "bg-yellow-50",
    iconColor: "text-yellow-700",
  },
];

export default function CatalogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
            Catalogue
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Nos produits CBD
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            50+ produits CBD premium prets a personnaliser avec votre marque.
            Tous conformes EU/FR, THC &lt; 0.3%, avec COA par lot.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalog/${cat.slug}`}
                className="group bg-white border rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center mb-6`}>
                  <cat.icon className={`h-7 w-7 ${cat.iconColor}`} />
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {cat.productCount} produits
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorer <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Tous nos produits sont conformes EU/FR
          </h2>
          <p className="text-primary-foreground/70 mb-6">
            THC &lt; 0.3% &middot; COA par lot &middot; Laboratoire ISO 17025 &middot; Mentions legales incluses
          </p>
          <Link href="/how-it-works#compliance">
            <Button variant="secondary" className="rounded-full px-6">
              En savoir plus sur la conformite
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
