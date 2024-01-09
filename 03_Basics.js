// typeConversion means that changing dataType of one Variable to another dataType 
const isMale = true;
const isMaleinNumber = Number(isMale);
console.log(isMaleinNumber); // return one if it is true

const wChange = null;
console.log(Number(wChange)); // this will cahange null to number 0 and undifiend to NaN

// Note That 
// "33" => 33 
// but "33abc"=>Nan but type of Nan is Number LOL
// "" tobollean => flase if anything in string true

// mostly we'll be working on String bcz apis and broswer stuff return string😛