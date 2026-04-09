import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  ShoppingCart,
  Package,
  Truck,
  Globe,
  Clock,
  ShieldCheck,
  Palette,
  Zap,
  MapPin,
  Box,
} from "lucide-react";

const fulfillmentSteps = [
  {
    icon: ShoppingCart,
    title: "Vous passez commande",
    description: "Choisissez vos produits et ajoutez-les facilement a votre boutique ou panier.",
  },
  {
    icon: Package,
    title: "Nous preparons",
    description: "Une fois la commande passee, nous nous occupons de l'impression et de l'emballage rapidement.",
  },
  {
    icon: Truck,
    title: "Nous expedions",
    description: "Les commandes sont expediees depuis la France, avec un lien de suivi fourni.",
  },
];

const shippingTimes = [
  { destination: "France metropolitaine", delay: "2-3 jours", icon: "🇫🇷" },
  { destination: "Belgique & Luxembourg", delay: "3-4 jours", icon: "🇧🇪" },
  { destination: "Allemagne & Pays-Bas", delay: "3-5 jours", icon: "🇩🇪" },
  { destination: "Reste de l'UE", delay: "4-7 jours", icon: "🇪🇺" },
];

const trustFeatures = [
  {
    icon: Clock,
    title: "Fulfillment de qualite",
    description: "Une fois votre commande recue, le fulfillment prend 2+ jours ouvres selon la taille. Chaque produit est controle avant expedition.",
  },
  {
    icon: Globe,
    title: "Expedition depuis la France",
    description: "Avec notre entrepot en France, vous beneficiez de livraisons en 2-5 jours dans toute l'UE, sans frais de douane supplementaires.",
  },
  {
    icon: Palette,
    title: "Packaging personnalise",
    description: "Personnalisez vos etiquettes, coffrets et emballages avec votre marque. Creez une experience client unique a chaque livraison.",
  },
  {
    icon: Box,
    title: "Pas de minimum de commande",
    description: "Commandez a l'unite ou en gros. Pas de MOQ, pas de contrainte de volume. Ideal pour tester avant de scaler.",
  },
];

const faqs = [
  {
    q: "Quels types de produits puis-je commander via le service de fulfillment ?",
    a: "Tous les produits CBD de notre catalogue : huiles, fleurs, cosmetiques, infusions, resines et coffrets. Chaque produit peut etre personnalise avec votre marque.",
  },
  {
    q: "Combien de temps prend le fulfillment d'une commande ?",
    a: "Le fulfillment prend generalement 2 jours ouvres apres reception de la commande. L'expedition est ensuite effectuee sous 48h.",
  },
  {
    q: "Ou sont situes vos entrepots ?",
    a: "Notre entrepot principal est situe en France, ce qui permet des livraisons rapides dans toute l'Union Europeenne sans frais de douane.",
  },
  {
    q: "Comment puis-je suivre ma commande ?",
    a: "Un lien de suivi est automatiquement envoye par email des que votre commande est expediee. Vous pouvez aussi suivre toutes vos commandes depuis votre dashboard.",
  },
  {
    q: "Proposez-vous des reexpeditions ou retours ?",
    a: "Oui. En cas de produit endommage, nous organisons une reexpedition gratuite. Les retours sont possibles sous 14 jours pour les produits non ouverts.",
  },
];

export default function FulfillmentShippingPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-[520px]">
              <h1 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
                Fulfillment &amp; expedition de qualite pour votre marque CBD
              </h1>
              <p className="mt-6 text-[16px] font-medium text-[#4d4f56] leading-[1.6]">
                Votre partenaire de confiance pour donner vie a votre marque CBD, du design a la production et au-dela.
              </p>
              <div className="mt-8">
                <Link href="/profile">
                  <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                    Commencer
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual — products with location badges */}
            <div className="hidden lg:block">
              <div className="bg-[#f2f2f3] rounded-2xl aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                {/* Product bottles */}
                <div className="flex items-end gap-3">
                  <div className="w-10 h-28 bg-white rounded-lg shadow" />
                  <div className="w-12 h-36 bg-white rounded-lg shadow" />
                  <div className="w-10 h-32 bg-white rounded-lg shadow" />
                  <div className="w-14 h-24 bg-white rounded-lg shadow" />
                  <div className="w-10 h-30 bg-white rounded-lg shadow" />
                </div>
                {/* Location badges */}
                <div className="absolute top-6 right-6 bg-foreground text-white rounded-full px-4 py-2 flex items-center gap-2 text-[13px] font-semibold">
                  <span>🇫🇷</span> FRANCE, EU
                </div>
                <div className="absolute bottom-8 left-8 bg-foreground text-white rounded-full px-4 py-2 flex items-center gap-2 text-[13px] font-semibold">
                  <span>🇪🇺</span> EUROPE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Comment fonctionne le fulfillment
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {fulfillmentSteps.map((step) => (
              <div key={step.title} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-[#f2f2f3] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-[16px] font-semibold mb-2">{step.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Shipping times */}
          <h3 className="text-[24px] font-medium tracking-[-0.03em] text-center mb-8">
            Delais de livraison
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {shippingTimes.map((st) => (
              <div key={st.destination} className="bg-white rounded-xl p-5 text-center">
                <span className="text-2xl mb-2 block">{st.icon}</span>
                <p className="text-[14px] font-semibold mb-1">{st.destination}</p>
                <p className="text-[24px] font-semibold text-green-600">{st.delay}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRUST ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Faites-nous confiance
            </h2>
            <p className="mt-4 text-[16px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
              Le meilleur partenaire de fulfillment CBD pour votre marque
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="bg-[#f7f7f8] rounded-2xl p-7">
                <feature.icon className="h-8 w-8 text-foreground mb-4" />
                <h3 className="text-[20px] font-semibold mb-3">{feature.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] mb-6">
                Pourquoi choisir CBD3 pour votre fulfillment ?
              </h2>
              <p className="text-[16px] font-medium text-[#4d4f56] leading-[1.6] mb-6">
                Decouvrez un service de fulfillment et d&apos;expedition fiable et fluide avec CBD3. Que vous souhaitiez expedier des huiles CBD, des cosmetiques ou des fleurs, nous assurons une livraison rapide, efficace et economique directement a vos clients.
              </p>
              <p className="text-[16px] font-medium text-[#4d4f56] leading-[1.6] mb-8">
                Chez CBD3, nous sommes fiers de fournir le plus haut niveau de service de fulfillment. Notre equipe veille a ce que chaque commande soit traitee avec soin, de l&apos;emballage a l&apos;expedition, en garantissant la conformite EU/FR a chaque etape.
              </p>
              <div className="space-y-3">
                {[
                  "Fulfillment en 2 jours ouvres",
                  "Expedition depuis la France vers toute l'UE",
                  "Packaging a votre marque inclus",
                  "Suivi de livraison en temps reel",
                  "COA et conformite garantis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-green-600 shrink-0" />
                    <span className="text-[14px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map visual */}
            <div className="bg-[#eef0f8] rounded-2xl aspect-square relative overflow-hidden hidden lg:block">
              <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 500 400" fill="none">
                <path d="M120 80 L160 60 L200 70 L240 50 L280 60 L320 40 L360 55 L380 80 L400 70 L420 90 L400 120 L410 150 L390 180 L370 160 L350 190 L380 220 L370 250 L340 240 L320 270 L290 250 L270 280 L240 260 L220 290 L200 270 L180 300 L160 280 L140 260 L120 270 L110 240 L90 220 L100 190 L80 170 L90 140 L70 120 L90 100 Z" fill="#d4d8f0" stroke="#c0c4e0" strokeWidth="1"/>
                <path d="M150 180 L170 170 L190 175 L200 190 L210 210 L200 230 L180 240 L160 235 L145 220 L140 200 Z" fill="#b8bde8" stroke="#a0a6d8" strokeWidth="1"/>
                <circle cx="175" cy="200" r="5" fill="#0c0d12"/>
                <rect x="135" y="165" width="80" height="24" rx="4" fill="#0c0d12"/>
                <text x="175" y="181" textAnchor="middle" fill="white" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600 }}>Paris, FR</text>
                <line x1="175" y1="200" x2="280" y2="120" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="200" y2="140" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="250" y2="250" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="140" y2="130" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <line x1="175" y1="200" x2="320" y2="180" stroke="#8b90b8" strokeWidth="1" strokeDasharray="4 3"/>
                <circle cx="280" cy="120" r="3" fill="#6b70a0"/>
                <circle cx="200" cy="140" r="3" fill="#6b70a0"/>
                <circle cx="250" cy="250" r="3" fill="#6b70a0"/>
                <circle cx="140" cy="130" r="3" fill="#6b70a0"/>
                <circle cx="320" cy="180" r="3" fill="#6b70a0"/>
              </svg>
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
      <section className="px-6 lg:px-8 py-6 mb-12">
        <div className="max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] py-16 px-10 lg:px-16">
          <div className="max-w-[520px]">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Pret a expedier vos produits CBD ?
            </h2>
            <p className="mt-6 text-[16px] font-medium text-[#4d4f56] leading-[1.6]">
              Creez votre compte et commencez a vendre. Nous gerons tout le fulfillment pour vous.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/profile">
                <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                  Commencer
                </Button>
              </Link>
              <Link href="/how-it-works" className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline">
                Comment ca marche
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
