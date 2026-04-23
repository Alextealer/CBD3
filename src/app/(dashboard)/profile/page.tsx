import Link from "next/link";
import {
  User,
  Building2,
  CreditCard,
  MapPin,
  Bell,
  Lock,
  Download,
  LogOut,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "../dashboard-header";

export const dynamic = "force-dynamic";

// Mock user data
const user = {
  firstName: "Alboni",
  lastName: "Alexandre",
  email: "albotw@gmail.com",
  phone: "+33 6 12 34 56 78",
  company: "Votre Marque CBD",
  siret: "—",
  vat: "—",
  billingAddress: "12 rue de la Paix, 75002 Paris, France",
  memberSince: "08 avril 2026",
};

const stats = [
  { label: "Commandes", value: "12", href: "/profile/orders" },
  { label: "Produits templates", value: "6", href: "/profile/my-products" },
  { label: "Boutiques connectees", value: "0", href: "/profile/stores" },
  { label: "Fichiers uploades", value: "4", href: "/profile/files" },
];

const completion = [
  { label: "Email verifie", done: true },
  { label: "Numero de telephone", done: true },
  { label: "Informations entreprise", done: false },
  { label: "Numero TVA intra", done: false },
  { label: "Moyen de paiement", done: false },
  { label: "Premiere boutique connectee", done: false },
];

const doneCount = completion.filter((c) => c.done).length;
const completionPct = Math.round((doneCount / completion.length) * 100);

/* ============================================================
   PAGE
   ============================================================ */

export default function AccountPage() {
  return (
    <div className="px-10 py-8 max-w-[1120px]">
      <DashboardHeader title="Mon compte" />

      <p data-reveal className="text-[13px] text-[#4d4f56] mb-8 -mt-4">
        Gerez vos informations personnelles, votre entreprise, votre facturation
        et vos preferences.
      </p>

      {/* ============= PROFILE CARD ============= */}
      <section data-reveal className="bg-white rounded-[1.5rem] border border-[#f1f1f3] p-6 mb-6">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-[#f1eefe] text-[#6c3fee] flex items-center justify-center text-[28px] font-semibold shrink-0">
            {user.firstName[0]}
            {user.lastName[0]}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-[22px] font-semibold tracking-[-0.01em]">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-[13px] text-[#4d4f56]">{user.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                <CheckCircle2 className="h-3 w-3" />
                Compte actif
              </span>
              <span className="text-[11px] text-[#9ca3af]">
                Membre depuis le {user.memberSince}
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider"
          >
            Modifier
          </Button>
        </div>

        {/* progress */}
        <div className="mt-6 pt-6 border-t border-[#f1f1f3]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-semibold">Profil a {completionPct}% complete</span>
            <span className="text-[11px] text-[#4d4f56]">
              {doneCount} / {completion.length} etapes
            </span>
          </div>
          <div className="h-1.5 bg-[#f1f1f3] rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-[#6c3fee] rounded-full transition-all"
              style={{ width: `${completionPct}%` }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {completion.map((c) => (
              <div
                key={c.label}
                className={`flex items-center gap-2 text-[12px] ${
                  c.done ? "text-[#4d4f56]" : "text-foreground font-semibold"
                }`}
              >
                {c.done ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-600 shrink-0" />
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full border border-[#d4d4d8] shrink-0" />
                )}
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= STATS ============= */}
      <section data-reveal className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="group bg-white rounded-2xl border border-[#f1f1f3] p-5 hover:border-[#6c3fee] hover:shadow-sm transition-all"
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">
              {s.label}
            </p>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-[28px] font-semibold tracking-[-0.02em]">{s.value}</span>
              <ChevronRight className="h-4 w-4 text-[#9ca3af] group-hover:text-[#6c3fee] group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </section>

      {/* ============= SETTINGS SECTIONS ============= */}
      <div className="space-y-4">
        {/* Personal info */}
        <section data-reveal>
          <SectionHeader icon={User} title="Informations personnelles" />
          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] divide-y divide-[#f1f1f3]">
            <Row label="Prenom" value={user.firstName} />
            <Row label="Nom" value={user.lastName} />
            <Row label="Email" value={user.email} badge="verifie" />
            <Row label="Telephone" value={user.phone} badge="verifie" />
          </div>
        </section>

        {/* Company */}
        <section data-reveal>
          <SectionHeader icon={Building2} title="Entreprise & facturation" />
          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] divide-y divide-[#f1f1f3]">
            <Row label="Raison sociale" value={user.company} />
            <Row label="SIRET" value={user.siret} action="Ajouter" warn />
            <Row label="Numero TVA intra" value={user.vat} action="Ajouter" warn />
            <Row label="Adresse de facturation" value={user.billingAddress} />
          </div>
        </section>

        {/* Payment */}
        <section data-reveal>
          <SectionHeader icon={CreditCard} title="Moyens de paiement" />
          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-[#f7f7f8] flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="h-5 w-5 text-[#8b6914]" />
            </div>
            <h3 className="text-[15px] font-semibold mb-1">Aucun moyen de paiement</h3>
            <p className="text-[12px] text-[#4d4f56] max-w-sm mx-auto mb-4">
              Ajoutez une carte ou un IBAN pour recevoir les commandes dropshipping
              de votre boutique sans interruption.
            </p>
            <Button className="rounded-full h-10 px-5 text-[11px] font-bold uppercase tracking-wider">
              Ajouter une carte
            </Button>
          </div>
        </section>

        {/* Addresses */}
        <section data-reveal>
          <SectionHeader icon={MapPin} title="Adresses de livraison" />
          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6">
            <p className="text-[13px] text-[#4d4f56]">
              Ajoutez les adresses ou vous recevez vos echantillons et commandes
              gros volume.
            </p>
            <Button
              variant="outline"
              className="mt-3 rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider"
            >
              + Nouvelle adresse
            </Button>
          </div>
        </section>

        {/* Notifications */}
        <section data-reveal>
          <SectionHeader icon={Bell} title="Notifications" />
          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] divide-y divide-[#f1f1f3]">
            <ToggleRow label="Emails de commande" desc="Confirmation, expedition, livraison" on />
            <ToggleRow label="Alertes stock & COA" desc="Nouveau lot, nouveau certificat" on />
            <ToggleRow label="Newsletter marketing" desc="Astuces, tendances, nouveaux produits" />
            <ToggleRow label="SMS commandes B2B" desc="Pour les commandes palette" />
          </div>
        </section>

        {/* Security */}
        <section data-reveal>
          <SectionHeader icon={Lock} title="Securite" />
          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] divide-y divide-[#f1f1f3]">
            <Row label="Mot de passe" value="Dernier changement il y a 12 jours" action="Changer" />
            <Row label="Authentification 2FA" value="Non activee" action="Activer" warn />
            <Row label="Sessions actives" value="1 session sur MacBook Pro" action="Voir tout" />
          </div>
        </section>

        {/* Data */}
        <section data-reveal>
          <SectionHeader icon={ShieldCheck} title="Donnees & confidentialite" />
          <div className="bg-white rounded-[1.25rem] border border-[#f1f1f3] p-6 grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-[14px] font-semibold mb-1.5">Exporter mes donnees</h3>
              <p className="text-[12px] text-[#4d4f56] leading-snug mb-3">
                Telechargez une archive complete de votre compte (profil, commandes, fichiers) au format ZIP.
              </p>
              <Button
                variant="outline"
                className="rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider"
              >
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Exporter
              </Button>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-1.5 text-red-700">
                Supprimer mon compte
              </h3>
              <p className="text-[12px] text-[#4d4f56] leading-snug mb-3">
                Suppression definitive apres 30 jours. Vous perdez acces aux templates et aux commandes en cours.
              </p>
              <Button
                variant="outline"
                className="rounded-full h-9 px-4 text-[11px] font-bold uppercase tracking-wider border-red-200 text-red-700 hover:bg-red-50"
              >
                Demander la suppression
              </Button>
            </div>
          </div>
        </section>

        {/* Logout */}
        <section data-reveal className="pt-4 pb-10">
          <Button
            variant="outline"
            className="rounded-full h-11 px-5 text-[12px] font-bold uppercase tracking-wider text-[#4d4f56] hover:text-foreground"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Se deconnecter
          </Button>
        </section>
      </div>
    </div>
  );
}

/* ============================================================
   Subcomponents
   ============================================================ */

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="h-4 w-4 text-[#4d4f56]" />
      <h2 className="text-[16px] font-semibold">{title}</h2>
    </div>
  );
}

function Row({
  label,
  value,
  action,
  badge,
  warn,
}: {
  label: string;
  value: string;
  action?: string;
  badge?: string;
  warn?: boolean;
}) {
  const isEmpty = value === "—";
  return (
    <div className="px-5 py-4 flex items-center gap-4">
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af] mb-0.5">
          {label}
        </p>
        <p className={`text-[13px] ${isEmpty ? "text-[#9ca3af] italic" : "text-foreground"} truncate`}>
          {isEmpty ? "Non renseigne" : value}
          {badge && (
            <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-bold bg-green-50 text-green-700 px-1.5 py-0.5 rounded-full">
              <CheckCircle2 className="h-2.5 w-2.5" />
              {badge}
            </span>
          )}
        </p>
      </div>
      {action && (
        <button
          type="button"
          className={`shrink-0 h-8 px-3 rounded-full text-[11px] font-bold uppercase tracking-wider ${
            warn
              ? "bg-[#fff3c2] text-[#8b6914] hover:bg-[#f5d57e]"
              : "text-foreground hover:bg-[#f7f7f8]"
          }`}
        >
          {action}
        </button>
      )}
    </div>
  );
}

function ToggleRow({ label, desc, on }: { label: string; desc: string; on?: boolean }) {
  return (
    <div className="px-5 py-4 flex items-center gap-4">
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold">{label}</p>
        <p className="text-[11px] text-[#4d4f56] mt-0.5">{desc}</p>
      </div>
      <span
        className={`relative w-10 h-5.5 rounded-full shrink-0 cursor-pointer transition-colors ${
          on ? "bg-[#6c3fee]" : "bg-[#d4d4d8]"
        }`}
        style={{ height: 22 }}
      >
        <span
          className={`absolute top-0.5 w-[18px] h-[18px] rounded-full bg-white shadow transition-transform ${
            on ? "translate-x-[20px]" : "translate-x-0.5"
          }`}
        />
      </span>
    </div>
  );
}
