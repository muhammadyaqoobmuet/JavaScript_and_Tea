
// selecting input feild
// input feild of height
let inputFeild = document.querySelector('#height'); ;
// input feild of weight
let  weightInputFeild = document.querySelector('#weight'); ;
const calcBtn = document.querySelector('.calcbtn button');

const calculateBMI = (heightInCm, weightInKg) => {
    const heightInM = heightInCm / 100; // Convert height from cm to meters
    const bmi = weightInKg / (heightInM ** 2); // Calculate BMI
    return bmi;
};

const firstBody  = document.querySelector('.parent');
const secondBody = document.querySelector('.secondparent')
let BMI = 0;
let result = document.querySelector('#natejo');
let BMIfeild = document.querySelector('#yourbmi');

calcBtn.addEventListener('click',(e)=>{
    firstBody.setAttribute('class','hidden');
    secondBody.setAttribute('class','block w-[50vw] mx-auto border h-[70vh] rounded-lg bg-gradient-to-r from-blue-300 to-purple-500');
    BMIfeild.value=calculateBMI(inputFeild.value,weightInputFeild.value);
    BMI  =calculateBMI(inputFeild.value,weightInputFeild.value);

    // calculating results

    if(BMI==18.6){
        result.value='Under Weight';
    }
    else if(BMI >= 18.6 && BMI <= 24.9){
        result.value='Normal Range';
    }else{
        result.value='Bhai tu khatam hai ';
    }
})

const recalcbtn = document.querySelector('.recalc button');
recalcbtn.addEventListener('click',()=>{ 
    firstBody.setAttribute('class','block w-[50vw] parent mx-auto border h-[50vh] rounded-lg bg-gradient-to-r from-blue-300 to-purple-500');
    secondBody.setAttribute('class','hidden');
})