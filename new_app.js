// 30.1
let h2Element = document.querySelector("h2");
if (h2Element) {
    h2Element.textContent = "DOM method description";
}
// 30.2
let ukrainianLinks = document.querySelectorAll('[href*="/ua/"]');
console.log(ukrainianLinks);
// 30.3
let ul = document.getElementById('ul');

let li0 = document.createElement('li');
li0.id = 'null';
li0.textContent = '0';

let li2 = document.createElement('li');
li2.id = 'second';
li2.textContent = '2';

let li4 = document.createElement('li');
li4.id = 'fourth';
li4.textContent = '4';

ul.insertBefore(li0, ul.firstElementChild);
ul.insertBefore(li2, ul.children[2]);
ul.appendChild(li4);
//30.4
let h1 = document.querySelector('h1');

let link = document.createElement('a');
link.id = 'link';
link.href = 'https://dom.spec.whatwg.org/';

let h1Clone = h1.cloneNode(true);
link.appendChild(h1Clone);
let parent = h1.parentNode;

parent.replaceChild(link, h1);
