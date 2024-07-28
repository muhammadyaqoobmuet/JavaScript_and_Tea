//https://javascript.info/dom-nodes go through this website for basic i cant write all here

// ELEMETS _ SELECTOR
// GET ELEMENT BY ID
let heading = document.getElementById('heading');
// console.log(heading) <- output ->  <h1 id="heading">THIS IS HEADINNG</h1> 
// console.log(heading).id <- output ->  'heading'
// console.log(heading).class <- output ->  'undefined'
// console.log(heading).className <- output ->  'whatEverWillbeClassName'
// console.log(heading).getAttribute('id') <- output ->  'title'
// console.log(heading).getAttribute('class') <- output -> 'whatEverWillbeClassName' 
// setAttribute

document.getElementById('heading').setAttribute('style', 'color:white'); // this will change color into white
// setAttribute will always override properties eg
// if i give a new attribute class older will vanish lol

document.getElementById('heading').setAttribute('class', 'color');

document.getElementsByClassName('');  // this return html collecton of classNames

//MORE GENRIC SELECTOR -> we can use css selectors in () eg-> (input[type='button']); 
document.querySelector('#selectID')

document.querySelector('.selectClass')

document.querySelector('p') // for selecting tag

// QS ALWAYS SELECT FIRST CHILD

/* 
The call to elem.querySelector(css) returns the first element for the given 
CSS selector In other words, the result is the same as elem.querySelectorAll(css)[0]
*/


// closet

// The method elem.closest(css) looks for the nearest ancestor that matches the
// CSS-selector. The elem itself is also included in the search.

/*
HTML

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>

JS

let chapter = document.querySelector('.chapter'); // LI
  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV
  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)

  */

// style Attribute for inline css

// heading.style='background-color:green';
heading.style = 'padding:0px 20px';
// heading.style='color:yellow';


// INNERTEXT VS INNER CONTENT
console.log(heading.innerText);    // THIS IS HEADINNG
console.log(heading.textContent); //  THIS IS HEADINNG
console.log(heading.innerHTML);
/*

textContent:
 textContent returns the text content of all elements, including <script> and <style> elements.
 It returns all text within an element, including hidden text (text inside <script> or <style> tags).

 innerText:
 innerText returns the text content of the visible elements.
 It ignores text inside <script> or <style> elements.
 It takes into account the CSS styles applied to the elements when returning the text.

 innerHTML:
 it returns whole html with tags



 Method          	    Searches by..	Can call on an element?	    Live?
querySelector	        CSS-selector	✔	                        -
querySelectorAll	    CSS-selector    ✔	                        -
getElementById	        id	            -		                    -
getElementsByName	    name	        -		                    ✔
getElementsByTagName	tag or '*'	    ✔		                    ✔
getElementsByClassName	class	        ✔		                    ✔

*/