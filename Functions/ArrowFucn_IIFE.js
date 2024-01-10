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
