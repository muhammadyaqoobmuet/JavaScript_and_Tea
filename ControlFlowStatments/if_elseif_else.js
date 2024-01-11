// control flows are simple as i have good hands on java nad c++ and python so it is easyfor me 
// but for notes i am mentioning 

if(true){
    // this will execute
    // if this is not true else if(codition) -> will be checked and goes on and else is optoinal

}else if(false){
    // never come here because false
}else{
    // if nothing works it always LOL
}
// SOME FALSE VALUES TO BE NOTED
// false , 0 , -0 , BigInt n, null , undifiend , NaN

if("0"){
    console.log("TURE WTF"); // this will execute
}

// someother Truely Values -> "0", " ", 'flase' , [] , {} , funciton(){}
const arr = [];
if(!arr){
    // do something
}else{
    console.log("array is empty");
}


// ## NULISH COALESCING
 let var1 = null ?? 10;
 let var2 = undefined ?? 10;
 console.log(var1); // 10
 console.log(var2); //10