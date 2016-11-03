// On peut manipuler des objets préinstanciés du langage :
Math.random();
console.log(typeof Math); // object

// ou de l'environnement d'exécution (ici Node.js)
console.log(typeof console); // object

// on peut étendre (sauf verrou) des objets
Math.mathematicien = 'Evariste Galois';
console.log(Math.mathematicien); // Evariste Galois

// on peut modifier des objets
Math.random = function() {
    return 0;
};

console.log(Math.random()); // 0

// on peut supprimer des propriétés
delete Math.mathematicien; 
console.log(typeof Math.mathematicien); // undefined

// on peut accéder aux membres d'un objet avec l'opérateur .
console.log(Math.PI); // 3.14......

// on avec les crochets []
console['log'](Math['PI']);

// permet du code plus dynamique (mais plus lourd)
// ex de log
var logMethod = 'error'; // peut venir d'un fichier de config
console[logMethod]('Message');

// on peut utiliser des objets pour regrouper des valeurs ponctuellement

// éviter de faire
var coords = new Object();
coords.x = 10;
coords.y = 20;

// à la place on utilise object literal
var coords = {
    x: 10,
    y: 20
};

// Pattern courant en JS
var afficherContact = function(nom, email, telephone, age, prenom) {
    
};

// si que le prénom
afficherContact(false, false, false, false, 'Romain');

// Pattern Options
var afficherContact = function(options) {
    options = options || {};
    var prenom = options.prenom || '';
    var nom = options.nom || '';
    var email = options.email || '';
};
afficherContact({
    prenom: 'Romain'
});

var coords = {
    x: 10,
    getX: function() {
        return this.x;
    }
};

console.log(coords.getX()); // 10

// JSON JavaScript Object Notation (surensemble de object literal)
// Sérialisation d'un objet

var json = JSON.stringify(coords);
console.log(typeof json); // string
console.log(json); // {"x": 10}

/// ..... réseau ......

var objet = JSON.parse(json);
console.log(objet.x); // 10
console.log(objet.getX); // undefined

// On peut itérer sur les propriétés d'un objet
var coords = {
    x: 10,
    y: 20
};

for (var prop in coords) {
    // prop est de type string
    console.log(prop); // 'x' 'y'
    console.log(coords[prop]); // 10 20
}

// Nouveautés de ES5.1 (IE9 minimum)
Object.defineProperty(coords, 'z', {
    value: 30,
    writable: false,
    enumerable: false,
    configurable: false
});

var contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
    get nomMajuscule () {
        return this.nom.toUpperCase();
    }
};

console.log(contact.nomMajuscule);

Object.defineProperty(contact, 'nomComplet', {
    get: function() {
        return this.prenom + ' ' + this.nom
    },
    set: function(val) {
        var array = val.split(' ');
        this.prenom = array[0];
        this.nom = array[1];
    }
});

contact.nomComplet = 'Barack Obama'; // set

console.log(contact.nomComplet); // get

// voir aussi Object.defineProperties et Object.create
// Object.assign() copie d'objet

// On peut empêcher l'extension et la suppression de propriété
// (pas de retour en arrière possible)
Object.preventExtensions(contact);
console.log(Object.isExtensible(contact)); // false

// seal = preventExtensions + writable false à tous
Object.seal(contact);

// freeze = seal + configurable à false pour tous
Object.freeze(contact);

// si on doit régulièrement instancier des objets similaires
// on utilise des fonctions constructeurs
// var xhr = new XMLHttpRequest();

var Contact = function (prenom) {
    this.prenom = prenom;
};

var romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(typeof Contact); // function
console.log(romain.prenom); // Romain

// Simuler une propriété privée (grace à la closure)
var Contact = function (prenom) {
    this.getPrenom = function() {
        return prenom
    };
    this.setPrenom = function(_prenom) {
        prenom = _prenom;
    };
};

var romain = new Contact('Romain');
console.log(romain.prenom); // undefined
console.log(romain.setPrenom('Eric'));
console.log(romain.getPrenom()); // Eric

// La closure est mauvaise en terme de perf
// (autant de fonctions getPrenom que d'objet de type Contact)

// En général les méthodes sont dans le prototype

var Contact = function(prenom) {
    this.prenom = prenom;
};

Contact.prototype.hello = function() {
    return `Bonjour je m'appelle ${this.prenom}`;
};

var contact = new Contact('Romain');
console.log(contact.prenom); // dans l'objet directement
console.log(contact.hello()); // dans le prototype de la fonction constructeurs
console.log(contact.hasOwnProperty('prenom')); // true
console.log(contact.hasOwnProperty('hello')); // false
console.log(contact.toto); // undefined

class Voiture {
    constructor(marque) {
        this.marque = marque;
    }
    static getClass() {
        return 'Voiture';
    }
    demarrer() {
        return 'Vroom';
    }
}

var peugeot = new Voiture('Peugeot');
console.log(peugeot.marque);
console.log(peugeot.demarrer());
console.log(Voiture.getClass());

console.log(typeof peugeot); // object
console.log(typeof Voiture); // function
console.log(typeof Voiture.prototype.demarrer); // function