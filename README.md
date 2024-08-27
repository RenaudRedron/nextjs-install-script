Ce script installe la **version 14.2.6** de Next.js avec **TypeScript**, **ESLint**, **Tailwind** et **App Router**.

Il crée ensuite une landing page avec un fond blanc sur laquelle est affiché un "Hello World !!!" dans une balise h1.

## Prérequis

Le script utilise **Node.js** et un gestionnaire de paquets comme **npm** ou **Yarn**. Assurez-vous d'avoir Node.js ainsi que l'un de ces gestionnaires de paquets installés sur votre système. 

Vous pouvez vérifier leur présence en exécutant les commandes **node -v** et **npm -v** pour npm, ou **yarn -v** pour Yarn, dans votre terminal. Si ce n’est pas le cas, téléchargez et installez Node.js depuis **nodejs.org**, et choisissez ensuite d'installer npm ou Yarn selon vos préférences.

## Installation

Le script attend un argument pour le nom du projet. Vous devez passer ce nom lors de l'exécution du script. Par exemple :

```bash
node nextjs-script mon-projet
```

**<span style="color: red;">Vous devez être dans le même répertoire que le script pour l'exécuter. </span>**

## Démarrage du serveur

Se rendre dans le répertoire du projet.

```bash
cd nom-du-project
```

Lancer le serveur.

```bash
yarn dev
# ou
npm run dev
```
