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

/* FLOW CONTROL EXERCISES 

  1. What values do the following expressions evaluate to?

  false || (true && false);   ==> false
  true || (1 + 2);            ==> true
(1 + 2) || true               ==> 3
true && (1 + 2);              ==> 3
false && (1 + 2);             ==> false
(1 + 2) && true;              ==> true
(32 * 4) >= 129;              ==> false
false !== !true;              ==> false             
true === 4;                   ==> false
false === (847 === '847');    ==> true
false === (847 == '847');     ==> false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  ==> true


2. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

    function evenOrOdd (number) {
    
    if (number % 2 === 0) {
    console.log(even)}
    else {
    console.log(odd)}
  }

3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
 
  function evenOrOdd (number) {
    if (!Number.isInteger(number)) {
    console.log('Error: argument is not an integer')}
    return}

    if (number % 2 === 0) {
      console.log('even')
    } else {
      console.log('odd')
    }
  }

4. What does the following code log to the console, and why?

  function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

  --> It logs 'Product2' 'Product3' and 'Product not found!' to the console since the switch statement lacks breaks, it falls through from case '113' to '142' and then to the default case.


  5. Refactor this statement to use an if statement instead.

        return foo() ? 'bar' : qux();  ==> if (foo) {
                                            return 'bar'
                                            } else {
                                            return qux()
                                          }

  
6. What does this code output to the console?

  function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

  --> It logs 'Not Empty' to the console. The expression [] evaluates to true in an if statement since it's a truthy value.


7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

  function toUpperCase(string) {
    if(string.length > 10) {
    return string.toUpperCase()}
    else {
    return string}}


8. Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

  function numberRange(number) {
    if (number >= 0 && number <= 50) {
      console.log(`${number} is between 0 and 50`)
    } else if (number >= 51 && number <= 100) {
      console.log(`${number} is between 51 and 100`)
    } else if (number > 100) {
      console.log(`${number} is greater than 100`)
    } else {
      console.log(`${number} is less than 0`)
    }
  }

  numberRange(25);
  numberRange(75);
  numberRange(125);
  numberRange(-25);

9. Without running this code, what will it print?

  console.log(false ?? null);  // 
  console.log(true ?? (1 + 2));
  console.log((1 + 2) ?? true);
  console.log(null ?? false);
  console.log(undefined ?? (1 + 2));
  console.log((1 + 2) ?? null);
  console.log(null ?? undefined);
  console.log(undefined ?? null);

  --> It will print false, true, 3, false, 3, 3, undefined, null.

10. Without running this code, what will it print?

  function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);
show(0, 0);
show(4);
show();

  --> It will print 'foo is 5, bar is 7', 'foo is 0, bar is 0', 'foo is 4, bar is 42', 'foo is 3, bar is 42'.

  */


/* LOOPS AND ITERATIONS

  1. Refer to age.js file for exercise number 1

  2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

  

    function factorialNumber (number) {
      let result = 1
      for (let counter = number; counter > 0; counter -= 1) {
        let result *= counter
        }
        return result
      }

  3. The following code causes an infinite loop (a loop that never stops iterating). Why?
  

    let counter = 0;

    while (counter = 1) {
    console.log(counter);
    counter += 1;

      if (counter > 2) {
      break;
    }
  }
    ==> The problem is on like 556 where counter is assigned to 1 in the conditional part of the while loop. Counter = 1 will always evaluate to a truthy value and line 560 will not cause the program to stop since it says it must be bigger than 2 and line 558 will always make counter = 2. Line 559 'break' never runs, then goes back to line 556 where counter gets reassigned to 1 and infinitely continues in this pattern.

  
    4. Does the following code produce an error? Why or why not? What output does this code send to the console?

      for (let i = 0; i < 5;) {
    console.log(i += 1);
  }

  ==> The code doesn't produce an error since all 3 components of the for loop are optional. In this code, we omit the "next value" component; however, this isn't a problem here since we increment the loop variable on line 2. since we have the condition of i < 5, it will only print 1, 2, 3, 4, 5.

  

  5. The following code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.

    function randomNumberBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let tries = 0;
    let result;

    do {
      result = randomNumberBetween(1, 6);
      tries += 1;
    } while (result <= 2);

    console.log('It took ' + String(tries) + ' tries to get a number greater 2');

  

  6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

    function factorial(number) {
      if (number === 1) {
        return 1;
      }

      return number * factorial(number - 1);
    }


/* ARRAYS

  1. In the following code, what are the final length values for array1, array2, array3, array4, and array5?

    let array1 = [1, 2, undefined, 4];  ==> 4

    let array2 = [1];                   ==> 5
    array2.length = 5;

    let array3 = [];                    ==> 0
    array3[-1] = [1];

    let array4 = [1, 2, 3, 4, 5];       ==> 3
    array4.length = 3;

    let array5 = [];                    ==> 101
    array5[100] = 3;



  2. Log all of the even values from myArray to the console.

    let myArray = [1, 3, 6, 11, 4, 2,
                  4, 9, 17, 16, 0];
    
    ==> myArray.forEach(function(value) {
          if (value % 2 === 0) {
          console.log(value);
        }
      });


  3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

    for (let i = 0; i < myArray.length; i += 1) {
      for (let j = 0; j < myArray[i].length; j += 1) {
        let value = myArray[i][j];
        if (value % 2 === 0) {
          console.log(value);
        }
      }
    }

    myArray.forEach(function(nestedArray) {
      nestedArray.forEach(function(value) {
        if (value % 2 === 0) {
          console.log(value);
        }
      });
    });

  

  4. Let's try another variation on the even-numbers theme. We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

    myArray.map(function(value) {
      if(value % 2 === 0) {
        return 'even'}
      else {
        return 'odd'}
    })
        

  5. Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

    let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
    let integers = findIntegers(things);
    console.log(integers); // => [1, 3, -4]

    ==> function findIntegers(array) {
          return array.filter(function(element) {
            return Number.isInteger(element)
          })
        }

  
  6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

    let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
    console.log(oddLengths(arr)); // => [1, 5, 3]

    ==> function oddLengths(strings) {
          let lengths = strings.map((letters) => letters.length);
          let oddLengths = lengths.filter((number) => number % 2 === 1);
          return oddLengths;
        }

        let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
        console.log(oddLengths(arr));
 
    
  7.  Use reduce to compute the sum of the squares of all of the numbers in an array:

    let array = [3, 5, 7];
    console.log(sumOfSquares(array)); // => 83

    ==> function sumOfSquares(numbers) {
          return numbers.reduce((accumulator, number) => {
            return accumulator + number * number;
          }, 0);
        }

  
  8. Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

    function oddLengths(strings) {
      return strings.reduce((filteredNumbersArray, letters) => {
        let length = letters.length;
        if (length % 2 === 1) {
          filteredNumbersArray.push(length);
        }

        return filteredNumbersArray;
      }, []);
    }

    let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
    console.log(oddLengths(arr));


  9. Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

    let numbers1 = [1, 3, 5, 7, 9, 11];
    let numbers2 = [];
    let numbers3 = [2, 4, 6, 8];

    ==>> numbers1.includes(3); // true
         numbers2.includes(3); // false
         numbers3.includes(3); // false
    
  
  10. Write some code to replace the value 6 in the following array with 606

      let arr = [
        ["hello", "world"],
        ["example", "mem", null, 6, 88],
        [4, 8, 12]
      ];

    ==> arr[1][3] = 606

    

/* OBJECTS

  1. Given the following code, how can you access the name of the person?

      let person = {
         name:       'Bob',
        occupation: 'web developer',
         hobbies:    'painting',
      };

      ==> person.name // person['name']

  

  2. Which of the following values are valid keys for an object?

    1
    '1'
    undefined
    'hello world'
    true
    'true'

    ==> All of them, however, JS will coerce all the non string values to strings, making 1 and '1' as well as true and 'true' represent the same key.



  3. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement:

    let myArray = {
    };

    for (let i = 0; i < myArray.length; i += 1) {
      console.log(myArray[i]);
    }

    ==> let myArray = {
          0: 'a',
          1: 'b',
          2: 'c',
          length: 3,
        };

        for (let i = 0; i < myArray.length; i += 1) {
        console.log(myArray[i]);
        }



  4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

    let obj = {
      b: 2,
      a: 1,
      c: 3,
    };

    ==> let objKeys = Object.keys(obj);
        let upperKeys = objKeys.map((key) => key.toUpperCase());
        console.log(upperKeys); // => [ 'B', 'A', 'C' ]
        console.log(obj); // => { b: 2, a: 1, c: 3 }


  5. Create a new object named myObj that uses myProtoObj as its prototype.

    let myProtoObj = {
      foo: 1,
      bar: 2,
    };

    ==> let myObj = Object.create(myProtoObj)



  6. Which of the following values are primitive values? Which are objects? Which are neither?

    "foo"                                 // primitive
    3.1415                                // primitive
    [ 'a', 'b', 'c' ]                     // object
    false                                 // primitive
    foo                                   // identifier ==> neither
    function bar() { return "bar"; }      // object (functions are objects)
    undefined                             // primitive  
    { a: 1, b: 2 }                        // object



  7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

    myObj.qux = 3


    Are these to codes snippets logging the same?

    let objKeys = Object.keys(myObj);
    objKeys.forEach(function(key) {
      console.log(key);
    });

    for (let key in myObj) {
      console.log(key);
    }

    ==> No, the second code snippet logs in the myObj keys (qux) as well as the prototype object's keys.



  8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

    The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.


    function copyObj(sourceObject, keys) {
      let destinationObject = {};

      if (keys) {
        keys.forEach(function(key) {
        destinationObject[key] = sourceObject[key];
      });

      return destinationObject;
        } else {
        return Object.assign(destinationObject, sourceObject);
      }
    }



  9. What does this code log to the console.

    let foo = {
      a: 'hello',
      b: 'world',
    };

    let qux = 'hello';

    function bar(argument1, argument2) {
      argument1.a = 'hi';
      argument2 = 'hi';
    }

    bar(foo, qux);

    console.log(foo.a);
    console.log(qux);

    ==> 'hi' 'hello'



  10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

    [1, 2, ["a", ["b", false]], null, {}]

    ==> There are 6 primitive values and 4 objects
    ==> The outermost set of brackets defines an array (an object) that contains 5 elements. The elements with values 1, 2, and null are all primitive values, while ["a", ["b", false]] is a nested array, and {} is nested object. The nested array has 2 elements, one of which is a primitive value ("a"), while the other is yet another nested array. Finally, this innermost array contains two elements, "b" and false, both of which are primitive values.



  11. Write some code to replace the value 6 in the following object with 606:

    let obj = {
      foo: { a: "hello", b: "world" },
      bar: ["example", "mem", null, { xyz: 6 }, 88],
      qux: [4, 8, 12]
    };

    ==> obj.bar[3].xyz = 606



  12. Consider the following code: As written, this code will raise an error on line 6. Without creating a new function or changing lines 5 or 6, update this code to work as intended.

    function foo(bar) {
      console.log(bar, bar, bar);
    }

    foo("hello"); // should print "hello hello hello"
    bar("hi");    // should print "hi hi hi"

  ==> function foo(bar) {
        console.log(bar, bar, bar);
      }

      let bar = foo;

      foo("hello"); // prints "hello hello hello"
      bar("hi");    // prints "hi hi hi



  13. Consider the following code: As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

    function foo(bar) {
      console.log(bar());
    }

    foo();    // Should print 'Welcome'
    foo();    // Should print 3.1415
    foo();    // Should print [1, 2, 3]
  
  
  ==> function foo(bar) {
          console.log(bar());
        }

        foo(function() { return "Welcome" });
        foo(function() { return 3.1415 });
        foo(function() { return [1, 2, 3] });



  14. Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

  function hello(greeting, name) {
    return greeting + ' ' + name;
  }

  function xyzzy() {
    return { a: 1, b: 2, c: [3, 4, 5], d: {} };
  }

  const howdy = hello('Hi', 'Grace');
  let foo = xyzzy();

  ==> Variables: hello, xyzzy, greeting, name, howdy, and foo. Remember that function names and parameters are variables. In addition, constants created with const are variables that can't be reassigned. Property names in an object are not variables.
      Property Names: a, b, c, d. It's also worth noting that array indexes are property names, so 0, 1, and 2 are property names for the [3, 4, 5] array
      Objects: The functions hello and xyzzy are both objects.



  15. Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

    function bar(arg1, arg2) {
      let foo = 'Hello';
      const qux = {
        abc: [1, 2, 3, [4, 5, 6]],
        def: null,
        ghi: NaN,
        jkl: foo,
        mno: arg1,
        pqr: arg2,
      };

      return qux;
    }

let result = bar('Victor', 'Antonina');

==> Variables: bar, arg1, arg2, foo, qux, and result.
    Property Names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, and 3
    Primitive values: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 'Victor', and 'Antonina' are the most apparent primitive values. Since property names are strings in most cases, and strings are primitive values, we should also include 'abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', and '3'.
    Objects: The bar function, the array [1, 2, 3, [4, 5, 6]], the array [4, 5, 6], and the object assigned to qux on line 3 are all objects





/* MORE STUFF

  1. What does this code log to the console? Why?

    let array1 = [1, 2, 3];
    let array2 = array1;
    array1[1] = 4;
    console.log(array2);

    ==> It logs [1, 4, 3] 
    ==> array1 and array2 reference the same array: if we change an element using array1, it also changes that element in array2. 



  2. What do the following error message and stack trace tell you?

    $ node exercise2.js
    /Users/wolfy/tmp/exercise2.js:4
    console.log(greeting);
              ^

    ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

    ==> An error occurred in the exercise2.js program on line 4 of the program; a ^ points to where JavaScript thinks the error is in the code: it's pointing to the argument list for console.log.

        More specifically, line 6 in the output tells you that a ReferenceError exception occurred and that the name greeting isn't defined. Line 7 repeats some earlier information: JavaScript detected the error at column 15 of line 4 of the program, but it also tells you that the code is in the hello function. Line 8 tells you that hello was called from line 13 of the program in an anonymous function, namely the global-level of the program.


  3. Write some code to output the square root of 37.

    ==> console.log(Math.sqrt(37))


  4. Given a list of numbers, write some code to find and display the largest numeric value in the list.

    List	              Max
    1, 6, 3, 2	        6
    -1, -6, -3, -2	    -1
    2, 2	              2

    ==> console.log(Math.max(1, 6, 3, 2));      // => 6
        console.log(Math.max(-1, -6, -3, -2));  // => -1
        console.log(Math.max(2, 2));            // => 2


  5. What does the following function do?

    function doSomething(string) {
      return string.split(' ').reverse().map((value) => value.length);
    }

    ==> This code converts a string into an array of words, reverses that array, and then returns a new array that contains the lengths of the words. 


  6. Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.


    ==> function allMatches(words, pattern) {
          let matches = [];
          for (let index = 0; index < words.length; index += 1) {
            if (pattern.test(words[index])) {
              matches.push(words[index]);
            }
          }

          return matches;
        }


  7. What is exception handling and what problem does it solve?

    ==> Exception handling is a process that deals with errors in a manageable and predictable manner. It uses the try/catch statement to catch exceptions that the code in the try block raises, and lets the programmer deal with the problem in a way that makes sense



  8. Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

  ==> function isNotANumber(value) {
        return value !== value;
      }


  9. Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. While it's mathematically nonsensical to distinguish between 0 and -0, they are distinct values in JavaScript. We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.

  ==> function isNegativeZero(value) {
        return 1 / value === -Infinity;
      }


  10. Consider this code:

      > let x = "5"
      > x = x + 1
      = "51"

      Now, consider this code:

      > let y = "5"
      > y++ 

      What gets returned by y++ and why?

      ==> 5 as a numeric value. If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets coerced to the number 5. After coercion, it then increments the value to 6. However, the return value is 5 since the post-increment operator (y++) returns the original value of y, not the incremented value.

      
