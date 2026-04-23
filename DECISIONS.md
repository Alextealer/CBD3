# Decisions

## 2026-04-22 — Menu "Tarifs" → "Incubateur"

L'entree "Tarifs" est retiree du nav (header desktop + mobile + footer) au
profit d'un nouvel item "Incubateur" pointant vers `/incubateur`. La page
`/pricing` reste accessible en direct (pas archivee) en attendant une
decision produit (refonte, archive ou suppression).

Raison : repositionner Unsigned sur un message premium et selectif plutot que
transactionnel. Les tarifs publics ne servaient plus le ton recherche.

## 2026-04-22 — Page `/incubateur` : concept "Unsigned"

Page one-page nommee "Unsigned" sur la one-page (analogie label musical
pour artistes non signes). Inspiration structure et ton :
cosmeticsnord.com/contact — editorial, sobre, B2B, sur invitation.

Cible : groupes etablis cannabis/CBD, createurs, marques emergentes,
expertises differenciantes. Selection sur dossier + entretien.

## 2026-04-22 — Stack candidature

- Persistance : collection Payload `IncubatorApplications` (preferee a une
  table SQL custom — coherent avec le reste du CMS, admin gratuit).
- Validation : Zod cote Server Action.
- Form : Server Action (Next 14) + `useActionState` cote client. Pas de
  react-hook-form (overkill pour 6 champs).
- Email : non implemente (a faire plus tard, choix Resend probable).
- Anti-spam : honeypot `website` (champ cache).

## Ecarts vs brief initial

- ❌ Drizzle (le projet est sur Payload, pas Drizzle)
- ❌ react-hook-form (Server Actions natives suffisent ici)
- ❌ i18n (le site est FR uniquement)
- ❌ `npm run build` non execute (dev server tournant cote utilisateur, build ferait timeout — test fait par curl 200 sur la page)
