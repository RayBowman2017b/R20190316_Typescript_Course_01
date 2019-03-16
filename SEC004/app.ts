
function conslog (P_mssg: string): void
{   console.log (P_mssg); }
function conslogo (P_mssg: object): void
{   console.log (P_mssg); }
function conslog_an (P_mssg: number[]): void
{   console.log (P_mssg); }

//====================================================================

conslog ("L 43 & L 44 sec 4 ");

const multiply_numbers = (num1: number, num2: number) : number => num1 * num2;
conslog ("result 1 " + multiply_numbers (11, 7));
const multiply_numbers_2 = (nums: number[]) => nums[0] * nums[1];
conslog ("result 2 " + multiply_numbers_2 ([10, 4]));

//  BAD
//const multiply_numbers_3 = nums: number[] : number => nums[0] * nums[1];
//conslog ("result 2 " + multiply_numbers_3 ([10, 4]));

//====================================================================

conslog ("L 45 sec 4 ");

const countdown = (P_val: number = 7) : void => {
    //while (P_val > 0) conslog("down " + P_val--);
    while (P_val > 0)  P_val--;
    conslog ("done " + P_val);
}
countdown (3);
countdown ();

//====================================================================

conslog ("L 47 sec 4 ");

const make_array = (name: string, ...P_ary: number[]) : number[] => {
    conslog (name);
    return P_ary;
}
let GV_ary = make_array ("jane", 3,6,9);

conslog_an (GV_ary);
conslog ("Array.isArray 1 " + Array.isArray(GV_ary));
GV_ary = make_array ("joe", 11,22,33);
conslog_an (GV_ary);
conslog ("Array.isArray 2 " + Array.isArray(GV_ary));

//====================================================================

/* 
 Rest Parameters & Tuples
 Section 4, Lecture 48
 Since TypeScript 3, you can also use tuples as types for rest expressions.

 For example, these two function signatures are equal:

*/

function printInfo_1(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfo_2(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
//====================================================================

conslog ("L 49 sec 4 : Destructuring Arrays");

const myHobbies = [ "Cooking", "Sports"];
const [ hobby1, hobby2 ] = myHobbies;
conslog ("Hobbies 1 " + hobby1 + " 2 " + hobby2);

//====================================================================

conslog ("L 50 sec 4 : Destructuring Objects");

const userData = { userName: "fred", age: 23 }
//  aliases
const { userName: L_userName, age: L_age } = userData;
conslog ("userName " + L_userName + " age " + L_age);

//====================================================================

conslog ("L 51 sec 4 : Template Literals");

const L51_name = "don";
const L51_greeting = `  This is a heading!
I'm ${L51_name}
`;

conslog(L51_greeting);

//====================================================================

/*
Module Exercise: Problem
Section 4, Lecture 53
Re-write the below Code using the ES6 Features you learned throughout this Module.

// Exercise 1 - Maybe use an Arrow Function?
var double = function(value) {
    return value * 2;
};
console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
 
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
*/

conslog ("L 54 sec 4 : Solutions");

// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number): number => value * 2;
const triple = (value: number): number => value * 3;
console.log("double " + double(10));
console.log("triple " + triple(10));

// Exercise 2 - If only we could provide some default values...
const greet = (name: string = "(unknown)"): void => {
    //  not needed
    //  if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers = [-3, 33, 38, 5];
console.log("min 1 " + Math.min.apply(Math, numbers));
console.log("min 2 " + Math.min (...numbers));
 
// Exercise 4 - I have to think about Exercise 3 ...
let newArray = [55, 20];
//Array.prototype.push.apply(newArray, numbers);
newArray.push (...numbers);
console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
//  var result1 = testResults[0];
//  var result2 = testResults[1];
//  var result3 = testResults[2];
const [ result1, result2, result3 ] = testResults;
console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
const scientist = {firstName: "Tim", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const { firstName, experience } = scientist;
console.log(firstName, experience);

//====================================================================
//====================================================================

conslog ("===================================");
conslog ("sec 4 ");

//====================================================================
//====================================================================
//====================================================================
//====================================================================
