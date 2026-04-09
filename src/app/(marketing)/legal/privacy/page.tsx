import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
          Legal
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          Politique de Confidentialite
        </h1>
        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Derniere mise a jour : Avril 2026</p>

          <h2 className="text-xl font-semibold text-foreground">1. Responsable du traitement</h2>
          <p>CBD3, SAS au capital de XX XXX euros, dont le siege social est situe a Paris, France, est responsable du traitement des donnees personnelles collectees sur la plateforme cbd3.fr.</p>

          <h2 className="text-xl font-semibold text-foreground">2. Donnees collectees</h2>
          <p>Nous collectons les donnees suivantes : nom, prenom, adresse email, adresse postale, numero de telephone, informations de paiement (traitees par Stripe), donnees de navigation et cookies.</p>

          <h2 className="text-xl font-semibold text-foreground">3. Finalites du traitement</h2>
          <p>Vos donnees sont utilisees pour : la gestion de votre compte, le traitement de vos commandes, la communication commerciale (avec votre consentement), l&apos;amelioration de nos services et le respect de nos obligations legales.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Base legale</h2>
          <p>Le traitement de vos donnees est fonde sur l&apos;execution d&apos;un contrat, votre consentement, notre interet legitime ou une obligation legale, conformement au RGPD.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Duree de conservation</h2>
          <p>Vos donnees sont conservees pendant la duree de votre relation commerciale avec CBD3, puis archivees pendant les durees legales applicables (5 ans pour les donnees comptables, 3 ans pour les donnees de prospection).</p>

          <h2 className="text-xl font-semibold text-foreground">6. Vos droits</h2>
          <p>Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification, de suppression, de portabilite, de limitation et d&apos;opposition au traitement de vos donnees. Pour exercer ces droits, contactez-nous a : privacy@cbd3.fr.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
          <p>Notre site utilise des cookies pour ameliorer votre experience de navigation. Vous pouvez gerer vos preferences de cookies a tout moment via le bandeau de consentement.</p>

          <h2 className="text-xl font-semibold text-foreground">8. Securite</h2>
          <p>Nous mettons en oeuvre des mesures techniques et organisationnelles appropriees pour proteger vos donnees personnelles contre tout acces non autorise, perte ou alteration.</p>
        </div>
      </div>
    </section>
  );
}
