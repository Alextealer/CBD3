import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  ArrowRight,
  Play,
  ShieldCheck,
  FileCheck,
  Leaf,
  BadgeCheck,
  Palette,
  Truck,
  Package,
  Globe,
  Zap,
  Store,
} from "lucide-react";
import { ProfitCalculator } from "@/components/marketing/profit-calculator";

/* ============================================================
   DATA
   ============================================================ */

interface PlanFeature {
  text: string;
  included: boolean;
}

const plans = [
  {
    name: "Standard",
    subtitle: "Commencez sans risque !",
    price: "Gratuit",
    priceNote: "Payez uniquement les produits et l'expedition",
    cta: "Commencer",
    features: [
      { text: "50+ produits CBD", included: true },
      { text: "Design etiquettes personnalise", included: true },
      { text: "Livraison directe (dropshipping)", included: true },
      { text: "Coffrets echantillons", included: true },
      { text: "Generateur de mockups", included: true },
      { text: "Remises volume", included: true },
      { text: "COA par lot inclus", included: true },
      { text: "Chanvre certifie EU", included: true },
    ] as PlanFeature[],
  },
  {
    name: "Pro",
    subtitle: "Personnalisez & scalez",
    price: "49EUR/mois",
    priceNote: "",
    cta: "Essai gratuit",
    highlighted: true,
    features: [
      { text: "50+ produits CBD", included: true },
      { text: "Packaging premium", included: true },
      { text: "Options d'impression avancees", included: true },
      { text: "Mockups professionnels", included: true },
      { text: "Outils & fonctionnalites Pro", included: true },
      { text: "Inserts marketing", included: true },
      { text: "Bundles produits", included: true },
      { text: "Formules exclusives", included: true },
    ] as PlanFeature[],
  },
  {
    name: "Extras",
    subtitle: "Demarquez-vous",
    price: "39EUR - 990EUR",
    priceNote: "Par service",
    cta: "Commencer",
    features: [
      { text: "Design etiquette & coffret exclusif", included: true },
      { text: "Creation boutique Shopify", included: true },
      { text: "Support technique dedie", included: true },
    ] as PlanFeature[],
  },
];

const steps = [
  {
    number: "01",
    title: "Testez les produits",
    description:
      "Decouvrez des produits CBD certifies et durables dans notre selection. Commencez par commander des coffrets echantillons pour tester. Recevez vos produits sous 7 jours ouvres.",
    links: [
      { label: "Coffrets echantillons", href: "/catalog/coffrets" },
    ],
  },
  {
    number: "02",
    title: "Choisissez vos produits",
    description:
      "Designez votre propre packaging pour les produits CBD que vous souhaitez vendre depuis notre catalogue. Ou utilisez notre service design pour obtenir des creations personnalisees.",
    links: [
      { label: "Huiles CBD", href: "/catalog/huiles-cbd" },
      { label: "Fleurs CBD", href: "/catalog/fleurs-cbd" },
      { label: "Cosmetiques CBD", href: "/catalog/cosmetiques-cbd" },
      { label: "Catalogue complet", href: "/catalog" },
    ],
  },
  {
    number: "03",
    title: "Commencez a vendre",
    description:
      "Connectez votre boutique en dropshipping et laissez-nous gerer le reste. Ou commandez en gros et vendez directement a vos clients.",
    links: [
      { label: "Dropshipping", href: "#dropshipping" },
    ],
  },
];

const wholesalePros = [
  "Large gamme de produits accessible",
  "Remises volume & cout unitaire reduit",
  "Produits disponibles immediatement",
  "Packaging personnalisable pour gros volumes",
  "Controle total sur l'emballage & la livraison",
];
const wholesaleCons = [
  "Investissement initial plus eleve",
  "Gestion de stock necessaire",
  "Reapprovisionnement a gerer",
  "Risque de stock invendu",
];

const dropshippingPros = [
  "Investissement minimal",
  "Pas de minimum de commande",
  "Pas de gestion de stock",
  "Facile de changer & diversifier les produits",
  "Pas d'expedition a gerer",
  "Independance geographique",
];
const dropshippingCons = [
  "Cout unitaire plus eleve",
  "Processus de fulfillment plus long",
  "Pas de controle sur les delais de livraison",
];

const complianceCards = [
  {
    icon: FileCheck,
    title: "Tous les produits avec COA",
    description: "CBD3 fournit un Certificat d'Analyse (COA) par lot, delivre par un laboratoire accredite ISO 17025.",
  },
  {
    icon: ShieldCheck,
    title: "Conforme EU/FR",
    description: "Tous nos produits respectent la reglementation europeenne et francaise. THC < 0.3% garanti.",
  },
  {
    icon: BadgeCheck,
    title: "Chanvre certifie",
    description: "Notre chanvre provient de cultures certifiees europeennes, tracables de la graine au produit fini.",
  },
  {
    icon: Leaf,
    title: "Sans pesticides",
    description: "Analyses de metaux lourds, pesticides et solvants realisees sur chaque lot de production.",
  },
];

/* ============================================================
   PAGE
   ============================================================ */

export default function HowItWorksPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="max-w-[620px]">
            <h1 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Comment lancer votre marque CBD avec CBD3 ?
            </h1>
            <p className="mt-6 text-[16px] font-medium text-[#4d4f56] leading-[1.6] max-w-[540px]">
              Concentrez-vous sur votre marque et votre marketing. Nous gerons
              la production, le packaging et l&apos;expedition, pour vous permettre de
              developper votre activite avec des produits CBD certifies.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link href="/profile">
                <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                  Commencer
                </Button>
              </Link>
              <button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] border-2 border-foreground flex items-center gap-2 hover:bg-muted transition-colors">
                <Play className="h-4 w-4 fill-current" />
                Comment ca marche
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT IS INCLUDED ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Qu&apos;est-ce qui est inclus ?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-7 flex flex-col ${plan.highlighted ? "ring-2 ring-foreground" : ""}`}
              >
                <div className="mb-5">
                  <h3 className="text-[20px] font-semibold">{plan.name}</h3>
                  <p className="text-[13px] text-[#4d4f56] mt-1">{plan.subtitle}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium">{f.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-5">
                  <p className="text-[24px] font-semibold">{plan.price}</p>
                  {plan.priceNote && (
                    <p className="text-[12px] text-[#4d4f56] mt-0.5">{plan.priceNote}</p>
                  )}
                  <Link href="/profile" className="mt-4 block">
                    <Button
                      className={`w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px] ${plan.highlighted ? "" : "bg-white text-foreground border-2 border-foreground hover:bg-muted"}`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BUILD YOUR BRAND — 3 STEPS ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-4">
            Construisez votre propre marque CBD
          </h2>
          <p className="text-[16px] font-medium text-[#4d4f56] text-center max-w-xl mx-auto mb-16 leading-[1.6]">
            CBD en marque blanche avec votre marque, sans minimum de commande.
          </p>

          <div className="space-y-20">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}
              >
                {/* Image block */}
                <div className={`relative bg-[#e8e8ea] rounded-2xl aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute top-5 left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[14px] font-semibold">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {i === 0 && (
                      <div className="flex items-end gap-3">
                        <div className="w-8 h-24 bg-white rounded-t-full" />
                        <div className="w-10 h-32 bg-white rounded-t-lg" />
                        <div className="w-9 h-28 bg-white rounded-t-full" />
                        <div className="w-11 h-36 bg-white rounded-t-lg" />
                        <div className="w-8 h-20 bg-white rounded-t-full" />
                      </div>
                    )}
                    {i === 1 && (
                      <div className="relative">
                        <div className="w-10 h-5 bg-[#2a2a2a] rounded-t-md mx-auto" />
                        <div className="w-24 h-40 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-lg mx-auto">
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-18 h-22 bg-white/90 rounded-sm flex flex-col items-center justify-center p-2">
                            <span className="text-[10px] font-bold text-center leading-tight">Votre<br />Marque</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="flex items-center gap-4">
                        <div className="bg-[#95bf47] rounded-xl px-4 py-3">
                          <span className="text-white text-[12px] font-bold">Shopify</span>
                        </div>
                        <div className="bg-purple-200 rounded-xl px-4 py-3">
                          <span className="text-purple-800 text-[12px] font-bold">WOO</span>
                        </div>
                        <div className="bg-white rounded-xl px-4 py-3 shadow">
                          <span className="text-[12px] font-bold">API</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-[28px] font-medium tracking-[-0.03em] leading-[1.2] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[16px] font-medium text-[#4d4f56] leading-[1.6] mb-6">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-[13px] font-medium text-foreground underline underline-offset-4 hover:text-foreground/70"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ORDER MODELS ==================== */}
      <section id="dropshipping" className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Modeles de commande
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Wholesale */}
            <div className="bg-white rounded-2xl p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                  <Package className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-semibold">Grossiste</h3>
              </div>

              <div className="mb-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-green-700 mb-3">Avantages</p>
                <ul className="space-y-2">
                  {wholesalePros.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-red-600 mb-3">Inconvenients</p>
                <ul className="space-y-2">
                  {wholesaleCons.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium text-[#4d4f56]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/pricing">
                  <Button variant="outline" className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]">
                    Acheter en gros
                  </Button>
                </Link>
              </div>
            </div>

            {/* Dropshipping */}
            <div className="bg-white rounded-2xl p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-semibold">Dropshipping</h3>
              </div>

              <div className="mb-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-green-700 mb-3">Avantages</p>
                <ul className="space-y-2">
                  {dropshippingPros.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-wider text-red-600 mb-3">Inconvenients</p>
                <ul className="space-y-2">
                  {dropshippingCons.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium text-[#4d4f56]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/dropshipping">
                  <Button className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]">
                    Commencer le dropshipping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMPLIANCE ==================== */}
      <section id="compliance" className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Conformite
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceCards.map((card) => (
              <div key={card.title} className="bg-[#f7f7f8] rounded-2xl p-6">
                <card.icon className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-[16px] font-semibold mb-2">{card.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">
                  {card.description}
                </p>
                <button className="text-[13px] font-medium mt-4 hover:underline inline-flex items-center gap-1">
                  En savoir plus <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DESIGN ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Prenez le controle total de votre design
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Design Studio */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[16/9] bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <p className="text-[14px] font-semibold">Design Studio</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-semibold mb-2">Designez avec notre studio</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] mb-4">
                  Utilisez nos templates et ajustez-les a votre guise. Uploadez vos images et deplacez les elements pour obtenir le resultat souhaite.
                </p>
                <Link href="/studio" className="text-[13px] font-medium hover:underline inline-flex items-center gap-1">
                  Design Studio <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Design Service */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[16/9] bg-gradient-to-br from-purple-50 to-violet-100 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <p className="text-[14px] font-semibold">Service Design</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-semibold mb-2">Utilisez notre service design</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] mb-4">
                  Choisissez un pack starter et travaillez avec notre equipe design pour creer le packaging de vos produits. Iterez jusqu&apos;a satisfaction.
                </p>
                <Link href="/studio" className="text-[13px] font-medium hover:underline inline-flex items-center gap-1">
                  Service Design <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* What we take care of */}
          <div className="mt-12 bg-white rounded-2xl p-7">
            <h3 className="text-[20px] font-semibold mb-5">Ce dont nous nous occupons :</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-[14px] font-medium">Conformite et controle qualite sur les designs envoyes en production</p>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-[14px] font-medium">Qualite produit conforme a toutes les reglementations</p>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-[14px] font-medium">Fulfillment et expedition vers les destinations de votre choix</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROFIT CALCULATOR ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Comment gagner de l&apos;argent avec CBD3 ?
          </h2>
        </div>
        <ProfitCalculator />
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
            Pret a lancer votre marque CBD ?
          </h2>
          <p className="mt-4 text-[16px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
            Rejoignez 200+ entrepreneurs qui ont lance leur marque CBD avec CBD3.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/profile">
              <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Commencer maintenant
              </Button>
            </Link>
            <Link href="/catalog">
              <Button variant="outline" className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Explorer le catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
