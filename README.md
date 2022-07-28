# ANNUAIRE DU COLLEGE ET DE L'ECOLE DE DROIT,<br /> UNIVERSITE PARIS II, PANTHEON-ASSAS

## 🚀 About TEAM DEV

[![github](https://img.shields.io/badge/Damien%20-%20Lien%20Github-blue)](https://github.com/Damien-Dupont/)<br />
[![github](https://img.shields.io/badge/Isma%C3%ABl-%20Lien%20Github-blue)](https://github.com/ismamama1/)<br />
[![github](https://img.shields.io/badge/Christian-%20Lien%20Github-blue)](https://github.com/Christian-81/)<br />
[![github](https://img.shields.io/badge/Jean--Claude-%20Lien%20Github-blue)](https://github.com/jca21000/)<br />

[![github](https://img.shields.io/badge/Julien%20(Formateur)-%20Lien%20Github-lightgrey)](https://github.com/jujuck/)<br />

## Tech Stack

**Client:** React JS, HTML, Tailwind CSS (responsive design), MUI <br />
**Server:** Node JS, Express, MySQL

## Clone the project

```bash
  git clone git@github.com:WildCodeSchool/2022-03-JS-Remote-404-Alumni-droit.git
```
```bash
  https://github.com/WildCodeSchool/2022-03-JS-Remote-404-Alumni-droit
```

## PAGE LISTING

La page listing est la page d'accueil de l'annuaire.<br />
Par défaut, le nombre de cartes affichées sera de 30 maxi.

Le bandeau rouge donne le nombre d'alumnis total inscrit dans la base de données.<br />
Il prend en compte les profils privés et publics.<br />
La valeur affichée ne correspondra donc pas forcément au nombre de cartes affichées.<br />

- Le visiteur peut filtrer par :

    - Diplôme <br />
    - Secteur professionnel <br />
    - Promotion <br />
    - Rechercher par nom ou prénom <br />

La liste de carte se mettra à jour automatiquement.


- La carte utilisateur est composé de 5 éléments :

    - Photo du profil (portrait fictif libre de droit) <br />
    - Prénom et nom <br />
    - Poste actuel <br />
    - Listes des diplômes obtenus et leur date d'obtention <br />
    - Le bouton "Consulter" (lien vers la page Profile.jsx) <br />

## NAVBAR

La navbar est composé 2 deux éléments :

- Le logo de l'annuaire des diplômés du Collège et de l'Ecole de droit d'Assas

- A droite, il y a l'image du profile :

    - Un avatar s'affiche quand l'utilisateur est non-inscrit ou pas encore identifié. <br />
    - Les initiales apparaissent si l'utilisateur s'est identifié mais qu'il n'a pas uploadé de photo de profil. <br />
    - La photo du profil s'affiche si l'utilisateur l'a uploadé.

- En cliquant sur l'icône, l'utilisateur verra une liste de lien :

    - S'inscrire (Lien vers la page Signup.jsx) <br />
    - Se connecter (Lien vers la page identification.jsx) <br />
    - Voir mentions légales (Lien vers la page RGPD.jsx) <br />

## PAGE IDENTIFICATION

Le visiteur pourra se connecter en entrant son email de connexion et son mot de passe.<br />
Si le visiteur n'a pas de compte, il peut s'en créer unn en cliquant sur "Créez votre compte"<br />
Il sera redirigé sur la page SignUp.jsx

## PAGE SIGNUP

Cette page est composé d'un formulaire, divisé en 2 grandes parties :

- Partie 1 : Champs obligatoires <br />
- Partie 2 : Champs optionnels <br />

Par défaut, le switch se met sur Public, l'utilisateur peut changer l'état du composant en cliquant sur ce dernier. <br />
L'utilisateur validera son inscription en cliquant sur le bouton "Envoyer", il sera redirigé automatiquement vers la page Listing. <br />
En bas de page, un lien vers la page RGPD.jsx (complet) est à disposition de l'utilisateur.

## PAGE RGPD

Cette page est composé des mentions légales de l'annuaire. <br />
Un bouton "Retour à la liste" permet à l'utilisateur de revenir sur la page Listing.

## FOOTER

En bas de page, le footer est composé de 3 éléments :

- Le logo de l'annuaire des diplômés du Collège et de l'Ecole de droit d'Assas

- Des logos des réseaux sociaux :

    - Linkedin : https://www.linkedin.com/company/coll%C3%A8ge-de-droit-universit%C3%A9-paris-ii-panth%C3%A9on-assas/ <br />
    - Twitter : https://twitter.com/CddAssas <br />
    - Facebook : https://www.facebook.com/cdd.edd.assas/ <br />
    - Instagram : https://www.instagram.com/collegeecolededroitassas/ <br />

- Lien vers la page RGPD.jsx <br />

## Color Reference

| Color             | Hex                             |
| ----------------- | ------------------------------- |
| Rouge | #991b1b |
| Gris | #E5E7EB |

## BACKEND Routers

#### Routes GET

```bash
  router.get("/annuaire", decodeCookie, ProfileController.browse);
```
```bash
  router.get("/annuaire/:id", decodeCookie, checkVisibility, ProfileController.read);
```
```bash
  router.get("/count", ProfileController.count);
```
```bash
  router.get("/diplome", DiplomeController.browse);
```
```bash
  router.get("/profession", JobController.browse);
```
```bash
  router.get("/promotion", PromotionController.browse);
```
```bash
  router.get("/master", MasterController.browse);
```

#### Routes POST

```bash
  router.post("/sign_up", preparedDataForSignIn, validateUser, UserController.add);
```
```bash
  router.post("/login", validateLogin, UserController.login);
```

#### Routes PUT

```bash
    router.put("/user/update/:id", checkAuth, checkRights, UserController.edit);
```
```bash
    router.put("/profile/update/:id", checkAuth, checkRights, ProfileController.edit);
```

#### Routes DELETE

```bash
    router.delete("/annuaire/delete/:id", checkAuth, checkRights, ProfileController.delete);
```
```bash
router.delete("/user/delete/:id", checkAuth, checkRights, UserController.delete);
```

## Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

## Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated