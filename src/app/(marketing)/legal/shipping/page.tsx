import Link from "next/link";
import {
  Truck,
  Clock,
  RotateCcw,
  ShieldCheck,
  Package,
  FileText,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Leaf,
  Globe,
  Euro,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const deliveryOptions = [
  { zone: "France metropolitaine", delay: "2-3 jours ouvres", carrier: "Colissimo, Chronopost", standard: "5,90 EUR", free: "200 EUR", icon: "FR" },
  { zone: "Belgique, Luxembourg, Pays-Bas", delay: "3-5 jours ouvres", carrier: "DHL Parcel", standard: "8,90 EUR", free: "300 EUR", icon: "BE" },
  { zone: "Allemagne, Italie, Espagne", delay: "3-5 jours ouvres", carrier: "DHL Parcel", standard: "9,90 EUR", free: "300 EUR", icon: "EU" },
  { zone: "Reste de l'UE", delay: "5-7 jours ouvres", carrier: "DHL Express", standard: "12,90 EUR", free: "500 EUR", icon: "UE" },
  { zone: "Suisse & Royaume-Uni", delay: "5-8 jours ouvres", carrier: "DHL Express (dedouanement)", standard: "18,90 EUR", free: "500 EUR", icon: "CH" },
];

const steps = [
  { n: "01", title: "Paiement valide", text: "Votre commande entre en fabrication on demand des le paiement confirme." },
  { n: "02", title: "Fabrication UE", text: "5-10 jours ouvres selon le produit. Tracabilite lot par lot avec COA." },
  { n: "03", title: "Preparation & controle", text: "Packaging personnalise, etiquette, insert marketing (plan Pro)." },
  { n: "04", title: "Expedition + suivi", text: "Numero de suivi envoye automatiquement par email. Colis trackable en temps reel." },
];

const accepted = [
  "Produit recu endommage pendant le transport",
  "Erreur de produit, format ou quantite de notre part",
  "Defaut de fabrication (etiquette, etancheite, dosage)",
  "Ecart vs. bon a tirer valide",
];

const refused = [
  "Produit ouvert, utilise ou desesence",
  "Packaging personnalise conforme au bon a tirer valide",
  "Preference de design apres validation BAT",
  "Demande au-dela du delai legal de 14 jours",
];

const faq = [
  { q: "Quand ma commande part-elle ?", a: "Apres validation du bon a tirer (BAT) et du paiement, la fabrication prend 5 a 10 jours ouvres selon le produit. L'expedition intervient le jour ouvre suivant la fin de production." },
  { q: "Mes clients voient-ils votre nom sur le colis ?", a: "Non. En dropshipping, chaque colis est expedie neutre, sous votre marque. Adresse expediteur generique (fulfillment center UE), pas de facture Unsigned dans le colis, insert optionnel a votre nom." },
  { q: "Et pour les grandes quantites (500 u.+) ?", a: "Les commandes gros volume passent par notre cellule B2B avec livraison palette sur rendez-vous. Devis sous 24 h, assurance transport incluse, possibilite de depot direct en entrepot." },
  { q: "Que se passe-t-il en cas de douane ?", a: "Pour les expeditions hors UE (Suisse, UK), DHL Express gere le dedouanement. Les frais de douane eventuels sont a la charge du destinataire sauf mention contraire. Certificats phytosanitaires & fiches techniques fournis." },
];

export default function ShippingPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-14 pb-10 bg-[#faf5ed]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
                Politique
              </span>
              <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
                Livraison &amp; Retours
              </h1>
              <p className="mt-4 text-[15px] text-[#4d4f56] max-w-xl leading-[1.65]">
                Fabrication on demand en UE, expedition sous 48 h apres production,
                retours simplifies. Tout ce que vous devez savoir pour livrer vos
                clients en toute confiance.
              </p>
            </div>
            <div className="text-[11px] text-[#9ca3af] lg:text-right">
              Derniere mise a jour : 18 avril 2026
            </div>
          </div>
        </div>
      </section>

      {/* KEY PILLS */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: Clock, title: "Fabrication 5-10 j", desc: "On demand, zero stock" },
            { icon: Truck, title: "Expedition sous 48 h", desc: "Apres fin de production" },
            { icon: Globe, title: "Europe + UK + CH", desc: "Transporteurs premium" },
            { icon: RotateCcw, title: "Retours 14 jours", desc: "Selon conditions ci-dessous" },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-[#f1f1f3] rounded-2xl p-5 flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold leading-tight">{title}</h3>
                <p className="text-[12px] text-[#4d4f56] mt-1 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ZONES TABLE */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-[28px] font-semibold tracking-[-0.02em]">Zones &amp; tarifs</h2>
              <p className="text-[13px] text-[#4d4f56] mt-1">
                Tarifs HT applicables aux commandes expedition directe (hors commande palette B2B).
              </p>
            </div>
            <Link
              href="#bulk"
              className="text-[12px] font-bold uppercase tracking-wider hover:underline flex items-center gap-1"
            >
              Commandes palette B2B <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="rounded-2xl border border-[#f1f1f3] overflow-x-auto">
            <div className="grid grid-cols-[60px_1fr_150px_180px_120px_110px] gap-3 px-5 py-4 bg-[#faf5ed] text-[11px] font-bold uppercase tracking-wider text-[#4d4f56] min-w-[820px]">
              <div>Zone</div>
              <div>Destination</div>
              <div>Delai</div>
              <div>Transporteur</div>
              <div>Tarif</div>
              <div>Gratuit</div>
            </div>
            {deliveryOptions.map((d, i) => (
              <div
                key={d.zone}
                className={`grid grid-cols-[60px_1fr_150px_180px_120px_110px] gap-3 px-5 py-4 items-center text-[13px] border-t border-[#f1f1f3] min-w-[820px] ${
                  i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                }`}
              >
                <div className="text-[11px] font-bold bg-[#f7f7f8] rounded-md px-1.5 py-0.5 w-fit">
                  {d.icon}
                </div>
                <div className="font-semibold">{d.zone}</div>
                <div className="text-[#4d4f56]">{d.delay}</div>
                <div className="text-[#4d4f56]">{d.carrier}</div>
                <div>{d.standard}</div>
                <div>
                  <span className="inline-flex bg-green-50 text-green-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {d.free}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[12px] text-[#4d4f56] flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
            <span>
              Tous les envois sont <strong>assures</strong> contre la perte, le vol et la casse. Colis neutre (pas de mention Unsigned) pour le dropshipping.
            </span>
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-2">Comment se passe une commande</h2>
          <p className="text-[13px] text-[#4d4f56] mb-8">
            De la validation du panier jusqu&apos;a la boite aux lettres de votre client.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map((s, i) => (
              <div key={s.n} className="relative bg-white rounded-2xl border border-[#f1f1f3] p-5">
                <span className="absolute -top-3 left-5 text-[10px] font-bold bg-foreground text-background px-2.5 py-1 rounded-full">
                  {s.n}
                </span>
                <h3 className="text-[15px] font-semibold mt-3 mb-2">{s.title}</h3>
                <p className="text-[12px] text-[#4d4f56] leading-snug">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 h-4 w-4 text-[#d4d4d8]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BULK B2B */}
      <section id="bulk" data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="bg-[#faf5ed] rounded-[1.5rem] p-8 lg:p-10 grid md:grid-cols-[1fr_280px] gap-8 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#8b6914] mb-3">
                Service B2B
              </span>
              <h2 className="text-[28px] font-semibold tracking-[-0.02em] leading-tight">
                Commandes palette &amp; gros volumes
              </h2>
              <p className="text-[13px] text-[#4d4f56] mt-3 mb-5 max-w-md leading-[1.65]">
                Au-dela de <strong>500 g</strong> ou <strong>500 unites</strong>, votre commande sort du parcours automatise et passe par notre cellule B2B : livraison palette, rendez-vous logistique, assurance transport incluse, paiement par virement.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Package, label: "Livraison palette" },
                  { icon: Euro, label: "Virement 30 j" },
                  { icon: ShieldCheck, label: "Assurance incluse" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-[11px] font-semibold"
                  >
                    <Icon className="h-3 w-3 text-[#8b6914]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <Link href="/catalog" className="block">
              <Button className="w-full rounded-full h-[52px] text-[12px] font-bold uppercase tracking-wider bg-[#8b6914] hover:bg-[#6e5210] text-white">
                Demander un devis B2B
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RETURNS POLICY */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-2">Politique de retours</h2>
          <p className="text-[13px] text-[#4d4f56] mb-8 max-w-2xl leading-[1.65]">
            Comme les produits sont fabriques a la demande avec votre design, les retours sont encadres. On distingue les cas valides (a notre charge) et les cas refuses.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-[1.25rem] border-2 border-green-100 bg-green-50/30 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-green-700" />
                </div>
                <h3 className="text-[16px] font-semibold">Cas acceptes</h3>
              </div>
              <ul className="space-y-2.5">
                {accepted.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[13px]">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-[#4d4f56] mt-5 pt-4 border-t border-green-200/60">
                Delai de reclamation : <strong>14 jours</strong> a compter de la reception. Retour gratuit, remplacement ou remboursement au choix.
              </p>
            </div>

            <div className="rounded-[1.25rem] border-2 border-red-100 bg-red-50/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                  <XCircle className="h-4 w-4 text-red-700" />
                </div>
                <h3 className="text-[16px] font-semibold">Cas refuses</h3>
              </div>
              <ul className="space-y-2.5">
                {refused.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[13px]">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-[#4d4f56] mt-5 pt-4 border-t border-red-200/60">
                Le packaging personnalise etant imprime a la commande, seule une erreur de notre part ou un defaut de fabrication ouvre droit a retour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO RETURN */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-8">Comment demander un retour</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: FileText, title: "1. Ouvrez un ticket", text: "Depuis votre dashboard, section Commandes, cliquez sur 'Signaler un probleme' et joignez vos photos." },
              { icon: Package, title: "2. Renvoyez le colis", text: "Etiquette de retour prepayee envoyee sous 24 h si le cas est valide. Vous n'avancez rien." },
              { icon: RotateCcw, title: "3. Remplacement ou remboursement", text: "Des reception a notre entrepot, choix entre refabrication du produit ou remboursement sous 7 j." },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white rounded-2xl border border-[#f1f1f3] p-6">
                  <Icon className="h-5 w-5 text-[#6c3fee] mb-4" />
                  <h3 className="text-[15px] font-semibold mb-2">{s.title}</h3>
                  <p className="text-[12px] text-[#4d4f56] leading-snug">{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="bg-[#f3f7ef] border border-[#d4e4d8] rounded-[1.5rem] p-8 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
              <Leaf className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h3 className="text-[16px] font-semibold mb-2">Emballage recycle &amp; neutralite carbone</h3>
              <p className="text-[13px] text-[#4d4f56] leading-[1.65]">
                Tous nos colis sont expedies en carton 100% recycle et recyclable, remplissage papier kraft (pas de plastique). Chaque expedition compensee via un programme de reforestation europeenne verifie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ MINI */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] mb-8">Questions rapides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faq.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl border border-[#f1f1f3] p-6">
                <h3 className="text-[14px] font-semibold mb-2 flex items-start gap-2">
                  <span className="text-[#6c3fee]">Q.</span>
                  {f.q}
                </h3>
                <p className="text-[13px] text-[#4d4f56] leading-[1.65]">{f.a}</p>
              </div>
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

      {/* CTA */}
      <section className="py-16 bg-[#faf5ed]">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8 text-center">
          <AlertCircle className="h-6 w-6 text-[#6c3fee] mx-auto mb-3" />
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight mb-3">
            Une question specifique sur votre commande ?
          </h2>
          <p className="text-[13px] text-[#4d4f56] mb-6 max-w-md mx-auto">
            Notre equipe logistique repond sous 24 h ouvrees. Indiquez votre numero de commande pour un traitement prioritaire.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="mailto:logistique@unsigned.fr">
              <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider">
                Contacter la logistique
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/profile/orders">
              <Button
                variant="outline"
                className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
              >
                Voir mes commandes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
