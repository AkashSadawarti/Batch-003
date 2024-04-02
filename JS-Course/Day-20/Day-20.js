// Topic : Array

let sampleArray = [];
console.log(typeof(sampleArray));

let arr_8 = Array(8);
console.log(arr_8);
console.log(arr_8.fill("Web"));

let num_Arr = [1,5,6,7,9,10];
// length
console.log(num_Arr.length);
// Last Element
console.log(num_Arr[num_Arr.length - 1]);
// position
console.log(num_Arr[3]);
// replace 
// console.log(num_Arr[4] = 15);
// console.log(num_Arr);

// concat Array

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let resultArr = arr1.concat(arr2)
console.log(resultArr);

// Finding element in array

console.log(num_Arr.indexOf(8));
console.log(num_Arr.indexOf(1));

// Slice and Splice

console.log(num_Arr.slice(1,4));
console.log(num_Arr.splice(2,3));

// remove and add element 
// Push, pop, shift , unshift

let fruits = ["banana",  "Mango", "pineapple" ]

// Push and Pop
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

// Shift and Unshift
fruits.unshift("Stawberry");
console.log(fruits);
fruits.shift();
console.log(fruits);

// Example of using Methods
let str = "Javascript";   // o/p = > tpircsavaj
console.log(str.split("").reverse().join(""));


// Topics Operator
// 1) Arithmatic OPerator = > +, - , * , / , % ,**

let num1 = 10;
let num2 = 2;
console.log(`Addition : ${num1 + num2}`);
console.log(`Substraction : ${num1 - num2}`);
console.log(`Mult :  ${num1 * num2}`);
console.log(`Division : ${num1 / num2}`);
console.log(`Remainder : ${num1 % num2}`); //Remainder : 0
console.log(`Square : ${num1 ** num2}`); // pow() : 10^2 => 100 

// 2) Assignment Operator => = , += ,-=, /= , %= , *=

let num3 = "10"
let num4 = 10;


console.log( num4 += 5); // add 5 directly in num4 : 15

// 3) Comparison Operator == , === , != , < , > , >=,  <=

let num6 = 10;
let num5 = 0;
console.log(num3 == num4); // Only checks Value
console.log(num3 === num4); //checks datatype
console.log(num5 != num6);  //true


// Logical Operators && => And, | => OR , ! => not

console.log(num5 && num6 > 20);