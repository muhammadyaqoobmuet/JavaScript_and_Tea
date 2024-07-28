JavaScript Execution Context
JavaScript code executes in a single-threaded environment, which means it can only process one operation at a time. The JavaScript execution context governs how the code is executed. There are different types of execution contexts:

Global Execution Context (GEC)
Functional Execution Context (FEC)
Eval Execution Context

Execution Context Types

Global Execution Context (GEC): 
Created when the JavaScript file  runs. It is associated with the global object, which is window in browsers and global in Node.js.

Functional Execution Context (FEC): 
Created whenever a function is called.

Eval Execution Context: 
Created when code is executed inside the eval function.

Phases of Code Execution 

JavaScript code runs in two main phases:

Memory Creation Phase (also known as Creation Phase):

Variables and functions are stored in memory.
Variables are initialized to undefined.
Function declarations are stored with their definitions.
Execution Phase:

The code is executed line by line.
Variables are assigned actual values.
Function calls create a new functional execution context.
Example and Explanation
javascript
Copy code
let num1, num2;
num1 = 10;
num2 = 20;

function addTwoNumbers(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addTwoNumbers(num1, num2);
let result2 = addTwoNumbers(10, 20);
Step-by-Step Execution:

Global Execution Context
Creation Phase (Memory Creation):

num1 and num2 are initialized to undefined.
addTwoNumbers is stored in memory with its function definition.
result1 and result2 are initialized to undefined.
Execution Phase:

num1 is assigned the value 10.
num2 is assigned the value 20.
result1 is assigned the result of addTwoNumbers(num1, num2).
result2 is assigned the result of addTwoNumbers(10, 20).
Functional Execution Context (when addTwoNumbers is called)
For each call to addTwoNumbers:

Creation Phase (Memory Creation):

num1, num2, and total are initialized to undefined.
Execution Phase:

num1 and num2 are assigned the passed arguments.
total is calculated as num1 + num2.
The function returns total.
After each function call, the functional execution context is removed from the call stack.

Call Stack
The call stack keeps track of the execution context.
Initially, only the global execution context is on the stack.
When addTwoNumbers is called, a new functional execution context is created and pushed onto the stack.
Once the function execution is complete, the functional execution context is popped off the stack, returning control to the global execution context.
These refined notes should provide a clear and accurate understanding of JavaScript's execution context and how code is executed.