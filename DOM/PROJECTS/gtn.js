const randomNumber = parseInt((Math.random()*100) +1);
let pervguess = [];
// select button
const btn = document.querySelector('#btn');
const noOfGuess = document.querySelector('#noOfGuess');
const win = document.querySelector('#win');
const lose = document.querySelector('#lose');
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputValue = parseInt(document.querySelector('#text-area').value)
    const perv = document.querySelector('#perv');
   
        if( !isNaN(inputValue) && inputValue<=100 && inputValue >=0){
           
            pervguess.push(inputValue);
            perv.textContent =`${pervguess}`
    
        }
        
    
    
    
    if(randomNumber != inputValue  && inputValue != -1 && inputValue <=100 ){
       noOfGuess.textContent = parseInt(noOfGuess.textContent)-1;
        if(noOfGuess.textContent == 0 ){
            
            lose.setAttribute('class','block px-4 text-md font-semibold text-red-950 text-center')
            btn.innerText='Play Again'
            btn.addEventListener('click',()=>{
                window.location.reload();

            })
        }
    }else if(randomNumber == inputValue){
        win.setAttribute('class','block px-4 text-md font-semibold text-red-950 text-center');
      btn.textContent='Collect Price';
      
      btn.addEventListener('click',()=>{
        window.location.reload();
        
      })  
    }
})


