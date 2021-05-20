const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

    Game.prototype.initializeGame = function () {
        this.currentEnemy = this.enemies[0];

        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('Azog the Defiler', 'War-Mace'));
        this.enemies.push(new Enemy('Nazgûl', 'Morgul-Blade'));
    };

inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })

        // destructure name from the prompt object 
        .then(({ name }) => {
            this.player = new Player(name);

            //test the object creation
            console.log(this.currentEnemy, this.player);
        });


module.exports = Game;