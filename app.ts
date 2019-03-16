console.log("It works!");


function conslog (P_mssg: string): void
{   console.log (P_mssg); }
function conslogo (P_mssg: object): void
{   console.log (P_mssg); }
function conslog_an (P_mssg: number[]): void
{   console.log (P_mssg); }

let myName = "Joe";

let x = 1;

let ary = [11, 22, 33 ];

console.log("ary " + ary[x]);
x= 1.2;
console.log("ary " + ary[x]);
ary[x] = 32112333;
console.log("ary " + ary[x]);

//  lecture 12
let ary2 = [ "Shooting", "tennis", 'baseball'];

// error
// ary2 = [321];

//  https://www.npmjs.com/package/tsc-watch

let ary3: any[] = [ "Shooting", "tennis", 'baseball'];
ary3 = [321];
ary3 = [ ...ary3, 321444];
console.log("ary3 " + ary3);


//  lecture 13

let address1: [string, number] = [ "Superstreet", 99];
console.log("address1 " + address1);

//====================================================================

//  lecture 14
//  enum

enum Color { Grey, Green = 100, Blue, Red = 33 };

let myColor : Color = Color.Green;
console.log("myColor " + myColor);

myColor = Color.Blue;
console.log("myColor " + myColor);
myColor = Color.Red;
console.log("myColor " + myColor);


//  lecture 15
//  any
let car : any = "BMW";
console.log("car " + car);
car = { brand: "BMW", series: 3 };
console.log("car " + car);
console.log(car);

//====================================================================

conslog ("lecture 17: function types");

function say_name (): string {
	return myName;
}

function say_hello1 (): void {
	console.log ("HELLO!");
	//  BAD
	//  return myName;
}

say_hello1 ();
conslog(`HELLO ${say_name ()}`);


function multiply (value1: number, value2: number): number
{   return value1 * value2;  }

//  BAD
// conslog(multiply(2, "max"));
conslog("multiply " + multiply(2, 44));

//====================================================================

conslog ("lecture 18: functions as types");

let multiply_fn1;
multiply_fn1 = say_hello1;
multiply_fn1();
multiply_fn1 = multiply;
conslog("multiply_fn1 " + multiply_fn1(3, 33));

let multiply_fn2: (val1: number, val2: number) => number;
//  BAD
//  multiply_fn2 = say_hello1;
//  multiply_fn2();
multiply_fn2 = multiply;
conslog("multiply_fn2 " + multiply_fn2(12, 12));

//====================================================================

conslog ("lecture 19: objects and types");

let userData_01: { name: string, age: number } = {
    name: "Max",
    age: 27
};

conslog("userData_01 " + userData_01);
conslogo(userData_01);

//  BAD
// userData_01 = {
//     a: "Joe",
//     b: 21
// };

//====================================================================

conslog ("lecture 20: Complex Object");

let complex_01: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] { return this.data; }
}

conslog_an (complex_01.output(true));

//====================================================================

conslog ("lecture 21: Type Aliases");

type Complex_type = { data: number[], output: (all: boolean) => number[] };

let complex_02: Complex_type = {
    data: [1100, 3.99, 102],
    output: function (all: boolean): number[] { return this.data; }
}

conslog_an (complex_02.output(true));

//====================================================================

conslog ("lecture 22: Allowing multiple Types with Union Types");

let myRealRealAge: number | string = 27;
myRealRealAge = "27";
conslog (myRealRealAge);

//====================================================================

conslog ("lecture 23: Checking Types During Runtime");

let finalValue_01 = "A string";
if (typeof finalValue_01 == "number")  conslog ("final value 1 is a number");
let finalValue_02 = 33;
if (typeof finalValue_02 == "number")  conslog ("final value 2 is a number");

//====================================================================

conslog ("lecture 24: The Never Type");
conslog ("function never finishes");

function neverReturns (): void {
    throw new Error("An Error!");
}

//====================================================================

conslog ("lecture 25: Nullable Types");
conslog ("\"strictNullChecks\": true");

/*{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
        "strictNullChecks": true
    },
    "exclude": [
        "node_modules"
    ]
}
*/
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
//  let canThisBeAny = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;

//====================================================================

conslog ("lecture 26: Problem");

//  K:\A01_Udemy\C026_TypeScript_01\Preliminary\Section_2_L27\exercise.js

type bankAccount_type = { money: number, deposit: (value: number) => void };

let bankAccount: bankAccount_type = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value;
    }
};


let myself: { name: string, bankAccount: bankAccount_type, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

//====================================================================

//====================================================================

conslog ("lecture 34: DISALLOW Any");

//        "noImplicitAny": true,

// anything is implicitly set to type any:
let anything;
anything = 12;


//====================================================================

conslog ("lecture 36: Null return");
conslog ("\"strictNullChecks\": true,");

//function resultMaybe (isTrue: boolean) {
function resultMaybe (isTrue: boolean, x: number) {
    //  let result: number;
    let result: number = 3;
    if (isTrue)   result = 12;
    return result;
}

//====================================================================
//====================================================================
//====================================================================
//====================================================================
