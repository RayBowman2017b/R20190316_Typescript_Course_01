
function conslog (P_mssg: string): void
{   console.log (P_mssg); }
function conslogo (P_mssg: object): void
{   console.log (P_mssg); }
function conslog_n (P_mssg: number): void
{   console.log (P_mssg); }
function conslog_an (P_mssg: number[]): void
{   console.log (P_mssg); }


// const GC_div_01 = document.getElementById ("div_id01");
// if (GC_div_01)  GC_div_01.innerHTML = "<div>this is section 007</div>";
//else alert ("NULL");

//====================================================================

conslog ("L 84 sec 007 ");
conslog ("Interfaces");

conslog ("L 85 sec 007 ");
conslog ("Interfaces and Properties");

interface ntf_named_person {
    firstName : string;
    age? : number;
    [genericProp : string] : any;
    greet (P_lastName : string) : void;
}

const GC_greet = (P_person: ntf_named_person) =>
    conslog ("Hello " + P_person.firstName);
const GC_changeName = (P_person: ntf_named_person, P_new_name: string) =>
    P_person.firstName = P_new_name;

const GC_person_01 : ntf_named_person = {
    firstName: "Andy",
    age: 33,
    greet (P_lastName: string) {
        conslog (`Hi, I am ${ this.firstName} ${P_lastName}`)
    }
}

const GC_person_02 : ntf_named_person = {
    firstName: "Pete",
    hobbies: [ "stamps", "cars"],
    greet (P_lastName: string) {
        conslog (`Hello, I am ${ this.firstName} ${P_lastName}`)
    }
}

GC_greet ( { firstName: "Ben", age: 41, greet (P_n: string) {} } );
GC_greet ( { firstName: "Tom", greet (P_n: string) {} } );
GC_greet (GC_person_01);
GC_changeName (GC_person_01, "Anna");
GC_greet (GC_person_01);
GC_greet (GC_person_02);

conslog ("L 86 sec 007 ");
conslog ("Interfaces and methods");
GC_person_01.greet ("Bates");
GC_person_02.greet ("Smith");
//====================================================================

conslog ("L 87 sec 007 ");
conslog ("Interfaces and Classes");

class cls_person implements ntf_named_person {
    firstName: string;
    lastName: string;
    greet (P_lastName: string) {
        conslog (`Howdy, I am ${ this.firstName} ${P_lastName}`)
    }
}

const GC_person_03 = new cls_person ();
GC_person_03.firstName = "Marty";
GC_greet (GC_person_03);
GC_person_03.greet ("Jones");

//====================================================================

conslog ("L 88 sec 007 ");
conslog ("Interfaces and Function Types");

interface ntf_double_value_func {
    (number1: number, number2: number): number;
}

let myDoubleFunction: ntf_double_value_func;
myDoubleFunction = (val1: number, val2: number) => {
    return (val1 + val2) * 2;
}

conslog ("myDoubleFunction(2, 9) :> " + myDoubleFunction(2, 9));

//====================================================================

conslog ("L 88 sec 007 ");
conslog ("Interfaces and Function Types");

interface ntf_aged_person extends ntf_named_person {
    age: number
}

const GC_old_person: ntf_aged_person = {
    age: 82,
    firstName: "Old Pete",
    greet (P_lastName: string): void {
        conslog (`hello there, i am ${this.firstName} ${P_lastName}`);
    }
}

conslog ("GC_old_person");
conslogo (GC_old_person);
//====================================================================
conslog ("===================================");
conslog ("sec 007 ");
conslog ("===================================");

//====================================================================
//====================================================================
//====================================================================
//====================================================================
