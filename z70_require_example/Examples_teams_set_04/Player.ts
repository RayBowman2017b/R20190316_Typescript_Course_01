import Person = require("Person");

class Player implements Person {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    goals: number;
    caps: number;

    constructor (){
        this.firstName = "Andres";
        this.lastName = "Iniesta";
        this.age = 31;
        this.country = 'Spain';
        this.goals = 22;
        this.caps = 100;
    }
}

export = Player;