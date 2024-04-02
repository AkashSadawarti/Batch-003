// console.log("HI");

// Logical : AND && , OR || , !

let isRaining = true;
let needUmbrella = false;
let raincoat = true;

let goOutside = isRaining && needUmbrella;

console.log(`Outside is Raining because condition is ${goOutside}`);

// OR CONDITION
let isStudent = true;
let isTeacher = false;

let entryInSchool = isStudent || isTeacher;

console.log(`Enter in School because condition is ${entryInSchool}`);

// User INput by Prompt

// let userInput = prompt("Enter your Name");
// let userAge = prompt("Enter your Age");
// let age = parseInt(userAge);
// console.log(`My name is : ${userInput}`);
// console.log(`My age is : ${userAge}`);

// Conditionals : You check the condition in runtime

// IF condition
let num = -1;
if (num >= 0) {
  console.log("Number is positive");
}

// IF-ELSE Condition

// let userI = prompt("Enter the Age");
// let age = parseInt(userI);

// if(age > 10){
//     console.log(`Age is ${age}`);
// }
// else{
//     console.log("Sorry wrong Input");
// }

// IF ELSE NESTED CONDITION

let num2 = 0;

if (num2 > 0) {
  console.log("Number is positive");
} else if (num2 < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}

// Ternary Operator

let isWinter = false;

isWinter ? console.log("Go With Jacket") : console.log("NO need of Jacket");

// Switch Cases

let weather = "sunny";

switch (weather) {
  case "sunny":
    console.log("Weather is Sunny");
    break;
  case "rainy":
    console.log("Weather is Rainy");
    break;
  case "windy":
    console.log("Weather is Windy");
    break;
  default:
    console.log("NO Weather Found");
    break;
}

// let userInput = prompt("Enter the Day Number");
// let day = parseInt(userInput);

// switch (day) {
//   case 1:
//     console.log("Day is Monday");
//     break;
//   case 2:
//     console.log("Day is Tuesday");
//     break;
//   case 3:
//     console.log("Day is Wednesday");
//     break;
//   case 4:
//     console.log("Day is Thursday");
//     break;
//   case 5:
//     console.log("Day is Friday");
//     break;
//   case 6:
//     console.log("Day is Saturday");
//     break;
//   case 7:
//     console.log("Day is Sunday");
//     break;
//   default:
//     console.log("Day Not Found");
//     break;
// }

// Increment ++ and Decrement -- Operator

let a = 5;

// Increment Operator
a++; // a = a+1;
console.log(a);
++a; // a+1 = a
console.log(a);

// Decrement Operator
let b = 4;
b--; // b = b-1
console.log(b);
--b; //  b-1 = b
console.log(b);
