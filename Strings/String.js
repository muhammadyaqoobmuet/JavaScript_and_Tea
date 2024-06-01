 
 // $$$ WAYS TO DEFINE STRING AND MEHTODS
 
 // In JavaScript, the textual data is stored as strings. There is no separate type for a single character.
 // Strings can be enclosed within either single quotes, double quotes or backticks:
 // Strings are immutable in JS
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
// advantage of using backticks is that they allow a string to span multiple lines:
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

// ACSESSING CHARCTER BY INDEX a
single[0]='h'
// console.log(single[0]); // output s  // this is first index and lastindex = length-1;

let str = `Hello`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

// another method to create string

let email = new String("yaqoobahmed45700@gmail.com")
console.log(email);  // this string is object with some key:value parir
/* example
0:y
1:a
...
...
...
*/
// we can see prototype of that string
console.log(email.__proto__); // output : {} we can see that on console window in browser


//      ############## STRING METHODS ##########
// https://javascript.info/string#changing-the-case 
// there are soo many methods and we dont have to memorize read above document to go through all

/**
 1.toUpperCase(); 
            return a string in UpperCase same as toLowerCase();
 2.concat(): 
            concate a string eg str1="str"; str2="lol"; str3=st1.concat(str2);
 3.charAt():
            Returns the character at a specified index in a string. eg cl(charAt(0));
 4.includes():
            Checks if a string contains another string and returns a boolean.
 5.indexOf():
            Returns the index of the first occurrence of a specified value in a string.          
 6.substr():
            Returns a portion of the string, starting from a specified index and with a specified 
 7.split():
            Splits a string into an array of substrings based on a specified separator.
 8.spice():
            Extracts a section of a string and returns it as a new string.
9.splice():
            he splice() method is used to change the contents of an array by removing
             or replacing existing elements and/or adding new elements
10.trim():
            this will remove the extra spaces  (moslty used)
 */
// split
const myString = "apple,orange,banana";
const fruitsArray = myString.split(",");
console.log(fruitsArray); // Output: ["apple", "orange", "banana"]

// splice
const originalArray = [1, 2, 3, 4, 5];
// const removedElements = originalArray.splice(1, 2); // this will give [2,3]
const removedElements = originalArray.splice(1, 2, 6, 7); // return 2,3 and replace by 6,7
console.log(originalArray);    // Output: [1, 6, 7, 4, 5]
console.log(removedElements);  // Output: [2, 3]

