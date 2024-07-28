
var box = document.querySelector("#box")
box.addEventListener('mousemove',(e)=>{
        var coordinates = box.getBoundingClientRect();
        var insideboxcordinates = e.clientX - coordinates.left;

        if(insideboxcordinates < coordinates.width/2){
           var  intensity = gsap.utils.mapRange(0,coordinates.width/2,255,0,insideboxcordinates) 
           gsap.to(box,{
            backgroundColor:`rgba(${intensity},0,0)`,
            ease:Power4,
           })
        }else{
            var  intensity = gsap.utils.mapRange(coordinates.width/2,coordinates.width,0,255,insideboxcordinates) 
            gsap.to(box,{
             backgroundColor:`rgba(0,0,${intensity})`,
             ease:Power4,
             
            })
        }
        
    }
    
)
box.addEventListener("mouseleave",()=>{
    gsap.to(box,{
        backgroundColor:`gray`,
        ease:Power4,
       })
})