import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Leaf,
  Droplets,
  Flower2,
  CircleDot,
  Cigarette,
  FlaskConical,
  Battery,
  Cookie,
  Check,
  ShieldCheck,
  FileCheck,
  Palette,
  Truck,
  Star,
  Sparkles,
} from "lucide-react";
import { categoriesData, slugify } from "@/data/products";

const categoriesMeta = [
  { slug: "fleur-cbd", icon: Flower2, color: "bg-green-50", iconColor: "text-green-700", accent: "from-green-100 to-emerald-100" },
  { slug: "hash-cbd", icon: CircleDot, color: "bg-blue-50", iconColor: "text-blue-700", accent: "from-blue-100 to-indigo-100" },
  { slug: "pre-roll-cbd", icon: Cigarette, color: "bg-stone-100", iconColor: "text-stone-700", accent: "from-stone-100 to-stone-200" },
  { slug: "huiles-cbd", icon: Droplets, color: "bg-amber-50", iconColor: "text-amber-700", accent: "from-amber-100 to-orange-100" },
  { slug: "extractions-cbd", icon: FlaskConical, color: "bg-orange-50", iconColor: "text-orange-700", accent: "from-orange-100 to-amber-100" },
  { slug: "cartridges-cbd", icon: Battery, color: "bg-purple-50", iconColor: "text-purple-700", accent: "from-purple-100 to-violet-100" },
  { slug: "edibles-cbd", icon: Cookie, color: "bg-rose-50", iconColor: "text-rose-700", accent: "from-rose-100 to-pink-100" },
  { slug: "cosmetique-cbd", icon: Leaf, color: "bg-pink-50", iconColor: "text-pink-700", accent: "from-pink-100 to-rose-100" },
];

const orderSteps = [
  {
    n: "01",
    title: "Choisissez vos produits",
    body: "Naviguez par categorie, comparez les formulations, telechargez les COA. Tout est documente.",
  },
  {
    n: "02",
    title: "Personnalisez le packaging",
    body: "Etiquette, coffret, sleeve, vernis : notre Design Studio en ligne ou notre service design pro.",
  },
  {
    n: "03",
    title: "Commandez & expedez",
    body: "A l'unite pour tester, en gros pour scaler. Production sous 5 a 10 jours, expedition 48 h.",
  },
];

const guarantees = [
  { icon: ShieldCheck, label: "THC < 0.3%", body: "Conforme reglementation EU/FR." },
  { icon: FileCheck, label: "COA par lot", body: "Laboratoire accredite ISO 17025." },
  { icon: Leaf, label: "Chanvre certifie", body: "Cultures EU tracables." },
  { icon: Truck, label: "Expedition 48 h", body: "Depuis la France, toute l'UE." },
];

export default function CatalogPage() {
  // Build catalog with stats from products data
  const catalog = categoriesMeta.map((meta) => {
    const data = categoriesData[meta.slug];
    return {
      ...meta,
      name: data?.name ?? meta.slug,
      description: data?.description ?? "",
      productCount: data?.products.length ?? 0,
      sample: data?.products[0],
    };
  });

  // Pick a few standout products across categories
  const highlights = catalog
    .flatMap((c) =>
      (categoriesData[c.slug]?.products ?? [])
        .filter((p) => p.badge === "Nouveau")
        .slice(0, 1)
        .map((p) => ({ ...c, product: p })),
    )
    .slice(0, 4);

  const totalProducts = catalog.reduce((sum, c) => sum + c.productCount, 0);

  return (
    <>
      {/* ==================== HERO — DARK ==================== */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mt-6">
        <div className="bg-foreground text-white rounded-[2rem] overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-8 lg:px-16 py-20 lg:py-28">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end">
              <div className="max-w-[640px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/50 mb-6">
                  Catalogue produits
                </p>
                <h1 className="text-[44px] sm:text-[56px] lg:text-[64px] font-medium tracking-[-0.05em] leading-[1.05]">
                  {totalProducts}+ produits CBD,
                  <br />
                  prets a porter votre marque.
                </h1>
                <p className="mt-6 text-[16px] sm:text-[18px] font-medium text-white/70 leading-[1.6] max-w-[540px]">
                  Huit categories, des formulations eprouvees, une chaine
                  industrielle europeenne. THC &lt; 0.3%, COA par lot, mentions
                  legales prises en charge.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <Link href="/profile">
                    <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] bg-white text-foreground hover:bg-white/90">
                      Commencer
                    </Button>
                  </Link>
                  <a
                    href="#categories"
                    className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] border border-white/40 text-white hover:bg-white/10 transition-colors flex items-center"
                  >
                    Explorer
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8 lg:border-l lg:border-white/15 lg:pl-12">
                <div>
                  <p className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.04em] leading-none">
                    8
                  </p>
                  <p className="text-[12px] text-white/60 mt-2">Categories</p>
                </div>
                <div>
                  <p className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.04em] leading-none">
                    {totalProducts}+
                  </p>
                  <p className="text-[12px] text-white/60 mt-2">References</p>
                </div>
                <div>
                  <p className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.04em] leading-none">
                    48 h
                  </p>
                  <p className="text-[12px] text-white/60 mt-2">Expedition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST STRIP ==================== */}
      <section className="py-10 border-b">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div key={g.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f7f7f8] flex items-center justify-center shrink-0">
                  <g.icon className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold leading-tight">{g.label}</p>
                  <p className="text-[12px] text-[#4d4f56] mt-1 leading-snug">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES GRID ==================== */}
      <section id="categories" className="py-24 lg:py-32 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Categories
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
              Huit familles de produits. Chacune pensee comme une gamme
              autonome.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {catalog.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalog/${cat.slug}`}
                className="group flex flex-col bg-white border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                {/* Visual header */}
                <div
                  className={`relative aspect-[5/3] bg-gradient-to-br ${cat.accent} flex items-center justify-center overflow-hidden`}
                >
                  <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                    <cat.icon className={`h-8 w-8 ${cat.iconColor}`} />
                  </div>
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/50">
                    {String(catalog.indexOf(cat) + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute top-4 right-4 inline-flex items-center bg-white/80 text-foreground text-[10px] font-bold rounded-full px-2.5 py-1">
                    {cat.productCount} produits
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] mb-2 group-hover:text-foreground/70 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[13px] text-[#4d4f56] leading-[1.6] mb-5 line-clamp-3">
                    {cat.description}
                  </p>
                  {cat.sample && (
                    <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/40 mb-3">
                      Ex. {cat.sample.name}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t">
                    <span className="text-[12px] text-foreground/50">
                      A partir de l&apos;unite
                    </span>
                    <span className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground">
                      Explorer
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HIGHLIGHTS ==================== */}
      {highlights.length > 0 && (
        <section className="py-24 lg:py-32 bg-[#f7f7f8]">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-4">
                  Nouveautes
                </p>
                <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[600px]">
                  Les dernieres references entrees au catalogue.
                </h2>
              </div>
              <Link
                href="/profile"
                className="text-[12px] font-bold uppercase tracking-[0.18em] border-b border-foreground/40 pb-1 hover:border-foreground transition-colors w-fit"
              >
                Demander un acces complet →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {highlights.map((h) => (
                <Link
                  key={`${h.slug}-${h.product.name}`}
                  href={`/catalog/${h.slug}/${slugify(h.product.name)}`}
                  className="group bg-white rounded-2xl overflow-hidden border hover:shadow-md transition-shadow flex flex-col"
                >
                  <div
                    className={`aspect-square bg-gradient-to-br ${h.accent} flex items-center justify-center relative`}
                  >
                    <h.icon className={`h-12 w-12 ${h.iconColor} opacity-70`} />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-foreground text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1">
                      <Sparkles className="h-2.5 w-2.5" />
                      Nouveau
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/40 mb-1.5">
                      {h.name}
                    </p>
                    <h3 className="text-[15px] font-semibold leading-snug mb-3 group-hover:underline">
                      {h.product.name}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-[12px]">
                      <span className="text-[#4d4f56]">{h.product.cbdRange} CBD</span>
                      <span className="font-semibold text-foreground">
                        des {h.product.price} EUR
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== HOW TO ORDER ==================== */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Comment commander
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
              Trois etapes. De la selection a l&apos;expedition.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {orderSteps.map((step) => (
              <div key={step.n} className="bg-[#f7f7f8] rounded-2xl p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-6">
                  {step.n}
                </p>
                <h3 className="text-[22px] font-medium tracking-[-0.02em] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#4d4f56] leading-[1.7]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CUSTOMIZATION TEASER ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-[1240px] mx-auto bg-[#faf5ed] rounded-[2rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[420px]">
            <div className="px-10 py-14 lg:px-14 lg:py-16 flex flex-col justify-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-5">
                Personnalisation
              </p>
              <h2 className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] leading-[1.15] mb-5">
                Chaque produit, prepare pour porter votre marque.
              </h2>
              <p className="text-[15px] font-medium text-[#4d4f56] leading-[1.7] mb-8 max-w-[440px]">
                Etiquettes, coffrets, sleeves, finitions. Outils de design en
                ligne pour les premiers tests, studio interne pour les
                fabrications custom.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "Etiquette adhesive",
                  "Coffret carton",
                  "Sleeve thermo",
                  "Vernis selectif",
                  "Bundles",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-white text-foreground text-[12px] font-medium rounded-full px-3.5 py-1.5"
                  >
                    <Check className="h-3 w-3 mr-1.5 text-green-600" strokeWidth={3} />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link href="/design-studio">
                  <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[52px]">
                    <Palette className="h-4 w-4 mr-2" />
                    Outils de design
                  </Button>
                </Link>
                <Link
                  href="/services"
                  className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline"
                >
                  Service design
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block overflow-hidden">
              <img
                src="/products/pouches-bg.avif"
                alt="Personnalisation packaging CBD"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                <div className="w-4 h-4 bg-foreground rounded-full flex items-center justify-center">
                  <Star className="h-2.5 w-2.5 text-white" strokeWidth={0} fill="white" />
                </div>
                <span className="text-[10px] font-semibold">Design Studio</span>
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5">
                <Check className="h-3 w-3 text-green-600" strokeWidth={3} />
                <span className="text-[10px] font-semibold">100% personnalisable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMPLIANCE ==================== */}
      <section className="py-24 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="bg-foreground text-white rounded-[2rem] px-10 py-14 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/50 mb-5">
                  Conformite & qualite
                </p>
                <h2 className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] leading-[1.15] max-w-[640px]">
                  Tous les produits, conformes EU/FR sans exception.
                </h2>
                <p className="mt-5 text-[15px] text-white/70 leading-[1.7] max-w-[560px]">
                  THC &lt; 0.3%, COA par lot delivre par un laboratoire ISO
                  17025, mentions legales conformes, tracabilite complete de la
                  graine au produit fini.
                </p>
              </div>
              <Link
                href="/how-it-works#compliance"
                className="text-[12px] font-bold uppercase tracking-[0.18em] text-white border-b border-white/40 pb-2 hover:border-white transition-colors w-fit"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-[1240px] mx-auto text-center py-16 lg:py-20">
          <h2 className="text-[36px] sm:text-[48px] font-medium tracking-[-0.04em] leading-[1.1] max-w-2xl mx-auto">
            Pret a lancer votre marque ?
          </h2>
          <p className="mt-5 text-[16px] text-[#4d4f56] max-w-xl mx-auto leading-[1.7]">
            Creez votre compte gratuitement, parcourez le catalogue complet et
            commandez vos premiers echantillons.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/profile">
              <Button className="rounded-full px-7 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Commencer gratuitement
              </Button>
            </Link>
            <Link href="/incubateur">
              <Button
                variant="outline"
                className="rounded-full px-7 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]"
              >
                Decouvrir Signed Label
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
