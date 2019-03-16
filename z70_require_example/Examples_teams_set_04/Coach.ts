import Person = require("Person");

class Coach implements Person {
    firstName: string;
    lastName: string;
    age: number;
    country: string;

    constructor (){
        this.firstName = "Martin";
        this.lastName = "Caparros";
        this.age = 50;
        this.country = 'Spain';
    }
}

export = Coach;