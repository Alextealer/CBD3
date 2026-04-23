/**
 * Editorial content for each category page (`/catalog/[category]`).
 * Drives the marketing sections that wrap the product grid.
 */

export interface CategoryContent {
  tagline: string;
  intro: string[];
  highlights: { title: string; body: string }[];
  formats: { label: string; body: string }[];
  customization: string[];
  audience: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const categoryContent: Record<string, CategoryContent> = {
  "fleur-cbd": {
    tagline:
      "Indoor, outdoor, greenhouse. Selection variete par variete, profil terpenique pousse, conformite EU/FR garantie.",
    intro: [
      "La fleur reste le coeur du marche CBD : exigeante sur la qualite, sensible au prix, ultra-comparable. C'est la categorie ou votre marque doit dire quelque chose de precis pour exister.",
      "Nous selectionnons nos varietes une par une, indoor / outdoor / greenhouse, sur des criteres terpeniques et visuels stricts. Vous choisissez les references qui collent a votre positionnement, on les conditionne sous votre marque.",
    ],
    highlights: [
      { title: "Selection rigoureuse", body: "Chaque lot est goute, photographie, analyse avant d'entrer au catalogue." },
      { title: "Profils terpeniques distincts", body: "Limonene, myrcene, caryophyllene : chaque variete a sa signature documentee." },
      { title: "Conditionnement adapte", body: "Sachet hermetique, pot verre, doypack zip — petits ou grands formats." },
      { title: "THC < 0.3%", body: "COA par lot delivre par laboratoire ISO 17025." },
    ],
    formats: [
      { label: "Sachet hermetique", body: "1 g, 3 g, 5 g, 10 g. Format souple economique." },
      { label: "Pot verre ambre", body: "3 g, 5 g, 10 g. Premium, preserve les terpenes." },
      { label: "Doypack zip", body: "10 g a 100 g. Refermable, ideal retail." },
      { label: "Vrac grossiste", body: "Des 500 g par variete. Conditionnement neutre." },
    ],
    customization: [
      "Etiquette face + dos personnalisable",
      "Sticker de scelle a votre marque",
      "Insert carton avec votre baseline",
      "Mention de la variete et du profil",
      "QR code vers le COA en ligne",
    ],
    audience: [
      { title: "Boutiques physiques", body: "Constituer un assortiment differenciant sans gerer 10 fournisseurs." },
      { title: "E-commerce premium", body: "Une selection serree mais defendue editorialement." },
      { title: "Marques lifestyle", body: "Coffrets cadeaux, editions limitees, drops." },
    ],
    faqs: [
      { q: "Puis-je choisir mes propres varietes ?", a: "Vous selectionnez parmi notre catalogue. Pour des varietes hors catalogue, possible des 1 kg sur devis." },
      { q: "Comment est garantie la traceabilite ?", a: "Chaque lot a son COA delivre par laboratoire ISO 17025, accessible via QR code." },
      { q: "Quels delais pour une fleur etiquetee a ma marque ?", a: "5 a 10 jours ouvres apres validation du bon a tirer pour les conditionnements standards." },
    ],
  },
  "hash-cbd": {
    tagline:
      "Hash, pollen, charas, moonrock. Tradition artisanale et extractions modernes — pour une categorie a forte valeur percue.",
    intro: [
      "Le hash est une categorie ou la qualite se voit immediatement : couleur, texture, parfum, fonte. Difficile a maquiller, facile a juger.",
      "Nous travaillons avec des extracteurs experimentes pour proposer une gamme courte mais coherente : tradition (afghan, charas), filtration (pollen) et premium (moonrock). Chacun avec son taux de CBD documente.",
    ],
    highlights: [
      { title: "Selection courte et tenue", body: "Pas de remplissage : 4 references, chacune avec un caractere clair." },
      { title: "Taux CBD eleves", body: "De 15% a 40% selon le procede. Toujours THC < 0.3%." },
      { title: "Conditionnement protecteur", body: "Sachet hermetique opaque ou pot verre selon la sensibilite." },
      { title: "Marges premium", body: "Categorie a perception qualitative forte, marges revendeurs interessantes." },
    ],
    formats: [
      { label: "Sachet hermetique", body: "1 g a 10 g. Standard, economique." },
      { label: "Pot verre", body: "1 g a 5 g. Premium, anti-UV." },
      { label: "Capsule individuelle", body: "0.5 g, 1 g. Format degustation." },
      { label: "Vrac grossiste", body: "Des 500 g sur devis." },
    ],
    customization: [
      "Etiquette pot ou sachet",
      "Mention du procede d'extraction",
      "Indication taux CBD",
      "Stickers numerotes (edition limitee)",
      "Carton externe coffret",
    ],
    audience: [
      { title: "Boutiques specialisees", body: "Categorie attendue par les clients connaisseurs." },
      { title: "Marques editoriales", body: "Drops, editions limitees, collaborations." },
      { title: "Distributeurs B2B", body: "Une gamme structuree pour reseaux de boutiques." },
    ],
    faqs: [
      { q: "Quelle est la duree de conservation ?", a: "12 a 18 mois en sachet hermetique a l'abri de la lumiere et de la chaleur." },
      { q: "Avez-vous des references pressees a la main ?", a: "Le charas est presse a la main de maniere artisanale. Le pollen est filtre." },
      { q: "Le hash peut-il etre commande en gros ?", a: "Oui, des 500 g par reference sur devis grossiste." },
    ],
  },
  "pre-roll-cbd": {
    tagline:
      "Joints CBD prerouls. Format snacking, marge interessante, experience produit immediate pour vos clients.",
    intro: [
      "Le pre roll repond a une demande simple : essayer la marque sans rituel. C'est aussi la meilleure facon de faire decouvrir vos varietes phare a un nouveau public.",
      "Nous roulons a la main avec nos meilleures fleurs indoor et greenhouse. Filtre carton, papier sans chlore, conditionnement individuel ou pack. Pret a vendre en boutique comme en ligne.",
    ],
    highlights: [
      { title: "Roule a la main", body: "Pas d'extrudeuse industrielle : meilleure tenue, combustion homogene." },
      { title: "Fleur premium", body: "Memes varietes que notre catalogue fleur, indoor et greenhouse." },
      { title: "Format degustation", body: "0.7 g a 1 g par unite. Pack de 5 ou 10 disponibles." },
      { title: "Packaging retail-ready", body: "Tube hermetique, child-resistant si demande." },
    ],
    formats: [
      { label: "Tube unitaire", body: "0.7 g ou 1 g. Hermetique, etiquette personnalisee." },
      { label: "Pack 5 unites", body: "Boite carton, ideal cadeau ou lancement." },
      { label: "Pack 10 unites", body: "Format economique, vente en gros." },
      { label: "Edition Hash Twax", body: "Premium, fleur enrobee de hash. Pour drop premium." },
    ],
    customization: [
      "Etiquette tube personnalisee",
      "Coffret pack a votre identite",
      "Filtre couleur/forme custom (sur volume)",
      "Mention variete + taux CBD",
      "Bande scellee numerotee",
    ],
    audience: [
      { title: "Boutiques de quartier", body: "Best-seller pour clientele de passage." },
      { title: "E-commerce decouverte", body: "Premier achat, faible engagement, fort taux de conversion." },
      { title: "Festivals & evenements", body: "Format pratique, pack 5 ideal." },
    ],
    faqs: [
      { q: "Quelle fleur utilisez-vous pour les pre rolls ?", a: "Nos fleurs indoor et greenhouse premium, identiques a celles vendues sechees." },
      { q: "Le filtre est-il inclus ?", a: "Oui, filtre carton non-blanchi standard. Filtre custom possible des 5 000 unites." },
      { q: "Conditionnement child-resistant possible ?", a: "Oui, sur demande pour les marches qui l'imposent." },
    ],
  },
  "huiles-cbd": {
    tagline:
      "Huiles sublinguales, MCT, spectre complet, broad spectrum. La categorie wellness historique, toujours dominante.",
    intro: [
      "L'huile reste le produit qui convertit. C'est aussi celui sur lequel les consommateurs comparent le plus : taux, type d'extrait, transporteur, certifications.",
      "Notre gamme va de 5% a 30%, en spectre complet et broad spectrum, avec des references signature comme Nuit CBN ou Sport Curcuma. Flacon verre ambre, pipette graduee, etui carton — packaging conforme aux attentes du marche premium.",
    ],
    highlights: [
      { title: "5% a 30% de CBD", body: "Toute l'echelle de concentration pour couvrir tous les usages." },
      { title: "Spectre complet & broad spectrum", body: "Selon votre positionnement (THC trace ou zero THC)." },
      { title: "Huile MCT premium", body: "Coco fractionne, neutre en gout, biodisponibilite optimale." },
      { title: "Formules signature", body: "CBN nuit, curcuma sport — pour vous demarquer." },
    ],
    formats: [
      { label: "Flacon 10 ml", body: "Format standard, voyage, decouverte." },
      { label: "Flacon 30 ml", body: "Format economique, fideles." },
      { label: "Pipette graduee", body: "Dosage precis, liseree noire pour ambre." },
      { label: "Etui carton", body: "Avec inserts, mentions legales, QR COA." },
    ],
    customization: [
      "Etiquette flacon recto-verso",
      "Etui carton imprime sur 5 faces",
      "Sleeve thermo retractable",
      "Pipette personnalisee (verre serigraphie)",
      "Notice insert pliee",
      "Coffret duo / trio sur mesure",
    ],
    audience: [
      { title: "Marques wellness", body: "Categorie phare pour positionnement bien-etre." },
      { title: "Pharmacies & parapharmacies", body: "Format conforme aux attentes du circuit officinal." },
      { title: "E-commerce", body: "Best-seller historique, fort taux de reachat." },
    ],
    faqs: [
      { q: "Quelle est la difference entre spectre complet et broad spectrum ?", a: "Le spectre complet contient tous les cannabinoides (avec THC < 0.3%). Le broad spectrum est sans THC detectable." },
      { q: "Puis-je obtenir une formulation custom (autre cannabinoide, terpenes) ?", a: "Oui, des 1 000 unites avec brief produit valide par notre R&D." },
      { q: "Les huiles sont-elles bio ?", a: "Le chanvre est issu de cultures europeennes certifiees. Certification bio possible sur certaines references." },
    ],
  },
  "extractions-cbd": {
    tagline:
      "Wax, shatter, crumble, live resin. Concentres premium pour la categorie dabbing et la formulation.",
    intro: [
      "Les extractions sont la categorie la plus technique et la plus qualitative du marche CBD. Texture, transparence, profil terpenique : tout se voit, tout se compare.",
      "Nous travaillons avec des extracteurs equipes (CO2 supercritique, hydrocarbures purs, live resin) pour proposer une gamme premium courte. Categorie a forte marge, clientele connaisseuse.",
    ],
    highlights: [
      { title: "Procedes maitrises", body: "CO2 supercritique pour la purete, hydrocarbures pour les terpenes." },
      { title: "Taux CBD 65 a 90%", body: "Concentration extreme pour une experience produit forte." },
      { title: "Conditionnement specialise", body: "Pot silicone, pot verre, parchemin — selon la texture." },
      { title: "Live resin signature", body: "Terpenes preserves par cryo, profil aromatique unique." },
    ],
    formats: [
      { label: "Pot silicone 1 g", body: "Standard wax, crumble. Anti-adherent." },
      { label: "Parchemin pliage", body: "Shatter, format collectionneur." },
      { label: "Pot verre", body: "Live resin, premium, anti-UV." },
      { label: "Vrac formulation", body: "Des 100 g pour usage R&D ou re-formulation." },
    ],
    customization: [
      "Etiquette pot custom",
      "Coffret carton premium (kit dab)",
      "Sticker numerotation lot",
      "Indication procede + taux",
      "Edition limitee numerotee",
    ],
    audience: [
      { title: "Boutiques specialisees", body: "Clientele connaisseuse, panier moyen eleve." },
      { title: "Marques premium", body: "Categorie de positionnement haut de gamme." },
      { title: "Marques cosmetiques / vape", body: "Vrac formulation pour produits derives." },
    ],
    faqs: [
      { q: "Quelle difference entre les procedes ?", a: "CO2 = purete maximale, sans residus de solvant. Hydrocarbures = preservation maximale des terpenes. Live resin = cryo + extraction immediate, profil aromatique le plus complet." },
      { q: "Les extractions sont-elles legales ?", a: "Oui en EU/FR tant que le produit fini contient < 0.3% THC. COA par lot." },
      { q: "Puis-je commander en vrac pour formuler mes propres produits ?", a: "Oui, des 100 g sur devis avec usage declare." },
    ],
  },
  "cartridges-cbd": {
    tagline:
      "Cartouches CBD pre-remplies pour vape pen 510 et disposables. Distillats premium avec terpenes naturels.",
    intro: [
      "La vape CBD est une categorie en croissance forte, portee par une clientele jeune et urbaine. Format discret, dosage precis, experience immediate : tout y est.",
      "Nous proposons des cartouches 510 standard et des disposables pre-charges, avec des distillats CBD haute purete et des terpenes naturels (extraits de fleur, pas synthetiques). Pas d'additifs, pas de PG/VG inutiles.",
    ],
    highlights: [
      { title: "Distillat haute purete", body: "60 a 65% de CBD, sans coupe MCT ou autre." },
      { title: "Terpenes naturels", body: "Extraits de varietes signature (OG Kush, Lemon Haze, Strawberry)." },
      { title: "Standard 510", body: "Compatible avec toutes les batteries du marche." },
      { title: "Disposables pre-charges", body: "Format zero entretien pour reach mass market." },
    ],
    formats: [
      { label: "Cartridge 510 - 1 ml", body: "Format standard, rechargeable batterie." },
      { label: "Disposable - 0.5 ml", body: "Pre-charge, pre-rempli, jetable." },
      { label: "Disposable - 1 ml", body: "Format economique, autonomie etendue." },
      { label: "Pack batterie + cartridges", body: "Kit complet pour acquisition client." },
    ],
    customization: [
      "Sleeve cartridge personnalise",
      "Blister carton imprime",
      "Couleur du mouthpiece (sur volume)",
      "Marquage laser sur batterie disposable",
      "Coffret kit complet",
    ],
    audience: [
      { title: "E-commerce DTC", body: "Categorie forte croissance, clientele 25-40." },
      { title: "Boutiques vape", body: "Diversification CBD evidente." },
      { title: "Festivals & nightlife", body: "Format discret, parfait pour evenementiel." },
    ],
    faqs: [
      { q: "Vos cartouches contiennent-elles du PG/VG ?", a: "Non. Distillat CBD pur + terpenes naturels uniquement." },
      { q: "Sont-elles compatibles avec ma batterie 510 ?", a: "Oui, standard 510 universel." },
      { q: "Quelle autonomie pour un disposable ?", a: "Environ 200 a 400 puffs pour un 0.5 ml, le double pour un 1 ml." },
    ],
  },
  "edibles-cbd": {
    tagline:
      "Gummies, chocolats, infusions, miel. Categorie snacking premium, dosage precis, experience longue duree.",
    intro: [
      "Les edibles sont la categorie qui recrute le plus de nouveaux consommateurs CBD : pas de combustion, pas de gout cannabis, dosage discret. C'est aussi la categorie ou la marque pese le plus dans la decision d'achat.",
      "Notre gamme couvre les bestsellers (gummies fruits rouges, gummies sommeil melatonine) et les positionnements gourmands (chocolat noir 70%, miel acacia, infusions plantes). Tout dose precisement, tout etiquete conforme.",
    ],
    highlights: [
      { title: "Dosage par unite", body: "10 mg, 25 mg : transparence totale pour le consommateur." },
      { title: "Sans gout cannabis", body: "Categorie qui leve la barriere a l'entree CBD." },
      { title: "Effet long", body: "Metabolisation digestive : effet sur 4 a 6 heures." },
      { title: "Format premium", body: "Pot opaque, etui carton premium, packaging cadeau possible." },
    ],
    formats: [
      { label: "Pot gummies 30 unites", body: "Standard, pot opaque anti-UV." },
      { label: "Tablette chocolat 100 g", body: "Etui carton, 200 mg total." },
      { label: "Pot miel 150 g", body: "Verre, cuillere bois optionnelle." },
      { label: "Boite infusion 20 sachets", body: "Carton, sachets individuels." },
    ],
    customization: [
      "Pot gummies a votre marque",
      "Etui chocolat 5 faces imprimees",
      "Etiquette pot miel",
      "Boite infusion entierement personnalisable",
      "Coffret edibles assortis",
    ],
    audience: [
      { title: "Marques wellness", body: "Categorie en explosion, faible barriere a l'entree." },
      { title: "Epiceries fines", body: "Chocolat, miel, infusions s'integrent naturellement." },
      { title: "E-commerce gift", body: "Coffrets cadeaux a forte rotation Q4." },
    ],
    faqs: [
      { q: "Combien de temps avant l'effet ?", a: "30 a 90 minutes selon l'estomac. Effet plus long mais plus progressif que sublingual." },
      { q: "Vos gummies sont-elles vegan ?", a: "Oui, base pectine vegetale (pas de gelatine animale)." },
      { q: "Avez-vous des references sans sucre ajoute ?", a: "Possible sur formulation custom des 2 000 unites." },
    ],
  },
  "cosmetique-cbd": {
    tagline:
      "Cremes, baumes, serums, huiles de massage. Clean beauty au CBD, conformite cosmetique EU.",
    intro: [
      "La cosmetique CBD est la categorie qui s'integre le plus naturellement aux marques bien-etre, beaute et lifestyle existantes. Elle ne demande pas d'eduquer le consommateur sur le CBD : elle l'integre comme un actif.",
      "Notre gamme couvre les essentiels (creme visage, baume levres, serum anti-age, huile massage) et un baume musculaire signature. Toutes les formules sont conformes aux normes cosmetique EU, INCI complete, allergenes declares.",
    ],
    highlights: [
      { title: "Formulations clean", body: "Sans paraben, sans silicone, sans sulfates. Actifs documentes." },
      { title: "Conformite cosmetique EU", body: "Dossier DIP, CPNP, INCI verifies." },
      { title: "Actifs synergiques", body: "CBD + acide hyaluronique, retinol, vitamine C, arnica selon le produit." },
      { title: "Packaging premium", body: "Pot blanc, flacon pipette, stick — codes du secteur respectes." },
    ],
    formats: [
      { label: "Pot 50 ml", body: "Creme visage, baume musculaire." },
      { label: "Stick 15 ml", body: "Baume levres, format pratique." },
      { label: "Flacon pipette 30 ml", body: "Serum anti-age, dosage precis." },
      { label: "Flacon pompe 100 ml", body: "Huile massage, usage atelier ou retail." },
    ],
    customization: [
      "Pot 50 ml etiquette + couvercle",
      "Sleeve thermo flacon pipette",
      "Etui carton avec notice INCI",
      "Stick personnalise (capuchon couleur)",
      "Coffret routine (3 ou 5 produits)",
    ],
    audience: [
      { title: "Marques bien-etre", body: "Integration naturelle au catalogue existant." },
      { title: "Spas & instituts", body: "Huile massage en format atelier + retail." },
      { title: "Pharmacies / parapharmacies", body: "Formats conformes au circuit officinal." },
    ],
    faqs: [
      { q: "Vos cosmetiques sont-ils certifies bio ?", a: "Pas par defaut. Certification bio possible sur demande pour des formulations dediees (des 2 000 unites)." },
      { q: "Avez-vous le dossier DIP / CPNP a jour ?", a: "Oui pour toutes nos references catalogue. Pour une formulation custom, dossier inclus dans le devis." },
      { q: "Quels actifs sont associes au CBD ?", a: "Acide hyaluronique, vitamine C, retinol, arnica, menthol — variables selon la fonction du produit." },
    ],
  },
};
