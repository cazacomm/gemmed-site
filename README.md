# Gemmed, maquette de site

Maquette de présentation pour **Gemmed**, tooth gem studio à Montréal.
Site statique (HTML / CSS / JS, sans dépendance ni build).

## Ce que contient la maquette

- Hero plein écran avec le logo de la marque
- Section studio, déroulé de la prestation en 4 étapes
- Galerie 12 visuels avec agrandissement au clic
- Tarifs : 1 à 4 gems (40 $ / 60 $ / 80 $ / 100 $ CAD)
- **Calendrier de réservation** en 3 étapes : prestation, date, créneau, coordonnées, confirmation
- FAQ, témoignages, pied de page
- Bilingue **FR / EN** (bascule en haut à droite)

## Important

Le calendrier est **simulé côté navigateur** : aucune donnée n'est envoyée,
aucun rendez-vous n'est enregistré. Les créneaux occupés sont générés de façon
déterministe pour rendre la démo crédible. Les coordonnées, horaires et
témoignages sont fictifs.

## Lancer en local

```bash
python3 -m http.server 4321
# http://localhost:4321
```

## Structure

```
index.html
assets/
  css/styles.css
  js/app.js
  img/            logo, favicons, visuels
```

Réalisé par [Caza Comm](https://cazacomm.fr).
