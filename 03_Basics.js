// typeConversion means that changing dataType of one Variable to another dataType 
const isMale = true;
const isMaleinNumber = Number(isMale);
// console.log(isMaleinNumber); // return one if it is true

const wChange = null;
// console.log(Number(wChange)); // this will cahange null to number 0 and undifiend to NaN

// Note That 
// "33" => 33 
// but "33abc"=>Nan but type of Nan is Number LOL
// "" tobollean => flase if anything in string true

// mostly we'll be working on String bcz apis and broswer stuff return string😛

//  *********** OPERATIONS ********************
// we all know basic operation but here are some tricky
console. log ("1" + 2); // 12 this start from L->R  precidense things (for exam not industry)
console. log (1 + "2"); //12
console. log ("1" + 2 + 2); // 122
console. log (1 + 2 + "2"); //32


// ** there are like post and pre increament like
 let a = 100;
    // post-increament
    console.log(a++); // 100 but next line willbe increamented
 console.log(a);      // 101 

 // but in preIncreament on the same lne it inc by one it is done by
 ++a; 

 // ***** COMPARISIONS there are simple like > < <= >= these are simple in there is one
   // like == and === in == it checks values not datatypes but in === it also check dataType
   console.log(2 == "2"); // true
   console.log(2 === "2"); //flase
