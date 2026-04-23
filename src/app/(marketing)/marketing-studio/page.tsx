import Link from "next/link";
import {
  Mail,
  Bell,
  MessageSquare,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target,
  Clock,
  Lock,
  EyeOff,
  BarChart3,
  Repeat,
  Flame,
  Brain,
  Lightbulb,
  Rocket,
  Shield,
  Euro,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ============================================================
   DATA
   ============================================================ */

const channels = [
  {
    icon: Mail,
    tag: "Email",
    title: "CRM email transactionnel & marketing",
    desc: "Setup complet de votre stack CRM, architecture des flows cles et campagnes saisonnieres optimisees pour le comportement client CBD.",
    kpi: "+35% de CA genere par l'email",
    locked: false,
  },
  {
    icon: Bell,
    tag: "Push",
    title: "Notifications push web & app",
    desc: "Segmentation comportementale fine, campagnes programmees et logique de frequence adaptee au cycle d'achat CBD.",
    kpi: "8% de CTR moyen push",
    locked: false,
  },
  {
    icon: MessageSquare,
    tag: "SMS",
    title: "SMS & conversationnel",
    desc: "Collecte d'opt-in conforme RGPD, deliverabilite premium, flows relationnels et campagnes one-shot a fort ROI.",
    kpi: "25%+ taux d'ouverture garanti",
    locked: false,
  },
  {
    icon: MessageSquare,
    tag: "WhatsApp",
    title: "WhatsApp conversationnel",
    desc: "Automations 1:1 pour le service client et le retargeting warm. Methode maison validee sur notre marque mere.",
    kpi: "60%+ taux de lecture",
    locked: true,
  },
  {
    icon: Repeat,
    tag: "Loyalty",
    title: "Programme de fidelite CBD",
    desc: "Structure de points, tiers VIP, referral et mechaniques d'achat recurrent calibrees sur les insights consommation CBD.",
    kpi: "+22% LTV sur 6 mois",
    locked: false,
  },
  {
    icon: Target,
    tag: "Retargeting",
    title: "Audiences & signaux comportementaux",
    desc: "Architecture d'audiences, lookalikes high-intent, exclusions et retargeting dynamique. Certaines methodes restent proprietaires.",
    kpi: "-30% CPA sur le cold",
    locked: true,
  },
];

const flows = [
  { icon: Users, title: "Welcome series", desc: "Sequence d'onboarding multi-canaux pour convertir au 1er achat.", metric: "+18% conv.", locked: false },
  { icon: Zap, title: "Abandon panier", desc: "Relance multi-touch coordonnee sur 48 h, timing proprietaire.", metric: "+25% recup.", locked: true },
  { icon: Flame, title: "Post-purchase", desc: "Remerciement, collecte d'avis, cross-sell, education CBD conforme.", metric: "+30% repeat", locked: true },
  { icon: Clock, title: "Win-back dormants", desc: "Detection par scoring maison, relance en 3 vagues + incentive progressif.", metric: "+15% reactive", locked: true },
  { icon: Target, title: "Browse abandonment", desc: "Reactivation des intentions non abouties via signaux comportementaux.", metric: "+8% conv.", locked: true },
  { icon: Repeat, title: "Replenishment CBD", desc: "Modele de replenishment dedie au cycle de consommation CBD. Methode proprietaire.", metric: "+40% LTV", locked: true },
];

const process = [
  {
    n: "01",
    icon: Brain,
    title: "Audit 360",
    text: "On analyse vos outils actuels, votre data, vos flows existants, vos KPIs. Diagnostic sous 7 j.",
  },
  {
    n: "02",
    icon: Lightbulb,
    title: "Strategie canaux",
    text: "On priorise les canaux a activer selon votre stack et votre phase : email first, ou full-stack d'emblee.",
  },
  {
    n: "03",
    icon: Zap,
    title: "Setup technique",
    text: "Integrations Shopify/WooCommerce, pixels, API, consent management RGPD, deliverabilite, DNS/SPF/DKIM.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Lancement flows",
    text: "Ecriture, design, tests A/B, go-live progressif sur 2 a 4 semaines. Votre equipe est formee en parallele.",
  },
  {
    n: "05",
    icon: BarChart3,
    title: "Iteration data",
    text: "Review hebdo, optimisation continue, nouveaux tests. On vise 3 a 4× le ROI du retainer.",
  },
];

const outcomes = [
  { value: "+35%", label: "CA email en 90 j" },
  { value: "3-4×", label: "ROI du retainer" },
  { value: "7 j", label: "audit complet" },
  { value: "20+", label: "flows prets a lancer" },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Conformite RGPD & pub CBD",
    text: "Templates conformes opt-in, collecte de consentements, archivage preuves, respect des politiques Meta/TikTok/Google pour le CBD.",
  },
  {
    icon: Lock,
    title: "Vos data restent chez vous",
    text: "Tous les outils sont configures sur vos propres comptes. On n'heberge rien, vous gardez la proprieta totale de votre data et de vos audiences.",
  },
  {
    icon: Clock,
    title: "Retainer mensuel sans engagement",
    text: "Missions ponctuelles ou retainer mensuel. Preavis 30 j pour arreter, pas de clause de sortie cachee.",
  },
  {
    icon: TrendingUp,
    title: "Performance ou remboursement",
    text: "Si le retainer ne genere pas 2× son cout en 90 j, on continue gratuitement jusqu'a y arriver. Objectif aligne.",
  },
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Bloom CBD — 90k EUR/mois",
    quote:
      "L'audit a revele qu'on perdait 8k EUR/mois sur l'abandon panier. 3 mois apres le setup on a ajoute 22k de CA recurring par mois.",
  },
  {
    name: "Thomas R.",
    role: "Canna Green — 140k EUR/mois",
    quote:
      "On a branche WhatsApp Business + SMS. Aujourd'hui 30% de notre CA vient de ces deux canaux. Impossible sans leur expertise CBD.",
  },
  {
    name: "Sophie M.",
    role: "Essentia — 65k EUR/mois",
    quote:
      "Enfin une equipe qui comprend les contraintes CBD (claims, deliverabilite Gmail, banques...). On les utilise depuis 6 mois.",
  },
];

const qualifier = [
  { icon: Euro, label: "CA mensuel", value: "50k EUR+ confirme" },
  { icon: BarChart3, label: "Audience email", value: "Minimum 5 000 contacts actifs" },
  { icon: Zap, label: "Stack", value: "Shopify, WooCommerce ou custom" },
  { icon: Shield, label: "Contexte", value: "Marque CBD conforme EU/FR" },
];

const faqs = [
  {
    q: "Pourquoi un minimum de 50k EUR/mois ?",
    a: "Notre methodologie demande une base de data et un volume de commandes suffisant pour etre rentable. En-dessous, on vous conseille notre contenu gratuit (newsletter, ressources, guides CRM) ou un retainer simplifie avec notre partenaire agence junior.",
  },
  {
    q: "Combien coute le retainer ?",
    a: "Price on demand. Les retainers demarrent a 3 500 EUR/mois et varient selon le scope (canaux actives, volume d'envois, complexite des flows). Un brief gratuit de 30 min permet d'estimer precisement.",
  },
  {
    q: "Vous travaillez sur quels outils ?",
    a: "Nous maitrisons l'ensemble des stacks CRM et messaging du marche (email, push, SMS, WhatsApp, loyalty, retargeting). Le choix de l'outil depend de votre volume, de votre budget et de votre stack actuelle. Nous faisons les recommandations precises pendant le brief. La valeur n'est pas dans l'outil, mais dans la methode.",
  },
  {
    q: "Combien de temps pour voir les resultats ?",
    a: "Les flows email classiques (welcome, abandon, post-purchase) produisent du CA additionnel des la premiere semaine apres go-live. Le plein impact se voit sous 90 jours, avec 3 a 4× le cout du retainer en ROI direct.",
  },
  {
    q: "Vous gerez aussi la pub payante ?",
    a: "Non. Notre focus est le CRM & messaging. Pour la pub payante (Meta, TikTok, Google Ads) on travaille avec des agences partenaires qu'on peut vous recommander, ou vous pouvez utiliser nos creatives Unsigned Creative Ads.",
  },
  {
    q: "Je suis en dessous de 50k, vous n'avez rien pour moi ?",
    a: "Si. Notre centre de ressources gratuit contient des guides CRM, des templates email CBD conformes, et nos retours d'experience sur notre propre marque. Vous pouvez aussi activer le pack Starter Creative Ads pour booster votre acquisition jusqu'au seuil.",
  },
];

/* ============================================================
   PAGE
   ============================================================ */

export default function MarketingStudioPage() {
  return (
    <>
      {/* =================== HERO =================== */}
      <section className="pt-14 pb-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-[#e3d4ff] text-[#5a2fd8] text-[11px] font-bold uppercase tracking-[0.12em] rounded-full px-3 py-1.5 mb-5">
              <Zap className="h-3 w-3" />
              Marketing Studio
            </span>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              Le retention stack complet de votre marque CBD.
            </h1>
            <p className="mt-5 text-[15px] text-[#4d4f56] leading-[1.65] max-w-[500px]">
              Email, push, SMS, WhatsApp, loyalty, retargeting. On a baati et rode
              ces systemes sur notre propre marque CBD a 7 chiffres. Maintenant on
              les installe chez vous, cles en main.
            </p>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <Link href="#contact">
                <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  Demander un audit gratuit
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="#process">
                <Button
                  variant="outline"
                  className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
                >
                  Voir le process
                </Button>
              </Link>
            </div>

            {/* Exclusivity badge */}
            <div className="mt-8 bg-[#faf0d4] border border-[#e8d49a] rounded-xl p-4 max-w-[500px] flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                <Shield className="h-4 w-4 text-[#8b6914]" />
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#8b6914] mb-0.5">
                  Service selectif
                </p>
                <p className="text-[12px] text-[#4d4f56] leading-snug">
                  Reserve aux marques CBD qui realisent deja <strong>50 000 EUR/mois
                  minimum</strong>. En dessous, on vous oriente vers nos ressources
                  gratuites.
                </p>
              </div>
            </div>
          </div>

          {/* Visual — dashboard mockup */}
          <div className="relative h-[520px]">
            {/* main dashboard */}
            <div className="absolute inset-4 rounded-[1.5rem] bg-white shadow-2xl border border-[#f1f1f3] overflow-hidden">
              {/* topbar */}
              <div className="h-8 bg-[#fafafa] border-b border-[#f1f1f3] flex items-center gap-1.5 px-3">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
              </div>
              {/* content */}
              <div className="p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">
                  CA derniers 30 j
                </p>
                <p className="text-[28px] font-semibold tracking-[-0.02em] mt-1">
                  +47 820 EUR
                </p>
                <p className="text-[11px] text-green-700 font-semibold flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  +35% vs periode precedente
                </p>

                {/* channel rows */}
                <div className="space-y-2 mt-5">
                  {[
                    { name: "Email", value: "18 240 EUR", pct: 80, color: "bg-[#6c3fee]" },
                    { name: "SMS", value: "12 100 EUR", pct: 55, color: "bg-[#3d5a3d]" },
                    { name: "WhatsApp", value: "9 420 EUR", pct: 42, color: "bg-[#25d366]" },
                    { name: "Push", value: "5 600 EUR", pct: 25, color: "bg-[#ff9800]" },
                    { name: "Loyalty", value: "2 460 EUR", pct: 12, color: "bg-[#e91e63]" },
                  ].map((c) => (
                    <div key={c.name}>
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-semibold">{c.name}</span>
                        <span className="text-[#4d4f56]">{c.value}</span>
                      </div>
                      <div className="h-1.5 bg-[#f1f1f3] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${c.color} rounded-full`}
                          style={{ width: `${c.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating notification card */}
            <div className="absolute top-8 -right-2 bg-white rounded-2xl shadow-xl p-3 w-[180px] border border-[#f1f1f3]">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#e3d4ff] flex items-center justify-center shrink-0">
                  <Bell className="h-3.5 w-3.5 text-[#5a2fd8]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold">Flow declenche</p>
                  <p className="text-[9px] text-[#4d4f56]">
                    Abandon panier — 124 clients
                  </p>
                </div>
              </div>
            </div>

            {/* floating email preview */}
            <div className="absolute bottom-8 -left-2 bg-white rounded-2xl shadow-xl p-3 w-[200px] border border-[#f1f1f3]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-[#6c3fee] flex items-center justify-center">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <p className="text-[9px] font-bold">Welcome series · J+0</p>
              </div>
              <p className="text-[10px] font-semibold leading-tight mb-1">
                Bienvenue chez Bloom CBD
              </p>
              <p className="text-[9px] text-[#4d4f56] leading-snug">
                Votre guide ultime pour choisir votre premiere huile...
              </p>
              <div className="mt-2 h-1 w-12 bg-[#6c3fee] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* =================== STATS =================== */}
      <section data-reveal className="pb-8">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-[1.5rem] p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomes.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[36px] font-semibold tracking-[-0.02em] leading-none">
                  {s.value}
                </p>
                <p className="text-[11px] text-background/60 mt-2 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== CHANNELS =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Les 6 canaux qu&apos;on active
            </span>
            <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
              Un retention stack complet, cale sur votre marque
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="relative bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6 hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f7f7f8] text-[#4d4f56] px-2 py-0.5 rounded-full">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-semibold mb-2">{c.title}</h3>
                  <p
                    className={`text-[13px] text-[#4d4f56] leading-[1.65] mb-4 ${
                      c.locked ? "blur-[4px] select-none" : ""
                    }`}
                  >
                    {c.desc}
                  </p>
                  <div
                    className={`pt-3 border-t border-[#f1f1f3] text-[11px] font-bold text-green-700 ${
                      c.locked ? "blur-[3px] select-none" : ""
                    }`}
                  >
                    {c.kpi}
                  </div>

                  {c.locked && (
                    <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 bg-foreground text-background text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1.5 shadow-lg">
                        <Lock className="h-3 w-3" />
                        Methode devoilee au brief
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== FLOWS =================== */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Automations
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              20+ flows automatises, prets pour le CBD
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 leading-[1.65]">
              Chaque flow est pense pour les enjeux CBD : delivrabilite Gmail,
              claims autorisees, re-engagement specifique a la consommation
              (rappel mensuel, saisonnalite).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {flows.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="relative bg-white rounded-[1.25rem] border border-[#f1f1f3] p-5 overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f7f7f8] flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span
                      className={`text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full ${
                        f.locked ? "blur-[2px] select-none" : ""
                      }`}
                    >
                      {f.metric}
                    </span>
                  </div>
                  <h3 className="text-[14px] font-semibold mb-1.5">{f.title}</h3>
                  <p
                    className={`text-[12px] text-[#4d4f56] leading-snug ${
                      f.locked ? "blur-[3px] select-none" : ""
                    }`}
                  >
                    {f.desc}
                  </p>

                  {f.locked && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 bg-foreground text-background text-[9px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5">
                        <Lock className="h-2.5 w-2.5" />
                        Privee
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== PROCESS =================== */}
      <section id="process" data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Notre methode
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              5 etapes pour booster votre retention
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-3">
            {process.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className="relative bg-white rounded-[1.25rem] border border-[#f1f1f3] p-5"
                >
                  <span className="absolute -top-3 left-5 text-[10px] font-bold bg-foreground text-background px-2.5 py-1 rounded-full">
                    {s.n}
                  </span>
                  <Icon className="h-5 w-5 text-[#6c3fee] mt-3 mb-3" />
                  <h3 className="text-[14px] font-semibold mb-1.5 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-[#4d4f56] leading-snug">{s.text}</p>
                  {i < process.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 h-4 w-4 text-[#d4d4d8]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== PRICING / ON DEMAND =================== */}
      <section id="contact" data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT — qualifier */}
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a2fd8] mb-3">
                Price on demand
              </span>
              <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
                Un tarif ajuste a votre volume et votre stack
              </h2>
              <p className="text-[14px] text-[#4d4f56] mt-4 leading-[1.65]">
                Le Marketing Studio est un service selectif. Les retainers
                demarrent a <strong>3 500 EUR/mois</strong> et dependent des
                canaux actives, du volume d&apos;envois mensuels et de la
                complexite de votre stack.
              </p>
              <p className="text-[14px] text-[#4d4f56] mt-3 leading-[1.65]">
                Pour respecter la qualite de nos livraisons, on limite notre
                carnet a <strong>10 marques simultanees</strong>. Un brief gratuit
                de 30 min nous permet d&apos;estimer precisement et de valider la
                compatibilite.
              </p>

              {/* Qualifier list */}
              <div className="mt-8 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af] mb-3">
                  Criteres d&apos;eligibilite
                </p>
                {qualifier.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white border border-[#f1f1f3] rounded-xl px-4 py-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#f1eefe] flex items-center justify-center shrink-0">
                      <Icon className="h-3.5 w-3.5 text-[#6c3fee]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-[#9ca3af] uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-[13px] font-semibold">{value}</p>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — form card */}
            <div>
              <div className="sticky top-24 bg-foreground text-background rounded-[1.5rem] p-8 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6c3fee]/30 rounded-full blur-3xl" />
                <div className="relative">
                  <Sparkles className="h-5 w-5 text-[#a488ff] mb-3" />
                  <h3 className="text-[24px] font-semibold tracking-[-0.02em] leading-tight mb-2">
                    Brief gratuit · 30 min
                  </h3>
                  <p className="text-[13px] text-background/70 leading-[1.65] mb-6">
                    On analyse votre stack actuel, on identifie les 2 a 3 leviers
                    a plus fort ROI, et on vous envoie un devis sous 48 h.
                  </p>

                  <form
                    className="space-y-2.5"
                    action="mailto:studio@unsigned.fr"
                    method="post"
                  >
                    <input
                      name="company"
                      required
                      placeholder="Nom de votre marque CBD"
                      className="w-full h-11 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 px-5 text-[13px] focus:outline-none focus:border-background"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email pro"
                      className="w-full h-11 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 px-5 text-[13px] focus:outline-none focus:border-background"
                    />
                    <select
                      name="revenue"
                      required
                      className="w-full h-11 rounded-full bg-background/10 border border-background/20 text-background px-5 text-[13px] focus:outline-none focus:border-background appearance-none"
                    >
                      <option value="" className="text-foreground">
                        CA mensuel actuel
                      </option>
                      <option value="50-100" className="text-foreground">
                        50k - 100k EUR / mois
                      </option>
                      <option value="100-250" className="text-foreground">
                        100k - 250k EUR / mois
                      </option>
                      <option value="250-500" className="text-foreground">
                        250k - 500k EUR / mois
                      </option>
                      <option value="500+" className="text-foreground">
                        500k+ EUR / mois
                      </option>
                      <option value="under" className="text-foreground">
                        En dessous de 50k
                      </option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Vos canaux actuels, vos priorites (optionnel)"
                      className="w-full h-24 rounded-2xl bg-background/10 border border-background/20 text-background placeholder:text-background/40 px-5 py-3 text-[13px] focus:outline-none focus:border-background resize-none"
                    />
                    <Button
                      type="submit"
                      className="w-full rounded-full h-[52px] text-[12px] font-bold uppercase tracking-wider bg-background text-foreground hover:bg-background/90"
                    >
                      Demander mon brief gratuit
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </form>

                  <p className="text-[10px] text-background/50 mt-3 text-center">
                    Reponse garantie sous 24 h ouvrees &middot; Donnees confidentielles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== GUARANTEES =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[28px] lg:text-[36px] font-semibold tracking-[-0.02em] leading-tight">
              Nos engagements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-semibold mb-2">{title}</h3>
                <p className="text-[12px] text-[#4d4f56] leading-[1.6]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-center mb-10">
            Ce qu&apos;en disent les marques CBD qu&apos;on accompagne
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6"
              >
                <span className="text-[32px] text-foreground/15 leading-none">
                  &ldquo;
                </span>
                <p className="text-[13px] leading-[1.65] text-[#333] mb-5 -mt-2">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f1f1f3]">
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

      {/* =================== FAQ =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-8">
            Questions frequentes
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-[#f1f1f3] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <span className="text-[14px] font-semibold">{f.q}</span>
                  <span className="text-[#9ca3af] group-open:rotate-45 transition-transform text-[18px] leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#4d4f56] leading-[1.65]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =================== FINAL CTA =================== */}
      <section className="py-20">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] via-[#2a1d5a] to-[#5a2fd8] text-white p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#a488ff]/30 rounded-full blur-3xl" />
            <div className="relative text-center">
              <Rocket className="h-6 w-6 text-[#a488ff] mx-auto mb-4" />
              <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
                Pret a scaler votre retention ?
              </h2>
              <p className="mt-4 text-[14px] text-white/70 leading-[1.65] max-w-xl mx-auto">
                Brief gratuit 30 min. Si on est fait l&apos;un pour l&apos;autre, on
                signe un retainer. Sinon, on vous envoie nos meilleures ressources
                gratuites. Zero pression.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap justify-center">
                <Link href="#contact">
                  <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-white text-foreground hover:bg-white/90">
                    Demander mon brief
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button
                    variant="outline"
                    className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider border-white/20 text-white hover:bg-white/10"
                  >
                    Ressources gratuites
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
