import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, Crown, Building2 } from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  icon: React.ElementType;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    icon: Zap,
    price: "0EUR",
    period: "/mois",
    description: "Ideal pour tester le concept et lancer vos premiers produits CBD.",
    features: [
      { text: "Acces au catalogue complet", included: true },
      { text: "Design Studio (templates de base)", included: true },
      { text: "Commande a l'unite", included: true },
      { text: "COA par lot inclus", included: true },
      { text: "Support par email", included: true },
      { text: "Templates premium", included: false },
      { text: "Integration Shopify", included: false },
      { text: "API personnalisee", included: false },
      { text: "Manager dedie", included: false },
    ],
    cta: "Commencer gratuitement",
  },
  {
    name: "Pro",
    icon: Crown,
    price: "49EUR",
    period: "/mois",
    description: "Pour les marques qui veulent scaler avec des outils professionnels.",
    highlighted: true,
    features: [
      { text: "Acces au catalogue complet", included: true },
      { text: "Design Studio (tous les templates)", included: true },
      { text: "Commande a l'unite", included: true },
      { text: "COA par lot inclus", included: true },
      { text: "Support prioritaire", included: true },
      { text: "Templates premium", included: true },
      { text: "Integration Shopify", included: true },
      { text: "API personnalisee", included: true },
      { text: "Manager dedie", included: false },
    ],
    cta: "Essai gratuit 14 jours",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Sur devis",
    period: "",
    description: "Solutions sur mesure pour les grandes marques et distributeurs.",
    features: [
      { text: "Acces au catalogue complet", included: true },
      { text: "Design Studio (tous les templates)", included: true },
      { text: "Volumes negocies", included: true },
      { text: "COA par lot inclus", included: true },
      { text: "Support dedie 24/7", included: true },
      { text: "Templates premium", included: true },
      { text: "Integration Shopify", included: true },
      { text: "API personnalisee", included: true },
      { text: "Manager dedie", included: true },
    ],
    cta: "Nous contacter",
  },
];

const included = [
  "Taux THC < 0.3% garanti",
  "Certificat d'Analyse (COA) par lot",
  "Mentions legales conformes EU/FR",
  "Expedition sous 48h en France",
  "Emballage neutre ou a votre marque",
  "Aucun minimum de commande",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
            Tarifs
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Des tarifs simples et transparents
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Commencez gratuitement, evoluez a votre rythme. Pas de frais caches,
            pas de minimum de commande.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-primary shadow-xl ring-1 ring-primary"
                    : "bg-white shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4">
                    Le plus populaire
                  </Badge>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.highlighted ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    <plan.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2">
                      {f.included ? (
                        <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                      )}
                      <span className={`text-sm ${f.included ? "" : "text-muted-foreground/60"}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/profile">
                  <Button
                    className="w-full rounded-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Inclus dans tous les plans</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-2 text-left">
                <Check className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Des questions sur nos tarifs ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Notre equipe est disponible pour vous aider a choisir le plan adapte a vos besoins.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/about#contact">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Nous contacter
              </Button>
            </Link>
            <Link href="/profile">
              <Button size="lg" className="rounded-full px-8">
                Commencer gratuitement
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
