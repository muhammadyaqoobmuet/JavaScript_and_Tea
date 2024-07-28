/**
 ACCSES MODIFIERS
 PUBLIC: By default, properties and methods in JavaScript
  classes are public, meaning they can be accessed from outside the class.

PRIVATE : WE USE # infront of them an acsses with #
PROTECTED : _ use this

 */



class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
//   const person1 = new Person('Alice', 30);
//   person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
   

  // basic stuff


  // inheritance
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Call the parent class constructor
      this.grade = grade;
    }
  
    // Method overriding
    greet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`);
    }

    // method overloading
    greet(z){
        console.log(`${z} my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}. `);
    }
  }
  
  const student1 = new Student('Bob', 20, 'Sophomore');
  // student1.greet(); // Output: Hello, my name is Bob, I am 20 years old, and I am in grade Sophomore.
  // student1.greet('special method overload');



  // polymorphisim

  class Shape {

    constructor(){
       console.log("this will always called when child objec is created"); 
    }
    draw() {
      console.log('Drawing a generic shape...');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    draw() {
      console.log(`Drawing a circle with radius ${this.radius}`);
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    draw() {
      console.log(`Drawing a square with side length ${this.side}`);
    }
  }
  // polymorphysim
// new Square(2).draw();


// Understanding of Object Literal -> basic unit we know mostly about object

const user = {
  fname : "jack",
  isSigned : false,
  score : "5000",
  // incScore : ()=>{
  //   //  score = `${(parseInt(this.score))*10}` In JavaScript, within an arrow function, this is not bound to the object, but rather to the scope in which the function was defined.

  // }

  incScore: function() {  // Change to a regular function
    this.score = `${(parseInt(this.score)) * 10}`;
 }
}

// console.log(user);
// user.incScore();
// console.log(user);

//  suppose we have a object and a function that sets object value eg

function modifyUser(fname , isSigned , score){
  this.fname = fname;
  this.isSigned = isSigned;
  this.score = score;

  return this;  //Object by default it will return this
}

const u1 = modifyUser("jack Halepoto",true,"100");
console.log(u1);  // we got our values


const u2 = modifyUser(" Halepoto",true,"1300");

console.log(u1);  // u2 will override u1 so these both refer to same
// so we allocat both new 
