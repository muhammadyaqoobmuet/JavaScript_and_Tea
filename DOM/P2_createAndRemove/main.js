// selecting parent
const parent = document.querySelector('.parent');

// children of parent

// const childrens = parent.children; // this will return a collection

// const p1 =  parent.firstElementChild; 
// console.log(p1.innerText);

// console.log(parent.lastElementChild);

// console.log(p1.parentElement); // p1 is the first child of
// console.log(p1.nextElementSibling.innerText);

console.log(1);

console.log(parent.childNodes[0].nodeType); // gives the node type of the first child node
console.log(parent.childNodes[0].nodeName); // gives the node name of the first child node
console.log(parent.childNodes[2].nodeValue); // The value of the node (e.g., the text content of a text node).

/*
    parentNode:     The parent node of the current node.
    childNodes:     A live NodeList of the child nodes of the current node.
    firstChild:     The first child node of the current node.
    lastChild:      The last child node of the current node.
    previousSibling:The previous sibling node of the current node.
    nextSibling:     The next sibling node of the current node.
*/

/*
1: Element node (e.g., <p>, <div>)
3: Text node (text inside an element or attribute)
8: Comment node (<!-- Comment -->)
9: Document node (entire document)
10: DocumentType node (<!DOCTYPE html>)
*/

// creating any element
const div = document.createElement('div');
// giving className and Id
div.id = "box4";
div.className = "box";
// we can set any attribute 
div.setAttribute('name', 'jack');
div.style.backgroundColor = "royalblue";
div.appendChild(document.createTextNode("hello"));

parent.appendChild(div);  // note that this is a slow approach

// creating a function that takes any language name and appends it to the list 
const ul = parent.querySelector('div>ul');

const setName = (lanName) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode( lanName));
    ul.appendChild(li);
}

// adding event listener to the button
document.querySelector('#button').addEventListener('click', () => {
    const text = document.querySelector('#textarea').value;
    setName(text);
    document.querySelector('#textarea').value = "";
});

// edit an element note we just can select an element an change its conent with its slow use use ele.replace(subStringOrRegexp, newSubstringOrReplacer)

firstli= document.querySelector('ul:first-child');
newli = document.createElement('li').appendChild(document.createTextNode("new first"));
firstli.replaceWith(newli);

// this is fast approch 