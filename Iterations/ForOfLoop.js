//  The for...of statement executes a loop that operates on a sequence of 
//  values sourced from an iterable object

const myArr = [1,2,3,4,5];
for (const indexedValue of myArr) {
    console.log(indexedValue);
}

// FOR OF FOR STRINGS 

const greeTings = "Hey WTF ";
for (const charOFGreet of greeTings) {
    if(charOFGreet === " "){
        continue
    }
    console.log(charOFGreet); // each character will be detected
}

// MAPS ARE OBJECTS LIKE OBJECT BUT THERE IS ALSO A DIFFERENCE

// creating map 
let myMap = new Map();
myMap.set("a",1);
myMap.set("b",2);
myMap.set("c",3);
console.log(myMap);  // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }


// for (const idk of myMap) {
//     console.log(idk);  // prit [key,value] for every key value
// }

for (const [key,value] of myMap) {
    console.log(`${key} with ${value}`);  // prit [key,value] for every key value
}

// CREATING OBJECT AND PERFORMING LOOP ON IT

const gPayUser={
    userId:"#78934",
    email: "y----@gmail.com"
}

// here the differnce is that here key can only be string and symbol but in map we can create own key that may be number of anydata type and object can hold same value but map can't hold same entries


// we can perfom for of on object eg

for (const [key,value] of gPayUser) {
    //console.log(key,value);  // error
}