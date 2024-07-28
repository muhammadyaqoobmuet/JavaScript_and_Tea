const inputSlider = document.querySelector('#scroller');
const lengthDisplay = document.querySelector('[data-passwdlen]');
const copyBtn = document.querySelector('[data-copyBtn]');
const passwdDisplay = document.querySelector('[data-passwdArea]');
const copyMsg = document.querySelector('[data-copyMsg]')
const actualMsg = document.querySelector('[data-actualMsg]')

const ucase = document.querySelector('#ucasebox')
const lcase = document.querySelector('#lcasebox')
const numbercase = document.querySelector('#numberbox')
const charbox = document.querySelector('#charsbox')

const indicator = document.querySelector('[data-indicator]')
const genratePass = document.querySelector('#genpass')
const allCheckBox = document.querySelectorAll('input[type=checkbox]')
const symbols = " !@#$%^&*()_+`<>,.'}{ "
let password ="";
let passwordlen = 10;
let checkCount = 0;



function handleSlider(){
        inputSlider.value=passwordlen;
        lengthDisplay.textContent=passwordlen;
    inputSlider.addEventListener('input',(e)=>{
        
        passwordlen = e.target.value;
        lengthDisplay.textContent = passwordlen;

    })
}
handleSlider();

function getRndInteger(max,min){
    return Math.floor(Math.random()*(max-min)+min);
}

function getRndNumber(){
    return getRndInteger(0,9);
}

function getLowerCaseNumber(){
    return String.fromCharCode(getRndInteger(97,123))
}

function getUpperCaseNumber(){
    return String.fromCharCode(getRndInteger(65,91))
}

function getSymbol(){
    return symbols.charAt(getRndInteger(0,symbols.length));
}

function setIndicator(color){
    indicator.style.backgroundColor=color;
}


function calcStrength(){
    let hasUp = false;
    let hasLow = false;
    let hasSym = false;
    let hasNum = false;
    

   if(ucase.checked) hasUp=true;
   if(lcase.checked) hasLow=true;
   if(numbercase.checked) hasNum=true;
   if(charbox.checked) hasChar=true;
  


   if(hasUp && hasLow && (hasNum || hasSym)  && passwordlen>=8 ){
    setIndicator("green");
   }else if((hasLow || hasUp) && hasSym && passwordlen>=6 ){
    setIndicator("orange");
   }else{
    setIndicator("red");
   }
}


async function copyClipboard(){
    try {
            await navigator.clipboard.writeText(passwdDisplay.value);
            actualMsg.style="display:none;"
            copyMsg.innerText="copied"
           
    } catch (error) {
        
    }
    setTimeout(() => {
        copyMsg.style="display:none;"
          actualMsg.style="display:block;"
    }, 500);
}

copyBtn.addEventListener('click',()=>{
    if(passwdDisplay.value){
        copyClipboard();
    }
})

function checkAll(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    })

    if(passwordlen<checkCount){
        passwordlen=checkCount;
    }
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',checkAll)
})

genratePass.addEventListener('click',()=>{
    
    password=" ";
    if(checkCount<=0){
        return;
    }
    if(passwordlen<checkCount){
        passwordlen=checkCount;
        
    }

    let funcArr=[]

    if(ucase.checked)
        funcArr.push(getUpperCaseNumber);
   if(lcase.checked)
        funcArr.push(getLowerCaseNumber);
   if(numbercase.checked) 
        funcArr.push(getRndNumber);
   if(charbox.checked)
    funcArr.push(getSymbol);
   
   for(let i = 0 ; i < funcArr.length; i++){
    password+=funcArr[i]();
   }

   for(let i = 0 ; i < passwordlen-funcArr.length;i++){
    let randIndex = getRndInteger(0,funcArr.length)
    password+=funcArr[randIndex]();
   }

   passwdDisplay.value=password;
   calcStrength();
});