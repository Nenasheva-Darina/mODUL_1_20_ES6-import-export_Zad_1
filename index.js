import './index.css';
console.log('Hello World!');
[1, 2, 3].map((n) => n + 1);

import myImage from './JavaScript.jpg';

const h = document.createElement('h1');
h.textContent = 'I love JavaScript';

const div = document.createElement('div');
div.className = 'image-container';
const imgElement = document.createElement('img');
imgElement.src = myImage;
document.body.prepend(h);
document.body.append(div);
div.append(imgElement);

console.log('Hello World!');
// console.log(myImage);

const array = [1, 2, 3].map((i) => i + 1);
function hello(...args) {
  console.log('###: Hello Rullup!', args[0], args[1]);
}
