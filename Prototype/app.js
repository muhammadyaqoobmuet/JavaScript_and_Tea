// creating an object yes function is also a funtion and object aswell'
//  functions are first-class objects.
function sqr(num){
    return num**2;
}

sqr.power = 2;

// console.log(sqr.power);
// console.log(sqr(4));
// console.log(sqr.__proto__); // {} checking or seeing function prototype

// console.log(sqr.__proto__ === Function.prototype); // Output: true Every function is an instance of Function

// console.log(sqr.__proto__.__proto__ === Function.prototype.__proto__); // true
// some confusions that i had check out notes.md

// console.log(Function.prototype.__proto__ === Object.prototype); // Output: true
/**
check out notes2.md
 */

function user(name,score){
    this.name = name;
    this.score = score;
}

user.prototype.displayDetails = function(){
    console.log(`username is ${this.name} & score is ${this.score}`);  // this to check for which object we are talking to
}


const user1 = new user("yaoob",55);
user1.displayDetails(); // dont need to app prototype js will handle but we will get error
// error is that user is not update so we will use new (to understand new check out newKeyword.md)


// this all was when there were no class keywork 
