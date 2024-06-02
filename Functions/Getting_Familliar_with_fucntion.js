/*
    =>Functions:
    Functions are one of the fundamental building blocks in JavaScript. A function in 
    JavaScript is similar to a procedure—a set of statements that performs a task or calculates 
    a value can be passed to function and it can returns a value by return something;
*/

// HOW FUNCTIONS ARE CREATED
// they are created by fuction keyword follwing by name and () body of funciton

// creating a basic function 
function greetMe(){
    console.log("hey yo dude what's going on ?");
}


// invoking a function
greetMe();  //  hey yo dude what's going on ?

// if we just only write function name no () then it is its refrence 
//  greetMe  this is example


// we can pass parameters 

function getSqurae(value){
   if((typeof value) === "number"){
    return value*value;
   }
   else{
    return "enter number"
   }
}
// console.log(getSqurae(34));


// function with infinity parameter (rest operator )
function getPriceOfCart(...priceofEachCart){
    // here  priceofEachCart is array if user given number or anything they are stored in array
    let sum = 0;
    console.log(priceofEachCart);
    for (const eachPrice of priceofEachCart) {
        sum+=eachPrice;
    }
    return sum;
}

// console.log(getPriceOfCart(200,500,900)); // return total price 1600


// ************* Passing Object TO the Function ***********

const userId= {
    username: "yaqoob",
    payment: 7000, // pretty low i know hehehe
};

function handlingObject(anyObject) {
    console.log(`The username is ${isPropertyDefined(anyObject, 'username')} and payment is ${anyObject.payment}`);
}

function isPropertyDefined(anyObject, propertyName) {
    if (anyObject[propertyName] != null || anyObject[propertyName] != undefined) {
        return anyObject[propertyName];
    } else {
        return undefined;
    }
}

handlingObject(userId);


// NOTE THAT REFRENCE ARE PASSED TO FUCNTION SO WHEN THEY GOT CHANGED IN FUNCTION OVERALL THEY CHANGE


// HOISTING
//console.log(myCalc(2,2)); // we can acsses it here because it is stored in another variable
 console.log(addTwoSquare(2,2)); // if that function is not stored in any var we can acsses it here
// because when v8 treats code all declration moves upward and values are assing at runtime this is called hoisting


 function addTwoSquare(value1,value2){

    function square(value){
        return value * value;
    }

    return square(value1)+square(value2);
}
//console.log(myCalc(2,2));  // here we can call it


//        $$$$$$$ ARROR FUNCTION $$$$$$$$$

