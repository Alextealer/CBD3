import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  ArrowRight,
  Truck,
  ShoppingBag,
  Globe,
  Zap,
  ShieldCheck,
  BarChart3,
  Package,
  Store,
  CreditCard,
} from "lucide-react";

const howSteps = [
  {
    number: "01",
    title: "Choisissez vos produits CBD",
    description: "Parcourez notre catalogue de 50+ produits CBD. Selectionnez ceux que vous souhaitez vendre sous votre marque.",
    icon: Package,
  },
  {
    number: "02",
    title: "Personnalisez votre marque",
    description: "Utilisez notre Design Studio pour creer vos etiquettes et packaging. Votre marque, vos couleurs, votre identite.",
    icon: Store,
  },
  {
    number: "03",
    title: "Connectez votre boutique",
    description: "Integrez Shopify, WooCommerce ou notre API. Les commandes se synchronisent automatiquement.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Nous expedions pour vous",
    description: "A chaque commande client, nous produisons, emballons avec votre marque et expedions directement. Vous ne gerez rien.",
    icon: Truck,
  },
];

const advantages = [
  { icon: CreditCard, title: "Zero investissement", desc: "Pas de stock a acheter, pas de capital immobilise. Vous ne payez que ce que vous vendez." },
  { icon: Package, title: "Pas de minimum", desc: "Commandez 1 ou 1000 produits. Pas de MOQ, pas de contrainte de volume." },
  { icon: Truck, title: "Expedition 48h", desc: "Nous expedions sous 48h depuis la France. Suivi de livraison inclus." },
  { icon: ShieldCheck, title: "100% conforme", desc: "THC < 0.3%, COA par lot, mentions legales incluses. Zero stress reglementaire." },
  { icon: BarChart3, title: "Marges de 60%+", desc: "Prix grossiste competitifs pour des marges elevees sur chaque vente." },
  { icon: Globe, title: "Livraison EU", desc: "Expeditions dans toute l'Union Europeenne en 2-5 jours ouvres." },
];

const dropPros = [
  "Zero investissement initial",
  "Pas de gestion de stock",
  "Pas de minimum de commande",
  "Facile de tester de nouveaux produits",
  "Pas d'expedition a gerer",
  "Independance geographique totale",
  "Scalable sans limites",
];

const dropCons = [
  "Cout unitaire plus eleve qu'en gros",
  "Delai de fulfillment legerement plus long",
  "Moins de controle sur le packaging de livraison",
];

const faqs = [
  {
    q: "Comment fonctionne le dropshipping CBD ?",
    a: "Vous vendez des produits CBD sous votre marque sur votre boutique en ligne. Quand un client commande, la commande est automatiquement transmise a CBD3 qui produit, emballe et expedie directement au client final.",
  },
  {
    q: "Faut-il un stock initial ?",
    a: "Non. C'est le principe du dropshipping : vous ne payez que les produits que vos clients commandent. Zero stock, zero risque financier.",
  },
  {
    q: "Les produits sont-ils conformes pour la vente ?",
    a: "Oui. Tous nos produits CBD respectent la reglementation EU/FR avec un THC < 0.3%. Chaque lot est accompagne d'un COA (Certificat d'Analyse) et les etiquettes incluent toutes les mentions legales obligatoires.",
  },
  {
    q: "Quelles integrations sont disponibles ?",
    a: "Shopify (natif), WooCommerce (via API) et une API REST pour toute autre plateforme. Les commandes sont synchronisees automatiquement.",
  },
  {
    q: "Quel est le delai d'expedition ?",
    a: "Les commandes sont expediees sous 48h ouvrees depuis notre entrepot en France. Livraison en 2-5 jours dans toute l'UE.",
  },
];

export default function DropshippingPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-[520px]">
              <span className="inline-flex items-center bg-[#e8f5e9] text-green-800 text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-5">
                Dropshipping CBD
              </span>
              <h1 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
                Vendez du CBD sans stock, sans risque
              </h1>
              <p className="mt-6 text-[16px] font-medium text-[#4d4f56] leading-[1.6]">
                Lancez votre marque CBD en dropshipping. Nous gerons la production,
                le packaging et l&apos;expedition. Vous vous concentrez sur vos ventes.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link href="/profile">
                  <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                    Commencer gratuitement
                  </Button>
                </Link>
                <Link href="/how-it-works" className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline">
                  Comment ca marche
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="hidden lg:block">
              <div className="bg-[#f7f7f8] rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                {/* Flow illustration */}
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-white rounded-xl shadow flex items-center justify-center">
                      <ShoppingBag className="h-7 w-7 text-foreground" />
                    </div>
                    <span className="text-[11px] font-medium">Client</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-foreground rounded-xl shadow flex items-center justify-center">
                      <Store className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-[11px] font-medium">Votre boutique</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-green-600 rounded-xl shadow flex items-center justify-center">
                      <Truck className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-[11px] font-medium">CBD3 expedie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS — 4 STEPS ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Comment ca fonctionne ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howSteps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[32px] font-semibold text-muted-foreground/30">{step.number}</span>
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-[16px] font-semibold mb-2">{step.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ADVANTAGES ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Pourquoi le dropshipping CBD avec CBD3 ?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-[#f7f7f8] rounded-2xl p-6">
                <adv.icon className="h-7 w-7 text-green-600 mb-4" />
                <h3 className="text-[16px] font-semibold mb-1">{adv.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROS / CONS — DOUBLE TABLEAU ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Comparez les modeles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Grossiste */}
            <div className="bg-white rounded-2xl p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                  <Package className="h-5 w-5" />
                </div>
                <h3 className="text-[20px] font-semibold">Grossiste</h3>
              </div>

              <div className="mb-6">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-green-700 mb-3">Avantages</p>
                <ul className="space-y-2.5">
                  {[
                    "Large gamme de produits accessible",
                    "Remises volume & cout unitaire reduit",
                    "Produits disponibles immediatement",
                    "Packaging personnalisable pour gros volumes",
                    "Controle total sur l'emballage & la livraison",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-red-600 mb-3">Inconvenients</p>
                <ul className="space-y-2.5">
                  {[
                    "Investissement initial plus eleve",
                    "Gestion de stock necessaire",
                    "Reapprovisionnement a gerer",
                    "Risque de stock invendu",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium text-[#4d4f56]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
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
                <ul className="space-y-2.5">
                  {dropPros.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-red-600 mb-3">Inconvenients</p>
                <ul className="space-y-2.5">
                  {dropCons.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-[14px] font-medium text-[#4d4f56]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/profile">
                  <Button className="w-full rounded-full text-[12px] font-bold uppercase tracking-[0.02em] h-[48px]">
                    Commencer le dropshipping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Questions frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-[#f7f7f8] rounded-xl px-6 py-5 group">
                <summary className="text-[16px] font-medium cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <Zap className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6] mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="px-6 lg:px-8 py-6">
        <div className="max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] py-16 px-10 lg:px-16">
          <div className="max-w-[520px]">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Pret a vendre du CBD en dropshipping ?
            </h2>
            <p className="mt-6 text-[16px] font-medium text-[#4d4f56] leading-[1.6]">
              Creez votre compte gratuitement et commencez a vendre des produits CBD sous votre marque des aujourd&apos;hui.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/profile">
                <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                  Commencer gratuitement
                </Button>
              </Link>
              <Link href="/catalog" className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline">
                Voir le catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
