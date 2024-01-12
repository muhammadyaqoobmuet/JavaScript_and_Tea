// usually for in loop is used for Objects
/*
The for...in statement iterates over all enumerable string properties of an object
(ignoring properties keyed by symbols), including inherited enumerable propertie
*/

const jID = {
    userName:"kia loc",
    password:"*******",
    isACtivate:false,
}

for (const key in jID) {
   // console.log(key,jID[key]);  // to print key + value else it will print only key
}

// WE HAVE SEEN THAT IN FOR OF LOOP IT WAS RETURN VALES ON EVERY INDEX BUT IN FOR IN IT RETURN INDEXS

const uNames = ["jack","paul","logan","bravo","hakuna matata"];
for (const key in uNames) {
    //console.log(key);  // 0 1 2 3 4 5
    console.log(uNames[key]);  // value on each index
}
