"use strict"; //treat all jscode to newer version by means of that V8 will treat it ->newer version
//CHAPTER02:Data types
// A value in JavaScript is always of a certain type. For example, a string or a number.
// There are eight basic data types in JavaScript

// adding files to html file ? use <script src"your_file_location"></script>
 
// The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol
 // null vs undifiend -> null means that refrence of object is not pointing something to heap 
 // undifiend means it has something but whose value is undifiend this will be more clear in future

// something called NaN that means not a number if we add undefined to a number that result NaN
// console.log(NaN+9);


// A BigInt value is created by appending n to the end of an integer:

// // the "n" at the end means it's a BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

//  for more -> https://javascript.info/types
// Primitives
console.log("String:", typeof "Hello, World!");
console.log("Number:", typeof 42);
console.log("Boolean:", typeof true);

// Complex Types or NoN primitives
console.log("Array:", typeof [1, 2, 3]);
console.log("Object:", typeof { key: "value" });
console.log("Function:", typeof function() {});

// Special Types
console.log("Undefined:", typeof undefined);
console.log("Null:", typeof null);
