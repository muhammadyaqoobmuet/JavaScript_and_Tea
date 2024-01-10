// we have created another file just because spread operator 😁

// suppose if we want to merge to array what are possible situation we go through

let myFavMovies = ["predestination","Inception","Dune2"];
let myFavGame =["PUBG ","ForTnie"];
// myFavGame.push(myFavMovies);
//console.log(myFavGame); // this doesnot give me joined array insted it will give me
// [ 'PUBG ', 'ForTnie', [ 'predestination', 'Inception', 'Dune2' ] ]  

// to avoid this we can use .concat() method or use spread operator

let myFavThings =myFavMovies.concat(myFavGame); // this return concinated array
// console.log(myFavThings);

// ## OR WE CAN JUST DO LIKE

myFavThings = [...myFavGame,...myFavMovies];
 // console.log(myFavThings); // this is more better

 // flat method just solve array nested and make it flat
 let exampleArr = [1,[2,3,[4]]];
 console.log(exampleArr.flat(1)); // we can pass 1 to flat 1 nested array 😎
