import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
          Legal
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          Conditions Generales de Vente
        </h1>
        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Derniere mise a jour : Avril 2026</p>

          <h2 className="text-xl font-semibold text-foreground">1. Objet</h2>
          <p>Les presentes conditions generales de vente (CGV) regissent les relations contractuelles entre CBD3 (ci-apres &quot;le Vendeur&quot;) et toute personne physique ou morale (ci-apres &quot;le Client&quot;) souhaitant utiliser les services de marque blanche CBD proposes sur la plateforme cbd3.fr.</p>

          <h2 className="text-xl font-semibold text-foreground">2. Produits</h2>
          <p>Tous les produits CBD proposes sur notre plateforme sont conformes a la reglementation europeenne et francaise en vigueur. Le taux de THC est garanti inferieur a 0.3% (norme EU) et 0.2% (norme FR). Chaque lot de production est accompagne d&apos;un Certificat d&apos;Analyse (COA) delivre par un laboratoire accredite ISO 17025.</p>

          <h2 className="text-xl font-semibold text-foreground">3. Commandes</h2>
          <p>Les commandes sont passees via la plateforme cbd3.fr. Il n&apos;y a pas de minimum de commande. Les commandes sont traitees et expediees sous 48 heures ouvrees apres reception du paiement.</p>

          <h2 className="text-xl font-semibold text-foreground">4. Prix</h2>
          <p>Les prix sont indiques en euros, toutes taxes comprises (TTC). Le Vendeur se reserve le droit de modifier ses prix a tout moment, les produits etant factures au prix en vigueur au moment de la validation de la commande.</p>

          <h2 className="text-xl font-semibold text-foreground">5. Paiement</h2>
          <p>Le paiement s&apos;effectue en ligne par carte bancaire via notre prestataire de paiement securise (Stripe). Le paiement est debite au moment de la validation de la commande.</p>

          <h2 className="text-xl font-semibold text-foreground">6. Livraison</h2>
          <p>Les produits sont expedies depuis la France metropolitaine. Les delais de livraison sont donnes a titre indicatif et ne sauraient engager la responsabilite du Vendeur en cas de retard.</p>

          <h2 className="text-xl font-semibold text-foreground">7. Droit de retractation</h2>
          <p>Conformement a la legislation en vigueur, le Client dispose d&apos;un delai de 14 jours a compter de la reception des produits pour exercer son droit de retractation, a condition que les produits soient retournes dans leur emballage d&apos;origine, non ouverts et non utilises.</p>

          <h2 className="text-xl font-semibold text-foreground">8. Propriete intellectuelle</h2>
          <p>Les designs crees par le Client via le Design Studio restent la propriete du Client. CBD3 s&apos;engage a ne pas utiliser, reproduire ou diffuser les creations du Client sans son autorisation prealable.</p>

          <h2 className="text-xl font-semibold text-foreground">9. Responsabilite</h2>
          <p>Les produits CBD commercialises sur la plateforme ne sont pas des medicaments et ne sont pas destines a diagnostiquer, traiter, guerir ou prevenir une quelconque maladie. Le Client s&apos;engage a respecter la reglementation en vigueur dans la commercialisation des produits aupres de ses propres clients.</p>

          <h2 className="text-xl font-semibold text-foreground">10. Droit applicable</h2>
          <p>Les presentes CGV sont soumises au droit francais. En cas de litige, les tribunaux de Paris seront seuls competents.</p>
        </div>
      </div>
    </section>
  );
}
