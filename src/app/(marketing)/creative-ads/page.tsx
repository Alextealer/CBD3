import Link from "next/link";
import {
  Film,
  Camera,
  Mic2,
  Heart as InstaHeart,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Palette,
  Smartphone,
  Hourglass,
  Users,
  CheckCircle2,
  ArrowRight,
  Play,
  Star,
  Monitor,
  Image as ImageIcon,
  Package,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ============================================================
   DATA
   ============================================================ */

const services = [
  {
    icon: Film,
    tag: "UGC video",
    title: "Videos UGC CBD",
    desc: "Contenus authentiques tournes par des creators dans leur salon ou salle de bain. Format 9:16 optimise Meta, TikTok, Reels.",
    duration: "15 a 60 sec.",
  },
  {
    icon: Camera,
    tag: "Studio",
    title: "Packshot & still-life",
    desc: "Photos produit haut de gamme en studio : fond blanc, lifestyle, flat-lay, detail macro. Licence usage illimite incluse.",
    duration: "Livrables en 48 h",
  },
  {
    icon: InstaHeart,
    tag: "Social",
    title: "Carrousels & stories",
    desc: "Carrousels Instagram 10 visuels + story kits animes. Templates reutilisables par votre equipe.",
    duration: "5 a 10 posts",
  },
  {
    icon: Target,
    tag: "Performance",
    title: "Ads Meta & TikTok",
    desc: "Creatives 1:1, 4:5, 9:16 optimisees pour les plateformes payantes. Variantes A/B incluses pour tester rapidement.",
    duration: "3 a 5 variantes",
  },
  {
    icon: Mic2,
    tag: "Voice-over",
    title: "Voix off & sous-titres",
    desc: "VO professionnelle FR/EN, sous-titres auto, musique libre de droits adaptee au positionnement CBD.",
    duration: "Livre mixe",
  },
  {
    icon: Monitor,
    tag: "Landing",
    title: "Pages d'atterrissage",
    desc: "Landing pages dediees aux campagnes payantes, integrees a votre Shopify ou site custom. Conversion-focused.",
    duration: "2 versions A/B",
  },
];

const formats = [
  { label: "Reel 9:16", icon: Smartphone, color: "bg-[#e3d4ff]" },
  { label: "Carrousel 1:1", icon: ImageIcon, color: "bg-[#faf0d4]" },
  { label: "Story 9:16", icon: InstaHeart, color: "bg-[#f3dfe6]" },
  { label: "Meta 4:5", icon: Target, color: "bg-[#d4e4a8]" },
  { label: "YouTube 16:9", icon: Film, color: "bg-[#cfe5f3]" },
  { label: "Banniere 728×90", icon: Monitor, color: "bg-[#ffe2d1]" },
];

const process = [
  {
    n: "01",
    icon: Users,
    title: "Brief & strategie",
    text: "Call de 30 min pour comprendre votre marque, vos buyer personas et vos KPIs. On livre un mini creative brief ecrit.",
  },
  {
    n: "02",
    icon: Palette,
    title: "Moodboard & script",
    text: "Notre creative director propose un moodboard + script shot par shot valide avant tournage.",
  },
  {
    n: "03",
    icon: Camera,
    title: "Tournage & production",
    text: "Creators UGC en casting (FR/EN) ou equipe studio. Tournages en 72 h apres validation du script.",
  },
  {
    n: "04",
    icon: Film,
    title: "Montage & livraison",
    text: "Motion design, sous-titres, VO, adaptation multi-formats. Livraison sous 5 a 8 jours selon le pack.",
  },
  {
    n: "05",
    icon: TrendingUp,
    title: "Optimisation",
    text: "Analyse des performances a J+14 et recommandations d'iteration incluses dans les abonnements.",
  },
];

const plans = [
  {
    name: "Single",
    subtitle: "Pour tester un format",
    price: "149",
    unit: "EUR",
    cadence: "par creative",
    cta: "Commander un test",
    features: [
      "1 creative UGC 15-30 sec.",
      "2 variantes (2 hooks)",
      "Sous-titres FR ou EN",
      "Livrable sous 7 j ouvres",
      "1 revision incluse",
    ],
    highlighted: false,
  },
  {
    name: "Starter",
    subtitle: "Lancez vos campagnes",
    price: "499",
    unit: "EUR",
    cadence: "pack de 5 creatives",
    cta: "Choisir Starter",
    features: [
      "5 creatives (UGC ou packshot)",
      "Multi-formats 1:1 / 4:5 / 9:16",
      "Sous-titres + musique",
      "3 variantes de hook par creative",
      "Livrable sous 10 j ouvres",
      "2 revisions incluses",
    ],
    highlighted: true,
    ribbon: "Populaire",
    savings: "-20% vs. single",
  },
  {
    name: "Scale",
    subtitle: "Abonnement mensuel",
    price: "899",
    unit: "EUR",
    cadence: "par mois",
    cta: "Activer l'abonnement",
    features: [
      "10 creatives/mois",
      "2 creators UGC dedies",
      "Brief strategique mensuel",
      "Rapport de performance J+14",
      "Voix off FR ou EN inclus",
      "Revisions illimitees",
      "Priority 72 h",
    ],
    highlighted: false,
    savings: "Economie vs. pack single 590 EUR",
  },
  {
    name: "Growth",
    subtitle: "Scale & media planning",
    price: "1 790",
    unit: "EUR",
    cadence: "par mois",
    cta: "Parler a un strategiste",
    features: [
      "20 creatives/mois",
      "Creator + studio mix",
      "Creative director dedie",
      "Landing page incluse",
      "Audits comptes Meta/TikTok",
      "Reporting bi-hebdo",
      "Setup pixel & evenements",
    ],
    highlighted: false,
  },
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Bloom CBD",
    quote:
      "Notre CPA Meta est passe de 34 EUR a 11 EUR en 3 semaines apres le premier pack. Les UGC font la difference.",
  },
  {
    name: "Thomas R.",
    role: "Canna Green",
    quote:
      "On est sur l'abonnement Scale depuis 4 mois. 40 ads deja produites, on a trouve nos 3 creatives gagnantes.",
  },
  {
    name: "Sophie M.",
    role: "Essentia Spa",
    quote:
      "Sous-traiter la creation nous a fait gagner un temps fou. L'equipe est hyper calee sur les claims CBD autorises.",
  },
];

const stats = [
  { value: "3×", label: "CTR median sur ads UGC" },
  { value: "-45%", label: "CPA moyen en 30 j" },
  { value: "7 j", label: "delai livraison" },
  { value: "120+", label: "marques accompagnees" },
];

const addons = [
  { label: "Creator FR premium", price: "+99 EUR" },
  { label: "Voix off studio FR/EN", price: "+79 EUR" },
  { label: "Tournage en exterieur", price: "+149 EUR" },
  { label: "Adaptation +3 formats", price: "+49 EUR" },
  { label: "Livraison express 48 h", price: "+199 EUR" },
  { label: "Droits cession publicitaire 12 mois", price: "+129 EUR" },
];

const faqs = [
  {
    q: "Vous respectez la reglementation pub CBD ?",
    a: "Oui. Notre creative director est forme aux politiques Meta, TikTok et Google concernant le CBD (claims autorises, bien-etre vs. sante, zero promesse medicale). Les creatives sont livrees pre-approuvees sous l'angle conformite.",
  },
  {
    q: "Qui sont vos creators UGC ?",
    a: "Un panel de 60+ creators FR et EN selectionnes pour leur authenticite, leur eligibilite aux politiques pub et leur affinite avec l'univers bien-etre et lifestyle. Vous validez le creator avant tournage.",
  },
  {
    q: "Vous travaillez avec nos pixels et comptes pub ?",
    a: "Oui sur les plans Scale et Growth. On configure vos pixels, evenements de conversion (Purchase, InitiateCheckout), et on adapte les creatives aux custom audiences.",
  },
  {
    q: "Puis-je reutiliser les creatives ailleurs ?",
    a: "Oui. Vous recevez les fichiers master en 4K et une licence d'usage illimitee sur vos canaux owned (site, email, retail). La cession publicitaire 12 mois (Meta Ads Manager) est en option a 129 EUR.",
  },
  {
    q: "Combien de revisions sont incluses ?",
    a: "1 revision sur Single, 2 sur Starter, illimitees sur les abonnements. Une revision = ajustement de montage, hook ou sous-titres, pas un re-tournage.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "Single & Starter : paiement a la commande par CB ou virement. Abonnements : prelevement mensuel CB ou virement, sans engagement, annulation en 1 clic a tout moment.",
  },
];

/* ============================================================
   PAGE
   ============================================================ */

export default function CreativeAdsPage() {
  return (
    <>
      {/* =================== HERO =================== */}
      <section className="pt-14 pb-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c3fee] mb-3">
              Creative Ads Studio
            </span>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              Les creatives qui vendent votre CBD.
            </h1>
            <p className="mt-5 text-[15px] text-[#4d4f56] leading-[1.65] max-w-[500px]">
              Notre studio interne produit les ads UGC, packshots, carrousels et
              videos Meta / TikTok / YouTube dont votre marque CBD a besoin pour
              scaler. Pensees pour la performance, conformes aux politiques pub.
            </p>
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <Link href="#pricing">
                <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  Voir les tarifs
                </Button>
              </Link>
              <Link href="#process">
                <Button
                  variant="outline"
                  className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
                >
                  <Play className="h-3.5 w-3.5 mr-2 fill-current" />
                  Comment ca marche
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-[12px] text-[#4d4f56]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Creators FR &amp; EN
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Conforme politiques Meta / TikTok
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Sous engagement mensuel annulable
              </span>
            </div>
          </div>

          {/* Visual composition — 3 phone screens */}
          <div className="relative h-[480px]">
            <div className="absolute top-0 left-4 w-[170px] h-[340px] rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-2 rotate-[-8deg] shadow-2xl">
              <div className="w-full h-full rounded-[1.5rem] bg-gradient-to-br from-[#f89ad5] to-[#ffb8d4] flex items-end justify-center p-4 relative">
                <div className="absolute top-3 left-3 bg-white/90 rounded-full px-2 py-0.5 text-[8px] font-bold">
                  @cbd.bloom
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[8px] font-bold text-white mb-1">
                    Mon rituel CBD du soir
                  </p>
                  <div className="h-1 bg-white/40 rounded-full" />
                  <div className="mt-1 flex gap-2 text-white">
                    <Heart className="h-3 w-3 fill-current" />
                    <span className="text-[8px]">12.4k</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[180px] h-[360px] rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-2 shadow-2xl z-10">
              <div className="w-full h-full rounded-[1.5rem] bg-gradient-to-b from-[#2a3a7a] via-[#6c3fee] to-[#ffb8d4] flex items-end justify-center p-4 relative">
                <div className="absolute top-3 left-3 flex items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-white" />
                  <span className="text-[8px] font-bold text-white">@you_cbd</span>
                </div>
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Play className="h-5 w-5 text-white fill-current" />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[9px] font-bold text-white mb-1">POV: Tu decouvres le CBD</p>
                  <span className="inline-block bg-[#6c3fee] text-white text-[8px] font-bold px-2 py-0.5 rounded-full">
                    Sponsored
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute top-8 right-4 w-[170px] h-[340px] rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-2 rotate-[8deg] shadow-2xl">
              <div className="w-full h-full rounded-[1.5rem] bg-gradient-to-br from-[#e8d5d0] to-[#c9a49b] flex items-center justify-center p-4 relative">
                <div className="absolute top-3 left-3 bg-white/90 rounded-full px-2 py-0.5 text-[8px] font-bold">
                  Carrousel 1/5
                </div>
                <div className="w-20 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-[9px] font-bold">CBD OIL</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`h-0.5 flex-1 rounded-full ${i === 1 ? "bg-white" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 z-20">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-green-700" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af]">
                  CPA moyen
                </p>
                <p className="text-[15px] font-semibold">−45% en 30 jours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== STATS =================== */}
      <section data-reveal className="pb-8">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-[1.5rem] p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
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

      {/* =================== SERVICES =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Ce qu&apos;on produit
            </span>
            <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
              6 formats creatifs pour scaler votre marque CBD
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f7f7f8] text-[#4d4f56] px-2 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2">{s.title}</h3>
                  <p className="text-[13px] text-[#4d4f56] leading-[1.65] mb-4">{s.desc}</p>
                  <div className="pt-3 border-t border-[#f1f1f3] flex items-center gap-1.5 text-[11px] text-[#4d4f56]">
                    <Hourglass className="h-3 w-3" />
                    {s.duration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== FORMATS =================== */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="text-[18px] font-semibold">
              Tous les formats natifs des plateformes
            </h3>
            <p className="text-[12px] text-[#9ca3af]">
              Adaptation multi-formats incluse dans chaque pack.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {formats.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className={`${f.color} rounded-xl p-4 flex flex-col items-center justify-center gap-2 aspect-square`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                  <span className="text-[11px] font-semibold text-center">
                    {f.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== PROCESS =================== */}
      <section id="process" data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Le process
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              Du brief a la livraison, 5 etapes
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 max-w-xl mx-auto">
              Transparence totale sur le planning et les livrables. Zero
              surprise, zero aller-retour infini.
            </p>
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
                  <h3 className="text-[14px] font-semibold mb-1.5 leading-snug">{s.title}</h3>
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

      {/* =================== PRICING =================== */}
      <section id="pricing" data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c3fee] mb-3">
              Tarification
            </span>
            <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
              Des tarifs clairs, adaptes a chaque etape
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 max-w-2xl mx-auto">
              Pay-per-creative pour tester, abonnement pour scaler. Tous les prix
              sont HT, sans engagement sur les abonnements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-[1.5rem] p-6 flex flex-col ${
                  p.highlighted
                    ? "bg-foreground text-background shadow-xl lg:scale-[1.03]"
                    : "bg-white border border-[#f1f1f3]"
                }`}
              >
                {p.ribbon && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6c3fee] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {p.ribbon}
                  </span>
                )}

                <h3 className="text-[20px] font-semibold">{p.name}</h3>
                <p
                  className={`text-[12px] mt-0.5 ${
                    p.highlighted ? "text-background/60" : "text-[#9ca3af]"
                  }`}
                >
                  {p.subtitle}
                </p>

                <div className="my-5 pb-5 border-b border-dashed border-current/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[36px] font-semibold tracking-[-0.02em]">
                      {p.price}
                    </span>
                    <span className="text-[14px] font-medium">{p.unit}</span>
                  </div>
                  <p
                    className={`text-[11px] mt-1 ${
                      p.highlighted ? "text-background/60" : "text-[#9ca3af]"
                    }`}
                  >
                    {p.cadence}
                  </p>
                  {p.savings && (
                    <span className="inline-block mt-2 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {p.savings}
                    </span>
                  )}
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px]">
                      <CheckCircle2
                        className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                          p.highlighted ? "text-[#a488ff]" : "text-green-600"
                        }`}
                      />
                      <span className={p.highlighted ? "text-background/90" : ""}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full h-11 text-[11px] font-bold uppercase tracking-wider ${
                    p.highlighted
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {p.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* trust row */}
          <div className="mt-8 flex justify-center items-center gap-6 text-[12px] text-[#4d4f56] flex-wrap">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Annulation 1-clic
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Brief offert
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Paiement securise
            </span>
          </div>
        </div>
      </section>

      {/* =================== ADD-ONS =================== */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <h3 className="text-[24px] font-semibold tracking-[-0.02em]">
                Options a la carte
              </h3>
              <p className="text-[13px] text-[#4d4f56] mt-1">
                A ajouter sur n&apos;importe quel plan ou commande.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {addons.map((a) => (
              <div
                key={a.label}
                className="bg-white border border-[#f1f1f3] rounded-xl px-5 py-4 flex items-center justify-between"
              >
                <span className="text-[13px] font-medium">{a.label}</span>
                <span className="text-[13px] font-semibold text-[#6c3fee]">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-center mb-10">
            Ce qu&apos;en disent les marques CBD
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-[#f8e16c] text-[#f8e16c]" />
                  ))}
                </div>
                <p className="text-[13px] leading-[1.65] text-[#333] mb-5">&ldquo;{t.quote}&rdquo;</p>
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

      {/* =================== COMPLIANCE =================== */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="bg-[#f3f7ef] border border-[#d4e4d8] rounded-[1.5rem] p-8 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h3 className="text-[16px] font-semibold mb-2">
                Conformite publicitaire CBD
              </h3>
              <p className="text-[13px] text-[#4d4f56] leading-[1.65]">
                Notre creative director applique les guidelines Meta, TikTok et Google
                concernant le CBD : pas d&apos;allegations medicales, pas de promesse
                therapeutique, respect des mentions legales FR/EU. Votre compte pub est
                protege.
              </p>
            </div>
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
          <div className="rounded-[2rem] bg-foreground text-background p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#6c3fee]/30 rounded-full blur-3xl" />
            <div className="relative text-center">
              <Sparkles className="h-6 w-6 text-[#a488ff] mx-auto mb-4" />
              <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
                Envie de premieres creatives en 7 jours ?
              </h2>
              <p className="mt-4 text-[14px] text-background/70 leading-[1.65] max-w-xl mx-auto">
                Remplissez notre brief 2 min et on vous rappelle sous 24 h avec un plan
                creative sur mesure pour votre marque CBD.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap justify-center">
                <Link href="#pricing">
                  <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-background text-foreground hover:bg-background/90">
                    Choisir un plan
                  </Button>
                </Link>
                <Link href="mailto:creative@unsigned.fr">
                  <Button
                    variant="outline"
                    className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider border-background/20 text-background hover:bg-background/10"
                  >
                    <Zap className="h-3.5 w-3.5 mr-2" />
                    Brief express
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

function Heart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" />
    </svg>
  );
}
