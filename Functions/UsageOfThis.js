//breefly disscuss of this In Arror and Normal function

// $$$$$$$$$$$$$$$$$$$$    THIS IS NORMAL FUNCITON     $$$$$$$$$$$$$$$$$$$$$$$$$$

// the value of this is dynamically determined at runtime based on how the function is called.

//  ######### Regular Function

function regularFunction() {
    console.log(this); // 'this' refers to the global object (e.g., window in browsers)
  }
  
  regularFunction(); // Output will vary depending on the environment-if borwser then output is : windows object if node then {}

  
  // ######### Object Method:
  const myObject = {
    method: function() {
      console.log(this); // 'this' refers to the object (myObject)
    }
  };
  
  myObject.method(); // Output: myObject
  
  // ######### Event Handler:
  
  const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this); // 'this' refers to the DOM element that triggered the event (button)
});

// ######### Constructor Function:

function ConstructorFunction() {
    this.property = 'value';
    console.log(this); // 'this' refers to the newly created instance
  }
  
  const instance = new ConstructorFunction(); // Output: instance


// $$$$$$$$$$$$$$$$$$$$    THIS IS ARROW FUNCITON     $$$$$$$$$$$$$$$$$$$$$$$$$$

//  In contrast to regular functions, arrow functions do not have their own this context.
//  Instead, they inherit the this value from the enclosing (lexical) scope.
 
// ######### Global Context:
const arrowFunction = () => {
    console.log(this); // 'this' refers to the global object (e.g., window in browsers)
  };
  
  arrowFunction(); // Output will vary depending on the environment

// ######### OBJECT METHOD

const mYObject = {
    method: () => {
      console.log(this); // 'this' refers to the 'this' value of the surrounding scope (lexical scoping)
    }
  };
  
  myObject.method(); // Output will vary based on where myObject.method() is called
  
  function ConstructorFunction1() {
    this.property = 'value';
  
    // Inside arrow functions, 'this' refers to the 'this' value of the surrounding scope (lexical scoping)
    const arrowFunction = () => {
      console.log(this); // 'this' refers to the instance created by the ConstructorFunction
    };
  
    arrowFunction();
  }
  
  const instance1 = new ConstructorFunction1(); // Output: instance
  
  // OVERALL THIS IN ARROW FUNCTION VARIES ACORDING TO LEXICAL SCOPE