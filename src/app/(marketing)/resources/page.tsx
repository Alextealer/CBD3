"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Megaphone,
  Leaf,
  ShieldCheck,
  Search,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "Tous" | "Editorial" | "Marketing" | "Conformite" | "Bien-etre" | "Business";

type Article = {
  title: string;
  excerpt: string;
  category: Exclude<Category, "Tous">;
  readTime: string;
  date: string;
  author: string;
  bg: string; // tailwind bg for placeholder hero
  featured?: boolean;
};

const articles: Article[] = [
  {
    title: "Comment choisir entre huile spectre complet et broad spectrum",
    excerpt:
      "Tout savoir sur les differences, avantages et cas d'usage pour positionner votre gamme CBD.",
    category: "Editorial",
    readTime: "6 min",
    date: "18 avril 2026",
    author: "Equipe Unsigned",
    bg: "bg-gradient-to-br from-[#d4e4d8] to-[#a8c7ae]",
    featured: true,
  },
  {
    title: "5 tendances marketing CBD pour 2026",
    excerpt:
      "Influenceurs micro-communautes, storytelling conformite, UGC produit et plus.",
    category: "Marketing",
    readTime: "8 min",
    date: "12 avril 2026",
    author: "Sophie Martin",
    bg: "bg-gradient-to-br from-[#f1eefe] to-[#cbb8ff]",
  },
  {
    title: "Reglementation CBD en France : le guide complet 2026",
    excerpt:
      "THC < 0,3%, novel food, allegations interdites : tout ce qu'il faut savoir pour rester conforme.",
    category: "Conformite",
    readTime: "12 min",
    date: "5 avril 2026",
    author: "Maitre Laurent",
    bg: "bg-gradient-to-br from-[#faf0d4] to-[#e8d49a]",
  },
  {
    title: "Les ingredients CBD qui vont exploser en 2026",
    excerpt:
      "CBG, CBN, CBC, terpenes isoles — le guide des molecules qui emergent sur le marche.",
    category: "Editorial",
    readTime: "7 min",
    date: "2 avril 2026",
    author: "Dr. Moreau",
    bg: "bg-gradient-to-br from-[#e3d4ff] to-[#b8a3ff]",
  },
  {
    title: "Comment lancer sa marque CBD avec 500 EUR",
    excerpt:
      "Budget minime, dropshipping + design studio : la feuille de route etape par etape.",
    category: "Business",
    readTime: "10 min",
    date: "28 mars 2026",
    author: "Lucas Dupont",
    bg: "bg-gradient-to-br from-[#cfe5f3] to-[#8fb9d8]",
  },
  {
    title: "CBD & sommeil : que disent vraiment les etudes ?",
    excerpt:
      "Revue des 15 meilleures etudes publiees sur CBD et qualite du sommeil.",
    category: "Bien-etre",
    readTime: "9 min",
    date: "24 mars 2026",
    author: "Dr. Moreau",
    bg: "bg-gradient-to-br from-[#1b2463] to-[#3c4890]",
  },
  {
    title: "Packaging CBD : la checklist mentions obligatoires",
    excerpt:
      "INCI, lot, date de durabilite, avertissements — tout ce qui doit etre sur votre etiquette.",
    category: "Conformite",
    readTime: "5 min",
    date: "20 mars 2026",
    author: "Equipe Unsigned",
    bg: "bg-gradient-to-br from-[#ece4d8] to-[#bfa885]",
  },
  {
    title: "Cosmetique CBD : les 4 formulations qui vendent le plus",
    excerpt:
      "Serum, creme, baume, huile : analyse des best-sellers de nos marques partenaires.",
    category: "Business",
    readTime: "6 min",
    date: "14 mars 2026",
    author: "Sophie Martin",
    bg: "bg-gradient-to-br from-[#e8d5d0] to-[#c9a49b]",
  },
  {
    title: "COA & transparence : construire la confiance avec vos clients",
    excerpt:
      "Comment transformer la contrainte reglementaire en argument marketing puissant.",
    category: "Marketing",
    readTime: "7 min",
    date: "8 mars 2026",
    author: "Maitre Laurent",
    bg: "bg-gradient-to-br from-[#f8e16c] to-[#e4c73d]",
  },
];

const categories: { id: Category; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "Tous", icon: BookOpen },
  { id: "Editorial", icon: TrendingUp },
  { id: "Marketing", icon: Megaphone },
  { id: "Conformite", icon: ShieldCheck },
  { id: "Bien-etre", icon: Leaf },
  { id: "Business", icon: TrendingUp },
];

const catStyles: Record<Exclude<Category, "Tous">, string> = {
  Editorial: "bg-[#f8e16c] text-[#1a1a1a]",
  Marketing: "bg-[#f1eefe] text-[#6c3fee]",
  Conformite: "bg-[#faf0d4] text-[#8b6914]",
  "Bien-etre": "bg-[#d4e4d8] text-[#3d6b1e]",
  Business: "bg-[#cfe5f3] text-[#1b4f78]",
};

export default function ResourcesPage() {
  const [active, setActive] = useState<Category>("Tous");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = articles;
    if (active !== "Tous") list = list.filter((a) => a.category === active);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q),
      );
    }
    return list;
  }, [active, query]);

  const featured = articles.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <>
      {/* HERO */}
      <section className="pt-14 pb-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Ressources
            </span>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              Apprenez, inspirez-vous, scalez.
            </h1>
            <p className="mt-4 text-[15px] text-[#4d4f56] leading-[1.65]">
              Guides, tendances et analyses pour creer et developper votre marque CBD
              en marque blanche. Mis a jour chaque semaine par nos experts formules,
              reglementation et marketing.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-xl mt-8">
            <Search className="absolute top-1/2 -translate-y-1/2 left-5 h-4 w-4 text-[#9ca3af]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Chercher un article..."
              className="w-full h-12 pl-11 pr-5 rounded-full bg-white border border-[#e5e5e7] text-[14px] focus:outline-none focus:border-foreground"
            />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {active === "Tous" && featured && !query && (
        <section data-reveal className="py-6">
          <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
            <Link
              href="#"
              className="group block bg-white border border-[#f1f1f3] rounded-[1.5rem] overflow-hidden lg:grid lg:grid-cols-2 hover:shadow-lg transition-shadow"
            >
              <div className={`${featured.bg} aspect-[16/10] lg:aspect-auto relative`}>
                <span className="absolute top-5 left-5 text-[10px] font-bold uppercase tracking-wider bg-foreground text-background px-3 py-1.5 rounded-full">
                  A la une
                </span>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span
                  className={`w-fit text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 ${catStyles[featured.category]}`}
                >
                  {featured.category}
                </span>
                <h2 className="text-[28px] lg:text-[32px] font-semibold tracking-[-0.02em] leading-[1.15] mb-3 group-hover:underline">
                  {featured.title}
                </h2>
                <p className="text-[14px] text-[#4d4f56] leading-[1.65] mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[12px] text-[#9ca3af] mt-auto">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CATEGORY FILTER */}
      <section className="py-6 sticky top-[60px] bg-white/95 backdrop-blur z-30 border-b border-[#f1f1f3]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`h-10 px-4 rounded-full text-[12px] font-semibold flex items-center gap-2 transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-[#f7f7f8] text-[#4d4f56] hover:bg-[#ebebed]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={isActive ? 2.25 : 1.75} />
                {c.id}
              </button>
            );
          })}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-12">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <BookOpen className="h-8 w-8 text-[#9ca3af] mx-auto mb-3" />
              <p className="text-[14px] text-[#4d4f56]">
                Aucun article ne correspond a cette recherche.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(active === "Tous" && !query ? rest : filtered).map((a, i) => (
                <Link
                  key={`${a.title}-${i}`}
                  href="#"
                  data-reveal
                  className="group bg-white rounded-[1.25rem] border border-[#f1f1f3] overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className={`${a.bg} aspect-[16/10] relative`}>
                    <span
                      className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${catStyles[a.category]}`}
                    >
                      {a.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold leading-snug mb-2 group-hover:underline">
                      {a.title}
                    </h3>
                    <p className="text-[13px] text-[#4d4f56] leading-[1.6] line-clamp-2 mb-4">
                      {a.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-[#9ca3af]">
                      <span>{a.author}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {a.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section data-reveal className="py-16">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8">
          <div className="bg-foreground text-background rounded-[2rem] p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#6c3fee]/30 rounded-full blur-3xl" />
            <div className="relative">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-background/60 mb-3">
                Newsletter Unsigned
              </span>
              <h2 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight mb-3 max-w-md">
                Recevez nos meilleurs articles, chaque semaine.
              </h2>
              <p className="text-[13px] text-background/70 leading-snug max-w-md mb-6">
                Tendances, reglementation, cas clients — en 5 minutes de lecture.
                Pas de spam, desinscription en un clic.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Merci ! Votre inscription est bien prise en compte.");
                }}
                className="flex flex-col sm:flex-row gap-2 max-w-md"
              >
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="flex-1 h-12 px-5 rounded-full bg-background/10 border border-background/20 text-[13px] text-background placeholder:text-background/40 focus:outline-none focus:border-background"
                />
                <Button
                  type="submit"
                  className="rounded-full h-12 px-5 text-[12px] font-bold uppercase tracking-wider bg-background text-foreground hover:bg-background/90"
                >
                  S&apos;inscrire <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
