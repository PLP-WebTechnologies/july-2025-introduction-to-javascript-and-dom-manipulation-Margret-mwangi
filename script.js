/********************
 * Part 1: Variables & Conditionals
 ********************/

// Variable declarations
let userName = "Margret";
let userAge = 21;

// Conditional logic
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

/********************
 * Part 2: Custom Functions
 ********************/

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Function 2: Check if number is even
function isEven(num) {
  return num % 2 === 0;
}

/********************
 * Part 3: Loops
 ********************/

// Loop 1: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Counting:", i);
}

// Loop 2: List even numbers from 1 to 10
let evenList = document.getElementById("even-list");
for (let i = 1; i <= 10; i++) {
  if (isEven(i)) {
    let li = document.createElement("li");
    li.textContent = i;
    evenList.appendChild(li);
  }
}

/********************
 * Part 4: DOM Interactions
 ********************/

// DOM Interaction 1: Change heading text
document.getElementById("main-title").textContent = "JavaScript DOM Project";

// DOM Interaction 2: Button click event
document.getElementById("greet-button").addEventListener("click", function () {
  let message = greetUser(userName);
  // DOM Interaction 3: Update paragraph content
  document.getElementById("greet-output").textContent = message;
});
