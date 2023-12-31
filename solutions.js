// PREPARATIONS

// Solution to exercise #1 in Preparations section

/* 
   1. Use node to run the foo.js file using node:

  OUTPUT: bar


   2. Copy and paste the code from foo.js into the node REPL

  OUTPUT: 
    let foo = 'bar'
    undefined

    console.log(foo)
    bar
    undefined

    foo
    'bar

  
   3. Copy and paste the code from foo.js into the Chrome console REPL

   OUTPUT:

   bar
   'bar'
*/

// 2. Identify the Constructors for each of the following methods and classify each method as either a "Static" or an "Instance" method:

/* 

  1. substring = {constructor: String, methodType: Instance Method}

  2. create = {constructor: Object, methodType: Static Method}

  3. fromCharCode = {constructor: String, methodType: Static Method}

  4. slice = {constructor: [Array, String], methodType: Instance Method}

  5. toString = {constructor: [String, Object, Array, Number], methodType: Instance Method}

  */

// 3. Which of the following names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables

/* 

    SOLUTION: [index, lazyDog, operand2]

    */

// 4. Which of the following names satisfy the style guidelines for function names?

/*

    SOLUTION: [index, lazyDog, operand2, CatName]

  */

// 5. Which of the following names satisfy the style guidelines for constants used to represent magic numbers?

/*

    SOLUTION: [BIG_NUMBER]

  */

// 6. Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?

/*

    SOLUTION: [snake_case, quick_Fox, 1stCharacter]

  */

// THE BASICS

// 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.
/*

    'Beatriz ' + 'Recari'
  
  */

// 2. Using arithmetic operators, get the individual digits of a 4-digit number like 4936:

/*

    > let number = 4936
    > let ones = number % 10
    > ones
    = 6

    > number = (number - ones) / 10
    = 493

    > let tens = number % 10
    > tens
    = 3

    > number = (number - tens) / 10
    = 49

    > let hundreds = number % 10
    > hundreds
    = 9

    > let thousands = (number - hundreds) / 10
    > thousands
    = 4

  */

// 3. Identify the data type for each of the following values:

/*

    'true': String
    false: Boolean
    1.5: Number
    2: Number
    undefined: Undefined
    {foo: 'bar'}: Object

  */

// 4. Explain why this code logs '510' instead of 15:
// console.log('5' + 10)

/*

    Anytime there is a '+' sign with a string in either side, JavaScript implicitly coerces that non string type into a string and results in a concatenation.
    Result: the number 10 gets coerced into a string '10' and later on concatenated to '5' resulting in the string '510'
  
  */

// 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead

/*

    console.log(Number('5') + 10)

  */

// 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
// The value of 5 + 10 is 15.

/*

    console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

  */

// 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:
// let foo = ['a', 'b', 'c']
// console.log(foo.length)
// console.log(foo[3])

/*

    No, since when you try to access an index value greater than the length of the array, it will return 'undefined'

  */

// 8. Create an array named names that contains a list of pet names. For instance:

/*

    let names = [asta, butterscotch, pudding, neptune, darwin]

  */

// 9. Create an object named pets that contains a list of pet names and the type of animal. For instance:

/*

    let pets = {
      asta: 'dog',
      butterscotch: 'cat',
      pudding: 'cat',
      neptune: 'fish',
      darwin: 'lizard',
    }

  */

// 10. What value does the following expression evaluate to?
// 'foo' === 'Foo'

/*

    false (case matters when comparing strings)

  */

// 11. What value does the following expression evaluate to?
// parseInt('3.1415')

/*

    It evaluates to 3. parseInt converts a string that begins with an digit into a numeric equivalent. If it encouters a non digit such as '.' like in the example, it stops converting.

  */

// 12. What value does the following expression evaluate to?
// '12' < '9'

/*

    The expression evaluates as true since the operands are strings, not numbers. When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'
    Had it been numbers, it would have evaluated to false

  */

// VARIABLES EXERCISES

/* 1. Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program

    let name = 'Victor';

    console.log(`Good Morning, ${name}.`);
    console.log(`Good Afternoon, ${name}.`);
    console.log(`Good Evening, ${name}.`);

  */

/* 2. Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old

    let age = 36;

    console.log(`You are ${age} years old.`);
    console.log(`In 10 years, you will be ${age + 10} years old.`);
    console.log(`In 20 years, you will be ${age + 20} years old.`);
    console.log(`In 30 years, you will be ${age + 30} years old`);
    console.log(`In 40 years, you will be ${age + 40} years old.`);

  */

/* 3. What happens when you run the following program? Why do we get that result?

    {
      let foo = 'bar'
    }

    console.log(foo)

    --> The program outputs an error since foo is out of scope: the let statement creates variables with block scope, which limits the visibility of the variable to the block

  */

/* 4. What happens when you run the following code? Why?

    const NAME = 'Victor';
    console.log('Good Morning, ' + NAME); // Output: Good Morning, Victor 
    console.log('Good Afternoon, ' + NAME); // Output: Good Morning, Victor 
    console.log('Good Evening, ' + NAME); // Output: Good Morning, Victor

    NAME = 'Joe'; // Type Error: constants cannot be reassigned
    console.log('Good Morning, ' + NAME); // Code won't run
    console.log('Good Afternoon, ' + NAME); // Code won't run
    console.log('Good Evening, ' + NAME); // Code won't run

    */

/* 5. What does this program log to the console? Why?

    let foo = 'bar';
    {
    let foo = 'qux';
    }

    console.log(foo);

    --> Line 1 initializes a variable named foo with the value'bar'. Line 2 starts a block, which creates a new scope for let variables. The variable on line 1 is still visible at this point, but line 3 declares a new variable named foo that shadows (hides) the variable from line 1. This second variable gets initialized to 'qux', but it goes out of scope on line 4 when the block ends. That brings foo from line 1 back into scope, so line 6 logs its value: bar.

    */

/* 6. Will this program produce an error when run? Why or why not?

    const FOO = 'bar';
    {
    const FOO = 'qux';
    }

    console.log(FOO);

    --> For the same reason as earlier, the new const FOO = 'qux' comes out of scope on line 4, so const FOO on line 1 comes back in scope and prints 'bar' on the console.

  */

// FUNCTIONS EXERCISES

/* 1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

    --> The code logs 1 to the console. foo doesn't affect the value assigned to bar on line 1 since JavaScript functions create an inner scope.

*/

/* 2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.
    
    --> Reference the greeter.js file for solution.

*/

/* 3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

    function multiply(left, right) {
      return left * right
    }

    function getNumber(prompt) {
      let rlSync = require('readline-sync')
      return Number(rlSync.question(prompt))
    }

    let first = getNumber('Enter the first number ')
    let right = getNumber('Enter the second number ')
    console.log(`${left} * ${right} = ${multiply(left, right)}`)

  */

/* 4. What does the following code log to the console?

    --> Nothing, the return statement finishes the program before the console.log() statement. It will return undefined but won't log anything.

*/

/* 5. What does the following code log to the console?

 --> It also doesn't log anything. It returns Yipeee!!!! but won't log anything.

*/

/* 6. In the code shown below, identify the following items:

    --> the function arguments: line 6 numbers 2, 3, 4
    --> the function body: everything inside the curly braces (with or without them)
    --> the function declaration: lines 1 through 4
    --> the function invocation: multiplyNumbers(2, 3, 4)
    --> the function name: multiplyNumbers
    --> the function parameters: num1, num2, num3 in line 1
    --> the function return value: The function's return value is determined by multiplying the arguments together. That value is initially stored in the local variable result in the function's body. It gets assigned to product after the function returns.
    --> the names of all variables in this program: multiplyNumbers, result, product, num1, num2, num3

*/

/* 7. Without running the following code, what do you think it will output?

    --> Hello, undefined (when provided too few arguments, those parameters without a value get assigned undefined)

*/

/* 8. Without running the following code, what do you think it will output?

    --> Only the arguments 42 and 3.1415 since those are assigned to the parameters bar and qux. Any extra arguments will be ignored.

*/

/* 9. Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

    --> Line 1: multiply, left, right: The function name and the parameter names are all variable names.
    --> Line 2: product, left, right
    --> Line 3: product
    --> Line 6: getNumber, prompt
    --> Line 7: parseFloat, question, prompt
    --> Line 10: left, getNumber
    --> Line 11: right, getNumber
    --> Line 12: console, left, right, multiply

*/

/* 10. Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.

    --> Global variables: multiply, getNumber, left, right, console, parseFloat, question
    --> Local variables: product, left, right, prompt
    
*/

/* 11. Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

    --> They are not:
        -> left and right on lines 10-12 are global variables, they are declared at the top of the program.
        -> left and right in lines 1 and 2 are local since they are parameters and they will always be binded to the local scope of its function.

*/
