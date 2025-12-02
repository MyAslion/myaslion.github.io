# MyAslion.github.io

Une simple page statique hébergée avec GitHub Pages présentant des fonctionnalités de base : navigation, responsive, mode sombre, et bonnes pratiques d'accessibilité.

## Ce que j'ai changé / amélioré
- Structure HTML complète (lang, head, meta, charset, viewport)
- Ajout d'un CSS global dans `assets/css/style.css` (responsive, variables thèmes, cartes)
- Ajout d'un petit JavaScript dans `assets/js/main.js` (mode sombre + smooth-scroll + persistance)
- Ajout d'un favicon SVG (`assets/favicon.svg`)
- Ajout de navigation, d'un en-tête et d'un pied de page cohérents entre les pages
- Ajout d'un lien « Aller au contenu » accessible pour le clavier
- README amélioré, instructions locales et déploiement

## Comment tester localement
1. Clonez le repo et entrez dans le dossier du projet :

```bash
git clone https://github.com/MyAslion/myaslion.github.io.git
cd myaslion.github.io
```

2. Démarrez un serveur local (ex: Python 3) :

```bash
python3 -m http.server
# ou : npx http-server -c-1 .
```

Allez ensuite sur `http://localhost:8000` pour visualiser le site.

## Déploiement
Ce site est prévu pour une publication simple sur GitHub Pages. Pour le déployer :
1. Poussez vos changements sur la branche `main`.
2. Dans l'onglet **Settings → Pages**, choisissez la source `main` / `/ (root)`, puis enregistrez. Le site sera disponible https://MyAslion.github.io

## Idées d'améliorations futures
- Ajouter un formulaire de contact (ex: Formspree / Netlify Forms)
- Ajouter des images optimisées et un lazy-loading
- Ajouter une CI pour valider HTML/CSS ou déployer automatiquement

## Licence
Contenu libre pour usage personnel.
