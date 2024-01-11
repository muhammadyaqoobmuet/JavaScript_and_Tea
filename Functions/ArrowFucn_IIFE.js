// we all know when we use this keyword in object it refers to the current contex within block eg
const demoUser = {
    username:"yaqoob",
    email:"yaqoobahmed45700@gmail.com",
    activateUser:function(){
        console.log(`the user ${this.username} is activated sucsseflly`);
        // NOTE here this refers to currrent username; what if we print this
        console.log(this);  // check output below  :()
    }
}
demoUser.activateUser();
// output of this 
// {
//   username: 'yaqoob',
//   email: 'yaqoobahmed45700@gmail.com', 
//   activateUser: [Function: activateUser]
// }
// Conclusion : so this refers to whole object if something chnges it will also refer to it

console.log(this);  // in enviroment this referes to empty object 
// but in broswer this refers to the global object Window because old time js was used to run on browser engine

//  creating ARROW FUNCTION

// const holdingArrorFucntion = (value)=>value*value;  this is implicit return this can be written as
// const holdingArrorFucntion = (value)=>(value*value);  this is also one way mostly used in react 
const holdingArrorFucntion = (value)=>{
    return value**2;
}

console.log(holdingArrorFucntion(3)); //9





// USAGE OF IFEE WITH FUNCTION

// function contectIt(){
//     console.log("conecting dataBase...");
//     setTimeout(() => {
//         console.log("dataBase Conected");
//     }, 2000);
// }
// contectIt() to make above function IIFE use make the (function)(); eg

(function contectIt(){
    console.log("conecting dataBase...");
    setTimeout(() => {
        console.log("dataBase Conected");
    }, 2000);
})(); 
// WHEN WE WILL USE THE CODE IT WILL AUTOMATICALLY INVOKED