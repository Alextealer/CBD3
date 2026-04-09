import { Badge } from "@/components/ui/badge";
import { Truck, Clock, RotateCcw, MapPin } from "lucide-react";

const deliveryOptions = [
  { zone: "France metropolitaine", delay: "48-72h ouvrees", price: "Gratuit des 200EUR", standard: "5.90EUR" },
  { zone: "Belgique & Luxembourg", delay: "3-5 jours ouvres", price: "Gratuit des 300EUR", standard: "8.90EUR" },
  { zone: "Allemagne & Pays-Bas", delay: "3-5 jours ouvres", price: "Gratuit des 300EUR", standard: "9.90EUR" },
  { zone: "Reste de l'UE", delay: "5-7 jours ouvres", price: "Gratuit des 500EUR", standard: "12.90EUR" },
];

export default function ShippingPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
          Legal
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          Livraison & Retours
        </h1>

        {/* Key info */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <Truck className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-semibold">Expedition sous 48h</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <MapPin className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-semibold">Suivi de colis inclus</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <RotateCcw className="h-6 w-6 mx-auto mb-2" />
            <p className="text-sm font-semibold">Retours sous 14 jours</p>
          </div>
        </div>

        {/* Delivery table */}
        <h2 className="text-xl font-semibold mb-4">Zones de livraison</h2>
        <div className="border rounded-xl overflow-hidden mb-12">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium">Zone</th>
                <th className="text-left p-3 font-medium">Delai</th>
                <th className="text-left p-3 font-medium">Standard</th>
                <th className="text-left p-3 font-medium">Gratuit des</th>
              </tr>
            </thead>
            <tbody>
              {deliveryOptions.map((opt) => (
                <tr key={opt.zone} className="border-t">
                  <td className="p-3">{opt.zone}</td>
                  <td className="p-3 text-muted-foreground">{opt.delay}</td>
                  <td className="p-3 text-muted-foreground">{opt.standard}</td>
                  <td className="p-3 text-muted-foreground">{opt.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">Emballage</h2>
          <p>Tous les colis sont expedies en emballage discret et neutre, sauf si vous avez opte pour un packaging a votre marque. Les produits sont proteges pour garantir leur integrite pendant le transport.</p>

          <h2 className="text-xl font-semibold text-foreground">Politique de retours</h2>
          <p>Vous disposez de 14 jours apres reception pour retourner vos produits. Les produits doivent etre dans leur emballage d&apos;origine, non ouverts et non utilises. Les frais de retour sont a la charge du Client.</p>
          <p>Pour initier un retour, contactez notre service client a l&apos;adresse retours@cbd3.fr en indiquant votre numero de commande.</p>

          <h2 className="text-xl font-semibold text-foreground">Produits endommages</h2>
          <p>Si vous recevez un produit endommage, contactez-nous dans les 48h suivant la reception avec des photos du dommage. Nous organiserons un remplacement ou un remboursement sans frais supplementaires.</p>
        </div>
      </div>
    </section>
  );
}
