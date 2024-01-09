// in js we have already talked about primitives they are stored in stack  and refrence in heap
// HEAP IS GENRALLY HAS LESS SIZE THAN HEAP

// In JavaScript, memory management is handled by the engine
// we we change the primitive we are chaning its copy we when its about
// refrence we change them orginally (my english sucks a bit)

// refrences are like objects array funcitons etc

let nam = "Yaqoob";
let myNickName  = nam;
myNickName = "Aqib 2";

// <----  ## UNDERSTANDING OF HEAP AND STACK

//        here first nam will be placed in stack 
//        and myNickName also stored at stack   
//        be given to him  name will and copy of 
//        so when we change the myNickName it wont affect nam 

//  ------>
 // this is object and stored in heap and we will call it with name(refrence it wont give us copy it will be all itself )

let userOne = {
    fName:"yaqoob",
    sName:"halepoto"
}

let userTwo = userOne; // this return refrence means if we change in userTwo it will be reflected in userOne
// userTwo will have same adress as userOne so change in userTWo willbe in userOne
userTwo["fName"]="yaqoob ahmed";
console.log(userTwo);  //{ fName: 'yaqoob ahmed', sName: 'halepoto' }
console.log(userOne);  //{ fName: 'yaqoob ahmed', sName: 'halepoto' }