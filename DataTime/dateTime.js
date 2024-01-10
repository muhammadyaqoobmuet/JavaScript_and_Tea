// Date are Object in Js that represtion
// encapsulate an integral number that represents milliseconds since the midnight
// at the beginning of January 1, 1970, UTC

// ### GETING CURRENT DATE IN DIFFERENT FORMATS
let currDate = new Date();
// console.log(currDate); // 2024-01-10T10:27:34.512Z this will give ajeeb value to make this reable we use some methods

// ## METHODS TO MAKE DATE READABLE
console.log(currDate.toISOString()); // return a data in string with iso format
console.log(currDate.toJSON()); //Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object
console.log(currDate.toDateString()); // give date in Wed Jan 10 2024
console.log(currDate.toString()); // give date time with locatltime
console.log(currDate.toUTCString()); // give date in UTC format eg:YYYY-DD-MM HH:MM:SS

// ## METHODS TO CREATE OWN DATE NOTE months days index start from 0-11

const MY_DATE = new Date(2023, 0, 12); // means 2023 jan 11
const MY_DATE2 = new Date(2023, 0, 12, 5, 5); // means 1/12/2023, 5:05:00 AM
console.log(MY_DATE2.toLocaleString());

// ## Creating date dd-mm-yy
const MY_DATE3 = new Date("01-01-2023");
console.log(MY_DATE3.toLocaleString());

// ## DATE IN MS FROM START ${CHECK-OUT ABOVE DEFINATION OF DATE OBJECT OR GO THRUGH MDN}
let mydateStamp = Date.now();
console.log(`Date in ms ${mydateStamp}`);

// ## WE CAN CONVERT DATE IN MS BY getTime();
console.log(MY_DATE.getTime());

// ## WE CAN MODIIFY DATE EG
MY_DATE.toLocaleString("default", {
  weekday: "long",
});

console.log(MY_DATE.toLocaleString());
