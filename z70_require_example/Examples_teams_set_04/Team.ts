import Coach = require("Coach");
import Director = require("Director");
import Player = require("Player");

class Team {

    name: string;
    coach:Coach;
    director:Director;
    players:[Player];

    generateRandomPlayers() {
        this.players = [new Player(), new Player(), new Player(), new Player(), new Player(), new Player(), new Player(), new Player(), new Player(), new Player(), new Player()];
    }

    constructor() {
        this.name="Real Oviedo";
        this.coach = new Coach();
        this.director = new Director();
        this.generateRandomPlayers();
    }

}

export = Team;