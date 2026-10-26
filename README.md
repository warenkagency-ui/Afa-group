# AFA-GROUP

Site statique d’architecture. Les fichiers publiés sont dans `site/` ; aucune installation ni aucun serveur applicatif n’est nécessaire.

## Organisation

```text
site/                         Seul dossier à publier
  index.html                  Structure du site
  styles.css                  Présentation responsive
  app.js                      Navigation, filtres, galeries et interactions
  data.js                     Projets et configuration de contact
  assets/                     Logo utilisé par le site
  images/                     WebP optimisés référencés par les projets
source-images/                Originaux des projets — ignorés par Git
  Culture, tourisme, loisirs/
  Immeuble d_habitation/
  Immeubles de bureau/
  Résidences/
brand/source/                 Fichiers maîtres du logo — ignorés par Git
backups/                      Archives du site — ignorées par Git
tools/optimiser_images.py     Conversion et vérification des images
.gitignore                    Exclut les originaux, sauvegardes et fichiers locaux
README.md                     Documentation du projet
```

Les originaux, les fichiers maîtres du logo et les sauvegardes sont séparés du site et exclus par `.gitignore`. `site/images/` contient uniquement les WebP optimisés nécessaires au site. Le dépôt doit contenir `site/`, `tools/`, `README.md` et `.gitignore`, mais pas `source-images/`, `brand/source/` ni `backups/`. Ne forcez jamais l’ajout de ces éléments ignorés. Gardez une seconde copie des originaux dans un emplacement de sauvegarde indépendant.

## Aperçu local

Ouvrez `site/index.html` dans un navigateur. Pour un aperçu via HTTP local :

```powershell
python -m http.server 8000 --directory .\site
```

Puis visitez `http://localhost:8000`. Arrêtez le serveur avec `Ctrl+C`.

## Ajouter un projet

1. Ajoutez les photos originales dans le dossier du projet sous `source-images/` et conservez une sauvegarde indépendante.
2. Choisissez les images à publier. Convertissez les nouvelles images en WebP dans `site/images/` avec l’outil ci-dessous.
3. Ajoutez un projet à `PROJECTS` dans `site/data.js`, en conservant un identifiant unique et des chemins d’images relatifs à `site/` (par exemple `images/Résidences/Nouveau projet/vue.webp`). Renseignez uniquement des informations vérifiées.
4. Exécutez le vérificateur d’images et les contrôles JavaScript.
5. Vérifiez filtres, cartes, galerie, liens et mise en page mobile avant la mise en ligne.

Gardez une sélection courte en vedette et utilisez les filtres/galeries existants pour parcourir le catalogue complet. Si `data.js` devient difficile à gérer, migrez vers un fichier JSON ou un fichier par projet avec validation automatisée, en préservant les identifiants, catégories, ordre et chemins existants.

## Préparer et vérifier les images

L’outil d’images n’est pas nécessaire pour faire fonctionner le site. La conversion nécessite Python et Pillow dans un environnement virtuel ; la vérification des références nécessite Node.js. Depuis la racine du projet, sur Windows :

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install Pillow
.\.venv\Scripts\python.exe .\tools\optimiser_images.py .\source-images
.\.venv\Scripts\python.exe .\tools\optimiser_images.py --verifier
node --check .\site\app.js
node --check .\site\data.js
```

La conversion lit `source-images/` et écrit les WebP (1800 px maximum) dans `site/images/` en conservant la structure des catégories. Utilisez des noms stables et vérifiez les chemins : les hébergeurs distinguent les majuscules, minuscules et caractères accentués.

## Git, sécurité et dépendances

- Vérifiez `.gitignore` avant le premier `git add`. Les originaux, maîtres du logo, archives, secrets et environnements locaux ne doivent pas être publiés. Les visuels du site à publier sont limités au logo dans `site/assets/` et aux images optimisées dans `site/images/`.
- Activez l’authentification à deux facteurs, la protection de branche, les pull requests, la détection de secrets et Dependabot sur GitHub. Ne mettez jamais de secrets ou identifiants dans le dépôt.
- Actuellement, le site n’a pas de dépendance JavaScript installée. Pillow est facultatif et ne sert qu’à la conversion. Si l’outil devient régulier, déclarez une version de Pillow dans `requirements-dev.txt` et utilisez un audit Python (par exemple `pip-audit`) dans les mises à jour.
- Si npm est ajouté à l’avenir, versionnez `package.json` et `package-lock.json`, utilisez `npm ci` en CI et examinez les mises à jour `npm audit` avant fusion.
- Activez les alertes Dependabot pour les écosystèmes effectivement déclarés (pip, npm et GitHub Actions le cas échéant). Examinez les pull requests de mise à jour, exécutez les tests et mettez à jour de manière ciblée ; n’utilisez pas d’upgrade forcé automatique en production.
- Comme la vérification des images évalue `site/data.js` avec Node.js, n’exécutez pas cet outil sur le contenu non fiable d’une pull request dans un workflow privilégié ayant accès à des secrets.
- Le déploiement est statique et n’a ni base de données, ni authentification, ni endpoint de formulaire. Le formulaire `mailto:` ouvre le logiciel de messagerie du visiteur. `netlify.toml` configure les en-têtes de sécurité de base ; vérifiez-les sur le site publié et activez HTTPS sur l’hébergeur. Google Fonts est actuellement chargé depuis un service tiers.
- Pour des contrôles, utilisez votre propre domaine ou aperçu. Commencez avec des scans passifs de configuration/headers ; n’effectuez pas de tests intrusifs ou de charge sur des systèmes tiers.

## CI/CD et mise en ligne

1. Placez ce projet sous Git et envoyez uniquement les éléments autorisés par `.gitignore`.
2. Le workflow GitHub Actions vérifie la syntaxe JavaScript et les références d’images sur chaque pull request et push vers `master`. Après validation d’un push sur `master`, il publie automatiquement le dossier `site/` sur GitHub Pages.
3. Pour Netlify, `netlify.toml` configure la publication du dossier `site/` sans commande de build. Connectez le dépôt GitHub et choisissez `master` comme branche de production pour activer les aperçus de pull request et les déploiements automatiques.
4. Pour Vercel, créez un projet puis ajoutez dans **Settings → Secrets and variables → Actions** les secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` et `VERCEL_PROJECT_ID`. Configurez `site` comme **Root Directory** dans Vercel. Le workflow `.github/workflows/vercel.yml` déploie le projet lié en production au push sur `master`, sans cache de build, et ignore les exécutions devenues obsolètes. `.vercelignore` exclut les originaux, archives et configurations locales du téléversement CLI. Désactivez les déploiements Git automatiques dans Vercel si vous souhaitez que GitHub Actions soit l’unique mécanisme de publication.
5. Choisissez l’hébergeur de production souhaité et configurez son domaine et HTTPS. Des pushes vers `master` peuvent publier sur GitHub Pages, Netlify et Vercel si chaque intégration est activée.
6. Ne reconvertissez pas toutes les images à chaque déploiement. Publiez les WebP validés dans `site/images/`, et gardez les originaux et archives dans une sauvegarde privée, hors du dossier de publication.

Pour modifier l’adresse e-mail, le téléphone ou l’adresse de l’agence, mettez à jour `SITE` dans `site/data.js`. Le site statique ne collecte ni n’envoie les demandes lui-même : le formulaire prépare un message et l’ouvre dans le logiciel de messagerie du visiteur.
