import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  Building2,
  ShoppingBag,
  Heart,
  Store,
  Sparkles,
  Truck,
  ShieldCheck,
  FileCheck,
  BarChart3,
  Package,
  Zap,
  Globe,
  Users,
  Leaf,
  Palette,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoriesData, slugify } from "@/data/products";

export const dynamic = "force-dynamic";

type IconName = keyof typeof iconMap;

const iconMap = {
  building: Building2,
  shop: ShoppingBag,
  heart: Heart,
  store: Store,
  sparkles: Sparkles,
  truck: Truck,
  shield: ShieldCheck,
  file: FileCheck,
  chart: BarChart3,
  pkg: Package,
  zap: Zap,
  globe: Globe,
  users: Users,
  leaf: Leaf,
  palette: Palette,
  clock: Clock,
} as const;

type Industry = {
  slug: string;
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    stat?: { value: string; label: string };
    bg: string; // hero right-side mock background
    badges: { icon: IconName; label: string }[];
  };
  painPoints: { icon: IconName; title: string; text: string }[];
  solutions: { n: string; title: string; text: string }[];
  featuredProductsCategories: string[]; // category slugs to pull products from
  stats: { value: string; label: string }[];
  testimonial: { quote: string; author: string; role: string };
  finalCta: { title: string; text: string; primary: string; secondary: string };
};

const industries: Record<string, Industry> = {
  enterprise: {
    slug: "enterprise",
    hero: {
      kicker: "Pour les grandes marques",
      title: "Developpez votre gamme CBD a l'echelle industrielle",
      subtitle:
        "Formules exclusives, contrats cadres, volumes palette, accompagnement R&D et packaging premium. Votre force de frappe CBD, prete en 6 semaines.",
      stat: { value: "500+", label: "marques enterprise accompagnees" },
      bg: "from-[#f7f4ee] to-[#e8e1d0]",
      badges: [
        { icon: "shield", label: "Contrat cadre" },
        { icon: "truck", label: "Livraison palette" },
        { icon: "users", label: "Design manager dedie" },
      ],
    },
    painPoints: [
      {
        icon: "pkg",
        title: "Volumes imprevisibles",
        text: "Vos commandes s'etalent de 500 unites a 10 000 selon les saisons. Vos fournisseurs actuels ne suivent pas.",
      },
      {
        icon: "file",
        title: "Exigences conformite",
        text: "Multi-marches UE, cahiers des charges retailers, audits qualite reguliers a fournir.",
      },
      {
        icon: "clock",
        title: "Delais courts",
        text: "Vous lancez des operations retailers avec 4 a 6 semaines de preavis.",
      },
    ],
    solutions: [
      {
        n: "01",
        title: "Volume palette sans friction",
        text: "Fabrication on demand jusqu'a 50 000 unites par lot. Livraison palette avec rendez-vous logistique et assurance transport.",
      },
      {
        n: "02",
        title: "Contrat cadre annuel",
        text: "Tarifs volume negocies a l'annee, paiement par virement a 30 j, SLA production 6 semaines garanti.",
      },
      {
        n: "03",
        title: "Design manager dedie",
        text: "Un interlocuteur unique pilote vos BAT, valide les cahiers des charges et anticipe les pics de commande.",
      },
      {
        n: "04",
        title: "R&D sur formules exclusives",
        text: "Developpement d'actifs signature, integration terpenes, formulations broad spectrum / isolat sur cahier des charges.",
      },
    ],
    featuredProductsCategories: ["huiles-cbd", "cosmetique-cbd", "edibles-cbd"],
    stats: [
      { value: "6 sem.", label: "SLA production garanti" },
      { value: "50K", label: "unites par lot" },
      { value: "30 j", label: "paiement par virement" },
      { value: "-32%", label: "remise volume max" },
    ],
    testimonial: {
      quote:
        "Deux saisons consecutives ou on a triple les volumes sans rupture. L'equipe Unsigned tient la cadence retail et on garde la main sur le design.",
      author: "Claire V.",
      role: "Directrice marque, distributeur national",
    },
    finalCta: {
      title: "Pret a scaler votre gamme CBD ?",
      text: "Un design manager vous contacte sous 24 h avec une proposition volume personnalisee.",
      primary: "Demander un devis enterprise",
      secondary: "Parler a un design manager",
    },
  },

  ecommerce: {
    slug: "ecommerce",
    hero: {
      kicker: "Pour les e-commercants",
      title: "Votre boutique CBD en dropshipping, sans stock ni souci",
      subtitle:
        "Shopify, WooCommerce ou API : branchez votre boutique en 3 minutes. Nos produits CBD sous votre marque, fabriques et expedies a chaque commande.",
      stat: { value: "0 EUR", label: "investissement initial" },
      bg: "from-[#d1c3a5] to-[#a89578]",
      badges: [
        { icon: "zap", label: "Installation 3 min" },
        { icon: "pkg", label: "Colis neutre" },
        { icon: "chart", label: "Marge 60%+" },
      ],
    },
    painPoints: [
      {
        icon: "pkg",
        title: "Stock & tresorerie",
        text: "Pas envie d'avancer 10 000 EUR en stock pour tester un produit qui ne se vendra peut-etre pas.",
      },
      {
        icon: "shield",
        title: "Conformite CBD",
        text: "La reglementation change sans cesse : THC, mentions, novel food, claims autorises. Difficile de suivre.",
      },
      {
        icon: "truck",
        title: "Logistique chronophage",
        text: "Vous voulez vendre, pas faire des colis. Chaque heure d'emballage est une heure pas passee en marketing.",
      },
    ],
    solutions: [
      {
        n: "01",
        title: "Integration 1-clic",
        text: "App Shopify native, plugin WooCommerce, module Prestashop, Zapier pour Wix & Squarespace. Install en 3 min.",
      },
      {
        n: "02",
        title: "Fabrication on demand",
        text: "Chaque vente declenche la fabrication. Zero stock dormant, zero perime, zero risque financier.",
      },
      {
        n: "03",
        title: "Expedition sous votre marque",
        text: "Colis neutre, insert personnalise (plan Pro), pas de facture Unsigned. Vos clients voient que vous.",
      },
      {
        n: "04",
        title: "Formation & support",
        text: "Guides reglementation, templates d'emails, conseils marketing CBD inclus dans le plan Standard (gratuit).",
      },
    ],
    featuredProductsCategories: ["huiles-cbd", "fleur-cbd", "cosmetique-cbd"],
    stats: [
      { value: "3 min", label: "pour connecter une boutique" },
      { value: "0 EUR", label: "stock a avancer" },
      { value: "48 h", label: "expedition apres production" },
      { value: "60%+", label: "marge moyenne revendeur" },
    ],
    testimonial: {
      quote:
        "J'ai lance Bloom CBD en dropshipping pur avec 500 EUR de pub. 6 mois apres on fait 40 commandes par jour, zero stock a gerer, zero SAV logistique.",
      author: "Marie L.",
      role: "Fondatrice, Bloom CBD",
    },
    finalCta: {
      title: "Pret a lancer votre boutique CBD ?",
      text: "Ouvrez un compte gratuit, connectez votre Shopify en 3 min et commencez a vendre aujourd'hui.",
      primary: "Connecter ma boutique",
      secondary: "Comment ca marche",
    },
  },

  "bien-etre": {
    slug: "bien-etre",
    hero: {
      kicker: "Pour les professionnels du bien-etre",
      title: "Une gamme CBD a votre marque pour votre spa, cabinet ou institut",
      subtitle:
        "Proposez a vos clients des huiles de massage, baumes, serums et cosmetiques CBD premium, estampilles a votre enseigne. Sans stock, sans minimum, conforme aux exigences du secteur.",
      stat: { value: "100+", label: "spas et cabinets partenaires" },
      bg: "from-[#e8d5d0] to-[#c9a49b]",
      badges: [
        { icon: "leaf", label: "Formules clean beauty" },
        { icon: "heart", label: "Usage pro & retail" },
        { icon: "palette", label: "Design signature" },
      ],
    },
    painPoints: [
      {
        icon: "heart",
        title: "Pas de gamme a votre enseigne",
        text: "Vous faites profiter vos clients des meilleures marques, mais ils ne reviennent pas acheter chez vous au lieu de les commander en ligne.",
      },
      {
        icon: "pkg",
        title: "Stocks et invendus",
        text: "Les gammes blanches traditionnelles imposent des minimums a 500-1000 unites. Trop pour un cabinet.",
      },
      {
        icon: "shield",
        title: "Exigences qualite",
        text: "Vos clients attendent des ingredients propres, certifies, avec des COA verifiables et une tracabilite totale.",
      },
    ],
    solutions: [
      {
        n: "01",
        title: "Gamme signature sur mesure",
        text: "Huiles de massage, baumes corps, serums, creme visage, roll-on : 20+ cosmetiques CBD pretes a porter votre nom.",
      },
      {
        n: "02",
        title: "Packaging premium sobre",
        text: "Pots verre ambre, pompes airless, flacons sobres compatibles avec l'esthetique spa et cabinet haut de gamme.",
      },
      {
        n: "03",
        title: "Commandes a l'unite",
        text: "Commencez par 5 unites pour tester, scalez quand vos clients demandent. Pas de minimum, pas d'invendus.",
      },
      {
        n: "04",
        title: "Double canal : cabinet + e-shop",
        text: "Utilisez en cabinet pour vos soins et revendez sur votre site, Instagram shop ou click & collect.",
      },
    ],
    featuredProductsCategories: ["cosmetique-cbd", "huiles-cbd", "edibles-cbd"],
    stats: [
      { value: "5 u.", label: "minimum commande" },
      { value: "48 h", label: "expedition" },
      { value: "20+", label: "cosmetiques CBD" },
      { value: "COA", label: "par lot" },
    ],
    testimonial: {
      quote:
        "Je propose mes soins CBD maison a mes clientes depuis 8 mois. Elles reviennent toutes les 3 semaines et ma marge retail compense 40% de mon chiffre cabinet.",
      author: "Sophie M.",
      role: "Naturopathe & fondatrice, Essentia",
    },
    finalCta: {
      title: "Pret a lancer votre gamme signature ?",
      text: "Un design manager vous accompagne gratuitement pour creer votre premiere collection.",
      primary: "Commander un echantillon",
      secondary: "Voir les cosmetiques CBD",
    },
  },

  boutiques: {
    slug: "boutiques",
    hero: {
      kicker: "Pour les boutiques physiques",
      title: "Approvisionnez votre magasin en CBD marque blanche",
      subtitle:
        "Remplissez vos rayons avec une gamme exclusive Unsigned estampillee a votre enseigne. Remises volume, rotation rapide, COA fourni, support commercial.",
      stat: { value: "-32%", label: "remise volume maximale" },
      bg: "from-[#cfd8dc] to-[#8ea2a9]",
      badges: [
        { icon: "store", label: "Gamme exclusive" },
        { icon: "truck", label: "Palette UE" },
        { icon: "file", label: "PLV fournie" },
      ],
    },
    painPoints: [
      {
        icon: "pkg",
        title: "Depandance aux marques",
        text: "Vous revendez des marques connues avec 30% de marge quand elles pourraient etre votre propre marque a 70%.",
      },
      {
        icon: "chart",
        title: "Marge faible en retail",
        text: "Les concurrents tirent les prix publics vers le bas. Impossible de se differencier sans une marque exclusive.",
      },
      {
        icon: "shield",
        title: "Controles et audits",
        text: "Vous avez besoin de factures, fiches techniques, COA par lot archivables pour la DGCCRF et vos audits internes.",
      },
    ],
    solutions: [
      {
        n: "01",
        title: "Marque blanche exclusive",
        text: "Votre propre gamme CBD, designee par nos equipes, fabriquee en UE. Impossible a trouver chez un concurrent.",
      },
      {
        n: "02",
        title: "Remises volume retail",
        text: "Jusqu'a -32% sur le PDA a partir de 500 unites. PDVC conseille pour securiser vos marges.",
      },
      {
        n: "03",
        title: "PLV & supports vente",
        text: "Presentoirs, totems, fiches produit imprimables, argumentaires de vente a votre marque. Tout fourni.",
      },
      {
        n: "04",
        title: "Audit & conformite",
        text: "Fiches techniques, COA par lot, certificats INCI, attestation chanvre UE, tout archivable en PDF.",
      },
    ],
    featuredProductsCategories: ["huiles-cbd", "fleur-cbd", "hash-cbd", "edibles-cbd"],
    stats: [
      { value: "-32%", label: "PDA max en volume" },
      { value: "70%", label: "marge retail moyenne" },
      { value: "6 sem.", label: "delai palette" },
      { value: "PLV", label: "incluse" },
    ],
    testimonial: {
      quote:
        "On a remplace 3 marques concurrentes par une seule marque maison CBD, design par Unsigned. Marge doublee, clients fideles, renouvellement tous les 2 mois.",
      author: "Laurent B.",
      role: "Gerant, chaine de 4 boutiques CBD",
    },
    finalCta: {
      title: "Pret a equiper votre boutique ?",
      text: "Devis palette sous 24 h, visite commerciale possible sur Paris et grandes villes.",
      primary: "Demander un devis palette",
      secondary: "Parler a un commercial",
    },
  },

  createurs: {
    slug: "createurs",
    hero: {
      kicker: "Pour les createurs & influenceurs",
      title: "Votre merchandising CBD, a votre image, sans contrainte",
      subtitle:
        "Lancez votre propre gamme CBD en edition limitee ou en collection permanente. Packaging unique, collaborations exclusives, drops synchronises avec votre communaute.",
      stat: { value: "1 u.", label: "minimum pour tester" },
      bg: "from-[#c44545] to-[#8a2a2a]",
      badges: [
        { icon: "sparkles", label: "Editions limitees" },
        { icon: "palette", label: "Design libre" },
        { icon: "zap", label: "Drop en 4 semaines" },
      ],
    },
    painPoints: [
      {
        icon: "sparkles",
        title: "Pas de gamme a votre image",
        text: "Votre communaute vous demande du merch, mais un t-shirt ne se renouvelle pas comme un produit consommable.",
      },
      {
        icon: "pkg",
        title: "Minimums prohibitifs",
        text: "Les fabricants classiques veulent 5000 unites minimum. Trop risque pour un premier drop.",
      },
      {
        icon: "clock",
        title: "Delais trop longs",
        text: "Votre audience est chaude maintenant, pas dans 6 mois. Il faut pouvoir livrer un drop en quelques semaines.",
      },
    ],
    solutions: [
      {
        n: "01",
        title: "Drops en edition limitee",
        text: "Commandez 50 a 500 unites pour une collab ou un drop. Packaging 100% personnalise, numerotation possible.",
      },
      {
        n: "02",
        title: "Design manager dedie",
        text: "Un interlocuteur design qui comprend les codes de votre communaute (pop culture, street, art urbain, music).",
      },
      {
        n: "03",
        title: "Delais accelera",
        text: "Drop en 4 semaines possible : BAT en 72 h, fabrication 2 semaines, expedition 1 semaine.",
      },
      {
        n: "04",
        title: "Dropshipping a votre drop",
        text: "Branchez votre store Shopify pre-drop. Quand la vente commence, tout tourne en auto chez Unsigned.",
      },
    ],
    featuredProductsCategories: ["fleur-cbd", "hash-cbd", "edibles-cbd"],
    stats: [
      { value: "4 sem.", label: "du brief au drop" },
      { value: "50 u.", label: "minimum drop" },
      { value: "72 h", label: "BAT garanti" },
      { value: "100%", label: "design libre" },
    ],
    testimonial: {
      quote:
        "On a lance une serie limitee de 300 pochons CBD avec notre artwork pour notre tournee. Sold out en 4 jours, on a relance 3 fois.",
      author: "Tealer Lab",
      role: "Collectif & label creatif",
    },
    finalCta: {
      title: "Pret a dropper votre gamme CBD ?",
      text: "Brief en 2 min, premiere proposition visuelle en 48 h, drop en 4 semaines.",
      primary: "Demarrer un drop",
      secondary: "Voir les fleurs CBD",
    },
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();

  // collect featured products (first 4)
  const featured: {
    categorySlug: string;
    name: string;
    volume: string;
    price: string;
    image?: string;
    slug: string;
  }[] = [];
  for (const cat of industry.featuredProductsCategories) {
    const c = categoriesData[cat];
    if (!c) continue;
    for (const p of c.products) {
      featured.push({
        categorySlug: cat,
        name: p.name,
        volume: p.volume,
        price: p.price,
        image: p.image,
        slug: slugify(p.name),
      });
      if (featured.length >= 4) break;
    }
    if (featured.length >= 4) break;
  }

  const Icon = (name: IconName) => iconMap[name];

  return (
    <>
      {/* ============= HERO ============= */}
      <section className="pt-14 pb-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              {industry.hero.kicker}
            </span>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              {industry.hero.title}
            </h1>
            <p className="mt-5 text-[15px] text-[#4d4f56] leading-[1.65] max-w-[520px]">
              {industry.hero.subtitle}
            </p>
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <Link href="/profile">
                <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider">
                  {industry.finalCta.primary}
                </Button>
              </Link>
              <Link href="/catalog">
                <Button variant="outline" className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider">
                  Voir les produits
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {industry.hero.badges.map((b) => {
                const I = Icon(b.icon);
                return (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#f1f1f3] rounded-full px-3 py-1.5 text-[11px] font-semibold"
                  >
                    <I className="h-3 w-3 text-[#6c3fee]" />
                    {b.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className={`relative aspect-square max-w-[480px] ml-auto rounded-[2rem] bg-gradient-to-br ${industry.hero.bg} overflow-hidden`}>
              {/* stat card center */}
              {industry.hero.stat && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-[1.5rem] p-6 shadow-xl">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9ca3af] mb-2">
                      {industry.hero.stat.label}
                    </p>
                    <p className="text-[48px] font-semibold tracking-[-0.03em] leading-none">
                      {industry.hero.stat.value}
                    </p>
                  </div>
                </div>
              )}
              {/* floating decorative shapes */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white/30 rotate-6" />
              <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white/20" />
              <div className="absolute top-1/2 right-6 w-10 h-10 rounded-xl bg-white/40 -rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* ============= PAIN POINTS ============= */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Les defis
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              Ce qui bloque aujourd&apos;hui
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {industry.painPoints.map((p) => {
              const I = Icon(p.icon);
              return (
                <div key={p.title} className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6">
                  <div className="w-11 h-11 rounded-xl bg-[#fff3c2] text-[#8b6914] flex items-center justify-center mb-4">
                    <I className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2">{p.title}</h3>
                  <p className="text-[13px] text-[#4d4f56] leading-[1.6]">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= SOLUTIONS ============= */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c3fee] mb-3">
              La solution Unsigned
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              Comment on repond precisement a vos besoins
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {industry.solutions.map((s) => (
              <div key={s.n} className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6 relative">
                <span className="absolute -top-3 left-6 text-[10px] font-bold bg-foreground text-background px-2.5 py-1 rounded-full">
                  {s.n}
                </span>
                <h3 className="text-[16px] font-semibold mt-3 mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#4d4f56] leading-[1.65]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= STATS ============= */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-[1.5rem] p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {industry.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[36px] font-semibold tracking-[-0.02em] leading-none">{s.value}</p>
                <p className="text-[11px] text-background/60 mt-2 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= FEATURED PRODUCTS ============= */}
      {featured.length > 0 && (
        <section data-reveal className="py-14">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
                  Selection
                </span>
                <h2 className="text-[28px] font-semibold tracking-[-0.02em]">
                  Les produits qui performent dans votre vertical
                </h2>
              </div>
              <Link
                href="/catalog"
                className="text-[12px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                Tout le catalogue <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featured.map((p) => (
                <Link
                  key={p.slug}
                  href={`/catalog/${p.categorySlug}/${p.slug}`}
                  className="group"
                >
                  <div className="aspect-square bg-[#eeeeee] rounded-2xl overflow-hidden flex items-center justify-center">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="w-12 h-20 bg-white rounded-md shadow-sm" />
                    )}
                  </div>
                  <p className="text-[11px] text-[#9ca3af] mt-3">{p.volume}</p>
                  <h3 className="text-[14px] font-semibold group-hover:underline">{p.name}</h3>
                  <p className="text-[13px] font-bold mt-1">{p.price} EUR HT</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= TESTIMONIAL ============= */}
      <section data-reveal className="py-14">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8">
          <div className="bg-[#faf5ed] rounded-[1.5rem] p-10 lg:p-14">
            <span className="text-[48px] text-foreground/20 leading-none">&ldquo;</span>
            <p className="text-[20px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.01em] -mt-2">
              {industry.testimonial.quote}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center font-semibold">
                {industry.testimonial.author[0]}
              </div>
              <div>
                <p className="text-[13px] font-semibold">{industry.testimonial.author}</p>
                <p className="text-[11px] text-[#4d4f56]">{industry.testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FINAL CTA ============= */}
      <section className="py-20">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[40px] lg:text-[48px] font-semibold tracking-[-0.03em] leading-tight">
            {industry.finalCta.title}
          </h2>
          <p className="mt-4 text-[15px] text-[#4d4f56] max-w-xl mx-auto">
            {industry.finalCta.text}
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/profile">
              <Button className="rounded-full h-[56px] px-7 text-[12px] font-bold uppercase tracking-wider">
                {industry.finalCta.primary}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="mailto:pro@unsigned.fr">
              <Button variant="outline" className="rounded-full h-[56px] px-7 text-[12px] font-bold uppercase tracking-wider">
                {industry.finalCta.secondary}
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center items-center gap-6 text-[12px] text-[#4d4f56] flex-wrap">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" /> Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" /> Reponse sous 24 h
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" /> Accompagnement inclus
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
