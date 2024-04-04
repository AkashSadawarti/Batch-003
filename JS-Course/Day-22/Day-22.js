console.log("Hi");

// Print 12345
// For Loop

// 1 to 5
console.log("Normal Print");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5 to 1
console.log("Reverse Print");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 5 Table
console.log(" Table Of 5");
for (let i = 1; i <= 10; i++) {
  console.log(` 5 x ${i} = ${i * 5}`);
}

// Array with for loop
console.log(" Array with loop");
let cars = ["Verna", "Wagnor", "Mercedes", "bmw"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].toUpperCase());
}

// While loop

// Syntax
// initialisation
// while(Condition){
//     logic
//    increment/decrement
// }
console.log("While loop");
let j = 1;
while (j <= 6) {
  console.log(j * 2);
  j++;
}

// Do while
// Syntax
// initialisation
// do{
//    logic
//    increment/decrement
// }while(condition)

console.log("do-while loop");
let x = 1;
do {
  console.log(x * 4);
  x++;
} while (x <= 3);

// For of Loop
console.log("For OF loop");
let arr = [1, 2, 3, 4, 5];
for (const item of arr) {
  console.log(item * 3);
}

//! Topic : Functions : Function ,  Expression , Arrow Function

// 1) Function Keyword

function addition() {
  let num1 = 5;
  let num2 = 10;
  console.log("I am a addition function");
  let result = num1 + num2;
  console.log(`Addition of number is : ${result}`);
}
addition();

console.log("I am a return Substraction function");
function Substraction() {
  let num1 = 5;
  let num2 = 10;
  let result = num2 - num1;
  return result;
}

console.log(`Substraction is ${Substraction()}`);

// Parameter function

function greet(name) {
  let result = `Hi ${name}, Good Evening!`;
  return result;
}

console.log(greet("Pallavi"));

function greet2(name, branch) {
  let result = `Hi ${name}, Good Evening! and study in ${branch}`;
  return result;
}

console.log(greet2("Pallavi", "CSE"));

let cities = ["London", "Nagpur", "NewYork"];
let updatedCities = [];

function lowerCase() {
  for (let i = 0; i < cities.length; i++) {
    updatedCities.push(cities[i].toLowerCase());
  }
  return updatedCities;
}

console.log(lowerCase());
console.log("Original Cities : ", cities);
console.log("Updated in lowercase cities :", updatedCities);
