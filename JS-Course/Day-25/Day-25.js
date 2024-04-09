console.log("Hi");

// For Changing Color of Heading with time interval
let headings = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  setTimeout(() => {
    headings.style.color = "red";
    setTimeout(() => {
      headings.style.color = "green";
      setTimeout(() => {
        headings.style.color = "yellow";
      }, 4000);
    }, 3000);
  }, 2000);
});

// Creating Event By addEventListener
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  alert("Somebody Clicked me");
});


// Creating Event by attaching function to button
function clickMe() {
  alert("Hey Somebody clicked Me");
  console.log("Hey Somebody clicked Me");
}
