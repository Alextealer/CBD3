import Link from "next/link";
import {
  CreditCard,
  ShieldCheck,
  XCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Lock,
  TrendingUp,
  Euro,
  Globe,
  Handshake,
  Sparkles,
  Clock,
  FileCheck,
  Zap,
  Users,
  Banknote,
  Landmark,
  Ban,
  Unlock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ============================================================
   DATA
   ============================================================ */

const pains = [
  {
    icon: Ban,
    title: "Comptes fermes sans preavis",
    text: "Stripe, PayPal, Shopify Payments qui bloquent votre CMC du jour au lendemain a cause du mot CBD sur votre site.",
  },
  {
    icon: AlertCircle,
    title: "Refus bancaires systematiques",
    text: "Les banques traditionnelles refusent d'ouvrir un compte pro ou d'activer un TPV pour les marques CBD, meme conformes.",
  },
  {
    icon: Euro,
    title: "Commissions exorbitantes",
    text: "Quand un prestataire accepte, il facture 4 a 7% par transaction, contre 1,5 a 2,5% sur un compte classique.",
  },
  {
    icon: Clock,
    title: "Frais de reserve et delais",
    text: "Reserve de 10 a 20% gelee sur 6 mois, paiements a J+7 ou J+14. Impossible de gerer sa tresorerie.",
  },
];

const benefits = [
  {
    icon: Unlock,
    title: "Acceptation garantie",
    text: "Toutes les marques CBD connectees a Unsigned sont pre-eligibles aupres de notre prestataire partenaire. Plus de dossier refuse.",
  },
  {
    icon: Zap,
    title: "Integration rapide",
    text: "Onboarding en 48 h apres envoi du dossier. Integration native Shopify, WooCommerce, Prestashop. API custom disponible.",
  },
  {
    icon: Euro,
    title: "Tarifs negocies",
    text: "Commissions a partir de 2,4% + 0,25 EUR (cartes EU). Structure claire, sans frais caches, benefice de notre volume collectif.",
  },
  {
    icon: Clock,
    title: "Paiements J+2",
    text: "Virement quotidien J+2 ouvre. Reserve reduite a 5-10% selon l'historique, remboursable apres 3 mois d'activite stable.",
  },
  {
    icon: Globe,
    title: "Multi-devises & Europe",
    text: "EUR, GBP, CHF, USD. 3D-Secure v2, Apple Pay, Google Pay, SEPA. Conformite PSD2 assuree par le partenaire.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-fraude inclus",
    text: "Moteur de scoring fraude natif, chargeback guard, blacklist globale. Dispute management assiste en cas de litige.",
  },
];

const comparison = [
  {
    feature: "Acceptation marques CBD",
    classic: "Refus quasi-systematique",
    ours: "Pre-eligible via Unsigned",
    oursWin: true,
  },
  {
    feature: "Delai d'onboarding",
    classic: "6 a 12 semaines (si accepte)",
    ours: "48 h apres dossier complet",
    oursWin: true,
  },
  {
    feature: "Commission par transaction",
    classic: "4 a 7 % + frais fixes",
    ours: "Des 2,4 % + 0,25 EUR",
    oursWin: true,
  },
  {
    feature: "Reserve appliquee",
    classic: "10 a 20 % sur 6 mois",
    ours: "5 a 10 % sur 3 mois",
    oursWin: true,
  },
  {
    feature: "Delai de virement",
    classic: "J+7 a J+14",
    ours: "J+2 ouvre",
    oursWin: true,
  },
  {
    feature: "Integration technique",
    classic: "Variable selon prestataire",
    ours: "Shopify, Woo, Presta, API",
    oursWin: true,
  },
  {
    feature: "Risque de fermeture compte",
    classic: "Eleve — motif CBD",
    ours: "Nul — prestataire specialise",
    oursWin: true,
  },
];

const process = [
  {
    n: "01",
    icon: Users,
    title: "Vous nous contactez",
    text: "Formulaire d'introduction depuis votre dashboard Unsigned. Un conseiller valide votre eligibilite en interne sous 24 h.",
  },
  {
    n: "02",
    icon: Handshake,
    title: "Mise en relation",
    text: "Introduction directe a notre prestataire partenaire avec votre dossier pre-rempli et recommandation d&apos;Unsigned.",
  },
  {
    n: "03",
    icon: FileCheck,
    title: "Verification KYC",
    text: "Le partenaire verifie vos documents d'entreprise, votre site, vos produits. 48 h en moyenne pour un dossier complet.",
  },
  {
    n: "04",
    icon: Zap,
    title: "Integration technique",
    text: "Integration sur votre Shopify, Woo ou API. Tests en sandbox puis go-live, accompagnement par un ingenieur partenaire.",
  },
  {
    n: "05",
    icon: Banknote,
    title: "Premier virement J+2",
    text: "Premiere commande encaissee, vire sur votre compte pro en 2 jours ouvres. Bienvenue dans un paiement CBD qui marche.",
  },
];

const acceptedMethods = [
  { label: "Visa / Mastercard", sub: "3D-Secure v2" },
  { label: "American Express", sub: "Sur demande" },
  { label: "Apple Pay", sub: "Natif iOS / Safari" },
  { label: "Google Pay", sub: "Android / Chrome" },
  { label: "SEPA virement", sub: "Europe" },
  { label: "SEPA prelevement", sub: "Abonnements" },
  { label: "Bancontact", sub: "Belgique" },
  { label: "iDEAL", sub: "Pays-Bas" },
];

const requirements = [
  { ok: true, label: "Boutique CBD conforme EU/FR (THC < 0,3 %)" },
  { ok: true, label: "Boutique connectee a Unsigned (Standard ou Pro)" },
  { ok: true, label: "K-bis et statuts a jour" },
  { ok: true, label: "Site en ligne avec CGV, mentions legales, politique de confidentialite" },
  { ok: false, label: "Produits a base de THC recreatif (non eligible)" },
  { ok: false, label: "Vente a l'etranger hors zones autorisees par le partenaire" },
];

const testimonials = [
  {
    name: "Marie L.",
    role: "Bloom CBD",
    quote:
      "Stripe m'avait ferme mon compte 3 jours apres le lancement. Via Unsigned j'ai ete mise en relation avec le prestataire partenaire, compte ouvert en 5 jours.",
  },
  {
    name: "Thomas R.",
    role: "Canna Green",
    quote:
      "On avait 6,5% de commission avec l'ancien prestataire CBD. Maintenant 2,6% + virement J+2. Economie annuelle : 28 000 EUR sur notre volume.",
  },
];

const faqs = [
  {
    q: "Qui est le prestataire partenaire ?",
    a: "Un etablissement de paiement agree par l'ACPR (France), specialise dans les verticales a haut risque. Nous ne communiquons pas son nom publiquement pour proteger notre partenariat et eviter les sollicitations sauvages. Il vous est presente lors de l'introduction.",
  },
  {
    q: "Combien coute le service Unsigned ?",
    a: "L'introduction au prestataire est incluse dans votre abonnement Unsigned (Standard ou Pro), sans frais supplementaires. Seules s'appliquent les commissions du prestataire sur chaque transaction, negociees pour la communaute Unsigned.",
  },
  {
    q: "Mon compte peut-il etre ferme par le prestataire ?",
    a: "Non, sauf violation grave de ses CGV (fraude averee, produits illegaux). Le prestataire connait le CBD, travaille deja avec des dizaines de marques du reseau Unsigned, et n'a aucun motif de fermer un compte conforme.",
  },
  {
    q: "Quels pays sont couverts pour les ventes ?",
    a: "Par defaut : toute l'UE + Royaume-Uni + Suisse. D'autres pays peuvent etre ajoutes sur demande selon la reglementation locale du CBD. Pas de vente vers les pays qui interdisent le CBD.",
  },
  {
    q: "Puis-je conserver mon prestataire actuel en parallele ?",
    a: "Oui. Beaucoup de nos marques utilisent le prestataire partenaire en principal et gardent un prestataire de backup. La redondance est une bonne pratique dans le CBD.",
  },
  {
    q: "Combien de temps pour recevoir mes fonds apres une commande ?",
    a: "J+2 ouvres en standard. J+1 possible apres 3 mois d'historique stable, sur demande. Virement SEPA quotidien sur le compte pro que vous aurez declare.",
  },
];

/* ============================================================
   PAGE
   ============================================================ */

export default function PaymentModulePage() {
  return (
    <>
      {/* =================== HERO =================== */}
      <section className="pt-14 pb-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-[#e3d4ff] text-[#5a2fd8] text-[11px] font-bold uppercase tracking-[0.12em] rounded-full px-3 py-1.5 mb-5">
              <CreditCard className="h-3 w-3" />
              Module de paiement
            </span>
            <h1 className="text-[44px] lg:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05]">
              Un prestataire de paiement qui dit oui au CBD.
            </h1>
            <p className="mt-5 text-[15px] text-[#4d4f56] leading-[1.65] max-w-[520px]">
              Le plus gros frein au lancement d&apos;une marque CBD, c&apos;est le
              paiement. Stripe ferme, PayPal refuse, votre banque ne veut pas
              ouvrir de TPV. Unsigned resout le probleme : nous avons negocie un
              partenariat exclusif avec un prestataire specialise. Toutes nos
              boutiques connectees sont pre-eligibles.
            </p>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <Link href="#contact">
                <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
                  Demander une introduction
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="#comparison">
                <Button
                  variant="outline"
                  className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider"
                >
                  Comparer les offres
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-[12px] text-[#4d4f56]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Acceptation pre-validee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Onboarding 48 h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Virement J+2
              </span>
            </div>
          </div>

          {/* Visual — mockup checkout */}
          <div className="relative h-[500px]">
            {/* Main card — checkout mockup */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[320px] rounded-[1.5rem] bg-white shadow-2xl border border-[#f1f1f3] overflow-hidden">
              <div className="h-9 bg-[#fafafa] border-b border-[#f1f1f3] flex items-center gap-1.5 px-3">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[10px] text-[#9ca3af] font-mono">
                  checkout.votre-marque-cbd.com
                </span>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af] mb-2">
                  Paiement securise
                </p>
                <p className="text-[24px] font-semibold mb-5">47,80 EUR</p>

                <div className="space-y-2.5">
                  <div className="h-11 rounded-lg bg-[#f7f7f8] flex items-center px-4 gap-2">
                    <div className="w-6 h-4 bg-[#1a1f71] rounded text-white text-[8px] font-bold flex items-center justify-center">
                      V
                    </div>
                    <div className="w-6 h-4 bg-gradient-to-r from-[#eb001b] to-[#f79e1b] rounded" />
                    <span className="text-[11px] text-[#9ca3af] ml-1">4242 •••• 4242</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-11 rounded-lg bg-[#f7f7f8] flex items-center px-3">
                      <span className="text-[11px] text-[#9ca3af]">MM/AA</span>
                    </div>
                    <div className="h-11 rounded-lg bg-[#f7f7f8] flex items-center px-3">
                      <span className="text-[11px] text-[#9ca3af]">CVC</span>
                    </div>
                  </div>
                  <div className="h-12 rounded-full bg-[#6c3fee] text-white flex items-center justify-center gap-2 text-[13px] font-bold mt-3">
                    <Lock className="h-3.5 w-3.5" />
                    Payer 47,80 EUR
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-[#f1f1f3]">
                  <div className="px-2 py-1 rounded bg-[#1a1f71] text-white text-[7px] font-bold">VISA</div>
                  <div className="px-2 py-1 rounded bg-[#eb001b] text-white text-[7px] font-bold">MC</div>
                  <div className="px-2 py-1 rounded bg-black text-white text-[7px] font-bold">Pay</div>
                  <div className="px-2 py-1 rounded border border-[#f1f1f3] text-[7px] font-bold">G Pay</div>
                  <div className="px-2 py-1 rounded bg-[#0070ba] text-white text-[7px] font-bold">SEPA</div>
                </div>
              </div>
            </div>

            {/* Success badge */}
            <div className="absolute top-2 right-2 bg-white rounded-2xl shadow-xl p-3 w-[180px] border border-[#f1f1f3] z-10">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-green-700" />
                </div>
                <div>
                  <p className="text-[10px] font-bold">Compte approuve</p>
                  <p className="text-[9px] text-[#4d4f56]">KYC valide en 48 h</p>
                </div>
              </div>
            </div>

            {/* Deposit card */}
            <div className="absolute bottom-0 left-2 bg-white rounded-2xl shadow-xl p-4 w-[220px] border border-[#f1f1f3]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#9ca3af]">
                Virement J+2
              </p>
              <p className="text-[18px] font-semibold mt-0.5">+ 2 847,30 EUR</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-[10px] text-green-700 font-semibold">
                  42 commandes encaissees
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== PAIN POINTS =================== */}
      <section data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Le probleme
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              Pourquoi le paiement est le 1er point de douleur du CBD
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 max-w-2xl mx-auto">
              La majorite des prestataires de paiement classent le CBD en
              activite &laquo; haut risque &raquo; et refusent, limitent ou
              surfacturent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pains.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#ffebee] text-red-700 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[14px] font-semibold mb-2">{p.title}</h3>
                  <p className="text-[12px] text-[#4d4f56] leading-[1.65]">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== OUR SOLUTION =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c3fee] mb-3">
              La solution Unsigned
            </span>
            <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
              Un partenaire paiement, negocie pour la communaute
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 leading-[1.65]">
              Nous avons passe 18 mois a auditer les etablissements de paiement
              qui acceptent reellement le CBD. Nous avons retenu un partenaire
              agree ACPR, avec qui nous avons negocie des conditions exclusives
              pour toutes les marques connectees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#e3d4ff] text-[#5a2fd8] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2">{b.title}</h3>
                  <p className="text-[13px] text-[#4d4f56] leading-[1.65]">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== COMPARISON =================== */}
      <section id="comparison" data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[32px] font-semibold tracking-[-0.03em] leading-tight">
              Comparatif classique vs. Unsigned
            </h2>
            <p className="text-[13px] text-[#4d4f56] mt-2">
              Sur la base de retours reels de marques CBD passees d&apos;un
              prestataire classique au partenaire Unsigned.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-[#f1f1f3] overflow-x-auto bg-white">
            <table className="w-full text-[13px] min-w-[680px]">
              <thead className="bg-[#faf5ed] text-[11px] font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 text-left">Critere</th>
                  <th className="px-5 py-4 text-left">
                    Prestataire classique
                  </th>
                  <th className="px-5 py-4 text-left text-[#5a2fd8]">
                    Partenaire Unsigned
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-[#f1f1f3] ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
                  >
                    <td className="px-5 py-3 font-medium">{row.feature}</td>
                    <td className="px-5 py-3 text-[#4d4f56]">
                      <span className="inline-flex items-center gap-1.5">
                        <XCircle className="h-3.5 w-3.5 text-red-400 shrink-0" />
                        {row.classic}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-semibold">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 shrink-0" />
                        {row.ours}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =================== PROCESS =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Le process
            </span>
            <h2 className="text-[36px] font-semibold tracking-[-0.03em] leading-tight">
              De l&apos;introduction au premier virement
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

      {/* =================== ACCEPTED METHODS =================== */}
      <section data-reveal className="py-10">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-[24px] font-semibold tracking-[-0.02em]">
              Moyens de paiement acceptes
            </h3>
            <p className="text-[12px] text-[#4d4f56] mt-1">
              Tout ce qu&apos;attendent vos clients, natif dans le checkout.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {acceptedMethods.map((m) => (
              <div
                key={m.label}
                className="bg-white rounded-xl border border-[#f1f1f3] px-5 py-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f7f7f8] flex items-center justify-center shrink-0">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold truncate">{m.label}</p>
                  <p className="text-[11px] text-[#9ca3af] truncate">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== ELIGIBILITY =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d4f56] mb-3">
              Eligibilite
            </span>
            <h2 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight">
              Qui peut etre introduit au partenaire ?
            </h2>
            <p className="text-[14px] text-[#4d4f56] mt-3 leading-[1.65]">
              L&apos;introduction est reservee aux boutiques connectees a Unsigned
              (plan Standard gratuit ou Pro). Elle reste conditionnee a
              l&apos;acceptation finale du partenaire apres verification KYC.
            </p>
          </div>

          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] divide-y divide-[#f1f1f3]">
            {requirements.map((r) => (
              <div key={r.label} className="px-5 py-3.5 flex items-start gap-3">
                {r.ok ? (
                  <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                )}
                <span className={`text-[13px] ${r.ok ? "" : "text-[#9ca3af] line-through"}`}>
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== CONTACT =================== */}
      <section id="contact" data-reveal className="py-14 bg-[#fafafa]">
        <div className="max-w-[880px] mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-[1.5rem] border border-[#f1f1f3] p-8 lg:p-10">
            <div className="text-center mb-8">
              <Landmark className="h-6 w-6 text-[#6c3fee] mx-auto mb-3" />
              <h2 className="text-[32px] font-semibold tracking-[-0.02em] leading-tight">
                Demander une introduction
              </h2>
              <p className="text-[13px] text-[#4d4f56] mt-3">
                Un conseiller Unsigned verifie votre dossier et vous met en relation
                avec le partenaire sous 24 h.
              </p>
            </div>

            <form
              className="grid sm:grid-cols-2 gap-3"
              action="mailto:payments@unsigned.fr"
              method="post"
            >
              <input
                name="company"
                required
                placeholder="Nom de votre marque CBD"
                className="h-11 rounded-full bg-[#f7f7f8] border border-transparent px-5 text-[13px] focus:outline-none focus:border-foreground"
              />
              <input
                name="url"
                required
                type="url"
                placeholder="URL de votre boutique"
                className="h-11 rounded-full bg-[#f7f7f8] border border-transparent px-5 text-[13px] focus:outline-none focus:border-foreground"
              />
              <input
                name="email"
                required
                type="email"
                placeholder="Email pro"
                className="h-11 rounded-full bg-[#f7f7f8] border border-transparent px-5 text-[13px] focus:outline-none focus:border-foreground"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Telephone"
                className="h-11 rounded-full bg-[#f7f7f8] border border-transparent px-5 text-[13px] focus:outline-none focus:border-foreground"
              />
              <select
                name="current"
                className="h-11 rounded-full bg-[#f7f7f8] border border-transparent px-5 text-[13px] focus:outline-none focus:border-foreground sm:col-span-2 appearance-none"
              >
                <option value="">Prestataire actuel (optionnel)</option>
                <option>Aucun — je demarre</option>
                <option>Un prestataire generaliste (ferme ou a risque)</option>
                <option>Un prestataire specialise CBD</option>
                <option>Autre / je prefere en parler</option>
              </select>
              <textarea
                name="message"
                placeholder="Volume mensuel estime, particularites, questions (optionnel)"
                className="h-24 rounded-2xl bg-[#f7f7f8] border border-transparent px-5 py-3 text-[13px] focus:outline-none focus:border-foreground sm:col-span-2 resize-none"
              />
              <Button
                type="submit"
                className="sm:col-span-2 rounded-full h-[52px] text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white"
              >
                Envoyer la demande d&apos;introduction
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>

            <p className="text-[11px] text-[#9ca3af] text-center mt-4">
              Donnees confidentielles &middot; Reponse sous 24 h ouvrees &middot; Sans
              engagement
            </p>
          </div>
        </div>
      </section>

      {/* =================== TESTIMONIALS =================== */}
      <section data-reveal className="py-14">
        <div className="max-w-[1120px] mx-auto px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-center mb-10">
            Ce qu&apos;en disent les marques CBD accompagnees
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#faf5ed] rounded-[1.25rem] p-6"
              >
                <p className="text-[14px] leading-[1.65] mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#ede4cc]">
                  <div className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center font-semibold text-[13px]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold">{t.name}</p>
                    <p className="text-[11px] text-[#4d4f56]">{t.role}</p>
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
          <div className="rounded-[2rem] bg-foreground text-background p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#6c3fee]/30 rounded-full blur-3xl" />
            <div className="relative text-center">
              <Sparkles className="h-6 w-6 text-[#a488ff] mx-auto mb-4" />
              <h2 className="text-[36px] lg:text-[44px] font-semibold tracking-[-0.03em] leading-tight">
                Pret a accepter les paiements, enfin.
              </h2>
              <p className="mt-4 text-[14px] text-background/70 leading-[1.65] max-w-xl mx-auto">
                Votre module de paiement CBD operationnel en 48 h. Introduction
                incluse dans votre abonnement Unsigned, sans frais supplementaires.
              </p>
              <div className="mt-8 flex gap-3 flex-wrap justify-center">
                <Link href="#contact">
                  <Button className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider bg-background text-foreground hover:bg-background/90">
                    Demander l&apos;introduction
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button
                    variant="outline"
                    className="rounded-full h-[52px] px-6 text-[12px] font-bold uppercase tracking-wider border-background/20 text-background hover:bg-background/10"
                  >
                    J&apos;ai d&apos;autres questions
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
