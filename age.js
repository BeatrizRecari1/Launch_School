// Solution to exercise 3 of Input/Output chapter

let rlSync = require("readline-sync");

let age = Number(rlSync.question("How old are you?\n"));

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

// Solution to exercise 1 of Loops and Iterating chapter

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let i = 0; index <= 40; index += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`)
}
