// console.log("Hi");

// Break Keyword

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// Continue Keyword
console.log("Use of Continue Keyword");
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// Function Expression
console.log("Area of Circle with Function Expression");

let areaOfCircle = function (r) {
    let result = Math.PI * r * r;
    return result;
};

console.log(`Area = ${areaOfCircle(5)}`);

// Arrow Function
console.log("Persons Information with Arrow \"=>\" Expression");

let personInfo = (firstName, lastName) => {
    let result = `${firstName} ${lastName}`;
    return result;
}

console.log(`My name is ${personInfo("Peter", "Parker")}`);


// Default parameter
console.log(" Rectangle Area with Default parameter function");

function areaOfRectangle(length = 5 , breadth = 5) {
   let result = length * breadth;
   return result;
}

console.log(`Area of Rectangle is ${areaOfRectangle()}`);


// DOM : Document Object Model

// Accessing Element By Tag Name
let heading = document.getElementsByTagName("h1");
console.log(heading);
console.log(heading.length);

for (let i = 0; i <heading.length; i++) {
    console.log(heading[i].innerHTML);
}

// Accessing Element by class NAme

let allParas = document.getElementsByClassName("para");
console.log(allParas);
console.log(allParas.length);

for (let i = 0; i <allParas.length; i++) {
    console.log(allParas[i].innerHTML);
}

// Accessing Element by ID 

// It will target the first ID
let allIDs = document.getElementById("exampleId-1");


// Accessing Element by querySelector 

// Note : It targets very first element/class/id of the document

let H1 = document.querySelector("h1")
console.log(H1);

let para = document.querySelector(".para");
console.log(para);

let id = document.querySelector("#exampleId-1");
console.log(id);