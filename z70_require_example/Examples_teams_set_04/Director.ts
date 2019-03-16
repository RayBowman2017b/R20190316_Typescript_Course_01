import Person = require("Person");

class Director implements Person {
    firstName: string;
    lastName: string;
    age: number;
    country: string;

    constructor (){
        this.firstName = "Florentino";
        this.lastName = "Perez";
        this.age = 222;
        this.country = 'Spain';
    }
}

export = Director;