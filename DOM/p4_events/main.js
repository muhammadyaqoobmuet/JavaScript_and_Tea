// https://javascript.info/introduction-browser-events read this before revise future me

// An event is a signal that something has happened. 
// All DOM nodes generate such signals (but events are not limited to DOM).

/*  TYPES
click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
contextmenu – when the mouse right-clicks on an element.
mouseover / mouseout – when the mouse cursor comes over / leaves an element.
mousedown / mouseup – when the mouse button is pressed / released over an element.
mousemove – when the mouse is moved. */

const imgfirst  = document.querySelector('#firstImg');

// imgfirst.addEventListener('mousemove',()=>{
//     alert("hehehe")
// })

let h1 = document.querySelector('h1');
// h1.addEventListener('mousemove',()=>{
//     alert("hello");
// })

// 

// h1.addEventListener('mouseover',()=>{
//     h1.style='color:red';
// })

// TIME STAMP   , defaultPrevent(), target , toElement , srcElement currTarget   clientX , offset , screenXY etc
// altkey , shiftkey , keyCode

// EVENT PROPOGATION


// document.querySelector('#images').addEventListener('click',(evt)=>{

//     console.log("clicked inside ul");
// },false)

// document.querySelector('#thirdImg').addEventListener('click',(evt)=>{

//     console.log("clicked on third img");
//     evt.stopPropagation(); // this stops propgation either bubble or capture
// },false)
// now here it propogate from third img to ul
/* BUBBLINH
When an event happens on an element, it first runs the handlers on it, 
then on its parent, then all the way up on other ancestors. */
// if i click inside ul on anyother img it only run for clicked inside
// becuase anyother does not have any event handler

// now if i make flase - > ture it becomes capturing mode 
// top to bottom 

document.querySelector('a').addEventListener('click',(e)=>{
    e.preventDefault();
})


document.querySelector('#images').addEventListener('click',(evt)=>{

    console.log(evt.target.parentNode.remove());
},false)