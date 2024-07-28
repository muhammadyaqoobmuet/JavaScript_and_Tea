const closeme = document.querySelector('#close');
const open = document.querySelector('#shareme');
const modal = document.querySelector('#modal');
const overly = document.querySelector('#overly');

open.addEventListener('click', ()=>{
    modal.classList.remove("hidden")
    modal.classList.add("active")
    overly.classList.add('adding')
    
    
})
closeme.addEventListener('click', ()=>{
    modal.classList.add("hidden")

    overly.classList.remove('removedoverly')
    overly.classList.remove('adding')
} )

