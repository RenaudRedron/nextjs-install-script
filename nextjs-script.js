const { execSync } = require('child_process');
const fs = require("fs");
const path = require("path");

// Fonction pour exécuter une commande en synchrone
const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });
        // en utilisant stdio: 'inherit', permet a la commande exécutée de se comporter de manière similaire à l'exécution directe dans un terminal, en affichant directement sa sortie et ses erreurs dans la console où le programme Node.js est exécuté.
    } catch (error) {
        console.error(`Erreur lors de l'exécution de la commande: ${command}`);
        process.exit(1);
    }
};

// Nom du projet, récupéré en argument de la commande
const projectName = process.argv[2] || false;

// Si pas de nom le script ne se lance pas.
if(!projectName){
    console.log("Un nom est requis pour le projet");
    return false
}

try {
  // Crée le répertoire du projet
    console.log(`Création du projet ${projectName}...`);

    // Commande d'installation de nextjs 14.2.6 avec en options l'installation de typescript, eslint, tailwind, et app router
    runCommand(`npx create-next-app@14.2.6 ${projectName} --typescript --eslint --tailwind --no-src-dir --app --no-import-alias`);

    // Chemin vers le répertoire du projet
    const projectPath = path.join(process.cwd(), projectName);

    // Chemin vers le fichier /app/page.tsx de Next.js
    const indexFilePath = path.join(projectPath, "app", "page.tsx");

    // Contenu du fichier /app/page.tsx
    const indexContent = `
    export default function HomePage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Hello World !!!</h1>
        </div>
    );
    }
    `;

    // Chemin vers le fichier /app/page.tsx de Next.js
    const globalsCssFilePath = path.join(projectPath, "app", "globals.css");

    // Contenu du fichier /app/globals.css
    const globalsCssContent = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :root {
        --foreground-rgb: 0, 0, 0;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --foreground-rgb: 255, 255, 255;
            --background-start-rgb: 0, 0, 0;
            --background-end-rgb: 0, 0, 0;
        }
    }

    body {
        color: rgb(var(--foreground-rgb));
        background: linear-gradient(
            to bottom,
            transparent,
            rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
    }

    @layer utilities {
        .text-balance {
            text-wrap: balance;
        }
    }`

    // Écrit le contenu dans le fichier /app/page.tsx
    fs.writeFileSync(indexFilePath, indexContent);

    // Écrit le contenu dans le fichier /app/globals.css
    fs.writeFileSync(globalsCssFilePath, globalsCssContent);

    // Se déplacer dans le répertoire du projet
    process.chdir(projectName);

    console.log("Landing page créée avec succès !");

    runCommand("npm run dev");
} catch (error) {
    console.error("Une erreur est survenue :", error);
}
