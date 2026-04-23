import type { Metadata } from "next";
import { ApplicationForm } from "./application-form";
import { getIncubatorContent } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Signed Label — Incubateur Unsigned",
  description:
    "Signed Label est l'incubateur prive d'Unsigned, sur invitation. Un nombre restreint de projets accompagnes chaque saison : groupes etablis, createurs, marques emergentes.",
};

export const dynamic = "force-dynamic";

const fallbackProfiles = [
  {
    label: "01",
    title: "Groupes etablis",
    body: "Acteurs reconnus de l'ecosysteme cannabis et CBD qui souhaitent etendre leur gamme ou structurer une nouvelle ligne sous une marque dediee.",
  },
  {
    label: "02",
    title: "Createurs & influenceurs",
    body: "Communautes engagees autour du lifestyle, du wellness ou du cannabis. Audience qualifiee, ton editorial assume, projet de marque structure.",
  },
  {
    label: "03",
    title: "Marques emergentes",
    body: "Identite forte, premiere traction, besoin d'infrastructure pour passer le cap industriel sans diluer le positionnement.",
  },
  {
    label: "04",
    title: "Expertises differenciantes",
    body: "Porteurs de projet venant de l'agronomie, de l'extraction, de la formulation ou du retail. Une these claire, un savoir-faire identifiable.",
  },
];

const fallbackServices = [
  {
    title: "Infrastructure white-label",
    body: "Catalogue, fabrication, packaging, fulfillment et logistique deja en place. Vous arrivez sur une chaine operationnelle.",
  },
  {
    title: "Marketing & reseaux",
    body: "Strategie de contenu, pilotage des reseaux sociaux, activations communautaires. Une equipe qui comprend les codes du secteur.",
  },
  {
    title: "Tech",
    body: "Boutique e-commerce, integrations, outils de design produit, analytics. Stack moderne deja en place, pret a etre brande.",
  },
  {
    title: "Sourcing & R&D",
    body: "Acces a nos partenaires laboratoires et a nos formulations. Possibilite de developper une reference exclusive a votre marque.",
  },
  {
    title: "Module de paiement",
    body: "Solution de paiement adaptee aux specificites du secteur, integree a votre boutique sans friction.",
  },
  {
    title: "Direction artistique",
    body: "Studio interne pour design produit, packaging, contenus. Collaboration etroite, pas de sous-traitance.",
  },
];

const fallbackSteps = [
  {
    n: "01",
    title: "Candidature",
    body: "Vous nous transmettez votre dossier via le formulaire ci-dessous. Soyez precis : vision, etat actuel, ce que vous attendez de l'incubateur.",
  },
  {
    n: "02",
    title: "Etude du dossier",
    body: "Examen interne sous 2 a 4 semaines. Nous ne repondons qu'aux candidatures retenues pour la suite.",
  },
  {
    n: "03",
    title: "Entretien",
    body: "Une rencontre, en personne ou en visio, pour confronter les ambitions et calibrer la collaboration.",
  },
  {
    n: "04",
    title: "Decision & accompagnement",
    body: "Si l'alignement est clair, nous structurons un plan d'incubation sur mesure. Lancement coordonne par votre interlocuteur dedie.",
  },
];

type Item<T> = T extends Array<infer U> ? U : never;
const arr = <T,>(v: unknown, fb: T[]): T[] =>
  Array.isArray(v) && v.length > 0 ? (v as T[]) : fb;
const str = (v: unknown, fb: string): string =>
  typeof v === "string" && v.trim() ? v : fb;

export default async function IncubateurPage() {
  const cms = (await getIncubatorContent()) as Record<string, any> | null;
  const c = cms ?? {};

  const hero = c.hero ?? {};
  const manifesto = c.manifesto ?? {};
  const profilesGroup = c.profiles ?? {};
  const servicesGroup = c.services ?? {};
  const processGroup = c.process ?? {};
  const application = c.applicationIntro ?? {};
  const closing = c.closing ?? {};

  const profiles = arr<Item<typeof fallbackProfiles>>(profilesGroup.items, fallbackProfiles);
  const services = arr<Item<typeof fallbackServices>>(servicesGroup.items, fallbackServices);
  const steps = arr<Item<typeof fallbackSteps>>(processGroup.steps, fallbackSteps);
  const manifestoParagraphs = arr<{ text: string }>(manifesto.paragraphs, [
    { text: "Le CBD est un marche encombre, ou la majorite des marques se ressemblent. Signed Label existe pour accompagner celles qui refusent ce nivellement : une vision tenue, une identite affirmee, une exigence sur le produit." },
    { text: "Nous mettons a disposition l'infrastructure, le cadre reglementaire et les canaux de distribution que nous avons construits. Vous gardez la marque, le ton, la relation client. Nous prenons en charge ce qui ralentit ou disperse." },
    { text: "La selection se fait sur dossier et entretien. Confidentielle." },
  ]);

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mt-6">
        <div className="bg-foreground text-white rounded-[2rem] overflow-hidden relative">
          <div className="max-w-[1240px] mx-auto px-8 lg:px-16 py-24 lg:py-32 min-h-[80vh] flex flex-col justify-between gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/50 mb-8">
                {str(hero.eyebrow, "Incubateur prive — sur invitation")}
              </p>
              <h1 className="text-[64px] sm:text-[96px] lg:text-[120px] font-medium tracking-[-0.06em] leading-[0.95]">
                {str(hero.title, "Signed Label")}
              </h1>
            </div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-end">
              <p className="text-[18px] sm:text-[20px] font-medium text-white/75 leading-[1.55] max-w-[640px]">
                {str(
                  hero.lead,
                  "Un nombre restreint de projets CBD selectionnes chaque saison. Pas d'appel d'offres, pas de promesse generique. Une infrastructure complete et un accompagnement direct, pour quelques marques qui le meritent.",
                )}
              </p>
              <a
                href={str(hero.ctaHref, "#candidater")}
                className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white border-b border-white/40 pb-2 hover:border-white transition-colors w-fit"
              >
                {str(hero.ctaLabel, "Candidater")}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MANIFESTO ==================== */}
      <section className="py-28 lg:py-36">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50 sticky top-24">
                {str(manifesto.eyebrow, "Notre vision")}
              </p>
            </div>
            <div className="max-w-[680px]">
              <p className="text-[28px] sm:text-[36px] font-medium tracking-[-0.03em] leading-[1.25]">
                {str(
                  manifesto.lede,
                  "Nous incubons un nombre restreint de projets qui nous paraissent pertinents. Pas plus. Pas pour faire du volume.",
                )}
              </p>
              <div className="mt-10 space-y-5 text-[16px] text-[#4d4f56] leading-[1.75]">
                {manifestoParagraphs.map((p, i) => (
                  <p key={i}>{p.text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROFILES ==================== */}
      <section className="py-28 lg:py-36 bg-[#f7f7f8]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Qui nous incubons
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
              {str(profilesGroup.title, "Quatre profils. Une exigence commune : avoir quelque chose a dire.")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-foreground/10">
            {profiles.map((p) => (
              <div key={p.label} className="bg-[#f7f7f8] p-10 lg:p-12">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-6">
                  {p.label}
                </p>
                <h3 className="text-[24px] font-medium tracking-[-0.02em] mb-4">
                  {p.title}
                </h3>
                <p className="text-[15px] text-[#4d4f56] leading-[1.7] max-w-[440px]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-28 lg:py-36">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Ce que nous apportons
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
              {str(servicesGroup.title, "Une infrastructure complete, deja eprouvee.")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {services.map((s) => (
              <div key={s.title} className="border-t border-foreground/15 pt-6">
                <h3 className="text-[18px] font-semibold tracking-[-0.01em] mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[#4d4f56] leading-[1.7]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-28 lg:py-36 bg-[#faf5ed]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Processus
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] max-w-[640px]">
              {str(processGroup.title, "Quatre etapes. Aucune precipitation.")}
            </h2>
          </div>

          <ol className="space-y-px bg-foreground/10">
            {steps.map((s) => (
              <li
                key={s.n}
                className="bg-[#faf5ed] grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr_2fr] gap-6 sm:gap-10 px-2 sm:px-6 py-10 lg:py-14"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 pt-1">
                  {s.n}
                </span>
                <h3 className="text-[22px] sm:text-[28px] font-medium tracking-[-0.02em] leading-[1.2]">
                  {s.title}
                </h3>
                <p className="text-[15px] text-[#4d4f56] leading-[1.7] sm:max-w-[480px] col-span-2 sm:col-span-1">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== APPLICATION FORM ==================== */}
      <section id="candidater" className="py-28 lg:py-36 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-foreground/50">
              Candidater
            </p>
            <div className="max-w-[680px]">
              <h2 className="text-[36px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.1] mb-6">
                {str(application.title, "Presentez votre projet.")}
              </h2>
              <p className="text-[16px] text-[#4d4f56] leading-[1.75]">
                {str(
                  application.body,
                  "Soyez precis. Les meilleurs dossiers sont ceux qui assument une vision plutot que d'empiler des arguments. Nous lisons tout, nous repondons uniquement aux projets retenus.",
                )}
              </p>
            </div>
          </div>

          <div className="lg:pl-[304px]">
            <div className="max-w-[760px]">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLOSING ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-[1240px] mx-auto bg-foreground text-white rounded-[2rem] px-10 py-16 lg:px-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/50 mb-6">
                {str(closing.eyebrow, "Saison en cours")}
              </p>
              <p className="text-[28px] sm:text-[32px] font-medium tracking-[-0.03em] leading-[1.2] max-w-[480px]">
                {str(
                  closing.title,
                  "Places limitees. Selection close des que la cohorte est constituee.",
                )}
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-[14px] text-white/60 leading-[1.6]">
                {str(closing.contactLabel, "Pour toute demande institutionnelle ou partenariat presse")} :
                <br />
                <a
                  href={`mailto:${str(closing.contactEmail, "contact@unsigned.fr")}`}
                  className="text-white border-b border-white/40 hover:border-white transition-colors"
                >
                  {str(closing.contactEmail, "contact@unsigned.fr")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
