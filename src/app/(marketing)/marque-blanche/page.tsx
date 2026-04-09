import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Star,
  ShoppingCart,
  Leaf,
  Palette,
  Truck,
  Globe,
  ShieldCheck,
  Store,
  Users,
  Sparkles,
  Heart,
  Building2,
  Play,
  Droplets,
  Flower2,
  Coffee,
  Gift,
  CircleDot,
} from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */

const features = [
  {
    icon: ShoppingCart,
    title: "Commandez comme vous voulez",
    description:
      "Lancez-vous sans minimum de commande. Testez vos idees avec de petites quantites, utilisez le dropshipping pour vendre sans stock, et passez en gros quand vous etes pret.",
  },
  {
    icon: Leaf,
    title: "Formules certifiees",
    description:
      "Tous nos produits CBD sont formules avec des ingredients de qualite conformes a la reglementation EU/FR. Chanvre certifie, THC < 0.3%, COA par lot.",
  },
  {
    icon: ShieldCheck,
    title: "Produits prets a vendre",
    description:
      "Choisissez parmi 50+ produits CBD deja testes pour leur qualite et leur conformite. Lancez-vous sans delai de developpement.",
  },
  {
    icon: Palette,
    title: "Votre marque, votre identite",
    description:
      "Creez une ligne de produits coherente avec votre marque. Personnalisez chaque etiquette, coffret et emballage avec notre Design Studio.",
  },
  {
    icon: Globe,
    title: "Fulfillment europeen",
    description:
      "Expedition depuis la France vers toute l'UE en 2-5 jours. Dropshipping ou gros, nous gerons la logistique pour vous.",
  },
];

const howSteps = [
  {
    number: "01",
    title: "Explorez et testez",
    description: "Parcourez notre catalogue de produits CBD. Commandez des echantillons pour tester la qualite avant de vous lancer.",
  },
  {
    number: "02",
    title: "Designez votre marque",
    description: "Utilisez notre Design Studio pour creer vos etiquettes et packaging. Ou confiez le design a notre equipe professionnelle.",
  },
  {
    number: "03",
    title: "Vendez sous votre marque",
    description: "Integrez votre boutique, vendez en dropshipping ou en gros. Nous produisons et expedions a chaque commande.",
  },
];

const personas = [
  {
    icon: Store,
    title: "Pour les e-commercants",
    description: "Lancez une boutique CBD en ligne sans stock ni investissement initial. Integration Shopify et WooCommerce native.",
  },
  {
    icon: Heart,
    title: "Pour les professionnels du bien-etre",
    description: "Proposez des produits CBD premium a vos clients sous votre propre marque. Naturopathes, spas, salons.",
  },
  {
    icon: Sparkles,
    title: "Pour les createurs de contenu",
    description: "Monetisez votre audience avec votre propre gamme CBD. Design exclusif, produits premium, zero logistique.",
  },
  {
    icon: Leaf,
    title: "Pour les marques bien-etre",
    description: "Completez votre gamme existante avec des produits CBD de qualite. Integration fluide a votre catalogue actuel.",
  },
  {
    icon: Building2,
    title: "Pour les boutiques physiques",
    description: "Approvisionnez votre magasin avec des produits CBD en marque blanche. Commandes en gros avec remises volume.",
  },
  {
    icon: Sparkles,
    title: "Pour les artistes & createurs",
    description: "Lancez votre propre merchandising CBD a votre image. Packaging unique, edition limitee, collaborations exclusives avec votre communaute.",
  },
];

const categories = [
  { name: "Huiles CBD", href: "/catalog/huiles-cbd", icon: Droplets, count: "12 produits", bg: "bg-amber-50", iconColor: "text-amber-600" },
  { name: "Fleurs CBD", href: "/catalog/fleurs-cbd", icon: Flower2, count: "15 produits", bg: "bg-green-50", iconColor: "text-green-600" },
  { name: "Cosmetiques CBD", href: "/catalog/cosmetiques-cbd", icon: Leaf, count: "10 produits", bg: "bg-pink-50", iconColor: "text-pink-600" },
  { name: "Infusions CBD", href: "/catalog/infusions-cbd", icon: Coffee, count: "6 produits", bg: "bg-orange-50", iconColor: "text-orange-600" },
  { name: "Coffrets", href: "/catalog/coffrets", icon: Gift, count: "4 produits", bg: "bg-purple-50", iconColor: "text-purple-600" },
  { name: "Resines CBD", href: "/catalog/resines-cbd", icon: CircleDot, count: "8 produits", bg: "bg-blue-50", iconColor: "text-blue-600" },
];

const reviews = [
  { quote: "J'ai lance ma marque CBD en 2 semaines. Le design studio est incroyable et la qualite des produits est irreprochable.", author: "Marie L.", role: "Fondatrice, Bloom CBD" },
  { quote: "Le concept de marque blanche CBD est revolutionnaire. Plus besoin de gerer le stock ou la conformite.", author: "Thomas R.", role: "E-commercant" },
  { quote: "Mes clients adorent les produits. La qualite est au rendez-vous et les COA rassurent sur la transparence.", author: "Sophie M.", role: "Naturopathe" },
  { quote: "Forte recommandation pour quiconque veut lancer une marque CBD avec des produits de qualite.", author: "Lucas D.", role: "Fondateur, Canna Green" },
  { quote: "La plateforme est super intuitive. J'ai personnalise mes etiquettes et commande mes premiers echantillons en une journee.", author: "Emma B.", role: "Creatrice, Pure Leaf" },
];

const whyPoints = [
  "50+ produits CBD prets a personnaliser",
  "Aucun minimum de commande",
  "Design Studio integre gratuit",
  "THC < 0.3% garanti, COA par lot",
  "Expedition sous 48h depuis la France",
  "Integrations Shopify, WooCommerce, API",
];

/* ============================================================
   PAGE
   ============================================================ */

export default function MarqueBlanchePage() {
  return (
    <>
      {/* ==================== HERO — DARK ==================== */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mt-6">
        <div className="bg-foreground text-white rounded-[2rem] overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-8 lg:px-16 py-20 lg:py-28">
            <div className="max-w-[560px]">
              <h1 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
                CBD en marque blanche pour votre marque
              </h1>
              <p className="mt-6 text-[16px] font-medium text-white/70 leading-[1.6] max-w-[480px]">
                Acces a des produits CBD prets a vendre, sans minimum de commande. Personnalisez-les a votre image et commencez a vendre rapidement.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Link href="/profile">
                  <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] bg-white text-foreground hover:bg-white/90">
                    Commencer a vendre
                  </Button>
                </Link>
                <Link href="/catalog">
                  <button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] border border-white/40 text-white hover:bg-white/10 transition-colors">
                    Voir les produits
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES — 5 CARDS ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Lancez votre gamme CBD en marque blanche
            </h2>
            <p className="mt-4 text-[16px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
              Des formules certifiees au fulfillment rapide, CBD3 rend le lancement de votre marque CBD simple et sans risque.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#f7f7f8] rounded-2xl p-7">
                <f.icon className="h-7 w-7 text-foreground mb-5" />
                <h3 className="text-[18px] font-semibold mb-2">{f.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS — 3 STEPS ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Comment fonctionne la marque blanche CBD
          </h2>

          <div className="space-y-16">
            {howSteps.map((step, i) => (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}
              >
                <div className={`relative bg-white rounded-2xl aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute top-5 left-5 w-10 h-10 bg-[#f2f2f3] rounded-full flex items-center justify-center text-[14px] font-semibold">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {i === 0 && (
                      <div className="flex items-end gap-3">
                        <div className="w-8 h-24 bg-[#e8e8ea] rounded-t-full" />
                        <div className="w-10 h-32 bg-[#e8e8ea] rounded-t-lg" />
                        <div className="w-9 h-28 bg-[#e8e8ea] rounded-t-full" />
                        <div className="w-11 h-36 bg-[#e8e8ea] rounded-t-lg" />
                        <div className="w-8 h-20 bg-[#e8e8ea] rounded-t-full" />
                      </div>
                    )}
                    {i === 1 && (
                      <div className="text-center">
                        <Palette className="h-16 w-16 text-[#d4d4d8] mx-auto mb-2" />
                        <p className="text-[13px] font-medium text-[#9ca3af]">Design Studio</p>
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
                        <div className="bg-[#e8e8ea] rounded-xl px-4 py-3">
                          <span className="text-[12px] font-bold">API</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-[48px] font-semibold text-[#e5e5e5] leading-none">{step.number}</span>
                  <h3 className="text-[28px] font-medium tracking-[-0.03em] leading-[1.2] mt-2 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[16px] font-medium text-[#4d4f56] leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHO IS IT FOR — PERSONAS ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-4">
            A qui s&apos;adresse la marque blanche CBD ?
          </h2>
          <p className="text-[16px] font-medium text-[#4d4f56] text-center max-w-xl mx-auto mb-16 leading-[1.6]">
            Que vous soyez e-commercant, professionnel du bien-etre ou createur de contenu, CBD3 s&apos;adapte a votre activite.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((p) => (
              <div key={p.title} className="border rounded-2xl p-7 hover:shadow-md transition-shadow">
                <p.icon className="h-7 w-7 text-green-600 mb-5" />
                <h3 className="text-[18px] font-semibold mb-2">{p.title}</h3>
                <p className="text-[14px] font-medium text-[#4d4f56] leading-[1.6]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CBD3 — PREMIUM BLOCK ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            {/* Left — text */}
            <div className="px-10 py-14 lg:px-14 lg:py-16 flex flex-col justify-center">
              <span className="inline-flex items-center bg-white/80 text-foreground text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-6 w-fit">
                Marque blanche CBD
              </span>
              <h2 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.15] mb-5">
                Votre marque.<br />Nos produits.<br />Zero contrainte.
              </h2>
              <p className="text-[15px] font-medium text-[#4d4f56] leading-[1.7] mb-8 max-w-[420px]">
                Vendez des produits CBD premium sous votre propre marque. Nous gerons la production, la conformite et la logistique.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {whyPoints.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link href="/profile">
                  <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[52px]">
                    Commencer
                  </Button>
                </Link>
                <Link href="/how-it-works" className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Right — visual composition */}
            <div className="relative hidden lg:block overflow-hidden">
              {/* Background gradient blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5edd8] to-[#ede4cc]" />

              {/* Main product — large bottle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-14 h-8 bg-[#2a2a2a] rounded-t-lg mx-auto shadow-md" />
                  <div className="w-36 h-56 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-400 rounded-b-2xl mx-auto shadow-2xl">
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-24 h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center p-3">
                      <span className="text-[8px] font-semibold text-[#9ca3af] tracking-wider uppercase">Votre Marque</span>
                      <div className="w-10 h-[1px] bg-[#d4d4d8] my-1.5" />
                      <span className="text-[16px] font-bold tracking-tight leading-none">CBD</span>
                      <span className="text-[16px] font-bold tracking-tight leading-none">OIL</span>
                      <div className="w-10 h-[1px] bg-[#d4d4d8] my-1.5" />
                      <span className="text-[7px] text-[#9ca3af] font-medium">10% &middot; 10ml</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller product — left */}
              <div className="absolute bottom-12 left-8">
                <div className="w-6 h-3 bg-white/80 rounded-t-sm mx-auto" />
                <div className="w-16 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <Leaf className="h-4 w-4 text-green-500 mx-auto mb-1" />
                    <span className="text-[6px] font-bold block">SERUM</span>
                    <span className="text-[6px] font-bold block">CBD</span>
                  </div>
                </div>
              </div>

              {/* Small product — right top */}
              <div className="absolute top-16 right-12">
                <div className="w-14 h-20 bg-white/90 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-[6px] font-bold block text-[#9ca3af]">BAUME</span>
                    <span className="text-[6px] font-bold block text-[#9ca3af]">CBD</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 left-8 bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[10px] font-semibold">THC &lt; 0.3%</span>
              </div>

              <div className="absolute bottom-8 right-8 bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                <div className="w-4 h-4 bg-foreground rounded-full flex items-center justify-center">
                  <Star className="h-2.5 w-2.5 text-white" strokeWidth={0} fill="white" />
                </div>
                <span className="text-[10px] font-semibold">COA inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT CATEGORIES ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Commencez avec ces produits en marque blanche
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`${cat.bg} rounded-2xl p-6 flex items-center gap-5 hover:shadow-md transition-shadow group`}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:shadow transition-shadow">
                  <cat.icon className={`h-7 w-7 ${cat.iconColor} transition-colors`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[16px] font-semibold">{cat.name}</h3>
                  <p className="text-[13px] text-[#4d4f56]">{cat.count}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS CAROUSEL ==================== */}
      <section className="py-24 bg-[#f7f7f8] overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Ce que disent nos clients
            </h2>
            <div className="flex items-center gap-8 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[48px] font-semibold tracking-[-0.04em] leading-none">4.8</span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-foreground text-foreground" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-[14px] text-[#4d4f56]">Avis clients</span>
                </div>
              </div>
              <div className="hidden sm:flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition-colors" aria-label="Precedent">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-foreground/80 transition-colors" aria-label="Suivant">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 pl-[max(1rem,calc((100vw-1240px)/2+1rem))] pr-8 overflow-x-auto scrollbar-hide pb-4">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="shrink-0 w-[360px] rounded-[2rem] border border-border/40 bg-white p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-foreground text-foreground" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-[18px] leading-[1.55] mb-8">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div>
                <p className="text-[18px] font-medium">{review.author}</p>
                <p className="text-[14px] text-[#4d4f56] mt-0.5">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA — BEIGE BLOCK ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] overflow-hidden min-h-[400px] relative">
          <div className="relative z-10 max-w-[520px] px-10 py-16 lg:px-16 lg:py-20">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Lancez votre gamme CBD en marque blanche
            </h2>
            <p className="mt-6 text-[16px] font-medium text-[#4d4f56] leading-[1.6]">
              Creez votre compte gratuitement et commencez a vendre des produits CBD sous votre marque des aujourd&apos;hui.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/profile">
                <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                  Commencer
                </Button>
              </Link>
              <Link href="/catalog" className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline">
                Voir les produits
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 w-1/2 hidden lg:block">
            <div className="absolute top-12 right-24 rotate-[25deg]">
              <div className="w-16 h-12 bg-white rounded-t-full mx-auto shadow-sm" />
              <div className="w-6 h-20 bg-gradient-to-b from-white/80 to-white/40 mx-auto" />
              <div className="w-3 h-16 bg-gradient-to-b from-amber-200/60 to-amber-400/80 mx-auto rounded-b-full" />
              <div className="w-12 h-14 bg-gradient-to-b from-amber-400 to-amber-500 rounded-[50%] mx-auto mt-1 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VIDEO TUTORIALS ==================== */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] text-center mb-16">
            Tutoriels video
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Introduction aux produits CBD3", color: "from-amber-100 to-orange-100" },
              { title: "CBD premium & formulations", color: "from-green-100 to-emerald-100" },
              { title: "Creer votre premier produit", color: "from-blue-100 to-indigo-100" },
            ].map((video) => (
              <div key={video.title} className="group cursor-pointer">
                <div className={`aspect-video bg-gradient-to-br ${video.color} rounded-2xl flex items-center justify-center relative overflow-hidden mb-4`}>
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 fill-foreground text-foreground ml-0.5" />
                  </div>
                </div>
                <h3 className="text-[16px] font-semibold">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT'S NEXT ==================== */}
      <section className="py-24 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
            Et maintenant ?
          </h2>
          <p className="mt-4 text-[16px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
            Creez votre compte, explorez le catalogue et lancez votre marque CBD en quelques clics. C&apos;est gratuit pour commencer.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/profile">
              <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Commencer gratuitement
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Comment ca marche
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
