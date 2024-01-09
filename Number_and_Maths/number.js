"use strict";
// TWO WAYS TO DEFINE Number


// const HEALTH_SCORE = 100;
// console.log(HEALTH_SCORE); // 100;
// another way
const HEALTH_SCORE = new Number(100);
console.log(HEALTH_SCORE);  // now this is object type with key:value => Number:100 like this

// we can do toString()  to acsses more String methods on it
console.log(HEALTH_SCORE.toString().length); //3
console.log(HEALTH_SCORE.toFixed(2).length); //2 is precise value after .00 100.00
console.log(HEALTH_SCORE.toExponential());// if we give number in constructor it inc decimal point after 1.00E+2 means 1.00into 10 base power 2 = 100
const HUNDREDS = 1000000;
console.log(HUNDREDS.toLocaleString('en-IN')); // will give it , like indian peps encode

// ++++++++++ MATHS ++++++++++++++++
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.8)); //5

// random fucntion

console.log(Math.random()); // this will give random value from 1 - 10 but in decimal lie 0.0 to 0.9
//  if we multiply by 10 it convert into single if 100 then convert into two digit basic math

// good way to get random value from specifc min number to max
const MIN = 10;
const MAX = 20;
console.log(Math.floor((Math.random()*(MAX-MIN +1))+MIN)); // this will give acurate result from 10 - 20 
// Math.floor() -> gives last value 4.2 -> give 4 and Math.ceil() give final like 4.2->5