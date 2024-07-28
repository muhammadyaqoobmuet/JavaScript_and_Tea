## WHAT IS PROTOTYPE ##
A prototype in JavaScript is an object from which other objects inherit properties and methods. Every JavaScript object has a prototype, and when you create an object, it inherits properties and methods from its prototype

## PROTOTYPE CHAIN

JavaScript uses a prototype chain to implement inheritance. When you try to access a property or method on an object, JavaScript first looks for that property or method on the object itself. If it doesn't find it there, it then looks at the object's prototype, and so on, up the prototype chain, until it either finds the property/method or reaches the end of the chain (typically Object.prototype).

## HOW TO SEE PROTOTYPE
he property [[Prototype]] is internal and hidden, but there are many ways to set it.
One of them is to use the special name __proto__, like this:

 ## __proto__ ## 
Every object has a __proto__ property.
__proto__ points to the prototype object from which the object inherits properties and methods.

## prototype ##   (for me only : ya us funtion ka this hai remeber golden words)
The prototype property is used in constructor functions to set properties or methods that should be shared by all instances of that constructor.




## ASIGN - PROTOTYPE 
~
  let animal = { 
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true  

and future animal to the Object 
~

There are only two limitations:

The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
The value of __proto__ can be either an object or null. Other types are ignored.


##  Functions and Their Prototypes ## 
Function Prototype:
Functions in JavaScript are special objects.
Every function is an instance of Function, so their internal [[Prototype]] (accessed via __proto__) points to Function.prototype.

## Object Prototype: ## 
Object.prototype is the top of the prototype chain for all objects.
If you trace the prototype chain of any object all the way up, it eventually ends at Object.prototype.

console.log(Function.prototype.__proto__ === Object.prototype); // Output: true


When you ask why sqr.__proto__ is not Object.prototype directly, it's because:


## Visual Representation of the Prototype Chain ##

1.sqr (Function Instance):
    sqr.__proto__ points to Function.prototype. bcz every funtion is instance of FUntion object

2. Function.prototype (Object):
    Function.prototype.__proto__ points to Object.prototype.

3.Object.prototype:
    The end of the chain, Object.prototype.__proto__ is null.


console.log(sqr.__proto__); // Function.prototype
console.log(Function.prototype.__proto__); // Object.prototype
console.log(Object.prototype.__proto__); // null

