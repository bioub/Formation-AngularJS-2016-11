const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Jeu(options) {
    options = options || {};
    this.$$min = options.min || 0;
    this.$$max = options.max || 100;
    this.$$entierAlea = Math.floor(Math.random() * (this.$$max -  this.$$min + 1) + this.$$min);
    this.$$saisies = [];
}

Jeu.prototype.jouer = function () {

    var that = this;

    if (this.$$saisies.length) {
        console.log('Déjà joué : ' + this.$$saisies.join(' | '));
    }

    rl.question(`Saisir un nombre entre ${this.$$min} et ${this.$$max} :`, function(answer) {
       
        var entierSaisi = parseInt(answer);

        if (Number.isNaN(entierSaisi)) {
            console.log('Il faut saisir un nombre');
            return that.jouer();
        }

        that.$$saisies.push(entierSaisi);

        if (entierSaisi < that.$$entierAlea) {
            console.log('Trop petit');
            return that.jouer();
        }

        if (entierSaisi > that.$$entierAlea) {
            console.log('Trop grand');
            return that.jouer();
        }

        console.log('Gagné');
        rl.close();
    });
};

module.exports = Jeu;