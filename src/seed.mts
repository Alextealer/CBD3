/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Seed script — populates Supabase with initial content
 * Run: npm run seed
 */
import fs from "fs";
import path from "path";

// Manual .env.local loader (must run before payload import)
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
  console.log(`✓ Loaded ${envPath}`);
}

// Dynamic imports AFTER env loading (ESM imports are hoisted, so static imports would run before env is set)
const { getPayload } = await import("payload");
const config = (await import("./payload.config.ts")).default;

async function seed() {
  const payload = await getPayload({ config });

  console.log("🌱 Starting seed...");

  // ========================================================================
  // CATEGORIES
  // ========================================================================
  console.log("📂 Seeding categories...");
  const categoriesData = [
    {
      name: "Huiles CBD",
      slug: "huiles-cbd",
      description: "Huiles sublinguales et MCT professionnelles incluant spectre complet, broad spectrum et isolat. Personnalisez l'etiquette, le flacon et le coffret a votre marque.",
      shortDescription: "Sublinguales et MCT",
      icon: "droplets",
      bgColor: "bg-amber-50",
      order: 1,
    },
    {
      name: "Fleurs CBD",
      slug: "fleurs-cbd",
      description: "Fleurs indoor, outdoor et greenhouse premium avec profils terpeniques uniques. Varietes selectionnees pour leur qualite et leur conformite EU/FR.",
      shortDescription: "Indoor, outdoor, greenhouse",
      icon: "flower",
      bgColor: "bg-green-50",
      order: 2,
    },
    {
      name: "Cosmetiques CBD",
      slug: "cosmetiques-cbd",
      description: "Cremes, baumes, serums et huiles de massage infuses au CBD. Formulations clean beauty conformes aux normes cosmetiques EU.",
      shortDescription: "Cremes, baumes, serums",
      icon: "leaf",
      bgColor: "bg-pink-50",
      order: 3,
    },
    {
      name: "Infusions CBD",
      slug: "infusions-cbd",
      description: "Tisanes et infusions au chanvre bio. Melanges avec plantes complementaires pour le bien-etre quotidien.",
      shortDescription: "Tisanes au chanvre",
      icon: "coffee",
      bgColor: "bg-orange-50",
      order: 4,
    },
    {
      name: "Coffrets Decouverte",
      slug: "coffrets",
      description: "Coffrets cadeaux et decouverte. Ideaux pour l'echantillonnage, les offres speciales et les cadeaux.",
      shortDescription: "Coffrets decouverte",
      icon: "gift",
      bgColor: "bg-purple-50",
      order: 5,
    },
    {
      name: "Resines CBD",
      slug: "resines-cbd",
      description: "Hash et resines CBD artisanales. Extractions premium avec des taux de CBD eleves, conformes EU/FR.",
      shortDescription: "Hash et resines",
      icon: "circle-dot",
      bgColor: "bg-blue-50",
      order: 6,
    },
  ];

  const createdCategories: Record<string, any> = {};
  for (const cat of categoriesData) {
    // Check if exists
    const existing = await payload.find({
      collection: "categories",
      where: { slug: { equals: cat.slug } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      console.log(`  · Category "${cat.name}" already exists, skipping`);
      createdCategories[cat.slug] = existing.docs[0];
    } else {
      const created = await payload.create({
        collection: "categories",
        data: cat as any,
      });
      console.log(`  ✓ Created category "${cat.name}"`);
      createdCategories[cat.slug] = created;
    }
  }

  // ========================================================================
  // TAGS — collect from products data
  // ========================================================================
  console.log("🏷️  Seeding tags...");
  const tagSet: Record<string, { label: string; category: string }> = {};

  const addTag = (label: string, category: string) => {
    const key = `${category}:${label}`;
    if (!tagSet[key]) tagSet[key] = { label, category };
  };

  // Will be populated from products below
  const allProducts = buildProductsData(createdCategories);

  allProducts.forEach((p) => {
    p.tags?.forEach((t: string) => addTag(t, "tag"));
    p.ingredients?.forEach((i: string) => addTag(i, "ingredient"));
    if (p.type) addTag(p.type, "type");
    if (p.concern) addTag(p.concern, "concern");
    if (p.packaging) addTag(p.packaging, "packaging");
    if (p.cbdRange) addTag(p.cbdRange, "concentration");
  });

  const createdTags: Record<string, any> = {};
  for (const key in tagSet) {
    const { label, category } = tagSet[key];
    const existing = await payload.find({
      collection: "tags",
      where: {
        and: [
          { label: { equals: label } },
          { category: { equals: category } },
        ],
      },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      createdTags[key] = existing.docs[0];
    } else {
      const created = await payload.create({
        collection: "tags",
        data: { label, category } as any,
      });
      createdTags[key] = created;
    }
  }
  console.log(`  ✓ ${Object.keys(createdTags).length} tags ready`);

  // ========================================================================
  // PRODUCTS
  // ========================================================================
  console.log("📦 Seeding products...");
  for (const p of allProducts) {
    const existing = await payload.find({
      collection: "products",
      where: { slug: { equals: p.slug } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      console.log(`  · Product "${p.name}" exists, skipping`);
      continue;
    }

    const tagIds: string[] = [];
    (p.tags || []).forEach((t: string) => {
      const tag = createdTags[`tag:${t}`];
      if (tag) tagIds.push(tag.id);
    });
    (p.ingredients || []).forEach((i: string) => {
      const tag = createdTags[`ingredient:${i}`];
      if (tag) tagIds.push(tag.id);
    });

    await payload.create({
      collection: "products",
      data: {
        name: p.name,
        slug: p.slug,
        category: p.category,
        description: p.description || "",
        cbdRange: p.cbdRange,
        thc: p.thc,
        volume: p.volume,
        price: parseFloat(p.price),
        variants: p.variants,
        badge: p.badge || "",
        tags: tagIds,
        order: 0,
        isActive: true,
      } as any,
    });
    console.log(`  ✓ Created product "${p.name}"`);
  }

  // ========================================================================
  // SITE SETTINGS (global)
  // ========================================================================
  console.log("⚙️  Seeding site settings...");
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      siteName: "CBD3",
      tagline: "Lancez votre marque CBD en marque blanche",
      banner: {
        enabled: true,
        text: "Livraison offerte des 200EUR de commande",
        linkLabel: "Voir le catalogue",
        linkHref: "/catalog",
      },
      compliance: {
        thcLimitEU: "0.3%",
        thcLimitFR: "0.2%",
        disclaimer: "Produits non destines a diagnostiquer, traiter ou guerir une maladie.",
      },
      contact: {
        email: "contact@cbd3.fr",
        phone: "+33 1 23 45 67 89",
        address: "Paris, France",
      },
    } as any,
  });
  console.log("  ✓ Site settings updated");

  // ========================================================================
  // NAVIGATION — one doc per link
  // ========================================================================
  console.log("🧭 Seeding navigation...");
  const navLinks: Array<{ label: string; href: string; menu: string; order: number; icon?: string; description?: string }> = [
    // Header principal
    { label: "Produits CBD", href: "/catalog", menu: "header", order: 1 },
    { label: "Solutions & Services", href: "#", menu: "header", order: 2 },
    { label: "Ressources", href: "#", menu: "header", order: 3 },
    { label: "Tarifs", href: "/pricing", menu: "header", order: 4 },
    // Mega menu Produits
    { label: "Huiles CBD", href: "/catalog/huiles-cbd", menu: "header-products", order: 1, icon: "droplets" },
    { label: "Fleurs CBD", href: "/catalog/fleurs-cbd", menu: "header-products", order: 2, icon: "flower" },
    { label: "Cosmetiques CBD", href: "/catalog/cosmetiques-cbd", menu: "header-products", order: 3, icon: "leaf" },
    { label: "Infusions CBD", href: "/catalog/infusions-cbd", menu: "header-products", order: 4, icon: "coffee" },
    { label: "Coffrets", href: "/catalog/coffrets", menu: "header-products", order: 5, icon: "gift" },
    { label: "Resines CBD", href: "/catalog/resines-cbd", menu: "header-products", order: 6, icon: "circle-dot" },
    // Mega menu Solutions
    { label: "Comment ca marche", href: "/how-it-works", menu: "header-solutions", order: 1, icon: "help-circle" },
    { label: "Marque Blanche CBD", href: "/marque-blanche", menu: "header-solutions", order: 2, icon: "tag" },
    { label: "Dropshipping CBD", href: "/dropshipping", menu: "header-solutions", order: 3, icon: "globe" },
    { label: "Expedition & Logistique", href: "/fulfillment-shipping", menu: "header-solutions", order: 4, icon: "truck" },
    { label: "Grossiste CBD", href: "/pricing", menu: "header-solutions", order: 5, icon: "store" },
    // Mega menu Ressources
    { label: "Premiers pas", href: "/help", menu: "header-resources", order: 1, icon: "book-open" },
    { label: "Livraison & Retours", href: "/legal/shipping", menu: "header-resources", order: 2, icon: "truck" },
    { label: "Conformite & Legal", href: "/how-it-works#compliance", menu: "header-resources", order: 3, icon: "shield-check" },
    { label: "A propos", href: "/about", menu: "header-resources", order: 4, icon: "users" },
    { label: "Blog", href: "/blog", menu: "header-resources", order: 5, icon: "file-text" },
    // Footer produits
    { label: "Huiles CBD", href: "/catalog/huiles-cbd", menu: "footer-products", order: 1 },
    { label: "Fleurs CBD", href: "/catalog/fleurs-cbd", menu: "footer-products", order: 2 },
    { label: "Cosmetiques CBD", href: "/catalog/cosmetiques-cbd", menu: "footer-products", order: 3 },
    { label: "Infusions CBD", href: "/catalog/infusions-cbd", menu: "footer-products", order: 4 },
    { label: "Resines CBD", href: "/catalog/resines-cbd", menu: "footer-products", order: 5 },
    { label: "Coffrets", href: "/catalog/coffrets", menu: "footer-products", order: 6 },
    // Footer solutions
    { label: "Comment ca marche", href: "/how-it-works", menu: "footer-solutions", order: 1 },
    { label: "Marque Blanche", href: "/marque-blanche", menu: "footer-solutions", order: 2 },
    { label: "Dropshipping CBD", href: "/dropshipping", menu: "footer-solutions", order: 3 },
    { label: "Fulfillment", href: "/fulfillment-shipping", menu: "footer-solutions", order: 4 },
    { label: "Tarifs", href: "/pricing", menu: "footer-solutions", order: 5 },
    // Footer ressources
    { label: "Centre d'aide", href: "/help", menu: "footer-resources", order: 1 },
    { label: "Blog", href: "/blog", menu: "footer-resources", order: 2 },
    { label: "A propos", href: "/about", menu: "footer-resources", order: 3 },
    { label: "Contact", href: "/about#contact", menu: "footer-resources", order: 4 },
    // Footer legal
    { label: "Conditions generales", href: "/legal/terms", menu: "footer-legal", order: 1 },
    { label: "Politique de confidentialite", href: "/legal/privacy", menu: "footer-legal", order: 2 },
    { label: "Livraison & retours", href: "/legal/shipping", menu: "footer-legal", order: 3 },
    { label: "Paiements", href: "/legal/payments", menu: "footer-legal", order: 4 },
    { label: "Accessibilite", href: "/legal/accessibility", menu: "footer-legal", order: 5 },
  ];

  // Wipe existing nav first
  const existingNav = await payload.find({ collection: "navigation", limit: 1000 });
  for (const doc of existingNav.docs) {
    await payload.delete({ collection: "navigation", id: doc.id });
  }

  let navCount = 0;
  for (const link of navLinks) {
    await payload.create({ collection: "navigation", data: link as any });
    navCount++;
  }
  console.log(`  ✓ ${navCount} navigation links created`);

  // ========================================================================
  // PAGES (home only for now — others use hardcoded fallback)
  // ========================================================================
  console.log("📄 Seeding pages...");
  const existingHome = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });
  if (existingHome.docs.length === 0) {
    await payload.create({
      collection: "pages",
      data: {
        title: "Accueil",
        slug: "home",
        status: "published",
        metaDescription: "CBD3 — Lancez votre marque CBD en marque blanche. Sans stock, 100% conforme EU/FR.",
        blocks: [
          {
            blockType: "hero",
            title: "Lancez & developpez votre marque CBD",
            subtitle: "Profitez de notre expertise pour creer votre marque CBD en marque blanche. Sans minimum de commande, design 100% personnalisable.",
            features: [
              { text: "50+ produits CBD premium" },
              { text: "Mise sur le marche rapide" },
              { text: "Marges elevees" },
            ],
            ctaPrimaryLabel: "Commencer",
            ctaPrimaryHref: "/profile",
            ctaSecondaryLabel: "En savoir plus",
            ctaSecondaryHref: "/how-it-works",
          },
          {
            blockType: "stats",
            title: "Rejoignez les marques CBD qui cartonnent",
            items: [
              { value: "200+", label: "Marques CBD accompagnees" },
              { value: "50k", label: "Produits CBD premium expedies" },
              { value: "48h", label: "Delai moyen d'expedition" },
            ],
          },
          {
            blockType: "categoriesGrid",
            title: "Explorez nos produits CBD",
            categories: Object.values(createdCategories).map((c: any) => c.id),
          },
        ],
      } as any,
    });
    console.log("  ✓ Home page created");
  } else {
    console.log("  · Home page already exists, skipping");
  }

  console.log("✅ Seed complete!");
  process.exit(0);
}

// ============================================================================
// PRODUCTS DATA (migrated from hardcoded catalog)
// ============================================================================
function buildProductsData(cats: Record<string, any>) {
  return [
    // Huiles
    { name: "Huile CBD 5% Spectre Complet", slug: "huile-cbd-5-spectre-complet", category: cats["huiles-cbd"]?.id, volume: "10 ml / 0.34 fl oz", cbdRange: "5%", thc: "< 0.3%", price: "4.50", tags: ["Bien-etre", "Chanvre EU"], badge: "Nouveau", type: "Spectre complet", concern: "Relaxation", ingredients: ["CBD", "Huile MCT", "Terpenes"], packaging: "Flacon verre" },
    { name: "Huile CBD 10% MCT", slug: "huile-cbd-10-mct", category: cats["huiles-cbd"]?.id, volume: "10 ml / 0.34 fl oz", cbdRange: "10%", thc: "< 0.3%", price: "7.00", tags: ["Relaxation", "Spectre complet"], type: "Spectre complet", concern: "Relaxation", ingredients: ["CBD", "Huile MCT"], packaging: "Flacon verre" },
    { name: "Huile CBD 15% Premium", slug: "huile-cbd-15-premium", category: cats["huiles-cbd"]?.id, volume: "10 ml / 0.34 fl oz", cbdRange: "15%", thc: "< 0.3%", price: "9.50", tags: ["Premium", "Chanvre bio"], type: "Spectre complet", concern: "Bien-etre general", ingredients: ["CBD", "Huile MCT", "Vitamine E"], packaging: "Flacon verre" },
    { name: "Huile CBD 20% Broad Spectrum", slug: "huile-cbd-20-broad", category: cats["huiles-cbd"]?.id, volume: "10 ml / 0.34 fl oz", cbdRange: "20%", thc: "< 0.3%", price: "12.00", tags: ["Broad spectrum", "Sans THC"], type: "Broad spectrum", concern: "Bien-etre general", ingredients: ["CBD", "CBG", "Huile MCT"], packaging: "Flacon verre" },
    { name: "Huile CBD 25% Concentrate", slug: "huile-cbd-25-concentrate", category: cats["huiles-cbd"]?.id, volume: "10 ml / 0.34 fl oz", cbdRange: "25%", thc: "< 0.3%", price: "15.00", tags: ["Haute concentration"], type: "Broad spectrum", concern: "Bien-etre intense", ingredients: ["CBD", "CBG", "Huile MCT"], packaging: "Flacon verre ambre" },
    { name: "Huile CBD 30% Ultra", slug: "huile-cbd-30-ultra", category: cats["huiles-cbd"]?.id, volume: "30 ml / 1.01 fl oz", cbdRange: "30%", thc: "< 0.3%", price: "22.00", tags: ["Ultra", "Grand format"], badge: "Nouveau", type: "Spectre complet", concern: "Bien-etre intense", ingredients: ["CBD", "CBC", "Huile MCT", "Terpenes"], packaging: "Flacon verre ambre" },
    { name: "Huile CBD Nuit CBN", slug: "huile-cbd-nuit-cbn", category: cats["huiles-cbd"]?.id, volume: "10 ml / 0.34 fl oz", cbdRange: "10%", thc: "< 0.3%", price: "9.00", tags: ["Nuit", "CBN", "Melatonine"], type: "Spectre complet", concern: "Sommeil", ingredients: ["CBD", "CBN", "Melatonine", "Huile MCT"], packaging: "Flacon verre" },
    { name: "Huile CBD Sport Curcuma", slug: "huile-cbd-sport-curcuma", category: cats["huiles-cbd"]?.id, volume: "10 ml / 0.34 fl oz", cbdRange: "15%", thc: "< 0.3%", price: "10.00", tags: ["Sport", "Curcuma"], type: "Broad spectrum", concern: "Recuperation", ingredients: ["CBD", "Curcuma", "Piperine", "Huile MCT"], packaging: "Flacon verre" },
    // Fleurs
    { name: "Amnesia Haze CBD", slug: "amnesia-haze-cbd", category: cats["fleurs-cbd"]?.id, volume: "Par gramme", cbdRange: "18-22%", thc: "< 0.3%", price: "3.00", tags: ["Indoor", "Citron"], badge: "Nouveau", type: "Indoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Limonene"], packaging: "Sachet hermetique" },
    { name: "OG Kush CBD", slug: "og-kush-cbd", category: cats["fleurs-cbd"]?.id, volume: "Par gramme", cbdRange: "15-20%", thc: "< 0.3%", price: "3.50", tags: ["Indoor", "Terreux"], type: "Indoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Caryophyllene"], packaging: "Sachet hermetique" },
    { name: "Strawberry CBD", slug: "strawberry-cbd", category: cats["fleurs-cbd"]?.id, volume: "Par gramme", cbdRange: "12-16%", thc: "< 0.3%", price: "2.50", tags: ["Greenhouse", "Fruite"], variants: 2, type: "Greenhouse", concern: "Detente", ingredients: ["CBD", "Linalol", "Myrcene"], packaging: "Sachet hermetique" },
    { name: "Lemon Haze CBD", slug: "lemon-haze-cbd", category: cats["fleurs-cbd"]?.id, volume: "Par gramme", cbdRange: "20-24%", thc: "< 0.3%", price: "4.00", tags: ["Indoor", "Agrumes"], type: "Indoor", concern: "Energie", ingredients: ["CBD", "Limonene", "Terpinolene"], packaging: "Pot verre" },
    { name: "White Widow CBD", slug: "white-widow-cbd", category: cats["fleurs-cbd"]?.id, volume: "Par gramme", cbdRange: "10-14%", thc: "< 0.3%", price: "2.00", tags: ["Outdoor", "Classique"], type: "Outdoor", concern: "Relaxation", ingredients: ["CBD", "Myrcene", "Pinene"], packaging: "Sachet hermetique" },
    { name: "Gorilla Glue CBD", slug: "gorilla-glue-cbd", category: cats["fleurs-cbd"]?.id, volume: "Par gramme", cbdRange: "22-26%", thc: "< 0.3%", price: "4.50", tags: ["Indoor Premium", "Resineux"], badge: "Nouveau", type: "Indoor", concern: "Relaxation intense", ingredients: ["CBD", "Caryophyllene", "Limonene", "Myrcene"], packaging: "Pot verre" },
    // Cosmetiques
    { name: "Creme Visage Hydratante CBD", slug: "creme-visage-hydratante-cbd", category: cats["cosmetiques-cbd"]?.id, volume: "50 ml / 1.69 fl oz", cbdRange: "100mg", thc: "< 0.3%", price: "8.00", tags: ["Visage", "Hydratant"], type: "Creme", concern: "Hydratation", ingredients: ["CBD", "Acide hyaluronique", "Aloe vera"], packaging: "Pot blanc" },
    { name: "Baume Levres Nourrissant CBD", slug: "baume-levres-cbd", category: cats["cosmetiques-cbd"]?.id, volume: "15 ml / 0.51 fl oz", cbdRange: "25mg", thc: "< 0.3%", price: "3.00", tags: ["Levres", "Nourrissant"], type: "Baume", concern: "Nutrition", ingredients: ["CBD", "Beurre de karite", "Cire d'abeille"], packaging: "Stick" },
    { name: "Serum Anti-age CBD", slug: "serum-anti-age-cbd", category: cats["cosmetiques-cbd"]?.id, volume: "30 ml / 1.01 fl oz", cbdRange: "200mg", thc: "< 0.3%", price: "12.00", tags: ["Visage", "Acide hyaluronique"], badge: "Nouveau", type: "Serum", concern: "Anti-age", ingredients: ["CBD", "Acide hyaluronique", "Vitamine C", "Retinol"], packaging: "Flacon pipette" },
    { name: "Huile Massage Relaxante CBD", slug: "huile-massage-relaxante-cbd", category: cats["cosmetiques-cbd"]?.id, volume: "100 ml / 3.38 fl oz", cbdRange: "500mg", thc: "< 0.3%", price: "10.00", tags: ["Corps", "Massage"], type: "Huile", concern: "Relaxation", ingredients: ["CBD", "Huile d'amande", "Lavande"], packaging: "Flacon pompe" },
    { name: "Baume Musculaire CBD", slug: "baume-musculaire-cbd", category: cats["cosmetiques-cbd"]?.id, volume: "50 ml / 1.69 fl oz", cbdRange: "300mg", thc: "< 0.3%", price: "9.00", tags: ["Corps", "Chaud-froid"], badge: "Nouveau", type: "Baume", concern: "Recuperation", ingredients: ["CBD", "Menthol", "Camphre", "Arnica"], packaging: "Pot blanc" },
    // Infusions
    { name: "Infusion Detente Camomille", slug: "infusion-detente-camomille", category: cats["infusions-cbd"]?.id, volume: "20 sachets", cbdRange: "5mg/sachet", thc: "< 0.3%", price: "5.00", tags: ["Detente", "Camomille"], type: "Sachets", concern: "Relaxation", ingredients: ["CBD", "Camomille", "Tilleul"], packaging: "Boite carton" },
    { name: "Infusion Nuit Verveine", slug: "infusion-nuit-verveine", category: cats["infusions-cbd"]?.id, volume: "20 sachets", cbdRange: "5mg/sachet", thc: "< 0.3%", price: "5.00", tags: ["Nuit", "Verveine"], type: "Sachets", concern: "Sommeil", ingredients: ["CBD", "Verveine", "Passiflore"], packaging: "Boite carton" },
    { name: "Infusion Digestion Menthe", slug: "infusion-digestion-menthe", category: cats["infusions-cbd"]?.id, volume: "20 sachets", cbdRange: "5mg/sachet", thc: "< 0.3%", price: "5.00", tags: ["Digestion", "Menthe"], badge: "Nouveau", type: "Sachets", concern: "Digestion", ingredients: ["CBD", "Menthe", "Fenouil"], packaging: "Boite carton" },
    { name: "Chanvre Nature Vrac", slug: "chanvre-nature-vrac", category: cats["infusions-cbd"]?.id, volume: "50 g / 1.76 oz", cbdRange: "Variable", thc: "< 0.3%", price: "6.00", tags: ["Nature", "Vrac"], type: "Vrac", concern: "Bien-etre general", ingredients: ["CBD", "Chanvre pur"], packaging: "Sachet kraft" },
    // Coffrets
    { name: "Coffret Decouverte Huiles", slug: "coffret-decouverte-huiles", category: cats["coffrets"]?.id, volume: "3 x 5 ml", cbdRange: "Mix", thc: "< 0.3%", price: "12.00", tags: ["Decouverte", "Huiles"], badge: "Nouveau", type: "Coffret", concern: "Decouverte", packaging: "Coffret carton premium" },
    { name: "Coffret Bien-etre Complet", slug: "coffret-bien-etre-complet", category: cats["coffrets"]?.id, volume: "3 produits", cbdRange: "Variable", thc: "< 0.3%", price: "18.00", tags: ["Cadeau", "Mix"], type: "Coffret", concern: "Bien-etre general", packaging: "Coffret carton premium" },
    { name: "Coffret Premium Selection", slug: "coffret-premium-selection", category: cats["coffrets"]?.id, volume: "5 produits", cbdRange: "Variable", thc: "< 0.3%", price: "35.00", tags: ["Premium", "Selection"], type: "Coffret", concern: "Cadeau", packaging: "Coffret luxe" },
    // Resines
    { name: "Hash Afghan CBD", slug: "hash-afghan-cbd", category: cats["resines-cbd"]?.id, volume: "Par gramme", cbdRange: "20-25%", thc: "< 0.3%", price: "5.00", tags: ["Traditionnel", "Afghan"], type: "Hash", concern: "Relaxation", ingredients: ["CBD", "Terpenes naturels"], packaging: "Sachet hermetique" },
    { name: "Pollen CBD", slug: "pollen-cbd", category: cats["resines-cbd"]?.id, volume: "Par gramme", cbdRange: "15-20%", thc: "< 0.3%", price: "4.00", tags: ["Filtration", "Sableux"], type: "Pollen", concern: "Relaxation", ingredients: ["CBD", "Trichomes"], packaging: "Sachet hermetique" },
    { name: "Moonrock CBD", slug: "moonrock-cbd", category: cats["resines-cbd"]?.id, volume: "Par gramme", cbdRange: "30-40%", thc: "< 0.3%", price: "8.00", tags: ["Premium", "Haute concentration"], badge: "Nouveau", type: "Moonrock", concern: "Relaxation intense", ingredients: ["CBD", "Kief", "Huile CBD"], packaging: "Pot verre" },
    { name: "Charas CBD Artisanal", slug: "charas-cbd-artisanal", category: cats["resines-cbd"]?.id, volume: "Par gramme", cbdRange: "18-22%", thc: "< 0.3%", price: "6.00", tags: ["Artisanal", "Frotte main"], type: "Charas", concern: "Relaxation", ingredients: ["CBD", "Terpenes naturels"], packaging: "Sachet hermetique" },
  ];
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
