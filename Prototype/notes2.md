
# Basic Concepts

## Functions and Objects:
- In JavaScript, functions are also objects.
- Objects have a hidden property called `__proto__` which points to their prototype.

## Prototype:
- The `prototype` property is only present on functions.
- It is used to share methods and properties between instances created by a function.

## `__proto__`
- Every object has a `__proto__` property.
- `__proto__` points to the prototype object from which the object inherits properties and methods.

## `prototype`
- The `prototype` property is used in constructor functions to set properties or methods that should be shared by all instances of that constructor.

# Example

## Create a Constructor Function:
A constructor function is a regular function that is used to create objects.
```javascript
function Person(name) {
  this.name = name;
}
```

## Add a Method to the Prototype:
Add a method to `Person.prototype`. This method will be shared by all instances of `Person`.
```javascript
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};
```

## Create an Instance:
Use the `new` keyword to create an instance of `Person`.
```javascript
let alice = new Person("Alice");
```

## Access the Method:
Call the `greet` method on the `alice` instance.
```javascript
alice.greet(); // Output: Hello, my name is Alice
```

# Prototype Chain

## Instance (`alice`):
- `alice` is an object created from `Person`.
- `alice` has a hidden `__proto__` property.
```javascript
console.log(alice.__proto__ === Person.prototype); // Output: true
```

## `Person.prototype`:
- `Person.prototype` is an object that has the `greet` method.
- It is shared by all instances created by `Person`.

## Prototype Inheritance:
- When `alice.greet()` is called, JavaScript looks for `greet` on `alice`.
- If it doesn't find `greet` on `alice`, it looks up the prototype chain.
- It finds `greet` on `Person.prototype`.

# Simplified Visual Representation

- **Person Constructor**:
  - `Person.prototype` contains `greet`.

- **Instance `alice`**:
  - `alice.__proto__` points to `Person.prototype`.

```plaintext
alice
  |
  |.__proto__
  v
Person.prototype
  |
  |.greet
  v
Object.prototype (end of the chain)
```

# Important Points

## `prototype`:
- Only functions have this property.
- Used to add methods/properties to instances created by that function.

## `__proto__`:
- Present in all objects.
- Points to the prototype of the constructor function.
- Forms a chain for property/method lookup.

# Complete Example
Here's the complete code example:
```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

// Adding method to the prototype
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

// Creating an instance
let alice = new Person("Alice");

// Calling the method
alice.greet(); // Output: Hello, my name is Alice

// Checking the prototype chain
console.log(alice.__proto__ === Person.prototype); // Output: true
console.log(Person.prototype.__proto__ === Object.prototype); // Output: true
console.log(Object.prototype.__proto__); // Output: null
```

This should help clarify how `prototype` and `__proto__` work in JavaScript.
