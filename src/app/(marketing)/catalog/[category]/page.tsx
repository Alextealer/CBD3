import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { ProductGrid } from "@/components/catalog/product-grid";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/payload";

export const dynamic = "force-dynamic";

interface Product {
  name: string;
  volume: string;
  cbdRange: string;
  thc: string;
  price: string;
  tags: string[];
  badge?: "Nouveau" | "Bientot";
  variants?: number;
  type?: string;
  concern?: string;
  ingredients?: string[];
  packaging?: string;
}

interface CategoryData {
  name: string;
  description: string;
  products: Product[];
}

const categoriesData: Record<string, CategoryData> = {
  "huiles-cbd": {
    name: "Huiles CBD",
    description: "Huiles sublinguales et MCT professionnelles incluant spectre complet, broad spectrum et isolat. Personnalisez l'etiquette, le flacon et le coffret a votre marque.",
    products: [
      { name: "Huile CBD 5% Spectre Complet", volume: "10 ml / 0.34 fl oz", cbdRange: "5%", thc: "< 0.3%", price: "4.50", tags: ["Bien-etre", "Chanvre EU"], badge: "Nouveau", type: "Spectre complet", concern: "Relaxation", ingredients: ["CBD", "Huile MCT", "Terpenes"], packaging: "Flacon verre" },
      { name: "Huile CBD 10% MCT", volume: "10 ml / 0.34 fl oz", cbdRange: "10%", thc: "< 0.3%", price: "7.00", tags: ["Relaxation", "Spectre complet"], type: "Spectre complet", concern: "Relaxation", ingredients: ["CBD", "Huile MCT"], packaging: "Flacon verre" },
      { name: "Huile CBD 15% Premium", volume: "10 ml / 0.34 fl oz", cbdRange: "15%", thc: "< 0.3%", price: "9.50", tags: ["Premium", "Chanvre bio"], type: "Spectre complet", concern: "Bien-etre general", ingredients: ["CBD", "Huile MCT", "Vitamine E"], packaging: "Flacon verre" },
      { name: "Huile CBD 20% Broad Spectrum", volume: "10 ml / 0.34 fl oz", cbdRange: "20%", thc: "< 0.3%", price: "12.00", tags: ["Broad spectrum", "Sans THC"], type: "Broad spectrum", concern: "Bien-etre general", ingredients: ["CBD", "CBG", "Huile MCT"], packaging: "Flacon verre" },
      { name: "Huile CBD 25% Concentrate", volume: "10 ml / 0.34 fl oz", cbdRange: "25%", thc: "< 0.3%", price: "15.00", tags: ["Haute concentration"], type: "Broad spectrum", concern: "Bien-etre intense", ingredients: ["CBD", "CBG", "Huile MCT"], packaging: "Flacon verre ambre" },
      { name: "Huile CBD 30% Ultra", volume: "30 ml / 1.01 fl oz", cbdRange: "30%", thc: "< 0.3%", price: "22.00", tags: ["Ultra", "Grand format"], badge: "Nouveau", type: "Spectre complet", concern: "Bien-etre intense", ingredients: ["CBD", "CBC", "Huile MCT", "Terpenes"], packaging: "Flacon verre ambre" },
      { name: "Huile CBD Nuit CBN", volume: "10 ml / 0.34 fl oz", cbdRange: "10%", thc: "< 0.3%", price: "9.00", tags: ["Nuit", "CBN", "Melatonine"], type: "Spectre complet", concern: "Sommeil", ingredients: ["CBD", "CBN", "Melatonine", "Huile MCT"], packaging: "Flacon verre" },
      { name: "Huile CBD Sport Curcuma", volume: "10 ml / 0.34 fl oz", cbdRange: "15%", thc: "< 0.3%", price: "10.00", tags: ["Sport", "Curcuma"], type: "Broad spectrum", concern: "Recuperation", ingredients: ["CBD", "Curcuma", "Piperine", "Huile MCT"], packaging: "Flacon verre" },
    ],
  },
  "fleurs-cbd": {
    name: "Fleurs CBD",
    description: "Fleurs indoor, outdoor et greenhouse premium avec profils terpeniques uniques. Varietes selectionnees pour leur qualite et leur conformite EU/FR.",
    products: [
      { name: "Amnesia Haze CBD", volume: "Par gramme", cbdRange: "18-22%", thc: "< 0.3%", price: "3.00", tags: ["Indoor", "Citron"], badge: "Nouveau", type: "Indoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Limonene"], packaging: "Sachet hermetique" },
      { name: "OG Kush CBD", volume: "Par gramme", cbdRange: "15-20%", thc: "< 0.3%", price: "3.50", tags: ["Indoor", "Terreux"], type: "Indoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Caryophyllene"], packaging: "Sachet hermetique" },
      { name: "Strawberry CBD", volume: "Par gramme", cbdRange: "12-16%", thc: "< 0.3%", price: "2.50", tags: ["Greenhouse", "Fruite"], variants: 2, type: "Greenhouse", concern: "Detente", ingredients: ["CBD", "Linalol", "Myrcene"], packaging: "Sachet hermetique" },
      { name: "Lemon Haze CBD", volume: "Par gramme", cbdRange: "20-24%", thc: "< 0.3%", price: "4.00", tags: ["Indoor", "Agrumes"], type: "Indoor", concern: "Energie", ingredients: ["CBD", "Limonene", "Terpinolene"], packaging: "Pot verre" },
      { name: "White Widow CBD", volume: "Par gramme", cbdRange: "10-14%", thc: "< 0.3%", price: "2.00", tags: ["Outdoor", "Classique"], type: "Outdoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Pinene"], packaging: "Sachet hermetique" },
      { name: "Gorilla Glue CBD", volume: "Par gramme", cbdRange: "22-26%", thc: "< 0.3%", price: "4.50", tags: ["Indoor Premium", "Resineux"], badge: "Nouveau", type: "Indoor", concern: "Relaxation intense", ingredients: ["CBD", "Caryophyllene", "Limonene", "Myrcene"], packaging: "Pot verre" },
    ],
  },
  "cosmetiques-cbd": {
    name: "Cosmetiques CBD",
    description: "Cremes, baumes, serums et huiles de massage infuses au CBD. Formulations clean beauty conformes aux normes cosmetiques EU.",
    products: [
      { name: "Creme Visage Hydratante CBD", volume: "50 ml / 1.69 fl oz", cbdRange: "100mg", thc: "< 0.3%", price: "8.00", tags: ["Visage", "Hydratant"], type: "Creme", concern: "Hydratation", ingredients: ["CBD", "Acide hyaluronique", "Aloe vera"], packaging: "Pot blanc" },
      { name: "Baume Levres Nourrissant CBD", volume: "15 ml / 0.51 fl oz", cbdRange: "25mg", thc: "< 0.3%", price: "3.00", tags: ["Levres", "Nourrissant"], type: "Baume", concern: "Nutrition", ingredients: ["CBD", "Beurre de karite", "Cire d'abeille"], packaging: "Stick" },
      { name: "Serum Anti-age CBD", volume: "30 ml / 1.01 fl oz", cbdRange: "200mg", thc: "< 0.3%", price: "12.00", tags: ["Visage", "Acide hyaluronique"], badge: "Nouveau", type: "Serum", concern: "Anti-age", ingredients: ["CBD", "Acide hyaluronique", "Vitamine C", "Retinol"], packaging: "Flacon pipette" },
      { name: "Huile Massage Relaxante CBD", volume: "100 ml / 3.38 fl oz", cbdRange: "500mg", thc: "< 0.3%", price: "10.00", tags: ["Corps", "Massage"], type: "Huile", concern: "Relaxation", ingredients: ["CBD", "Huile d'amande", "Lavande"], packaging: "Flacon pompe" },
      { name: "Baume Musculaire CBD", volume: "50 ml / 1.69 fl oz", cbdRange: "300mg", thc: "< 0.3%", price: "9.00", tags: ["Corps", "Chaud-froid"], badge: "Nouveau", type: "Baume", concern: "Recuperation", ingredients: ["CBD", "Menthol", "Camphre", "Arnica"], packaging: "Pot blanc" },
    ],
  },
  "infusions-cbd": {
    name: "Infusions CBD",
    description: "Tisanes et infusions au chanvre bio. Melanges avec plantes complementaires pour le bien-etre quotidien.",
    products: [
      { name: "Infusion Detente Camomille", volume: "20 sachets", cbdRange: "5mg/sachet", thc: "< 0.3%", price: "5.00", tags: ["Detente", "Camomille"], type: "Sachets", concern: "Relaxation", ingredients: ["CBD", "Camomille", "Tilleul"], packaging: "Boite carton" },
      { name: "Infusion Nuit Verveine", volume: "20 sachets", cbdRange: "5mg/sachet", thc: "< 0.3%", price: "5.00", tags: ["Nuit", "Verveine"], type: "Sachets", concern: "Sommeil", ingredients: ["CBD", "Verveine", "Passiflore"], packaging: "Boite carton" },
      { name: "Infusion Digestion Menthe", volume: "20 sachets", cbdRange: "5mg/sachet", thc: "< 0.3%", price: "5.00", tags: ["Digestion", "Menthe"], badge: "Nouveau", type: "Sachets", concern: "Digestion", ingredients: ["CBD", "Menthe", "Fenouil"], packaging: "Boite carton" },
      { name: "Chanvre Nature Vrac", volume: "50 g / 1.76 oz", cbdRange: "Variable", thc: "< 0.3%", price: "6.00", tags: ["Nature", "Vrac"], type: "Vrac", concern: "Bien-etre general", ingredients: ["CBD", "Chanvre pur"], packaging: "Sachet kraft" },
    ],
  },
  coffrets: {
    name: "Coffrets Decouverte",
    description: "Coffrets cadeaux et decouverte. Ideaux pour l'echantillonnage, les offres speciales et les cadeaux.",
    products: [
      { name: "Coffret Decouverte Huiles", volume: "3 x 5 ml", cbdRange: "5%, 10%, 15%", thc: "< 0.3%", price: "12.00", tags: ["Decouverte", "Huiles"], badge: "Nouveau", type: "Coffret", concern: "Decouverte", packaging: "Coffret carton premium" },
      { name: "Coffret Bien-etre Complet", volume: "3 produits", cbdRange: "Variable", thc: "< 0.3%", price: "18.00", tags: ["Cadeau", "Mix"], type: "Coffret", concern: "Bien-etre general", packaging: "Coffret carton premium" },
      { name: "Coffret Premium Selection", volume: "5 produits", cbdRange: "Variable", thc: "< 0.3%", price: "35.00", tags: ["Premium", "Selection"], type: "Coffret", concern: "Cadeau", packaging: "Coffret luxe" },
    ],
  },
  "resines-cbd": {
    name: "Resines CBD",
    description: "Hash et resines CBD artisanales. Extractions premium avec des taux de CBD eleves, conformes EU/FR.",
    products: [
      { name: "Hash Afghan CBD", volume: "Par gramme", cbdRange: "20-25%", thc: "< 0.3%", price: "5.00", tags: ["Traditionnel", "Afghan"], type: "Hash", concern: "Relaxation", ingredients: ["CBD", "Terpenes naturels"], packaging: "Sachet hermetique" },
      { name: "Pollen CBD", volume: "Par gramme", cbdRange: "15-20%", thc: "< 0.3%", price: "4.00", tags: ["Filtration", "Sableux"], type: "Pollen", concern: "Relaxation", ingredients: ["CBD", "Trichomes"], packaging: "Sachet hermetique" },
      { name: "Moonrock CBD", volume: "Par gramme", cbdRange: "30-40%", thc: "< 0.3%", price: "8.00", tags: ["Premium", "Haute concentration"], badge: "Nouveau", type: "Moonrock", concern: "Relaxation intense", ingredients: ["CBD", "Kief", "Huile CBD"], packaging: "Pot verre" },
      { name: "Charas CBD Artisanal", volume: "Par gramme", cbdRange: "18-22%", thc: "< 0.3%", price: "6.00", tags: ["Artisanal", "Frotte main"], type: "Charas", concern: "Relaxation", ingredients: ["CBD", "Terpenes naturels"], packaging: "Sachet hermetique" },
    ],
  },
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Map DB product doc to the shape ProductGrid expects
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  // Try DB first
  const dbCategory = await getCategoryBySlug(category);
  const dbProducts = dbCategory ? await getProductsByCategory(category) : [];

  // Fallback to hardcoded
  const fallback = categoriesData[category];
  if (!dbCategory && !fallback) notFound();

  const categoryName = dbCategory?.name || fallback.name;
  const categoryDescription = dbCategory?.description || fallback.description;
  const products: Product[] = dbProducts.length > 0
    ? dbProducts.map(mapDbProduct)
    : fallback?.products || [];

  return (
    <>
      <ProductGrid
        products={products}
        categoryName={categoryName}
        categoryDescription={categoryDescription}
      />

      {/* ==================== COMPLIANCE BANNER ==================== */}
      <section className="py-10 bg-[#f7f7f8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["THC < 0.3%", "COA par lot", "Chanvre certifie EU", "Labo ISO 17025"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-[13px] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[44px] font-medium tracking-[-0.05em] leading-[1.1] mb-4">
            Pret a personnaliser ces produits ?
          </h2>
          <p className="text-[16px] text-[#4d4f56] mb-8">
            Creez votre compte et commencez a designer vos produits CBD des maintenant.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/profile">
              <Button className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Commencer
              </Button>
            </Link>
            <Link href="/catalog">
              <Button variant="outline" className="rounded-full px-6 text-[12px] font-bold uppercase tracking-[0.02em] h-[56px]">
                Voir tout le catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
