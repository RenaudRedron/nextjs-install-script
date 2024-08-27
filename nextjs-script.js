const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Fonction pour exécuter une commande en synchrone
const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`\x1b[31mAn error has occurred :\x1b[0m ${command}`);
        process.exit(1); // La fonction process.exit(1); dans Node.js termine immédiatement le processus en cours avec un code de sortie spécifique. Un code différent de 0 indique une erreur ou une situation exceptionnelle.
    }
};

try {

    const initialDir = process.cwd();

    // Nom du projet, récupéré en argument de la commande
    const projectName = process.argv[2] || false;

    // Si pas de nom, le script ne se lance pas.
    if (!projectName) {
        console.log('\x1b[31mA name is required for the project\x1b[0m');
        process.exit(1);
    }
    console.log(`\n\x1b[33m##################################\x1b[0m`);
    console.log(`\n\x1b[33mInitializing a new Next.js project\x1b[0m\n`);
    console.log(`\x1b[33m##################################\x1b[0m\n`);

    // ###################################################### //
    // # installation de nextjs avec les options spécifiées # //
    // ###################################################### //

    runCommand(`npx create-next-app@14.2.6 ${projectName} --typescript --eslint --tailwind --no-src-dir --app --no-import-alias`);

    // ###################################################### //
    // ########## Edition du fichier /app/page.tsx ########## //
    // ###################################################### //

    // Chemin vers le fichier page.tsx dans le répertoire app du projet
    const destinationFilePage = path.join(initialDir, projectName, 'app', 'page.tsx');

    // Fichier avec le code qu'on souhaite ajouter
    const filePage = path.join('files', 'page.txt');

    // On récupère le contenu du fichier et on le stock dans data
    fs.readFile(filePage, 'utf8', (err, data) => {
        if (err) throw err;

        // On modifie le fichier avec le contenu stocké dans data
        fs.writeFileSync(destinationFilePage, data, (err) => {
            if (err) throw err;
        });
    });

    // ###################################################### //
    // ######## Edition du fichier /app/globals.css ######### //
    // ###################################################### //

    // Chemin vers le fichier globals.css dans le répertoire app du projet
    const destinationFileGlobals = path.join(initialDir, projectName, 'app', 'globals.css');

    // Fichier avec le code qu'on souhaite ajouter
    const fileGlobals = path.join('files', 'globals.txt');

    // On récupère le contenu du fichier et on le stock dans data
    fs.readFile(fileGlobals, 'utf8', (err, data) => {
        if (err) throw err;

        // On modifie le fichier avec le contenu stocké dans data
        fs.writeFileSync(destinationFileGlobals, data, (err) => {
            if (err) throw err;
        });
    });

    // ###################################################### //
    // ################# Message de succès ################## //
    // ###################################################### //

    console.log(`\x1b[32mSuccessful install!\x1b[0m, to access the project folder, use \x1b[34mcd ${projectName}\x1b[0m\n`);

    console.log('You can launch the project with \x1b[34mnpm run dev\x1b[0m\n');

} catch (error) {
    console.error('\x1b[31mAn error has occurred :\x1b[0m ', error);
}