import Link from "next/link";
import {
  Zap,
  RefreshCw,
  Package,
  Globe,
  ShieldCheck,
  ArrowRight,
  ArrowLeftRight,
  Bell,
  Database,
  ShoppingCart,
  CreditCard,
  Webhook,
  Code2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  Store,
  Sparkles,
  FileCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ============================================================
   DATA
   ============================================================ */

const platforms = [
  {
    name: "Shopify",
    level: "Officiel",
    bg: "bg-[#95bf47]",
    initial: "S",
    fg: "text-white",
    desc: "L'integration la plus rapide. App native publiee sur le Shopify App Store. Produits synchronises en 1 clic.",
    setupTime: "3 min",
    features: ["Import produits auto", "Sync stock & prix", "Webhooks commandes", "Retours & remboursements"],
    ready: true,
  },
  {
    name: "WooCommerce",
    level: "Officiel",
    bg: "bg-[#7f54b3]",
    initial: "Wo",
    fg: "text-white",
    desc: "Plugin officiel WordPress + WooCommerce. Installation one-click depuis le repertoire WP.",
    setupTime: "5 min",
    features: ["Plugin WP officiel", "Variantes & attributs", "Hooks WooCommerce", "Multi-devises"],
    ready: true,
  },
  {
    name: "Prestashop",
    level: "Module",
    bg: "bg-[#df0067]",
    initial: "Ps",
    fg: "text-white",
    desc: "Module Prestashop pour pousser notre catalogue dans votre boutique francaise ou europeenne.",
    setupTime: "8 min",
    features: ["Module Prestashop", "Synchro catalogue", "Commandes auto", "Facturation FR"],
    ready: true,
  },
  {
    name: "API REST & Webhooks",
    level: "Custom",
    bg: "bg-[#1a1a1a]",
    initial: "{ }",
    fg: "text-white",
    desc: "Pour tout site custom, marketplace, headless commerce ou ERP. Documentation OpenAPI.",
    setupTime: "Dev",
    features: ["OpenAPI 3.1 docs", "Webhooks signes", "SDK JS & PHP", "Rate limit 1000/h"],
    ready: true,
  },
  {
    name: "Wix & Squarespace",
    level: "Via Zapier",
    bg: "bg-[#ffe01b]",
    initial: "Z",
    fg: "text-[#1a1a1a]",
    desc: "Connectez vos boutiques Wix, Squarespace ou Webflow via notre integration Zapier officielle.",
    setupTime: "10 min",
    features: ["1000+ apps Zapier", "Automations no-code", "Sync commandes", "Filtres conditionnels"],
    ready: true,
  },
  {
    name: "Marketplace Amazon",
    level: "Bientot",
    bg: "bg-[#ff9900]",
    initial: "A",
    fg: "text-white",
    desc: "Integration Amazon Seller Central en cours de developpement. Rejoignez la waitlist.",
    setupTime: "—",
    features: ["Seller Central", "FBA compatible", "Multi-marketplaces", "Gestion FBM"],
    ready: false,
  },
];

const flow = [
  {
    icon: Store,
    title: "1. Connectez votre boutique",
    desc: "OAuth en 1 clic (Shopify), plugin (WooCommerce) ou cle API (custom). Authentification securisee, zero mot de passe.",
  },
  {
    icon: Download,
    title: "2. Importez le catalogue",
    desc: "Cochez les produits Unsigned a pousser dans votre boutique. Descriptions, images, variantes, PDVC — tout est rempli automatiquement.",
  },
  {
    icon: Sparkles,
    title: "3. Personnalisez le design",
    desc: "Ouvrez le Design Studio, appliquez votre marque sur l'etiquette et le packaging. Bon a tirer valide en 48 h.",
  },
  {
    icon: ShoppingCart,
    title: "4. Vendez sous votre marque",
    desc: "Chaque commande client declenche automatiquement la fabrication on demand + l'expedition directe sous colis neutre.",
  },
];

const syncCapabilities = [
  { icon: ArrowLeftRight, title: "Bidirectionnelle", desc: "Produits, stock, commandes, clients — tout circule dans les deux sens en temps reel." },
  { icon: Bell, title: "Webhooks signes", desc: "Evenements commande, paiement, expedition pousses sur votre endpoint avec signature HMAC." },
  { icon: Database, title: "Mapping personnalise", desc: "Alignez nos champs (SKU, categorie, tags) avec les vos. Transformations visuelles, pas de code." },
  { icon: RefreshCw, title: "Synchronisation auto", desc: "Toutes les 5 minutes. Resynchronisation manuelle 1 clic si besoin. Rollback possible sur 30 jours." },
  { icon: CreditCard, title: "Multi-devises & TVA", desc: "EUR, USD, GBP, CHF, SEK. Calcul automatique de la TVA intra-UE selon l'adresse de livraison." },
  { icon: ShieldCheck, title: "Securise & RGPD", desc: "Chiffrement TLS 1.3, stockage UE, logs d'audit, conforme RGPD et PCI-DSS niveau 1." },
];

const events = [
  { evt: "product.created", desc: "Nouveau produit disponible dans le catalogue" },
  { evt: "product.updated", desc: "Prix, stock, variantes ou image modifies" },
  { evt: "order.paid", desc: "Commande client confirmee et payee" },
  { evt: "order.fulfilled", desc: "Commande expediee avec numero de suivi" },
  { evt: "order.returned", desc: "Retour initie par le client" },
  { evt: "coa.issued", desc: "Nouveau COA disponible pour un lot" },
];

const compare = [
  { feature: "Synchronisation produits", shopify: true, woo: true, presta: true, api: true },
  { feature: "Synchronisation stock", shopify: true, woo: true, presta: true, api: true },
  { feature: "Commandes automatiques", shopify: true, woo: true, presta: true, api: true },
  { feature: "Dropshipping sous marque", shopify: true, woo: true, presta: true, api: true },
  { feature: "Webhooks signes", shopify: true, woo: true, presta: false, api: true },
  { feature: "Multi-boutiques", shopify: true, woo: true, presta: false, api: true },
  { feature: "Inserts marketing (plan Pro)", shopify: true, woo: true, presta: false, api: true },
  { feature: "Installation no-code", shopify: true, woo: true, presta: true, api: false },
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Bloom CBD — Shopify",
    quote: "Connecte en 3 min. 50 produits pousses automatiquement. 6 mois apres on fait 40 commandes/jour en dropshipping total.",
  },
  {
    name: "Thomas R.",
    role: "Canna Green — WooCommerce",
    quote: "Plugin officiel, zero bug. Les webhooks sont solides, on gere tout notre stock CBD depuis WP.",
  },
  {
    name: "Lucas D.",
    role: "Pure Leaf — API custom",
    quote: "On a cote notre propre backoffice, l'API est clean et la doc impeccable. SDK JS nous a sauve 2 semaines.",
  },
];

/* ============================================================
   PAGE
   ============================================================ */

export default function IntegrationsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pt-14 pb-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c3fee] mb-3">
              Integrations boutique
            </span>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              Connectez votre boutique en 3 minutes.
            </h1>
            <p className="mt-5 text-[15px] text-[#4d4f56] leading-[1.65] max-w-[520px]">
              Shopify, WooCommerce, Prestashop ou API custom. Vos produits Unsigned
              sous votre marque, synchronises automatiquement. Chaque vente
              declenche la fabrication on demand et l&apos;expedition directe a
              votre client.
            </p>
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <Link href="/profile/stores">
                <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  Connecter ma boutique
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
                >
                  Voir comment ca marche
                </Button>
              </Link>
            </div>

            {/* mini trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-[12px] text-[#4d4f56]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Installation en 3 min
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Sans code (Shopify / Woo)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Conforme RGPD
              </span>
            </div>
          </div>

          {/* visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-[480px] ml-auto rounded-[2rem] bg-gradient-to-br from-[#f1eefe] to-[#e3d4ff] p-8 overflow-hidden">
              {/* Unsigned node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-xl z-10">
                <span className="font-bold text-[22px]">C</span>
              </div>
              {/* orbit platforms */}
              {[
                { letter: "S", bg: "#95bf47", angle: 0 },
                { letter: "Wo", bg: "#7f54b3", angle: 60 },
                { letter: "Ps", bg: "#df0067", angle: 120 },
                { letter: "{ }", bg: "#1a1a1a", angle: 180 },
                { letter: "Z", bg: "#ffe01b", angle: 240 },
                { letter: "A", bg: "#ff9900", angle: 300 },
              ].map((p, i) => {
                const rad = (p.angle * Math.PI) / 180;
                const x = Math.cos(rad) * 140;
                const y = Math.sin(rad) * 140;
                return (
                  <div
                    key={i}
                    className="absolute w-14 h-14 rounded-xl shadow-lg flex items-center justify-center font-bold"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      background: p.bg,
                      color: p.bg === "#ffe01b" ? "#1a1a1a" : "white",
                      fontSize: p.letter.length > 1 ? "14px" : "18px",
                    }}
                  >
                    {p.letter}
                  </div>
                );
              })}
              {/* circle line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border-2 border-dashed border-[#6c3fee]/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how-it-works" data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Le flux
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              De la connexion a la commande expediee
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 max-w-2xl mx-auto">
              4 etapes. Une seule fois a configurer, ensuite tout tourne tout seul
              pendant que vous faites du marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {flow.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="relative bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2">{s.title}</h3>
                  <p className="text-[12px] text-[#4d4f56] leading-snug">{s.desc}</p>
                  {i < flow.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 h-4 w-4 text-[#d4d4d8]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PLATFORMS ============ */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              Toutes les plateformes supportees
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3">
              6 integrations pretes a l&apos;emploi, une API pour tout le reste.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-[1.25rem] border p-6 bg-white ${
                  p.ready ? "border-[#f1f1f3]" : "border-dashed border-[#e5e5e7] opacity-80"
                }`}
              >
                {/* level badge */}
                <span
                  className={`absolute top-4 right-4 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    p.level === "Officiel"
                      ? "bg-[#f1eefe] text-[#6c3fee]"
                      : p.level === "Bientot"
                        ? "bg-[#faf0d4] text-[#8b6914]"
                        : "bg-[#f7f7f8] text-[#4d4f56]"
                  }`}
                >
                  {p.level}
                </span>

                <div className={`${p.bg} ${p.fg} w-14 h-14 rounded-xl flex items-center justify-center font-bold text-[22px] mb-4`}>
                  {p.initial}
                </div>
                <h3 className="text-[16px] font-semibold mb-1.5">{p.name}</h3>
                <p className="text-[12px] text-[#4d4f56] leading-snug mb-4">{p.desc}</p>

                {/* setup time */}
                <div className="flex items-center gap-1.5 text-[11px] mb-4">
                  <Clock className="h-3 w-3 text-[#9ca3af]" />
                  <span className="text-[#4d4f56]">Installation</span>
                  <span className="font-semibold">{p.setupTime}</span>
                </div>

                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {p.ready ? (
                  <Link href="/profile/stores">
                    <Button
                      variant="outline"
                      className="w-full rounded-full h-10 text-[11px] font-bold uppercase tracking-wider"
                    >
                      Connecter
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full rounded-full h-10 text-[11px] font-bold uppercase tracking-wider opacity-60 cursor-not-allowed"
                    disabled
                  >
                    Rejoindre la waitlist
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SYNC CAPABILITIES ============ */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Fonctionnalites techniques
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              Ce qui se passe sous le capot
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3">
              Une couche de synchronisation fiable que vous ne verrez jamais, mais
              qui vous fera gagner des dizaines d&apos;heures par mois.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {syncCapabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6">
                <div className="w-10 h-10 rounded-xl bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center mb-4">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-[15px] font-semibold mb-2">{title}</h3>
                <p className="text-[12px] text-[#4d4f56] leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EVENTS ============ */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Webhooks
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              6 evenements pousses en temps reel
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 mb-6 leading-[1.65]">
              Chaque changement important est envoye automatiquement a votre
              endpoint, signe HMAC-SHA256, re-essaye jusqu&apos;a 5 fois en cas
              d&apos;echec.
            </p>
            <Link href="/docs/webhooks" className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider hover:underline">
              Lire la doc webhooks <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="bg-[#0f0f11] rounded-[1.25rem] p-5 text-[12px] font-mono text-white/80 overflow-hidden">
            <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-[10px] text-white/40">webhooks.events</span>
            </div>
            <ul className="space-y-2">
              {events.map((e) => (
                <li key={e.evt} className="flex items-center justify-between gap-4">
                  <span className="text-[#8eeaff]">{e.evt}</span>
                  <span className="text-white/40 text-[10px] text-right">{e.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ COMPARISON TABLE ============ */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[32px] font-semibold tracking-[-0.03em] leading-tight">
              Comparatif des integrations
            </h2>
            <p className="text-[13px] text-[#4d4f56] mt-2">
              Toutes nos integrations couvrent 99% des besoins. Les differences sont
              dans le detail.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-[#f1f1f3] overflow-x-auto bg-white">
            <table className="w-full text-[13px] min-w-[720px]">
              <thead className="bg-[#faf5ed] text-[11px] font-bold uppercase tracking-wider text-left">
                <tr>
                  <th className="px-5 py-4">Fonctionnalite</th>
                  <th className="px-5 py-4 text-center">Shopify</th>
                  <th className="px-5 py-4 text-center">WooCommerce</th>
                  <th className="px-5 py-4 text-center">Prestashop</th>
                  <th className="px-5 py-4 text-center">API Custom</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={row.feature} className={`border-t border-[#f1f1f3] ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                    <td className="px-5 py-3 font-medium">{row.feature}</td>
                    {[row.shopify, row.woo, row.presta, row.api].map((v, idx) => (
                      <td key={idx} className="px-5 py-3 text-center">
                        {v ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600 inline" />
                        ) : (
                          <span className="text-[#d4d4d8]">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ DEVELOPER BLOCK ============ */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-[1.5rem] p-8 lg:p-10 grid lg:grid-cols-[1fr_320px] gap-8 items-center overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#6c3fee]/30 rounded-full blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-background/60 mb-3">
                <Code2 className="h-3 w-3" />
                Developpeurs
              </span>
              <h2 className="text-[28px] font-semibold tracking-[-0.02em] leading-tight">
                Notre API REST + SDK
              </h2>
              <p className="text-[13px] text-background/70 mt-3 mb-5 max-w-md leading-[1.65]">
                Documentation OpenAPI 3.1, SDK JavaScript/TypeScript et PHP, CLI,
                environnement sandbox avec fausses commandes. Prototype en moins
                d&apos;une heure.
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpenAPI 3.1", "REST JSON", "TypeScript SDK", "Rate limit 1000/h", "Sandbox"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center bg-background/10 rounded-full px-3 py-1.5 text-[11px] font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/docs/api">
                <Button className="w-full rounded-full h-12 text-[12px] font-bold uppercase tracking-wider bg-background text-foreground hover:bg-background/90">
                  <FileCode className="h-4 w-4 mr-2" />
                  Ouvrir la doc API
                </Button>
              </Link>
              <Link href="/docs/sdk">
                <Button
                  variant="outline"
                  className="w-full rounded-full h-12 text-[12px] font-bold uppercase tracking-wider border-background/20 text-background hover:bg-background/10"
                >
                  Telecharger le SDK
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-center mb-10">
            Ce qu&apos;en disent les marques CBD connectees
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6">
                <div className="text-[20px] mb-3">&ldquo;</div>
                <p className="text-[13px] leading-[1.65] text-[#333] mb-5">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center font-semibold text-[13px]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold">{t.name}</p>
                    <p className="text-[11px] text-[#9ca3af]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ MINI ============ */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-8">
            Questions frequentes sur les integrations
          </h2>
          <div className="space-y-3">
            {[
              { q: "Est-ce que je peux tester avant de connecter ma vraie boutique ?", a: "Oui, nous fournissons un environnement sandbox avec de fausses commandes. Testez tout le flux sans impact sur votre catalogue live." },
              { q: "Combien coute l'integration ?", a: "Zero euros. Toutes les integrations sont incluses dans le plan Standard (gratuit). Vous payez uniquement les produits commandes par vos clients." },
              { q: "Mes commandes existantes sont-elles impactees ?", a: "Non. L'import se fait uniquement dans le sens Unsigned -> votre boutique. Vos commandes existantes restent intouchees." },
              { q: "Puis-je me deconnecter si ca ne me plait pas ?", a: "Oui, a tout moment en 1 clic. Vos produits restent dans votre boutique (vous choisissez de les supprimer ou non), pas de lock-in." },
              { q: "Compatible multi-boutiques ?", a: "Oui. Connectez autant de boutiques que vous voulez depuis un seul compte Unsigned, sur une ou plusieurs plateformes." },
              { q: "Que se passe-t-il en cas de rupture de stock ?", a: "Impossible : nous produisons on demand. Vos produits sont toujours affiches comme disponibles (sauf formules saisonnieres clairement identifiees)." },
            ].map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-[#f1f1f3] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <span className="text-[14px] font-semibold">{f.q}</span>
                  <span className="text-[#9ca3af] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#4d4f56] leading-[1.65]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="text-[12px] font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1"
            >
              Voir toutes les FAQ <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#f1eefe] text-[#6c3fee] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            <Zap className="h-3 w-3" />
            3 minutes chrono
          </span>
          <h2 className="text-[44px] font-semibold tracking-[-0.03em] leading-tight mb-4">
            Pret a connecter votre boutique ?
          </h2>
          <p className="text-[14px] text-[#4d4f56] mb-8 max-w-lg mx-auto leading-[1.65]">
            Gratuit. Sans engagement. Deconnexion en un clic. Vous gardez le
            controle sur vos produits, vos clients et vos donnees.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/profile/stores">
              <Button className="rounded-full h-[56px] px-7 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                Connecter ma boutique
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/faq">
              <Button
                variant="outline"
                className="rounded-full h-[56px] px-7 text-[12px] font-bold uppercase tracking-wider"
              >
                J&apos;ai encore des questions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
