
// Module JS :
// Limiter la portée des variables à un fichier (une balise script)

// Module IIFE (Immediately Invoked Function Expression)
(function () {
    'use strict';
    
    var addition = function (a, b) {
        return Number(a) + Number(b);
    };

    console.log(addition(1, 2)); // 3
    console.log(addition('1', '2')); // 3
    console.log(addition(1, 2, 3)); // 3
    console.log(addition(1)); // NaN (b === undefined)

    // Valider des paramètres
    var addition = function (a, b) {
        if (typeof a !== 'number' ||
            typeof b !== 'number') {
            throw new Error('a et b doivent etre number');
        }
        return a + b;
    };

    try {
        addition('1', '2');
    }
    catch (e) {
        console.log('ERREUR : ' + e.message);
    }

    // Valeur par défaut
    var addition = function (a, b) {
        b = b ||  0;
        return Number(a) + Number(b);
    };

    // Valeur par défaut (ES6)
    var addition = function (a, b = 0) {
        return Number(a) + Number(b);
    };


    // Sans Closure
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    // 3 3 3

    // Pour parler de closure il faut :
    // 1 - 2 fonction imbriquées
    // 2 - la fonction interne doit etre appelée en dehors
    function closure(remember) {
        // portée de closure (sauvegardée au moment du passage
        // dans la fonction externe)
        return function () {
            console.log(remember);
        };
    }

    var logBonjour = closure('Bonjour');
    logBonjour();

    // Avec Closure
    for (var i = 0; i < 3; i++) {
        setTimeout(closure(i), 100);
    }
    // 0 1 2
} ());

