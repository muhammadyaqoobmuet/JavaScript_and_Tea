//Chapter - 01

//let const vs var
console.log("let vs const vs var");
// js is a dynamic typed language means -it can identify which data are stroing in variable
// when we are declaring keyword with let
// 1 . let nameOfvariable = somedata; it means that it can't be re-declared but can can assing it to another data or datatype eg
let myName = " yaqoob";
console.log(`My name is ${myName}`);  // Note that `` these are string templetes we are gonna discus it later but for now understat this
// output : yaqoob
myName = "yaqoob ahmed";
console.log("myFull name is "+myName); // output: yaqoob ahmed

// some keypoints for let : it has not global scope means it we define it within block we cant accsses it outside

// 2. var keyword it also same but it can redeclared and it has global scope
{
    let temp = "abc";
    var anotherTemp ="abcd";
}

//  console.log(temp); we cant this will give you error 
console.log(anotherTemp); // but this wont

// const is same as let but it wont allow you to change something of variable 
// eg if we store number then we cant change it


// const PI = 3.141516;
// PI=23;  # we cant do that