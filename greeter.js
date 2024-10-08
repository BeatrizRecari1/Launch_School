// Solution to exercise 1 from the Input/Output chapter

let readlineSync = require('readline-sync');
let name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}!`);

// Solution to exercise 2 from the Input/Output chapter

let readlineSync = require('readline-sync');
let firstName = readlineSync.question('What is your first name? ');
let lastName = readlineSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

// Solution to exercise 2 from Functions chapter

function getName(prompt) {
  let rlSync = require("readline-sync");
  let name = rlSync.question(prompt);
  return name;
}



let firstName = getName("What is your first name? ");
let lastName = getName("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}`);
