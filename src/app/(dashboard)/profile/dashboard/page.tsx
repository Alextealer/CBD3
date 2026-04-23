import Link from "next/link";
import {
  ArrowRight,
  Check,
  Percent,
  MoreVertical,
  Download,
  Play,
  ChevronLeft,
  ChevronRight,
  FileText,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "../../dashboard-header";
import { categoriesData, slugify } from "@/data/products";

export const dynamic = "force-dynamic";

// ============== data ==============
const nextSteps = [
  {
    n: "01",
    title: "Completer le profil",
    desc: "Partagez un peu de vous pour personnaliser votre experience.",
    cta: "Completer",
    state: "active" as const,
  },
  {
    n: "02",
    title: "Commander des echantillons",
    desc: "Testez un produit ou un coffret avant de lancer votre marque.",
    cta: "Commander",
    state: "todo" as const,
  },
  {
    n: "03",
    title: "Infos entreprise",
    desc: "Ajoutez vos informations TVA et de facturation.",
    cta: "Completer",
    state: "todo" as const,
  },
  {
    n: "04",
    title: "Personnaliser un produit",
    desc: "Creez votre premier design sur un produit du catalogue.",
    cta: "",
    state: "done" as const,
  },
];

const promos = [
  {
    title: "NOUVELLE\nGAMME\nAMNESIA",
    subtitle: "Fleur premium indoor",
    bg: "bg-[#cfe5f3]",
  },
  {
    title: "SUIVI\nLABO\nISO 17025",
    subtitle: "COA par lot — conformite totale",
    bg: "bg-[#ece4d8]",
  },
];

const tutorials = [
  {
    title: "Intro aux produits Unsigned",
    author: "Ksenia Kumachova",
    desc: "Tout ce qu'il faut savoir sur les formules, les claims et la conformite.",
  },
  {
    title: "Comment creer un produit",
    author: "Equipe Unsigned",
    desc: "Apprenez a personnaliser votre packaging CBD avec notre catalogue complet.",
  },
];

const nextArticles = [
  { title: "Ingredients CBD tendance 2026", tag: "EDITORIAL", bg: "bg-[#1b2463]" },
  { title: "Marketing CBD reseaux sociaux", tag: "MARKETING", bg: "bg-[#f0e8d8]" },
  { title: "Tendances du marche bien-etre", tag: "EDITORIAL", bg: "bg-[#e8d5d0]" },
  { title: "Guide complet des 6 types de peau", tag: "BIEN-ETRE", bg: "bg-[#d4e4d8]" },
];

// Use first 4 catalog products as "My products"
function pickMyProducts() {
  const result: { categorySlug: string; product: (typeof categoriesData)["huiles-cbd"]["products"][number] }[] = [];
  for (const [slug, cat] of Object.entries(categoriesData)) {
    for (const p of cat.products) {
      result.push({ categorySlug: slug, product: p });
      if (result.length >= 4) return result;
    }
  }
  return result;
}

// Use 5 top products
function pickTopProducts() {
  const result: { categorySlug: string; product: (typeof categoriesData)["huiles-cbd"]["products"][number] }[] = [];
  for (const [slug, cat] of Object.entries(categoriesData)) {
    for (const p of cat.products) {
      if (p.image) result.push({ categorySlug: slug, product: p });
      if (result.length >= 5) return result;
    }
  }
  // fallback: first 5 regardless
  if (result.length < 5) {
    for (const [slug, cat] of Object.entries(categoriesData)) {
      for (const p of cat.products) {
        if (!p.image) result.push({ categorySlug: slug, product: p });
        if (result.length >= 5) return result;
      }
    }
  }
  return result;
}

export default async function DashboardPage() {
  const myProducts = pickMyProducts();
  const topProducts = pickTopProducts();

  return (
    <div className="px-10 py-8 max-w-[1120px]">
      <DashboardHeader title="Bonjour alboni !" />

      {/* ============= PROMO BANNER ============= */}
      <section data-reveal className="bg-[#f1eefe] rounded-[1.5rem] p-6 flex items-center gap-5 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0">
          <Percent className="h-6 w-6 text-[#6c3fee]" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-[18px] font-semibold">
            Debloquez -15% sur toutes vos commandes dropshipping
          </h2>
          <p className="text-[13px] text-[#4d4f56]">
            Activez notre plan decouverte et profitez d&apos;economies pendant 1 mois !
          </p>
        </div>
        <Button className="rounded-full h-11 px-5 text-[12px] font-bold uppercase tracking-wider shrink-0">
          Activer
        </Button>
      </section>

      {/* ============= YOUR NEXT STEPS ============= */}
      <section data-reveal className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em]">Vos prochaines etapes</h2>
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-medium text-[#4d4f56]">1 etape sur 4 terminee</span>
            <div className="w-36 h-1 bg-[#f1f1f3] rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-[#6c3fee] rounded-full" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {nextSteps.map((s) => (
            <div
              key={s.n}
              className={`rounded-[1.25rem] p-5 bg-white border ${
                s.state === "active"
                  ? "border-[#6c3fee] shadow-[0_0_0_2px_rgba(108,63,238,0.18)]"
                  : "border-[#f1f1f3]"
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9ca3af]">
                Etape {s.n}
              </p>
              {s.state === "done" ? (
                <div className="my-5 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-600" strokeWidth={3} />
                  </div>
                </div>
              ) : (
                <div className="h-4" />
              )}
              <h3 className="text-[16px] font-semibold leading-snug">{s.title}</h3>
              <p className="text-[12px] text-[#4d4f56] leading-snug mt-1.5 mb-4">{s.desc}</p>
              {s.cta && (
                <Button
                  className={`rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider ${
                    s.state === "active"
                      ? "bg-foreground text-background"
                      : "bg-[#f7f7f8] text-foreground hover:bg-[#ebebed]"
                  }`}
                >
                  {s.cta}
                </Button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============= PROMO CARDS ============= */}
      <section data-reveal className="grid md:grid-cols-2 gap-5 mb-10">
        {promos.map((p) => (
          <div key={p.title} className={`${p.bg} rounded-[1.5rem] p-8 h-[240px] relative overflow-hidden`}>
            <h3 className="text-[32px] font-black tracking-[-0.03em] leading-[0.95] whitespace-pre-line">
              {p.title}
            </h3>
            <p className="text-[13px] font-medium mt-3 max-w-[240px]">{p.subtitle}</p>
          </div>
        ))}
      </section>

      {/* ============= YOUR PRODUCTS ============= */}
      <section data-reveal className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em]">Vos produits</h2>
          <Link
            href="/profile/my-products"
            className="text-[12px] font-bold uppercase tracking-wider flex items-center gap-1 hover:underline"
          >
            Mes produits <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {myProducts.map(({ categorySlug, product }, i) => (
            <div
              key={`${product.name}-${i}`}
              className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-4 flex gap-4 items-center"
            >
              <div className="w-[84px] h-[84px] shrink-0 rounded-xl bg-[#eeeeee] overflow-hidden flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 mix-blend-multiply"
                  />
                ) : (
                  <span className="text-[9px] font-bold text-[#9ca3af] text-center leading-tight px-1">
                    MOCKUP
                    <br />
                    EN COURS
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6c3fee] bg-[#f1eefe] w-fit px-2 py-0.5 rounded-md mb-1.5">
                  Template produit
                </p>
                <Link
                  href={`/catalog/${categorySlug}/${slugify(product.name)}`}
                  className="text-[14px] font-semibold hover:underline"
                >
                  {product.name}
                </Link>
                <p className="text-[11px] text-[#9ca3af] mt-0.5">{product.volume}</p>
                <div className="flex items-center gap-2 mt-3">
                  <Button className="rounded-full h-8 px-3.5 text-[10px] font-bold uppercase tracking-wider">
                    Ajouter au panier
                  </Button>
                  <button className="w-8 h-8 rounded-full border border-[#f1f1f3] hover:bg-[#f7f7f8] flex items-center justify-center">
                    <MoreVertical className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= TOP PRODUCTS ============= */}
      <section data-reveal className="mb-10">
        <h2 className="text-[22px] font-semibold tracking-[-0.01em] mb-5">Top produits</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {topProducts.map(({ categorySlug, product }) => (
            <Link
              key={product.name}
              href={`/catalog/${categorySlug}/${slugify(product.name)}`}
              className="group relative rounded-2xl overflow-hidden bg-[#eeeeee] flex flex-col"
            >
              {product.badge && (
                <span className="absolute top-2.5 left-2.5 z-10 text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#d4e4a8] text-[#3d6b1e]">
                  {product.badge}
                </span>
              )}
              <span
                className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white shadow hover:bg-[#6c3fee] hover:text-white transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                aria-label="Ajouter design"
              >
                <Pencil className="h-3 w-3" />
              </span>

              <div className="aspect-square flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 mix-blend-multiply"
                  />
                ) : (
                  <div className="relative">
                    <div className="w-10 h-14 bg-white rounded-md shadow-sm" />
                    <div className="w-12 h-5 bg-[#2a2a2a] rounded-t mx-auto -mt-0.5" />
                  </div>
                )}
              </div>

              <div className="px-3.5 pb-3.5 pt-2 bg-white">
                {product.tags.slice(0, 2).length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {product.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold text-[#4d4f56] bg-[#f7f7f8] px-1.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-[10px] text-[#9ca3af]">
                  {product.volume}
                  {product.variants ? ` · ${product.variants} Variantes` : ""}
                </p>
                <h3 className="text-[12px] font-semibold leading-tight mt-0.5 mb-1 truncate group-hover:underline">
                  {product.name}
                </h3>
                <p className="text-[13px] font-bold">
                  {product.price} EUR{" "}
                  <span className="text-[10px] font-normal text-[#9ca3af]">TTC</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============= DOWNLOAD TEMPLATES ============= */}
      <section data-reveal className="mb-10">
        <h2 className="text-[22px] font-semibold tracking-[-0.01em] mb-5">
          Telecharger les templates produits
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Adobe Illustrator", bg: "bg-[#1c0d00]", fg: "text-[#ff7f18]", initial: "Ai", cta: "Telecharger" },
            { name: "Figma", bg: "bg-white border border-[#f1f1f3]", fg: "text-[#f24e1e]", initial: "F", cta: "Ouvrir" },
          ].map((tpl) => (
            <div
              key={tpl.name}
              className="rounded-[1.25rem] border border-[#f1f1f3] bg-white p-4 flex items-center gap-4"
            >
              <div className={`w-[72px] h-[72px] rounded-xl ${tpl.bg} flex items-center justify-center`}>
                <span className={`text-[28px] font-bold ${tpl.fg}`}>{tpl.initial}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#9ca3af]">Template pour</p>
                <h3 className="text-[16px] font-semibold leading-tight">&quot;{tpl.name}&quot;</h3>
              </div>
              <Button className="rounded-full h-10 px-5 text-[11px] font-bold uppercase tracking-wider">
                {tpl.name === "Figma" ? (
                  <>
                    <FileText className="h-3.5 w-3.5 mr-1.5" /> {tpl.cta}
                  </>
                ) : (
                  <>
                    <Download className="h-3.5 w-3.5 mr-1.5" /> {tpl.cta}
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ============= TUTORIALS ============= */}
      <section data-reveal className="mb-10">
        <h2 className="text-[22px] font-semibold tracking-[-0.01em] mb-5">Tutoriels</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {tutorials.map((t) => (
            <div key={t.title} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-[#e9d5ff] to-[#f3dfe6]">
                <div className="absolute top-4 left-4 bg-[#6c3fee] text-white rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider">
                  Pro tips
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-[16px] font-semibold mt-4">{t.title}</h3>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af] mt-1">
                Par {t.author}
              </p>
              <p className="text-[13px] text-[#4d4f56] leading-snug mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============= WHAT'S NEXT ============= */}
      <section data-reveal className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[22px] font-semibold tracking-[-0.01em]">Et apres ?</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-9 h-9 rounded-full border border-[#f1f1f3] bg-[#f7f7f8] text-[#9ca3af] flex items-center justify-center cursor-not-allowed"
              aria-label="Precedent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80"
              aria-label="Suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nextArticles.map((a, i) => (
            <article key={a.title} className="group cursor-pointer">
              <div className={`${a.bg} rounded-[1.25rem] p-5 aspect-[3/4] flex flex-col overflow-hidden relative`}>
                <h3 className={`text-[15px] font-semibold leading-tight mb-3 ${i === 0 ? "text-white" : "text-foreground"}`}>
                  {a.title}
                </h3>
                <span
                  className={`w-fit text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    a.tag === "EDITORIAL"
                      ? "bg-[#f8e16c] text-[#1a1a1a]"
                      : a.tag === "MARKETING"
                        ? "bg-[#f1eefe] text-[#6c3fee]"
                        : "bg-[#d4e4d8] text-[#3d6b1e]"
                  }`}
                >
                  {a.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
