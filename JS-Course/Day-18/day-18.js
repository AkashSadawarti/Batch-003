console.log("Welcome");

// KeyWords let , const, var

// var name = "Akash";

let name = "Ash";
let name2 = name;
console.log(name2); //Ash
name2 = "john";
console.log(name2); // John

const num1 = 5.666;
console.log(num1);
const num2 = 6;
console.log(num2);

// Concatenation
let fname = "Alex";
let lname = "George";
let age = 28;
let city = "Newyork";
let gender = "Male";
let nation = "USA";

console.log(fname + " " + lname + " " + age);
// Concat with +
// console.log("My name is" + " " + fname + " " + lname + " " + "My Age is" + " " + age + "." + "I live in" + " " + city  + " " + "My gender is" + " " + gender)

// Store concat result in variable
let myInfo =
  "My name is" +
  " " +
  fname +
  " " +
  lname +
  " " +
  "My Age is" +
  " " +
  age +
  "." +
  "I live in" +
  " " +
  city +
  " " +
  "My gender is" +
  " " +
  gender;

console.log(myInfo);

// Template Litrerals = ``

let personInfo = `My name is ${fname} ${lname}, My age is of ${age} and I live in ${city},${nation} and I am a ${gender}.`;

console.log(personInfo);

// Primitive Datatypes

let firstName = "Akash"; //String
console.log("Datatype is :" + typeof firstName);

let rank = 256; // Number
console.log("Datatype is :" + typeof rank);

let isRaining = false; //Boolean
console.log("Datatype is :" + typeof isRaining);

let novariable = null; //Null => Object
console.log("Datatype is :" + typeof novariable);

let noValueVariable; // Undefined
console.log("Datatype is :" + typeof noValueVariable);

// Non Primitive datatypes
// Array
let myArray = [1, 2, 3, 45];
console.log(`My first Array ${myArray}`);
let fruitsArray = ["Mango", "Banana", "Orange", "Litchi"];
console.log(`My first Array ${fruitsArray}`);

// Object  : Key-Value Pair

let person = {
  name: "BootCoding",
  company: "IT",
  Experience: "5yrs",
  Employees: 50,
};

console.log(person);
console.log("Type of person :" + typeof(person) );
