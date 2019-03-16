
function conslog (P_mssg: string): void
{   console.log (P_mssg); }
function conslogo (P_mssg: object): void
{   console.log (P_mssg); }
function conslog_an (P_mssg: number[]): void
{   console.log (P_mssg); }

//====================================================================

conslog ("L 57 sec 5 ");

class Person {
    name: string;
    private type: string;
    protected age: number = 33;

    constructor (P_name: string, public username: string) {
        this.name = P_name;
    }
    printAge (): void {
        console.log ("age is " + this.age);
    }
    setType (P_type: string): void {
        this.type = P_type;
        console.log("type is " + this.type);
    }
}

const GC_person = new Person ("Fred", "userFred");

console.log (GC_person);
GC_person.printAge ();
GC_person.setType ("Cool Guy");

//====================================================================

conslog ("L 59 sec 5 ");

class John extends Person {
    //  name = "John";
    constructor (P_username: string) {
        super ("John", P_username);
        this.age = 31;
    }
}

//const GC_john = new John ("Anna", "userAnna");
const GC_john = new John ("userJohn");
conslogo (GC_john);

//====================================================================

class Plant {
    private v_species: string = "Default";
    get species () {
        return this.v_species;
    }
    set species (P_value: string) {
        if (P_value.length > 3)   this.v_species = P_value;
        else this.v_species = "Default";
    }
}

let GC_plant = new Plant ();
console.log (" plant 1 " + GC_plant.species);
GC_plant.species = "AB";
console.log (" plant 2 " + GC_plant.species);
GC_plant.species = "Green plant";
console.log (" plant 3 " + GC_plant.species);

//====================================================================

conslog ("L 63 sec 5 ");
conslog ("Static Properties and Methods");
//  Static Properties and Methods

class Helpers {
    static PI: number = 3.1416;
    static calc_circumferance (diameter: number): number {
        return this.PI * diameter;
    }
}
console.log ("2 * Helpers.PI " + (2 * Helpers.PI));
console.log ("Helpers.calc_circumferance (8) " + Helpers.calc_circumferance (8));

//====================================================================

conslog ("L 64 sec 5 ");
conslog ("Abstract Classes");

abstract class Project {
    project_name : string = "Default";
    budget : number;
    abstract change_name (P_new_name: string) : void;
    calcBudget () {
        return this.budget * 2;
    }
}

class IT_project extends Project {
    change_name (P_new_name: string) : void {
        this.project_name = P_new_name;
    }
}

let GC_project = new IT_project ();
conslog ("obj 1 " + GC_project);
conslogo (GC_project);
GC_project.change_name ("Super IT project");
conslog ("obj 1 change " + GC_project);
conslogo (GC_project);

//====================================================================

conslog ("L 65 sec 5 ");
conslog ("Private Constructors & Singletons");
conslog ("L 66 sec 5 ");
conslog ("ReadOnly properties");

class only_one {
    private static VS_instance: only_one;
    private constructor (public readonly name: string)  {}
    //static get_instance (P_name: string = "The only one") : only_one {
    static get_instance (P_name: string) : only_one {
        if (!only_one.VS_instance)
            //only_one.VS_instance = new only_one("The only one");
            only_one.VS_instance = new only_one(P_name);
        return only_one.VS_instance;
    }
}

const only = only_one.get_instance ("the only one");
conslogo (only);
//   returns "the only one" --- not "A Singleton"
const only2 = only_one.get_instance ("A Singleton");
conslogo (only2);
//  BAD --- cannot do this, and should not do this
//  only2.name = "no no no";

//====================================================================

conslog ("L 68 sec 5 ");

conslog ("Exercise 1");

// Exercise 1
/*
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
*/
class Car {
    private V_acceleration: number = 0;
    get acceleration (): number { return this.V_acceleration }
    get make (): string { return this.V_make }
    constructor (private V_make: string) {  }
    public honk () { console.log ("HONK") }
    public accelerate (P_speed_delta: number) {
        this.V_acceleration += P_speed_delta;
    }
}

var car = new Car("BMW");
car.honk();
console.log("car.make " + car.make);
console.log("car.acceleration " + car.acceleration);
car.accelerate(20);
console.log("car.acceleration " + car.acceleration);


conslog ("Exercise 2");
// Exercise 2
/*
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
*/
class cls_shape {
    protected width: number = 0;
    protected length: number = 0;
    constructor (P_width: number, P_length: number) {
        this.width = P_width;
        this.length = P_length;
    }
}

class cls_rectangle extends cls_shape {
    constructor (P_width: number, P_length: number) {
        super (P_width, P_length);
    }
    public calcSize () { return this.width * this.length; }
}

const rectangle = new cls_rectangle (11, 3);
console.log(rectangle.calcSize());

conslog ("Exercise 3");
// Exercise 3
/*
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
*/

class Person_02 {
    private V_firstName: string = "(none)";
    get firstName (): string {
        return this.V_firstName;
    }
    set firstName (P_val: string) {
/*        if (P_val.length > 3)
            this.V_firstName = P_val;
        else
            this.V_firstName = "(too short)";
*/
        this.V_firstName = (P_val.length > 3)?
                            P_val : "(too short)";
    }
}
const GC_person_02 = new Person_02 ();
console.log(GC_person_02.firstName);
GC_person_02.firstName = "Ma";
console.log(GC_person_02.firstName);
GC_person_02.firstName = "Maximilian";
console.log(GC_person_02.firstName);

//====================================================================

conslog ("===================================");
conslog ("sec 5 ");

//====================================================================
//====================================================================
//====================================================================
//====================================================================
