import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronRight,
  Leaf,
  FileCheck,
  ShieldCheck,
  Beaker,
  Package,
  Palette,
  Upload,
  Sparkles,
  Truck,
} from "lucide-react";
import { categoriesData, slugify, type Product } from "@/data/products";
import { FormatSelector } from "@/components/catalog/format-selector";
import { ProductImage } from "@/components/catalog/product-image";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

/** Detect products sold by weight (flowers, hash, resines, vrac, etc.). */
function isWeightBased(product: Product) {
  return /gramme|\bvrac\b|\bg\b/i.test(product.volume);
}

/**
 * Build a price ladder with two columns:
 *  - PDA  = Prix d'Achat (wholesale our → reseller)
 *  - PDVC = Prix De Vente Conseille (suggested retail reseller → customer)
 * Applied per format: weight-based OR unit-based.
 */
type Tier = {
  format: string;       // "3 g", "50 u.", …
  qty: number;          // 3, 50, …
  pdaUnit: number;      // per-gram or per-unit wholesale
  pdvcUnit: number;     // per-gram or per-unit retail
  pdaTotal: number;     // qty * pdaUnit
  pdvcTotal: number;    // qty * pdvcUnit
  discount: number;     // % off vs smallest tier's per-unit price
  margin: number;       // % margin for the reseller per unit
};

function buildTiers(basePrice: number, weightBased: boolean): Tier[] {
  // Scale factors: per-qty discount (PDA) + retail markup factor (PDVC)
  const rows = weightBased
    ? [
        { format: "3 g",    qty: 3,    pdaMul: 1.00, pdvcMul: 3.0 },
        { format: "5 g",    qty: 5,    pdaMul: 0.95, pdvcMul: 2.8 },
        { format: "10 g",   qty: 10,   pdaMul: 0.88, pdvcMul: 2.5 },
        { format: "25 g",   qty: 25,   pdaMul: 0.80, pdvcMul: 2.2 },
        { format: "50 g",   qty: 50,   pdaMul: 0.72, pdvcMul: 2.0 },
        { format: "100 g",  qty: 100,  pdaMul: 0.65, pdvcMul: 1.8 },
      ]
    : [
        { format: "50 u.",   qty: 50,   pdaMul: 1.00, pdvcMul: 3.0 },
        { format: "100 u.",  qty: 100,  pdaMul: 0.90, pdvcMul: 2.8 },
        { format: "250 u.",  qty: 250,  pdaMul: 0.82, pdvcMul: 2.5 },
        { format: "500 u.",  qty: 500,  pdaMul: 0.75, pdvcMul: 2.3 },
        { format: "1000 u.", qty: 1000, pdaMul: 0.68, pdvcMul: 2.1 },
      ];

  const refPda = basePrice * rows[0].pdaMul;
  return rows.map((r) => {
    const pdaUnit = +(basePrice * r.pdaMul).toFixed(2);
    const pdvcUnit = +(pdaUnit * r.pdvcMul).toFixed(2);
    return {
      format: r.format,
      qty: r.qty,
      pdaUnit,
      pdvcUnit,
      pdaTotal: +(pdaUnit * r.qty).toFixed(2),
      pdvcTotal: +(pdvcUnit * r.qty).toFixed(2),
      discount: Math.round((1 - pdaUnit / refPda) * 100),
      margin: Math.round(((pdvcUnit - pdaUnit) / pdvcUnit) * 100),
    };
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const cat = categoriesData[category];
  if (!cat) notFound();
  const product = cat.products.find((p) => slugify(p.name) === slug);
  if (!product) notFound();

  const basePrice = parseFloat(product.price);
  const weightBased = isWeightBased(product);
  const tiers = buildTiers(basePrice, weightBased);
  const unitLabel = weightBased ? "gramme" : "unite";
  const unitShort = weightBased ? "/ g" : "/ u.";
  const related: Product[] = cat.products
    .filter((p) => p.name !== product.name)
    .slice(0, 4);

  const highlights = [
    { icon: ShieldCheck, label: "THC < 0.3% EU" },
    { icon: FileCheck, label: "COA inclus par lot" },
    { icon: Leaf, label: "Chanvre certifie EU" },
    { icon: Beaker, label: "Labo ISO 17025" },
  ];

  const customSteps = [
    { icon: Upload, title: "1. Importez votre logo", text: "PNG, SVG ou Illustrator. On s'occupe du placement et de l'impression." },
    { icon: Palette, title: "2. Choisissez vos couleurs", text: "Etiquette, pochette, coffret. Pantone ou RAL accepte." },
    { icon: Package, title: "3. Selectionnez le packaging", text: "Flacon verre, pot, sachet, coffret premium. 100% personnalisable." },
    { icon: Sparkles, title: "4. Validez le bon a tirer", text: "Notre equipe vous envoie un rendu 3D avant fabrication on demand." },
  ];

  return (
    <>
      {/* ==================== BREADCRUMB ==================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-1.5 text-[12px] font-medium text-[#4d4f56]">
          <Link href="/catalog" className="hover:underline">Catalogue</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/catalog/${category}`} className="hover:underline">{cat.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </section>

      {/* ==================== HERO ==================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div>
            {/* Main image */}
            <div className="relative mb-3">
              {product.badge && (
                <span
                  className={`absolute top-4 left-4 z-10 text-[11px] font-semibold px-3 py-1.5 rounded-full ${
                    product.badge === "Nouveau" ? "bg-[#e8f5e9] text-green-800" : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {product.badge}
                </span>
              )}
              <ProductImage src={product.image} alt={product.name} variant="hero" />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <ProductImage
                  key={i}
                  src={product.image}
                  alt={`${product.name} ${i + 1}`}
                  variant="thumb"
                  className={i === 0 ? "ring-2 ring-foreground" : ""}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              {cat.name}
            </p>
            <h1 className="text-[40px] font-semibold tracking-[-0.04em] leading-[1.1] mb-4">
              {product.name}
            </h1>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-[#4d4f56] border rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Key specs pills */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-[#f7f7f8] rounded-xl p-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1">CBD</p>
                <p className="text-[15px] font-semibold">{product.cbdRange}</p>
              </div>
              <div className="bg-[#f7f7f8] rounded-xl p-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1">THC</p>
                <p className="text-[15px] font-semibold">{product.thc}</p>
              </div>
              <div className="bg-[#f7f7f8] rounded-xl p-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-1">Volume</p>
                <p className="text-[15px] font-semibold">{product.volume}</p>
              </div>
            </div>

            {/* Interactive format selector — PDA + PDVC per format */}
            <FormatSelector
              tiers={tiers}
              unitShort={unitShort}
              unitLabel={unitLabel}
              weightBased={weightBased}
              productName={product.name}
              productImage={product.image}
              productSlug={slug}
              categoryName={cat.name}
            />

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Icon className="h-3.5 w-3.5 text-green-700" />
                  </div>
                  <span className="text-[13px] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DESCRIPTION / SPECS ==================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] mb-4">
              Description produit
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#333] mb-4">
              {product.name} est formule pour s&apos;integrer a une gamme marque
              blanche premium. {cat.description}
            </p>
            <p className="text-[15px] leading-[1.7] text-[#4d4f56]">
              Chaque lot est analyse par un laboratoire tiers (ISO 17025). Le certificat
              d&apos;analyse (COA) vous est remis par numero de lot. Conformite EU et
              France : taux de THC inferieur a 0,3%, tracabilite du chanvre, etiquetage
              conforme CE/INCI.
            </p>

            {/* Composition */}
            {product.ingredients && product.ingredients.length > 0 && (
              <>
                <h3 className="text-[18px] font-semibold mt-10 mb-4">Composition</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="bg-[#f7f7f8] rounded-full px-3.5 py-1.5 text-[12px] font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Conseil d'utilisation */}
            <h3 className="text-[18px] font-semibold mt-10 mb-3">Conseils d&apos;utilisation</h3>
            <p className="text-[14px] leading-[1.7] text-[#4d4f56]">
              Produit destine a un usage adulte. Ne remplace pas une alimentation
              equilibree ni un traitement medical. Tenir hors de portee des enfants.
              Deconseille aux femmes enceintes ou allaitantes. En cas de doute,
              consulter un professionnel de sante.
            </p>
          </div>

          {/* Specs sidebar */}
          <div>
            <div className="bg-[#faf5ed] rounded-2xl p-6 sticky top-24">
              <h3 className="text-[14px] font-bold uppercase tracking-wider mb-4">
                Specifications
              </h3>
              <dl className="space-y-3 text-[13px]">
                {[
                  ["Categorie", cat.name],
                  ["Type", product.type],
                  ["Concentration CBD", product.cbdRange],
                  ["Taux THC", product.thc],
                  ["Volume", product.volume],
                  ["Usage", product.concern],
                  ["Packaging", product.packaging],
                  ["Origine", "Union Europeenne"],
                  ["Fabrication", "On demand, a la commande"],
                  ["Stock", "Sans minimum"],
                ]
                  .filter(([, v]) => !!v)
                  .map(([k, v]) => (
                    <div key={k as string} className="flex justify-between gap-4 py-2 border-b border-[#ede4cc] last:border-0">
                      <dt className="text-[#4d4f56] shrink-0">{k}</dt>
                      <dd className="font-medium text-right">{v}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CUSTOMIZATION STEPS ==================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#f7f7f8] rounded-[2rem] p-8 lg:p-12">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              100% Marque blanche
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.15]">
              Personnalisez ce produit a votre marque
            </h2>
            <p className="text-[15px] text-[#4d4f56] mt-3">
              De l&apos;etiquette au coffret premium, tout est personnalisable.
              Notre equipe packaging vous accompagne gratuitement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customSteps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6">
                <div className="w-11 h-11 bg-foreground text-background rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-semibold mb-2">{title}</h3>
                <p className="text-[13px] text-[#4d4f56] leading-[1.5]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING TIERS — PDA + PDVC ==================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
            Grille tarifaire degressive
          </span>
          <h2 className="text-[36px] font-semibold tracking-[-0.04em] leading-[1.15]">
            {weightBased
              ? "Vendez-le au poids que vous voulez"
              : "Plus vous commandez, moins vous payez"}
          </h2>
          <p className="text-[15px] text-[#4d4f56] mt-3 max-w-2xl mx-auto">
            Vous achetez au <strong>PDA</strong> (prix d&apos;achat) et revendez a vos
            clients au <strong>PDVC</strong> (prix de vente conseille). La marge est
            calculee pour vous &mdash; {weightBased
              ? "formats 3 g a 100 g prets a revendre."
              : "degressif des 50 unites."}
          </p>
        </div>

        {/* Legend */}
        <div className="max-w-4xl mx-auto mb-4 flex flex-wrap items-center justify-end gap-4 text-[11px] font-medium text-[#4d4f56]">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-foreground" />
            <span><strong>PDA</strong> : votre prix d&apos;achat HT</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-600" />
            <span><strong>PDVC</strong> : prix de vente conseille a vos clients</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-[#e5e5e7]">
          <table className="w-full text-[13px] min-w-[680px]">
            <thead className="bg-[#faf5ed] text-[11px] font-bold uppercase tracking-wider text-left">
              <tr>
                <th className="px-5 py-4">Format</th>
                <th className="px-5 py-4 text-right">
                  PDA <span className="text-[#9ca3af] font-medium">({unitShort})</span>
                </th>
                <th className="px-5 py-4 text-right">PDA total</th>
                <th className="px-5 py-4 text-right">
                  PDVC <span className="text-[#9ca3af] font-medium">({unitShort})</span>
                </th>
                <th className="px-5 py-4 text-right">PDVC total</th>
                <th className="px-5 py-4 text-right">Remise</th>
                <th className="px-5 py-4 text-right">Votre marge</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t, i) => (
                <tr
                  key={t.format}
                  className={`${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"} border-t border-[#f1f1f3]`}
                >
                  <td className="px-5 py-4 font-semibold">{t.format}</td>
                  <td className="px-5 py-4 text-right">{t.pdaUnit.toFixed(2)} EUR</td>
                  <td className="px-5 py-4 text-right font-semibold">{t.pdaTotal.toFixed(2)} EUR</td>
                  <td className="px-5 py-4 text-right text-green-700">
                    {t.pdvcUnit.toFixed(2)} EUR
                  </td>
                  <td className="px-5 py-4 text-right font-semibold text-green-700">
                    {t.pdvcTotal.toFixed(2)} EUR
                  </td>
                  <td className="px-5 py-4 text-right">
                    {t.discount > 0 ? (
                      <span className="inline-flex bg-foreground text-background text-[11px] font-bold px-2 py-0.5 rounded-full">
                        -{t.discount}%
                      </span>
                    ) : (
                      <span className="text-[#9ca3af] text-[12px]">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <span className="inline-flex bg-green-50 text-green-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
                      {t.margin}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="max-w-4xl mx-auto mt-5 grid sm:grid-cols-2 gap-3 text-[12px] text-[#4d4f56]">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 shrink-0" />
            <span>
              {weightBased
                ? "Livraison Europe incluse des 100 g."
                : "Livraison Europe incluse des 500 unites."}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>
              Les PDVC sont indicatifs &mdash; vous restez libre de fixer vos prix
              publics.
            </span>
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      {related.length > 0 && (
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em]">
              Dans la meme categorie
            </h2>
            <Link
              href={`/catalog/${category}`}
              className="text-[12px] font-bold uppercase tracking-[0.02em] hover:underline"
            >
              Voir tout <ChevronRight className="inline h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <Link
                key={p.name}
                href={`/catalog/${category}/${slugify(p.name)}`}
                className="group"
              >
                <div className="relative mb-3">
                  {p.badge && (
                    <span
                      className={`absolute top-3 left-3 z-10 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        p.badge === "Nouveau" ? "bg-[#e8f5e9] text-green-800" : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <ProductImage
                    src={p.image}
                    alt={p.name}
                    variant="card"
                    imgClassName="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[12px] text-[#4d4f56] mb-1">{p.volume}</p>
                <h3 className="text-[14px] font-medium group-hover:underline">{p.name}</h3>
                <p className="text-[14px] font-semibold mt-1">{p.price} EUR HT</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ==================== CTA ==================== */}
      <section className="py-16 mt-12 bg-[#faf5ed]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] mb-4">
            Pret a lancer votre marque de {cat.name.toLowerCase()} ?
          </h2>
          <p className="text-[16px] text-[#4d4f56] mb-8">
            Creez votre compte et recevez votre premier bon a tirer en 48h.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/profile">
              <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Commencer
              </Button>
            </Link>
            <Link href={`/catalog/${category}`}>
              <Button
                variant="outline"
                className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]"
              >
                Voir toute la categorie
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center items-center gap-6 text-[12px] text-[#4d4f56] flex-wrap">
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" /> Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" /> Echantillons gratuits
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" /> Conseil packaging inclus
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
