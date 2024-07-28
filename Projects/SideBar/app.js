const sider = document.querySelector('#side');
const menubar = document.querySelector('#clickme');
const internal = document.querySelector('#internal');

menubar.addEventListener('click',()=>{
    
   if(sider.classList.contains("hidden")){
    sider.classList.remove("hidden");
   }else{
    sider.classList.add("hidden")
   }
   internal.addEventListener('click', ()=>{
    sider.classList.add("hidden")
   })
})