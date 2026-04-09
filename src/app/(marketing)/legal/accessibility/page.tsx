import { Badge } from "@/components/ui/badge";

export default function AccessibilityPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
          Legal
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-8">
          Declaration d&apos;Accessibilite
        </h1>
        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Derniere mise a jour : Avril 2026</p>

          <h2 className="text-xl font-semibold text-foreground">Notre engagement</h2>
          <p>CBD3 s&apos;engage a rendre sa plateforme accessible au plus grand nombre, conformement au Referentiel General d&apos;Amelioration de l&apos;Accessibilite (RGAA). Nous travaillons continuellement a ameliorer l&apos;experience utilisateur pour tous.</p>

          <h2 className="text-xl font-semibold text-foreground">Mesures prises</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Navigation au clavier sur l&apos;ensemble du site</li>
            <li>Textes alternatifs sur les images</li>
            <li>Contrastes de couleurs conformes aux normes WCAG 2.1 AA</li>
            <li>Structure semantique HTML correcte</li>
            <li>Formulaires accessibles avec labels explicites</li>
            <li>Site responsive adapte a tous les appareils</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>Si vous rencontrez des difficultes d&apos;accessibilite sur notre site, n&apos;hesitez pas a nous contacter a l&apos;adresse accessibilite@cbd3.fr. Nous ferons notre maximum pour vous apporter une solution dans les meilleurs delais.</p>
        </div>
      </div>
    </section>
  );
}
