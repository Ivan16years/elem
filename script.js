const elem = document.querySelector('#elem');
//1
elem.firstElementChild.style.color = 'red';
//2
elem.lastElementChild.style.color = 'red';
//3
for (let i = 0; i < elem.children.length; i++) {
    elem.children[i].innerHTML += '!'
}
//6
const elemem = document.querySelector('#elem1');
let par = elemem.closest('.www');
console.log(par);

//7
const elelem = document.querySelector('#elem2');
elelem.previousElementSibling.nextElementSibling.innerHTML += '!';