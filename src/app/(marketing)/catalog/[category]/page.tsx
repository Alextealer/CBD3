import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  ShieldCheck,
  FileCheck,
  Truck,
  ArrowRight,
  Check,
  Palette,
  Package,
  Droplets,
  Flower2,
  CircleDot,
  Cigarette,
  FlaskConical,
  Battery,
  Cookie,
} from "lucide-react";
import { ProductGrid } from "@/components/catalog/product-grid";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/payload";
import { categoriesData, type Product } from "@/data/products";
import { categoryContent } from "@/data/category-content";

export const dynamic = "force-dynamic";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "fleur-cbd": Flower2,
  "hash-cbd": CircleDot,
  "pre-roll-cbd": Cigarette,
  "huiles-cbd": Droplets,
  "extractions-cbd": FlaskConical,
  "cartridges-cbd": Battery,
  "edibles-cbd": Cookie,
  "cosmetique-cbd": Leaf,
};

const accentMap: Record<string, string> = {
  "fleur-cbd": "from-green-100 to-emerald-100",
  "hash-cbd": "from-blue-100 to-indigo-100",
  "pre-roll-cbd": "from-stone-100 to-stone-200",
  "huiles-cbd": "from-amber-100 to-orange-100",
  "extractions-cbd": "from-orange-100 to-amber-100",
  "cartridges-cbd": "from-purple-100 to-violet-100",
  "edibles-cbd": "from-rose-100 to-pink-100",
  "cosmetique-cbd": "from-pink-100 to-rose-100",
};

function mapDbProduct(doc: Record<string, unknown>): Product {
  const tags = Array.isArray(doc.tags) ? doc.tags : [];
  const generalTags: string[] = [];
  const ingredients: string[] = [];
  let type: string | undefined;
  let concern: string | undefined;
  let packaging: string | undefined;

  for (const tag of tags) {
    if (!tag || typeof tag !== "object") continue;
    const t = tag as { label?: string; category?: string };
    if (!t.label) continue;
    switch (t.category) {
      case "tag":
        generalTags.push(t.label);
        break;
      case "ingredient":
        ingredients.push(t.label);
        break;
      case "type":
        type = t.label;
        break;
      case "concern":
        concern = t.label;
        break;
      case "packaging":
        packaging = t.label;
        break;
    }
  }

  return {
    name: String(doc.name),
    volume: String(doc.volume),
    cbdRange: String(doc.cbdRange),
    thc: String(doc.thc),
    price: typeof doc.price === "number" ? doc.price.toFixed(2) : String(doc.price),
    tags: generalTags,
    badge: (doc.badge as Product["badge"]) || undefined,
    variants: typeof doc.variants === "number" ? doc.variants : undefined,
    type,
    concern,
    ingredients: ingredients.length > 0 ? ingredients : undefined,
    packaging,
  };
}

const orderSteps = [
  { n: "01", title: "Selectionnez", body: "Choisissez vos references depuis le catalogue ci-dessous. Echantillon possible." },
  { n: "02", title: "Personnalisez", body: "Etiquette, packaging, finitions via le Design Studio ou notre service design." },
  { n: "03", title: "Validez & expedez", body: "Bon a tirer, validation, production, expedition sous 5 a 10 jours." },
];

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const dbCategory = await getCategoryBySlug(category);
  const dbProducts = dbCategory ? await getProductsByCategory(category) : [];

  const fallback = categoriesData[category];
  if (!dbCategory && !fallback) notFound();

  const categoryName = dbCategory?.name || fallback.name;
  const categoryDescription = dbCategory?.description || fallback.description;
  const products: Product[] = dbProducts.length > 0
    ? dbProducts.map(mapDbProduct)
    : fallback?.products || [];

  // CMS-first: read editorial fields from the Categories doc, fallback to hardcoded.
  const fb = categoryContent[category];
  const cms = (dbCategory ?? {}) as Record<string, unknown>;
  const arr = <T,>(key: string): T[] | undefined => {
    const v = cms[key];
    return Array.isArray(v) && v.length > 0 ? (v as T[]) : undefined;
  };
  const str = (key: string): string | undefined => {
    const v = cms[key];
    return typeof v === "string" && v.trim() ? v : undefined;
  };

  const content = fb
    ? {
        tagline: str("tagline") ?? fb.tagline,
        intro: arr<{ text: string }>("intro")?.map((p) => p.text) ?? fb.intro,
        highlights: arr<{ title: string; body: string }>("highlights") ?? fb.highlights,
        formats: arr<{ label: string; body: string }>("formats") ?? fb.formats,
        customization:
          arr<{ text: string }>("customization")?.map((c) => c.text) ?? fb.customization,
        audience: arr<{ title: string; body: string }>("audience") ?? fb.audience,
        faqs: arr<{ q: string; a: string }>("faqs") ?? fb.faqs,
      }
    : null;
  const Icon = iconMap[category] ?? Leaf;
  const accent = accentMap[category] ?? "from-stone-100 to-stone-200";

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mt-6">
        <div className="bg-foreground text-white rounded-[2rem] overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-8 lg:px-16 py-20 lg:py-28">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end">
              <div className="max-w-[680px]">
                <div className="flex items-center gap-3 mb-6">
                  <Link
                    href="/catalog"
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
                  >
                    ← Catalogue
                  </Link>
                  <span className="text-white/30">/</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Marque blanche
                  </span>
                </div>
                <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] font-medium tracking-[-0.05em] leading-[1.05]">
                  {categoryName}
                </h1>
                {content && (
                  <p className="mt-6 text-[16px] sm:text-[18px] font-medium text-white/70 leading-[1.6] max-w-[540px]">
                    {content.tagline}
                  </p>
                )}

                <div className="mt-10 flex items-center gap-4">
                  <a
                    href="#catalogue"
                    className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] bg-white text-foreground hover:bg-white/90 inline-flex items-center"
                  >
                    Voir les references
                  </a>
                  <Link
                    href="/profile"
                    className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] border border-white/40 text-white hover:bg-white/10 transition-colors inline-flex items-center"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>

              <div
                className={`hidden lg:flex w-[280px] aspect-square rounded-[2rem] bg-gradient-to-br ${accent} items-center justify-center`}
              >
                <Icon className="h-24 w-24 text-foreground/70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST STRIP ==================== */}
      <section className="py-8 border-b">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, label: "THC < 0.3%" },
              { icon: FileCheck, label: "COA par lot" },
              { icon: Leaf, label: "Chanvre certifie EU" },
              { icon: Truck, label: "Expedition 48 h" },
            ].map((g) => (
              <div key={g.label} className="flex items-center gap-3">
                <g.icon className="h-4 w-4 text-foreground" />
                <span className="text-[13px] font-medium">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INTRO / EDITORIAL ==================== */}
      {content && (
        <section className="py-24 lg:py-28">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 sticky top-24">
                Categorie
              </p>
              <div className="max-w-[680px]">
                <p className="text-[24px] sm:text-[32px] font-medium tracking-[-0.03em] leading-[1.25]">
                  {categoryDescription}
                </p>
                <div className="mt-10 space-y-5 text-[16px] text-[#4d4f56] leading-[1.75]">
                  {content.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== HIGHLIGHTS ==================== */}
      {content && (
        <section className="py-24 lg:py-28 bg-[#f7f7f8]">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
                Points forts
              </p>
              <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
                Ce qui differencie notre offre {categoryName.toLowerCase()}.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10">
              {content.highlights.map((h, i) => (
                <div key={h.title} className="bg-[#f7f7f8] p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-5">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] mb-3">
                    {h.title}
                  </h3>
                  <p className="text-[14px] text-[#4d4f56] leading-[1.7]">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== PRODUCT GRID ==================== */}
      <section id="catalogue" className="scroll-mt-20">
        <ProductGrid
          products={products}
          categoryName={categoryName}
          categoryDescription=""
          categorySlug={category}
        />
      </section>

      {/* ==================== FORMATS & CUSTOMIZATION ==================== */}
      {content && (
        <section className="py-24 lg:py-28">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Formats */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-6">
                  Formats disponibles
                </p>
                <h2 className="text-[32px] sm:text-[36px] font-medium tracking-[-0.04em] leading-[1.15] mb-10">
                  Le bon format pour chaque canal.
                </h2>
                <div className="space-y-5">
                  {content.formats.map((f) => (
                    <div
                      key={f.label}
                      className="grid grid-cols-[180px_1fr] gap-6 pb-5 border-b border-foreground/10"
                    >
                      <div className="flex items-start gap-2.5">
                        <Package className="h-4 w-4 mt-0.5 text-foreground/60 shrink-0" />
                        <span className="text-[14px] font-semibold leading-snug">
                          {f.label}
                        </span>
                      </div>
                      <p className="text-[14px] text-[#4d4f56] leading-[1.6]">{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-6">
                  Personnalisation
                </p>
                <h2 className="text-[32px] sm:text-[36px] font-medium tracking-[-0.04em] leading-[1.15] mb-10">
                  Tout est imprimable, tout est ajustable.
                </h2>
                <div className="bg-[#faf5ed] rounded-2xl p-8 lg:p-10">
                  <ul className="space-y-4">
                    {content.customization.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-foreground rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-[15px] leading-[1.6]">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/design-studio">
                    <Button className="mt-8 rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[52px]">
                      <Palette className="h-4 w-4 mr-2" />
                      Outils de design
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== AUDIENCE ==================== */}
      {content && (
        <section className="py-24 lg:py-28 bg-[#f7f7f8]">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
                Pour qui
              </p>
              <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
                Cette categorie convient particulierement a :
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {content.audience.map((a) => (
                <div key={a.title} className="bg-white rounded-2xl p-7">
                  <h3 className="text-[18px] font-semibold mb-3">{a.title}</h3>
                  <p className="text-[14px] text-[#4d4f56] leading-[1.7]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== ORDER PROCESS ==================== */}
      <section className="py-24 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Commander
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
              Trois etapes, du choix a l&apos;expedition.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {orderSteps.map((s) => (
              <div key={s.n} className="bg-[#f7f7f8] rounded-2xl p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-6">
                  {s.n}
                </p>
                <h3 className="text-[22px] font-medium tracking-[-0.02em] mb-3">{s.title}</h3>
                <p className="text-[14px] text-[#4d4f56] leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      {content && content.faqs.length > 0 && (
        <section className="py-24 lg:py-28 bg-[#f7f7f8]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 mb-6 text-center">
              Questions frequentes
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] text-center mb-12">
              Sur la categorie {categoryName.toLowerCase()}.
            </h2>

            <div className="space-y-4">
              {content.faqs.map((item) => (
                <details
                  key={item.q}
                  className="group border bg-white rounded-2xl overflow-hidden"
                >
                  <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4">
                    <h3 className="text-[16px] font-semibold pr-4">{item.q}</h3>
                    <div className="w-8 h-8 rounded-full bg-[#f7f7f8] flex items-center justify-center shrink-0 group-open:bg-foreground group-open:text-white transition-colors">
                      <ArrowRight className="h-4 w-4 group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-[14px] text-[#4d4f56] leading-[1.7]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== CTA ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1240px] mx-auto bg-foreground text-white rounded-[2rem] px-10 py-16 lg:px-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[600px]">
                Pret a lancer votre {categoryName.toLowerCase()} ?
              </h2>
              <p className="mt-5 text-[15px] text-white/70 leading-[1.7] max-w-[480px]">
                Creez votre compte, commandez vos echantillons, designez votre
                packaging. Le tout en moins d&apos;une heure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/profile">
                <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] bg-white text-foreground hover:bg-white/90">
                  Commencer
                </Button>
              </Link>
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px] border-white/40 text-white hover:bg-white/10 bg-transparent"
                >
                  Tout le catalogue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
