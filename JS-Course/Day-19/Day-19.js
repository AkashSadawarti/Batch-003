let statement = "Hey everyone join us with Javascript Workshop";
console.log(statement);
// \n changes the line
let statement2 = "Hey everyone \njoin us with Javascript Workshop";
console.log(statement2);
// \t - 8 spaces
let statement3 = "SrNo. \t FirstName \t LastName";
console.log(statement3);
let substatement3 = "1 \t John \t Doe";
console.log(substatement3);

// include double and single quote and slash
let statement4 = "Hey \"everyone\" join us with 'Javascript' Workshop\\academy";
console.log(statement4);

//? String Manipulation

let myString = "Javascript";

console.log(`Length of String : ${myString.length}`);
console.log(`String of Capital : ${myString.toUpperCase()}`);
console.log(`String of lowercase : ${myString.toLowerCase()}`);

// Use of substr and subString

console.log(`substr of String : ${myString.substr(3, 6)}`);
console.log(`subString of String : ${myString.substring(0, 5)}`);

//  Use of split
console.log(`Split of String : ${myString.split("")}`);

let myNewString = "HELLO WORLD";
// Trim method removes spave from front and last
console.log(myNewString.trim);
console.log(myNewString.charAt(1));

// Finding last index
let lastIndexOfMyNewString = myNewString.length - 1;
console.log(myNewString.charAt(lastIndexOfMyNewString));

console.log(myNewString.startsWith("HELLO")); //true
console.log(myNewString.endsWith("WORLD")); // true

// Math Methods
let pi = Math.PI; //3.141592653589793
console.log(pi);
//  Example Area of Circle
let radius = 5;
let area = 4 * pi * radius;
console.log(`Area of Circle : ${area}`);

let gravity = 9.8;
console.log(Math.round(gravity)); // 10
console.log(Math.floor(gravity)); // 9
console.log(Math.ceil(gravity)); // 9

let values = [1, 3, 5, 7, 0];
// console.log(Math.max(values));
// console.log(Math.min(values));

// Random
console.log(Math.random()); //0.01 to 0.9
console.log(Math.random() * 10); // 0.1 to 0.9
console.log(Math.floor(Math.random() * 10)); // 0 to 9

// Square root
console.log(Math.sqrt(36)); // 6
console.log(Math.pow(5, 2)); // 25

// Conversion of number to string and vice versa

let sampleString = "10";
let sampleNumber = +sampleString;
console.log(typeof sampleNumber);
let sampleNumber2 = Number(sampleString);
let sampleNumber3 = parseInt(sampleString);
console.log(typeof sampleNumber3);

// number to string
 let sampleNum = 58;
 console.log(typeof(sampleNum));
 let convertedSampleNumber = toString(sampleNum);
 console.log(typeof(convertedSampleNumber));
