// for loop is used when we know the number of iterations here is syntax forloop
// as iam famillar with java,c++ and python so i dont need more than that
// for(let i = 0 ; i<10;i++ ) 
// // we initialize i then define condition then inc or dec it
// {
//  // all the code
// console.log(i);

// }

// this was simple Loop here we go with nested loop 
 
// for(let i =0 ; i < 5 ; i++){
//     console.log(`outer loop ${i} `);
//     for(let j = 1 ; j<=10 ; j++){
//         console.log(`inner loop ${i} and ${j} `);  // must use this for best visulation
//     }
// }

// FOR LOOP WITH ARRAY
const superHero = ["flash","ironMan","thor","spider child"];
for(let index = 0 ; index<superHero.length ; index++){
    // console.log(superHero[index]);
} 

//  use of break, continue 

for(let index = 0 ; index<superHero.length ; index++){
    if(superHero[index] === "spider child"){
        break;
    }
    else if(superHero[index] === "flash" ){
        continue;
    }else{
        console.log(superHero[index]);
    }
}
