// Exercice
// 1 - Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
// 2 - Demander et récupérer la saisie d'un nombre et afficher
// trop grand, trop petit ou trouvé (API readline Node.js)
// 3 - Pouvoir trouver en plusieurs essais
// 4 - Stocker chaque essai dans un tableau et réafficher les précédents
// essais entre chaque tour (API Array)
// 5 - Rejouer si la saisie n'est pas un nombre (Number ou parseInt et isNaN)

// Dépendence de fichier (ce fichier dépend de readline.js)
const Jeu = require('./jeu');

var jeu = new Jeu({
    min: 0,
    max: 100
});

jeu.jouer();