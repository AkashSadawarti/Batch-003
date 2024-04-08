console.log("Hello");

// Use of querySelectorAll
// for Tag
let tag = document.querySelectorAll("h1");
console.log(tag);
console.log(tag.length);
console.log(tag[1].innerHTML);

for (let i = 0; i < tag.length; i++) {
  console.log(tag[i].innerHTML);
}

// for Class
let paras = document.querySelectorAll(".para");
console.log(paras);
console.log(paras.length);
console.log(paras[1].innerHTML);

// for IDs
let oneGroup = document.querySelectorAll("#one");
console.log(oneGroup);
console.log(oneGroup.length);
console.log(oneGroup[1].innerHTML);

// Adding Class and Id to element

let h2heading = document.querySelector("h2");

h2heading.className = "XYZ";
h2heading.id = "ABC";
console.log(h2heading);

// Adding Multiple Classes
h2heading.classList.add("XYZ", "rabbit", "deer");
// Removing Multiple Classes
h2heading.classList.remove("rabbit", "deer");

// Adding Content
h2heading.textContent = "Hello Web Developers";

// Styling with Js

h2heading.style.color = "red";
h2heading.style.fontSize = "30px";
h2heading.style.backgroundColor = "yellow";

// Playing with List

// Creating List dynamically by Js
let ul = document.querySelector("ul");
lists = `
<li>"Fruits keep life healthy "</li>
<li>"Vacation is for Peace"</li>
<li>"Culture creates learning Environment"</li>
<li>"Good Goverment need good Governance"</li>
`;
ul.innerHTML = lists;

// Removing List dynamically by Js
// ul.innerHTML = " ";

// Creating Element/Tags by js

// Parent
let bodyDiv = document.createElement("div");

// Child
let divText = document.createTextNode("I am newly Created DIV in Js File");

bodyDiv.appendChild(divText);
console.log(bodyDiv);

document.body.appendChild(bodyDiv);
bodyDiv.style.backgroundColor = "Black";
bodyDiv.style.color = "white";
bodyDiv.style.padding = "5px";

// Set TimeOut

function boilingTimer(){
   console.log("Water is started boiling");
   setTimeout(() => {
    console.log("Water has been Boiled");
   },5000);
}

boilingTimer()  // 5000 == 5 seconds