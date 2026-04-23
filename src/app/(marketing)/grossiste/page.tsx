import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Star,
  Boxes,
  Zap,
  Headphones,
  ShieldCheck,
  Truck,
  Phone,
  Mail,
  Calendar,
  Leaf,
  Droplets,
  Flower2,
  CircleDot,
  Cigarette,
  FlaskConical,
  Battery,
  Cookie,
} from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */

const features = [
  {
    icon: Boxes,
    title: "Les memes produits, a grande echelle",
    description:
      "Tout le catalogue Unsigned disponible en volume. Memes formulations, memes COA, meme niveau de qualite — juste plus de quantite pour scaler votre activite.",
  },
  {
    icon: Zap,
    title: "Encore plus rapide",
    description:
      "Production prioritaire pour nos comptes grossistes. Vos commandes recurrentes sont planifiees a l'avance pour reduire vos delais d'approvisionnement.",
  },
  {
    icon: Headphones,
    title: "Un commercial dedie",
    description:
      "Un interlocuteur unique qui connait votre dossier, votre activite et vos contraintes. Devis, suivi de commandes, conseils produit : tout passe par lui.",
  },
];

const personas = [
  "Reseaux de boutiques CBD",
  "Marques etablies en croissance",
  "Distributeurs B2B",
  "Pharmacies & parapharmacies",
  "Operateurs export EU",
  "Marques bien-etre & cosmetique",
];

const categories = [
  { name: "Fleur CBD", href: "/catalog/fleur-cbd", icon: Flower2, bg: "bg-green-50", iconColor: "text-green-600" },
  { name: "Hash CBD", href: "/catalog/hash-cbd", icon: CircleDot, bg: "bg-blue-50", iconColor: "text-blue-600" },
  { name: "Pre roll CBD", href: "/catalog/pre-roll-cbd", icon: Cigarette, bg: "bg-stone-50", iconColor: "text-stone-700" },
  { name: "Huiles CBD", href: "/catalog/huiles-cbd", icon: Droplets, bg: "bg-amber-50", iconColor: "text-amber-600" },
  { name: "Extractions CBD", href: "/catalog/extractions-cbd", icon: FlaskConical, bg: "bg-orange-50", iconColor: "text-orange-600" },
  { name: "Cartridges CBD", href: "/catalog/cartridges-cbd", icon: Battery, bg: "bg-purple-50", iconColor: "text-purple-600" },
  { name: "Edibles CBD", href: "/catalog/edibles-cbd", icon: Cookie, bg: "bg-rose-50", iconColor: "text-rose-600" },
  { name: "Cosmetique CBD", href: "/catalog/cosmetique-cbd", icon: Leaf, bg: "bg-pink-50", iconColor: "text-pink-600" },
];

const reviews = [
  { quote: "On a basule sur l'offre grossiste apres 6 mois en on-demand. Memes produits, mais on est livres beaucoup plus vite et avec un vrai accompagnement.", author: "Vincent P.", role: "CEO, Verde Distribution" },
  { quote: "Notre commerciale connait notre activite par coeur. On gagne un temps fou sur chaque reassort.", author: "Camille A.", role: "Achats, Reseau Hemp&Co" },
  { quote: "La qualite produit est identique au catalogue standard, c'est ce qu'on cherchait : pas de surprise, juste plus de volume.", author: "Yanis B.", role: "Fondateur, Ora CBD" },
];

const whyPoints = [
  "Memes produits qu'au catalogue",
  "Memes COA, meme conformite",
  "Production prioritaire",
  "Commercial dedie",
];

/* ============================================================
   PAGE
   ============================================================ */

export default function GrossistePage() {
  return (
    <>
      {/* ==================== HERO — DARK ==================== */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mt-6">
        <div className="bg-foreground text-white rounded-[2rem] overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-8 lg:px-16 py-20 lg:py-28">
            <div className="max-w-[600px]">
              <span className="inline-flex items-center bg-white/10 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-6">
                <Boxes className="h-3.5 w-3.5 mr-1.5" />
                Offre grossiste B2B
              </span>
              <h1 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
                Les memes produits CBD, a grande echelle.
              </h1>
              <p className="mt-6 text-[16px] font-medium text-white/70 leading-[1.6] max-w-[520px]">
                Vous connaissez deja notre catalogue. L&apos;offre grossiste vous
                permet de l&apos;avoir en volume, encore plus vite, avec un
                commercial dedie pour vous accompagner.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Link href="/about#contact">
                  <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] bg-white text-foreground hover:bg-white/90">
                    Contacter un commercial
                  </Button>
                </Link>
                <Link href="/catalog">
                  <button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] border border-white/40 text-white hover:bg-white/10 transition-colors">
                    Voir le catalogue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES — 3 CARDS ==================== */}
      <section data-reveal className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Pourquoi passer en grossiste
            </h2>
            <p className="mt-4 text-[16px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
              Simple : les memes produits, livres plus vite, avec un vrai
              accompagnement humain.
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

      {/* ==================== WHY — PREMIUM BLOCK ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[480px]">
            <div className="px-10 py-14 lg:px-14 lg:py-16 flex flex-col justify-center">
              <span className="inline-flex items-center bg-white/80 text-foreground text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-6 w-fit">
                Grossiste CBD
              </span>
              <h2 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.15] mb-5">
                Memes produits.<br />Plus de volume.<br />Plus vite.
              </h2>
              <p className="text-[15px] font-medium text-[#4d4f56] leading-[1.7] mb-8 max-w-[420px]">
                Pas de nouveau catalogue a apprendre, pas de processus complique.
                Vous nous dites ce dont vous avez besoin, votre commercial vous
                fait un devis, on produit en priorite.
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
                <Link href="/about#contact">
                  <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[52px]">
                    Contacter un commercial
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block overflow-hidden">
              <img
                src="/products/pouches-bg.avif"
                alt="Stock CBD grossiste B2B"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8 bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3" />
                <span className="text-[10px] font-semibold">THC &lt; 0.3%</span>
              </div>
              <div className="absolute top-8 right-8 bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                <Zap className="h-3 w-3" />
                <span className="text-[10px] font-semibold">Production prioritaire</span>
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                <div className="w-4 h-4 bg-foreground rounded-full flex items-center justify-center">
                  <Star className="h-2.5 w-2.5 text-white" strokeWidth={0} fill="white" />
                </div>
                <span className="text-[10px] font-semibold">COA par lot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHO IS IT FOR ==================== */}
      <section data-reveal className="py-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Pour qui
            </h2>
            <p className="mt-4 text-[16px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
              L&apos;offre grossiste s&apos;adresse aux acheteurs B2B qui ont
              depasse la commande a l&apos;unite.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {personas.map((p) => (
              <div
                key={p}
                className="border rounded-full px-5 py-2.5 bg-white text-[14px] font-medium hover:shadow-sm transition-shadow"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES ==================== */}
      <section data-reveal className="py-24 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Tout le catalogue, disponible en volume
            </h2>
            <p className="mt-4 text-[16px] font-medium text-[#4d4f56] max-w-xl mx-auto leading-[1.6]">
              Toutes les categories Unsigned sont accessibles en grossiste, avec les
              memes formulations qu&apos;au catalogue standard.
            </p>
          </div>

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
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1]">
              Ils ont scale avec le grossiste
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-[48px] font-semibold tracking-[-0.04em] leading-none">4.9</span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-foreground text-foreground" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-[14px] text-[#4d4f56]">Avis clients B2B</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <div
                key={review.author}
                className="rounded-[2rem] border border-border/40 bg-[#f7f7f8] p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-0.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-foreground text-foreground" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-[16px] leading-[1.55] mb-8">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-medium">{review.author}</p>
                  <p className="text-[13px] text-[#4d4f56] mt-0.5">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT CTA ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1240px] mx-auto bg-foreground text-white rounded-[2rem] overflow-hidden">
          <div className="px-10 py-16 lg:px-16 lg:py-20 text-center">
            <span className="inline-flex items-center bg-white/10 text-white text-[11px] font-semibold uppercase tracking-wider rounded-full px-3.5 py-1.5 mb-6">
              <Headphones className="h-3.5 w-3.5 mr-1.5" />
              Parlons de votre projet
            </span>
            <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] max-w-2xl mx-auto">
              Un commercial vous rappelle sous 24 h
            </h2>
            <p className="mt-6 text-[16px] font-medium text-white/70 leading-[1.6] max-w-xl mx-auto">
              L&apos;offre grossiste se construit avec un humain. Decrivez-nous
              votre activite et vos besoins, on revient vers vous tres vite avec
              une proposition adaptee.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/about#contact">
                <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] bg-white text-foreground hover:bg-white/90">
                  <Mail className="h-4 w-4 mr-2" />
                  Demander un rappel
                </Button>
              </Link>
              <a href="tel:+33000000000">
                <button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] border border-white/40 text-white hover:bg-white/10 transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Appeler directement
                </button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 border-t border-white/10">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="h-5 w-5 text-white/60" />
                <p className="text-[13px] text-white/70">Reponse sous 24 h ouvrees</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Headphones className="h-5 w-5 text-white/60" />
                <p className="text-[13px] text-white/70">Commercial francophone</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Truck className="h-5 w-5 text-white/60" />
                <p className="text-[13px] text-white/70">Production prioritaire</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
