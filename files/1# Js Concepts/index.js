
// Here are some of the basic js fundamentals

// Comments
/*
    To create comments there are two ways
    1. Single line comment
    2. Multi line comment

    Single line comment is created by using two forward slashes: //
    Multi line comment is created by using forward slash and asterisk: /*
    and closing it with asterisk and forward slash: */

//
/*
*/

// Variables
// Variables are used to store data
// There are three ways to create variables
// 1. var
// 2. let
// 3. const

// var
// var's scope is global (explained later)
// var can be redeclared and reassigned

var a = 10;
console.log(a); // 10

a = 20;
console.log(a); // 20

var b = a;
console.log(b); // 20

var a = {
    name: "John",
    age: 20
}
console.log(a); // { name: 'John', age: 20 }

// let 
// let's scope is block (explained later)
// let can be redeclared but not reassigned

let c = 10;
console.log(c); // 10

c = 20;
console.log(c); // 20

let d = c;
console.log(d); // 20

c = {
    name: "John",
    age: 20
}
console.log(c); // { name: 'John', age: 20 }

// const
// const's scope is block (explained later)
// const can neither be redeclared nor reassigned

const e = 10;
console.log(e); // 10

e = 20;
// TypeError: Assignment to constant variable.

const f = e;
console.log(f); // 10

e = {
    name: "John",
    age: 20
}
// TypeError: Assignment to constant variable.

// Variable naming
/**
 * 1. Variable names can only contain letters, numbers, underscores and dollar signs.
 * 2. Variable names must begin with a letter, underscore or dollar sign.
 * 3. Variable names are case sensitive
 * 4. Variable names cannot be reserved keywords (let, constructor, if, class, etc.)
 */

// Data types
// You can imagine every bit of data in js as a object with properties and methods

// 1. Primitive data types
// Primitive data types are immutable
// Primitive data types are stored in the stack

// 1.1. Number
// Number is a numeric data type
// Number can be integer or floating point

let num = 10;
console.log(num); // 10

num = 10.5;
console.log(num); // 10.5

// 1.2. String
// String is a sequence of characters
// String can be enclosed in single quotes, double quotes or backticks

var str = "Hello World";
console.log(str); // Hello World

var str = 'Hello World';
console.log(str); // Hello World

var str = `Hello World`;
console.log(str); // Hello World

// When using single quotes or double quotes, you can use the other one inside the string

var str = "Hello 'World'";
console.log(str); // Hello 'World'

var str = 'Hello "World"';
console.log(str); // Hello "World"

// When using backticks, you can use both single quotes and double quotes inside the string and also you can use expressions inside the string

var str = `Hello 'World'`;
console.log(str); // Hello 'World'

var str = `Hello "World"`;
console.log(str); // Hello "World"

var world = "World";
var str = `Hello ${world}`;
console.log(str); // Hello Hello "World"

// 1.3. Boolean
// Boolean is a logical data type
// Boolean can be true or false

var bool = true;
console.log(bool); // true

var bool = false;
console.log(bool); // false

// 1.4. Undefined
// Undefined is a data type which represents the absence of value
// Undefined is the default value of a variable

var undef;
console.log(undef); // undefined

// 1.5. Null
// Null is a data type which represents the absence of value

var nul = null;
console.log(nul); // null

// 2. Non-primitive data types
// Non-primitive data types are mutable
// Non-primitive data types are stored in the heap

// 2.1. Object
// Object is a collection of properties 
// Object can hold any data type
// Object can be created using object literal or using new keyword (related to classes)

var obj = {
    name: "John",
    age: 20
};
console.log(obj); // { name: 'John', age: 20 }

var obj = new Object();
obj.name = "John";
obj.age = 20;
console.log(obj); // { name: 'John', age: 20 }

// 2.2. Array
// Array is a collection of elements
// Array can hold any data type
// Array can be created using array literal or using new keyword

var arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]

var arr = new Array(1, 2, 3);
console.log(arr); // [ 1, 2, 3 ]

// 2.3. Function
// Function is a block of code which can be executed
// Function can be created using function declaration, function expression or arrow function

// Function declaration
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3

// Function expression
var add = function (a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3

// Arrow function
var add = (a, b) => {
    return a + b;
}
console.log(add(1, 2)); // 3

// return statement
// return statement is used to return a value from a function

// Functions can also be anonymous
// Anonymous functions are functions without a name
// Anonymous functions are used as callbacks
// Callbacks are functions which are passed as arguments to other functions

setTimeout(function () { console.log('Hello World') }, 1000);

setTimeout(() => { console.log('Hello World') }, 1000);

// 2.4. Date
// Date is a data type which represents a date and time
// Date can be created using new keyword

var date = new Date();
console.log(date); // 2020-05-18T08:51:12.000Z

// Get unix timestamp
console.log(date.getTime()); // 1589781472000

// Comparison operators
// Comparison operators are used to compare two values
// Comparison operators return a boolean value

// 1. Equal to
// ==
// Returns true if the operands are equal

console.log(1 == 1); // true
console.log(1 == 2); // false

// 2. Not equal to
// !=
// Returns true if the operands are not equal

console.log(1 != 1); // false
console.log(1 != 2); // true

// 3. Strict equal to
// ===
// Returns true if the operands are equal and of the same data type

console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false

// 4. Strict not equal to
// !==
// Returns true if the operands are not equal or not of the same data type

console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log(1 !== "1"); // true

// 5. Greater than
// >
// Returns true if the left operand is greater than the right operand

console.log(1 > 1); // false
console.log(1 > 2); // false

// 6. Greater than or equal to
// >=
// Returns true if the left operand is greater than or equal to the right operand

console.log(1 >= 1); // true
console.log(1 >= 2); // false

// 7. Less than
// <
// Returns true if the left operand is less than the right operand

console.log(1 < 1); // false
console.log(1 < 2); // true

// 8. Less than or equal to
// <=
// Returns true if the left operand is less than or equal to the right operand

console.log(1 <= 1); // true
console.log(1 <= 2); // true

// Logical operators
// Logical operators are used to combine two or more conditions
// Logical operators return a boolean value

// 1. Logical AND
// &&
// Returns true if both the operands are true

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 2. Logical OR
// ||
// Returns true if either of the operands is true

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 3. Logical NOT
// !
// Returns the opposite of the operand

console.log(!true); // false
console.log(!false); // true

// Conditional statements
// Conditional statements are used to execute a block of code if a condition is true

// 1. If statement
// If statement is used to execute a block of code if a condition is true

var a = 1;
if (a == 1) {
    console.log('Hello World');
} // Hello World

// 2. If else statement
// If else statement is used to execute a block of code if a condition is true and another block of code if the condition is false

var a = 1;
if (a == 1) {
    console.log('Hello World');
} else {
    console.log('Goodbye World');
} // Hello World

// 3. If else if statement
// If else if statement is used to execute a block of code if a condition is true and another block of code if the condition is false

var a = 1;
if (a == 1) {
    console.log('Hello World');
} else if (a == 2) {
    console.log('Goodbye World');
} else {
    console.log('Hello again World');
} // Hello World

// 4. Switch statement
// Switch statement is used to execute a block of code based on the value of a variable

var a = 1;
switch (a) {
    case 1:
        console.log('Hello World');
        break;
    case 2:
        console.log('Goodbye World');
        break;
    default:
        console.log('Hello again World');
} // Hello World

// Loops
// Loops are used to execute a block of code multiple times

// 1. For loop
// For loop is used to execute a block of code multiple times

for (var i = 0; i < 5; i++) {
    console.log(i);
} // 0 1 2 3 4

// 2. While loop
// While loop is used to execute a block of code multiple times

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
} // 0 1 2 3 4

// 3. Do while loop
// Do while loop is used to execute a block of code multiple times

var i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5); // 0 1 2 3 4

// 4. For each loop
// For each loop is used to execute a block of code for each element in an array

var arr = [1, 2, 3];
arr.forEach(function (element) {
    console.log(element);
}); // 1 2 3

// 5. For in loop
// For in loop is used to execute a block of code for each property in an object

var obj = { a: 1, b: 2, c: 3 };
for (var key in obj) {
    console.log(key);
} // a b c

// 6. For of loop
// For of loop is used to execute a block of code for each element in an array

var arr = [1, 2, 3];
for (var element of arr) {
    console.log(element);
} // 1 2 3

// 7. Break statement
// Break statement is used to terminate a loop

for (var i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
} // 0 1 2

// 8. Continue statement
// Continue statement is used to skip the current iteration of a loop

for (var i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
} // 0 1 2 4

// Asynchronous programming
// Asynchronous programming is used to execute a block of code after a specified amount of time
// to enter a asynchronous block of code use the keyword 'async' before the function name
// to execute a block of code after a specified amount of time use the keyword 'await' before the function name

// Basic asynchronous programming

async function asyncFunc() {
    console.log('Hello World');
}
asyncFunc(); // Hello World

// await

// awaiting a block 

async function hello() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Hello');
}
async function world() {
    console.log('World')
}

async function asyncFunc() {
    await hello();
    world();
}
asyncFunc(); // Hello World

// without await

async function asyncFunc() {
    hello();
    world();
} // World Hello

// await with a loop

async function asyncFunc() {
    for (var i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(i);
    }
} 
asyncFunc(); // 0 1 2 3 4
// 1 second delay between each number




// For more information visit https://www.w3schools.com/js/default.asp
// They explain everything in detail and way better than I do