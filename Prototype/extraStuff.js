let fname = " muhammad Yaqoob ";
// now we know the length of this will be
//console.log(fname.length); // 17 but it also includes spaces

// that ofcurse we dont want so how can we create a own property instead of lengh 

// lets create


String.prototype.trueLength =   function(){
    return  this.trim().length;
   
}



//console.log(fname.trueLength());

// inhertiance how it used to be now how it is


// little bit old
// let animal = {
//     speak: function() {
//         console.log("animal speaking");
//     }
// };

// let cat = {
//     walkCat: function() {
//         console.log("cat walking");
//     }
// };

// cat.__proto__ = animal; // Establishing prototype chain

// let c = Object.create(cat); // Creating an instance `c` of `cat`
// c.speak(); // Output: "animal speaking"
// c.walkCat(); // Output: "cat walking"

let animal = {
    speak: function() {
        console.log("animal speaking");
    }
};

let cat = {
    walkCat: function() {
        console.log("cat walking");
    }
};

Object.setPrototypeOf(cat, animal); // Setting `animal` as the prototype of `cat`

let c1 = Object.create(cat); // Creating an instance `c1` of `cat`
c1.speak(); // Output: "animal speaking"
c1.walkCat(); // Output: "cat walking"


// let c2 = new cat();

// c2.walkCat();