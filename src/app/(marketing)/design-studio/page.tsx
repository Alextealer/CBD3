import Link from "next/link";
import {
  Heart,
  BadgeCheck,
  Camera,
  Eye,
  Shapes,
  Type as TypeIcon,
  Palette,
  Brush,
  Upload,
  HelpCircle,
  ArrowRight,
  MousePointer2,
  UserPlus,
  Grid3x3,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Heart,
    title: "Gratuit a utiliser",
    text: "Acces illimite a notre Studio pour creer votre ligne de produits CBD — sans frais caches, sans limite.",
    bg: "bg-[#d4e4d8]",
  },
  {
    icon: BadgeCheck,
    title: "Design facile",
    text: "Des outils pensees pour les non-designers : formes, templates, patterns et typographies livres prets a l'emploi.",
    bg: "bg-[#cfe5f3]",
  },
  {
    icon: Camera,
    title: "Mockups qui vendent",
    text: "Generez des mockups realistes de vos produits CBD pour captiver vos clients et booster vos ventes.",
    bg: "bg-[#1a1a1a] text-white",
  },
  {
    icon: Eye,
    title: "Rendu fidele",
    text: "Ce que vous voyez dans le Studio correspond a 99% au produit imprime et expedie a votre client.",
    bg: "bg-[#f3dfe6]",
  },
];

const howSteps = [
  { icon: UserPlus, title: "Creez votre compte Unsigned", desc: "En 30 secondes, avec Google ou email. 100% gratuit, sans carte." },
  { icon: Grid3x3, title: "Choisissez un produit a designer", desc: "Huile, fleur, cosmetique, coffret, resine... 50+ produits CBD disponibles." },
  { icon: Brush, title: "Creez vos designs & vendez", desc: "Appliquez votre marque, validez le bon a tirer, et lancez la production on demand." },
];

const tools = [
  {
    icon: Shapes,
    title: "Formes & icones",
    desc: "Rectangles, cercles, polygones, lignes, etoiles, fleches et pictos CBD ready-to-use.",
  },
  {
    icon: Palette,
    title: "Patterns & textures",
    desc: "30+ motifs naturels, geometriques, organiques pour habiller vos etiquettes.",
  },
  {
    icon: TypeIcon,
    title: "Typographies curatees",
    desc: "Inter, Oswald, Playfair, Roboto Mono... Une selection de fonts web-safe et imprimables.",
  },
];

export default function DesignStudioPage() {
  return (
    <>
      {/* =================== HERO =================== */}
      <section className="pt-16 pb-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              Creez vos designs gratuitement dans notre Design Studio
            </h1>
            <p className="mt-5 text-[15px] text-[#4d4f56] leading-[1.65] max-w-[480px]">
              La solution la plus simple pour designer votre gamme CBD en marque
              blanche. Uploadez votre logo, appliquez-le sur nos produits, ajustez
              couleurs et typos, validez. Zero logiciel a installer.
            </p>
            <div className="mt-8">
              <Link href="/studio/amnesia-haze-cbd">
                <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-foreground text-background hover:bg-foreground/90">
                  Commencer a designer
                </Button>
              </Link>
            </div>
          </div>

          {/* visual composition */}
          <div className="relative h-[420px] lg:h-[460px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* bottle mockup */}
              <div className="relative w-[200px] h-[340px] rounded-[2rem] bg-gradient-to-b from-white via-white to-[#f5f5f5] shadow-xl border border-[#f1f1f3] flex flex-col items-center justify-center p-6">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-10 bg-[#f5f5f5] rounded-lg" />
                <div className="mt-12 w-28 h-32 rounded-lg border-2 border-dashed border-[#6c3fee] flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[13px] font-semibold">Votre</p>
                    <p className="text-[13px] font-semibold">Marque</p>
                    <p className="text-[13px] font-semibold">Ici</p>
                  </div>
                </div>
              </div>
            </div>

            {/* tools rail */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-2 flex flex-col gap-1.5 border border-[#f1f1f3]">
              {[Brush, MousePointer2, TypeIcon, Shapes, Upload].map((Icon, i) => (
                <div
                  key={i}
                  className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                    i === 1 ? "bg-foreground text-background" : "text-foreground hover:bg-[#f5f5f5]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>

            {/* preset cards */}
            <div className="absolute top-6 right-0 w-[140px] rounded-xl bg-[#ffecd4] p-3 rotate-[12deg] shadow-lg">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em]">Vitamin C</p>
              <p className="text-[13px] font-bold leading-tight mt-0.5">Serum</p>
              <p className="text-[7px] mt-1">10% Naturel Origin</p>
              <p className="text-[7px]">Light & Fresh</p>
            </div>
            <div className="absolute bottom-8 right-10 w-[140px] rounded-xl bg-[#f1e5ff] p-3 rotate-[-8deg] shadow-lg">
              <p className="text-[13px] font-bold leading-tight">Playful grey</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== WHY =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight text-center">
            Pourquoi utiliser Unsigned Design Studio ?
          </h2>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className={`${b.bg} rounded-[1.5rem] p-8 flex flex-col`}>
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center mb-6 ${
                      b.bg.includes("text-white") ? "bg-white/10" : "bg-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.01em] leading-tight">
                    {b.title}
                  </h3>
                  <p
                    className={`text-[13px] mt-4 leading-[1.65] ${
                      b.bg.includes("text-white") ? "text-white/70" : "text-[#4d4f56]"
                    }`}
                  >
                    {b.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== CREATE BEAUTY PRODUCT DESIGNS =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
            Creez vos designs CBD
          </h2>
          <p className="mt-4 text-[15px] text-[#4d4f56]">
            La meilleure solution gratuite tout-en-un pour designer et generer des
            mockups de votre gamme CBD.
          </p>
        </div>

        {/* Ready made styles */}
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 mt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 relative h-[340px] flex items-center justify-center">
            {/* 3 stacked design cards */}
            <div className="relative w-[280px] h-[280px]">
              <div className="absolute -left-16 top-12 w-[130px] h-[180px] rounded-xl bg-gradient-to-br from-[#2d4a2c] to-[#1f3320] rotate-[-14deg] shadow-xl flex items-end justify-center p-4">
                <div className="text-center text-white">
                  <p className="text-[8px] font-bold">CLASSIC</p>
                  <p className="text-[14px] font-bold leading-tight">SIMPLE</p>
                </div>
              </div>
              <div className="absolute -left-4 top-6 w-[130px] h-[180px] rounded-xl bg-gradient-to-br from-[#ffd4c2] to-[#ffb091] rotate-[-6deg] shadow-xl flex items-end justify-center p-4">
                <div className="text-center">
                  <p className="text-[8px] font-bold">VITAMIN C</p>
                  <p className="text-[14px] font-bold leading-tight">SERUM</p>
                </div>
              </div>
              <div className="absolute left-12 top-0 w-[150px] h-[200px] rounded-xl bg-gradient-to-br from-[#f89ad5] to-[#ffb8d4] shadow-xl flex items-end justify-center p-5">
                <div className="text-center">
                  <Heart className="h-5 w-5 mx-auto text-[#b1127f] fill-current mb-2" />
                  <p className="text-[20px] font-bold tracking-[-0.02em] leading-none">Cherie</p>
                  <p className="text-[7px] font-bold mt-1">Boost Serum CBD</p>
                </div>
              </div>
              <div className="absolute left-24 top-8 w-[130px] h-[180px] rounded-xl bg-gradient-to-br from-[#2a3a7a] to-[#1a2563] rotate-[10deg] shadow-xl flex items-end justify-center p-4">
                <div className="text-center text-white">
                  <p className="text-[8px] font-bold">Anti-Age</p>
                  <p className="text-[14px] font-bold leading-tight">Cream</p>
                </div>
              </div>
              {/* Glamour pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#e3d4ff] rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <span className="text-[12px] font-semibold">Glamour</span>
                <Brush className="h-3 w-3 text-[#6c3fee]" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight">
              Styles prets-a-l&apos;emploi
            </h3>
            <p className="mt-3 text-[14px] text-[#4d4f56] leading-[1.65] max-w-[460px]">
              Vous ne savez pas par ou commencer ? Notre Studio propose une
              selection de styles crees par des designers packaging. Choisissez, personnalisez, et votre ligne CBD est prete en quelques minutes.
            </p>
            <Link
              href="/studio/amnesia-haze-cbd"
              className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold underline underline-offset-4"
            >
              Tester maintenant <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Professional mockups */}
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 mt-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight">
              Mockups professionnels
            </h3>
            <p className="mt-3 text-[14px] text-[#4d4f56] leading-[1.65] max-w-[460px]">
              La magie ne s&apos;arrete pas au Studio. Une fois votre design valide,
              on genere des mockups lifestyle pour vos visuels e-commerce et
              reseaux sociaux.
            </p>
            <Link
              href="/studio/amnesia-haze-cbd"
              className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold underline underline-offset-4"
            >
              Creer un mockup <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="relative h-[340px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute left-4 top-6 w-[200px] aspect-square rounded-2xl bg-gradient-to-br from-[#d1cfc5] to-[#a39c8c] shadow-xl flex items-center justify-center">
                <div className="w-14 h-28 rounded-md bg-white" />
              </div>
              <div className="absolute right-4 top-0 w-[200px] aspect-square rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#0f0f11] shadow-xl flex items-center justify-center">
                <div className="w-14 h-28 rounded-md bg-white" />
              </div>
              <div className="absolute left-1/2 bottom-4 -translate-x-1/2 bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                <span className="text-[11px] font-semibold">Votre marque</span>
                <Eye className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Tips & guides */}
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 mt-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 relative h-[340px] flex items-center justify-center">
            <div className="relative w-[280px] h-[280px]">
              <div className="absolute left-8 top-4 w-[150px] h-[260px] rounded-xl bg-gradient-to-b from-[#5fb6ff] via-[#c8a0ff] to-[#ffc77a] shadow-xl flex flex-col items-center justify-center p-4">
                <p className="text-[18px] font-bold tracking-[-0.02em]">SOL</p>
                <p className="text-[8px] font-bold mt-1">CAFFEINE GEL</p>
                <p className="text-[8px] font-bold">BOOSTER</p>
              </div>
              <div className="absolute -top-2 -left-6 bg-white rounded-full pl-2 pr-3 py-1.5 flex items-center gap-1.5 shadow-md">
                <HelpCircle className="h-3 w-3 text-[#6c3fee]" />
                <span className="text-[10px] font-semibold">Conformite FR</span>
              </div>
              <div className="absolute bottom-8 -left-4 bg-white rounded-full pl-2 pr-3 py-1.5 flex items-center gap-1.5 shadow-md">
                <HelpCircle className="h-3 w-3 text-[#6c3fee]" />
                <span className="text-[10px] font-semibold">Gradients</span>
              </div>
              <div className="absolute bottom-20 right-0 bg-white rounded-full pl-2 pr-3 py-1.5 flex items-center gap-1.5 shadow-md">
                <HelpCircle className="h-3 w-3 text-[#6c3fee]" />
                <span className="text-[10px] font-semibold">Claims autorises</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight">
              Conseils &amp; guides conformite
            </h3>
            <p className="mt-3 text-[14px] text-[#4d4f56] leading-[1.65] max-w-[460px]">
              Le CBD a ses regles : THC &lt; 0,3%, mentions obligatoires,
              allegations interdites. Notre Studio integre des tips contextuels
              pour que votre design respecte la reglementation EU/FR du premier
              coup.
            </p>
            <Link
              href="/faq"
              className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold underline underline-offset-4"
            >
              Commencer a designer <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Built-in tools */}
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 mt-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight">
              Outils de design integres
            </h3>
            <p className="mt-3 text-[14px] text-[#4d4f56] leading-[1.65] max-w-[460px]">
              Pas de competences en design ? Aucun souci. Notre Studio inclut des
              outils intuitifs &mdash; Formes, Patterns, Typographies &mdash; pour
              creer vos produits CBD sans effort ni doute.
            </p>
            <Link
              href="/studio/amnesia-haze-cbd"
              className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold underline underline-offset-4"
            >
              Commencer <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="relative h-[300px] flex items-center justify-center">
            <div className="relative w-[320px] h-[280px]">
              {/* Interface mock */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-white border border-[#f1f1f3] shadow-xl overflow-hidden flex">
                <div className="w-[56px] bg-[#fafafa] border-r border-[#f1f1f3] flex flex-col items-center gap-2 py-4">
                  {[Brush, TypeIcon, Shapes, Upload, HelpCircle].map((Icon, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        i === 0 ? "bg-foreground text-background" : "text-[#4d4f56]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-4 flex flex-col gap-2">
                  <div className="h-3 w-2/3 bg-[#f1f1f3] rounded-full" />
                  <div className="h-3 w-1/2 bg-[#f1f1f3] rounded-full" />
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-[#f5f5f5] rounded-lg" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== HOW TO USE =================== */}
      <section data-reveal className="py-16 bg-[#f1eefe]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
            Comment utiliser le Design Studio ?
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {howSteps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title}>
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[17px] font-semibold leading-snug max-w-[260px] mx-auto">
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-[#4d4f56] mt-2 max-w-[260px] mx-auto leading-snug">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== TOOL SHOWCASE =================== */}
      <section data-reveal className="py-16">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
            Utilisez nos outils integres
          </h2>
          <p className="mt-4 text-[15px] text-[#4d4f56] max-w-xl mx-auto">
            Des dizaines d&apos;elements de design pour creer votre gamme CBD
            depuis zero, en toute simplicite.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="bg-[#1a2563] text-white rounded-[1.5rem] p-8 aspect-[5/6] flex flex-col items-center justify-center relative overflow-hidden"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="h-9 w-9" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-[18px] font-semibold">{t.title}</h3>
                  <p className="text-[12px] text-white/70 mt-2 leading-snug">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== FINAL CTA =================== */}
      <section className="py-20">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8 text-center">
          <Sparkles className="h-6 w-6 text-[#6c3fee] mx-auto mb-3" />
          <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
            Pret a habiller votre gamme CBD ?
          </h2>
          <p className="mt-4 text-[14px] text-[#4d4f56] max-w-md mx-auto">
            Creez votre compte gratuit et lancez votre premier design en moins
            d&apos;une minute.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/profile">
              <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider">
                Creer un compte
              </Button>
            </Link>
            <Link href="/studio/amnesia-haze-cbd">
              <Button
                variant="outline"
                className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
              >
                Essayer le Studio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
