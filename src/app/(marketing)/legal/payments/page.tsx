import { Badge } from "@/components/ui/badge";
import { CreditCard, ShieldCheck, Lock } from "lucide-react";

export default function PaymentsPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
          Legal
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-8">Paiements</h1>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <CreditCard className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-semibold">Carte bancaire</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <Lock className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-semibold">Paiement securise</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <ShieldCheck className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-semibold">3D Secure</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">Moyens de paiement acceptes</h2>
          <p>Nous acceptons les cartes Visa, Mastercard et American Express. Les paiements sont traites de maniere securisee par notre partenaire Stripe, certifie PCI-DSS niveau 1.</p>

          <h2 className="text-xl font-semibold text-foreground">Securite des paiements</h2>
          <p>Toutes les transactions sont securisees par chiffrement SSL/TLS. Nous ne stockons jamais vos informations de carte bancaire sur nos serveurs. L&apos;authentification 3D Secure est activee pour proteger vos achats.</p>

          <h2 className="text-xl font-semibold text-foreground">Facturation</h2>
          <p>Une facture est automatiquement generee et envoyee par email apres chaque commande. Les prix sont affiches TTC (toutes taxes comprises). La TVA applicable est celle en vigueur au moment de la commande.</p>

          <h2 className="text-xl font-semibold text-foreground">Abonnements</h2>
          <p>Les plans Pro et Enterprise sont factures mensuellement. Vous pouvez annuler votre abonnement a tout moment depuis votre espace client. L&apos;annulation prend effet a la fin de la periode de facturation en cours.</p>

          <h2 className="text-xl font-semibold text-foreground">Remboursements</h2>
          <p>Les remboursements sont effectues sur le moyen de paiement original dans un delai de 5 a 10 jours ouvres apres validation de la demande de retour.</p>
        </div>
      </div>
    </section>
  );
}
