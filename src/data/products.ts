/**
 * Shared product catalog (hardcoded fallback) and helpers
 * used by the catalog grid and the product detail page.
 */

export interface Product {
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
  /** Path under /public — used as main product image + thumbnails + cart tile. */
  image?: string;
}

export interface CategoryData {
  name: string;
  description: string;
  products: Product[];
}

/** Slugify a product name for URLs (ASCII only, lowercase, dashes). */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const categoriesData: Record<string, CategoryData> = {
  "fleur-cbd": {
    name: "Fleur CBD",
    description: "Fleurs indoor, outdoor et greenhouse premium avec profils terpeniques uniques. Varietes selectionnees pour leur qualite et leur conformite EU/FR.",
    products: [
      { name: "Amnesia Haze CBD", volume: "Par gramme", cbdRange: "18-22%", thc: "< 0.3%", price: "3.00", tags: ["Indoor", "Citron"], badge: "Nouveau", type: "Indoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Limonene"], packaging: "Sachet hermetique", image: "/products/catalog/amnesia-haze-cbd.webp" },
      { name: "OG Kush CBD", volume: "Par gramme", cbdRange: "15-20%", thc: "< 0.3%", price: "3.50", tags: ["Indoor", "Terreux"], type: "Indoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Caryophyllene"], packaging: "Sachet hermetique" },
      { name: "Strawberry CBD", volume: "Par gramme", cbdRange: "12-16%", thc: "< 0.3%", price: "2.50", tags: ["Greenhouse", "Fruite"], variants: 2, type: "Greenhouse", concern: "Detente", ingredients: ["CBD", "Linalol", "Myrcene"], packaging: "Sachet hermetique" },
      { name: "Lemon Haze CBD", volume: "Par gramme", cbdRange: "20-24%", thc: "< 0.3%", price: "4.00", tags: ["Indoor", "Agrumes"], type: "Indoor", concern: "Energie", ingredients: ["CBD", "Limonene", "Terpinolene"], packaging: "Pot verre" },
      { name: "White Widow CBD", volume: "Par gramme", cbdRange: "10-14%", thc: "< 0.3%", price: "2.00", tags: ["Outdoor", "Classique"], type: "Outdoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Pinene"], packaging: "Sachet hermetique" },
      { name: "Gorilla Glue CBD", volume: "Par gramme", cbdRange: "22-26%", thc: "< 0.3%", price: "4.50", tags: ["Indoor Premium", "Resineux"], badge: "Nouveau", type: "Indoor", concern: "Relaxation intense", ingredients: ["CBD", "Caryophyllene", "Limonene", "Myrcene"], packaging: "Pot verre" },
    ],
  },
  "hash-cbd": {
    name: "Hash CBD",
    description: "Hash et resines CBD artisanales. Extractions premium avec des taux de CBD eleves, conformes EU/FR.",
    products: [
      { name: "Hash Afghan CBD", volume: "Par gramme", cbdRange: "20-25%", thc: "< 0.3%", price: "5.00", tags: ["Traditionnel", "Afghan"], type: "Hash", concern: "Relaxation", ingredients: ["CBD", "Terpenes naturels"], packaging: "Sachet hermetique" },
      { name: "Pollen CBD", volume: "Par gramme", cbdRange: "15-20%", thc: "< 0.3%", price: "4.00", tags: ["Filtration", "Sableux"], type: "Pollen", concern: "Relaxation", ingredients: ["CBD", "Trichomes"], packaging: "Sachet hermetique" },
      { name: "Moonrock CBD", volume: "Par gramme", cbdRange: "30-40%", thc: "< 0.3%", price: "8.00", tags: ["Premium", "Haute concentration"], badge: "Nouveau", type: "Moonrock", concern: "Relaxation intense", ingredients: ["CBD", "Kief", "Huile CBD"], packaging: "Pot verre" },
      { name: "Charas CBD Artisanal", volume: "Par gramme", cbdRange: "18-22%", thc: "< 0.3%", price: "6.00", tags: ["Artisanal", "Frotte main"], type: "Charas", concern: "Relaxation", ingredients: ["CBD", "Terpenes naturels"], packaging: "Sachet hermetique" },
    ],
  },
  "pre-roll-cbd": {
    name: "Pre roll CBD",
    description: "Joints CBD prets a fumer, roules a la main avec nos meilleures fleurs indoor et greenhouse. Conformes EU/FR.",
    products: [
      { name: "Pre Roll Amnesia Haze", volume: "0.7 g / unite", cbdRange: "18-22%", thc: "< 0.3%", price: "3.50", tags: ["Indoor", "Citron"], badge: "Nouveau", type: "Pre roll", concern: "Detente", ingredients: ["Fleur CBD"], packaging: "Tube hermetique" },
      { name: "Pre Roll OG Kush", volume: "0.7 g / unite", cbdRange: "15-20%", thc: "< 0.3%", price: "3.50", tags: ["Indoor", "Terreux"], type: "Pre roll", concern: "Relaxation", ingredients: ["Fleur CBD"], packaging: "Tube hermetique" },
      { name: "Pack 5 Pre Rolls Mix", volume: "5 x 0.7 g", cbdRange: "Variable", thc: "< 0.3%", price: "16.00", tags: ["Mix", "Decouverte"], type: "Pre roll", concern: "Decouverte", ingredients: ["Fleur CBD"], packaging: "Boite carton" },
      { name: "Pre Roll Hash Twax", volume: "1 g / unite", cbdRange: "25-30%", thc: "< 0.3%", price: "6.00", tags: ["Premium", "Hash"], badge: "Nouveau", type: "Pre roll", concern: "Relaxation intense", ingredients: ["Fleur CBD", "Hash CBD"], packaging: "Tube verre" },
    ],
  },
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
  "extractions-cbd": {
    name: "Extractions CBD",
    description: "Concentres CBD haut de gamme : wax, shatter, crumble, live resin. Extractions premium pour dabbing et formulation.",
    products: [
      { name: "CBD Wax Spectre Complet", volume: "1 g / pot", cbdRange: "70-80%", thc: "< 0.3%", price: "18.00", tags: ["Wax", "Spectre complet"], badge: "Nouveau", type: "Wax", concern: "Concentre", ingredients: ["Extrait CBD", "Terpenes"], packaging: "Pot silicone" },
      { name: "CBD Shatter", volume: "1 g / unite", cbdRange: "80-90%", thc: "< 0.3%", price: "22.00", tags: ["Shatter", "Premium"], type: "Shatter", concern: "Concentre", ingredients: ["Extrait CBD", "Terpenes"], packaging: "Pochon parchemin" },
      { name: "CBD Crumble", volume: "1 g / pot", cbdRange: "75-85%", thc: "< 0.3%", price: "20.00", tags: ["Crumble", "Friable"], type: "Crumble", concern: "Concentre", ingredients: ["Extrait CBD", "Terpenes"], packaging: "Pot silicone" },
      { name: "CBD Live Resin", volume: "1 g / pot", cbdRange: "65-75%", thc: "< 0.3%", price: "25.00", tags: ["Live Resin", "Aromatique"], badge: "Nouveau", type: "Live Resin", concern: "Concentre", ingredients: ["Extrait CBD", "Terpenes preserves"], packaging: "Pot verre" },
    ],
  },
  "cartridges-cbd": {
    name: "Cartridges CBD",
    description: "Cartouches CBD pre-remplies pour vape pen 510. Distillats premium avec terpenes naturels, sans additifs.",
    products: [
      { name: "Cartridge OG Kush", volume: "1 ml / 510", cbdRange: "60%", thc: "< 0.3%", price: "20.00", tags: ["510", "Indica"], type: "Cartridge", concern: "Detente", ingredients: ["Distillat CBD", "Terpenes OG Kush"], packaging: "Blister" },
      { name: "Cartridge Lemon Haze", volume: "1 ml / 510", cbdRange: "60%", thc: "< 0.3%", price: "20.00", tags: ["510", "Sativa"], badge: "Nouveau", type: "Cartridge", concern: "Energie", ingredients: ["Distillat CBD", "Terpenes Lemon Haze"], packaging: "Blister" },
      { name: "Disposable Pen Strawberry", volume: "0.5 ml", cbdRange: "55%", thc: "< 0.3%", price: "15.00", tags: ["Disposable", "Fruite"], type: "Disposable", concern: "Detente", ingredients: ["Distillat CBD", "Terpenes Strawberry"], packaging: "Blister" },
      { name: "Cartridge Broad Spectrum", volume: "1 ml / 510", cbdRange: "65%", thc: "0%", price: "22.00", tags: ["510", "Sans THC"], type: "Cartridge", concern: "Bien-etre", ingredients: ["Distillat CBD", "CBG"], packaging: "Blister" },
    ],
  },
  "edibles-cbd": {
    name: "Edibles CBD",
    description: "Bonbons, chocolats, gommes et infusions CBD doses precisement. Format snacking pour usage quotidien.",
    products: [
      { name: "Gummies CBD Fruits Rouges", volume: "30 unites x 10 mg", cbdRange: "10mg/unite", thc: "< 0.3%", price: "12.00", tags: ["Gummies", "Fruite"], badge: "Nouveau", type: "Gummies", concern: "Detente", ingredients: ["CBD", "Pectine", "Aromes naturels"], packaging: "Pot opaque" },
      { name: "Chocolat Noir CBD 70%", volume: "100 g / tablette", cbdRange: "200mg/tablette", thc: "< 0.3%", price: "9.00", tags: ["Chocolat", "Premium"], type: "Chocolat", concern: "Detente", ingredients: ["CBD", "Cacao 70%", "Beurre de cacao"], packaging: "Etui carton" },
      { name: "Gommes CBD Nuit Melatonine", volume: "30 unites x 25 mg", cbdRange: "25mg/unite", thc: "< 0.3%", price: "18.00", tags: ["Sommeil", "Melatonine"], badge: "Nouveau", type: "Gummies", concern: "Sommeil", ingredients: ["CBD", "Melatonine", "Pectine"], packaging: "Pot opaque" },
      { name: "Infusion Detente Camomille", volume: "20 sachets", cbdRange: "5mg/sachet", thc: "< 0.3%", price: "5.00", tags: ["Infusion", "Camomille"], type: "Infusion", concern: "Relaxation", ingredients: ["CBD", "Camomille", "Tilleul"], packaging: "Boite carton" },
      { name: "Miel CBD Acacia", volume: "150 g / pot", cbdRange: "300mg/pot", thc: "< 0.3%", price: "14.00", tags: ["Miel", "Naturel"], type: "Miel", concern: "Bien-etre", ingredients: ["CBD", "Miel acacia"], packaging: "Pot verre" },
    ],
  },
  "cosmetique-cbd": {
    name: "Cosmetique CBD",
    description: "Cremes, baumes, serums et huiles de massage infuses au CBD. Formulations clean beauty conformes aux normes cosmetiques EU.",
    products: [
      { name: "Creme Visage Hydratante CBD", volume: "50 ml / 1.69 fl oz", cbdRange: "100mg", thc: "< 0.3%", price: "8.00", tags: ["Visage", "Hydratant"], type: "Creme", concern: "Hydratation", ingredients: ["CBD", "Acide hyaluronique", "Aloe vera"], packaging: "Pot blanc" },
      { name: "Baume Levres Nourrissant CBD", volume: "15 ml / 0.51 fl oz", cbdRange: "25mg", thc: "< 0.3%", price: "3.00", tags: ["Levres", "Nourrissant"], type: "Baume", concern: "Nutrition", ingredients: ["CBD", "Beurre de karite", "Cire d'abeille"], packaging: "Stick" },
      { name: "Serum Anti-age CBD", volume: "30 ml / 1.01 fl oz", cbdRange: "200mg", thc: "< 0.3%", price: "12.00", tags: ["Visage", "Acide hyaluronique"], badge: "Nouveau", type: "Serum", concern: "Anti-age", ingredients: ["CBD", "Acide hyaluronique", "Vitamine C", "Retinol"], packaging: "Flacon pipette" },
      { name: "Huile Massage Relaxante CBD", volume: "100 ml / 3.38 fl oz", cbdRange: "500mg", thc: "< 0.3%", price: "10.00", tags: ["Corps", "Massage"], type: "Huile", concern: "Relaxation", ingredients: ["CBD", "Huile d'amande", "Lavande"], packaging: "Flacon pompe" },
      { name: "Baume Musculaire CBD", volume: "50 ml / 1.69 fl oz", cbdRange: "300mg", thc: "< 0.3%", price: "9.00", tags: ["Corps", "Chaud-froid"], badge: "Nouveau", type: "Baume", concern: "Recuperation", ingredients: ["CBD", "Menthol", "Camphre", "Arnica"], packaging: "Pot blanc" },
    ],
  },
};

/** Find a product by category slug + product slug. Returns null if not found. */
export function findProductBySlug(categorySlug: string, productSlug: string) {
  const cat = categoriesData[categorySlug];
  if (!cat) return null;
  const product = cat.products.find((p) => slugify(p.name) === productSlug);
  if (!product) return null;
  return { category: cat, categorySlug, product };
}
