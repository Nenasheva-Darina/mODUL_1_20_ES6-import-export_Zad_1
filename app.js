import { getRandomColor } from './utils';

export default function initApp() {
  console.log('Hello world');

  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Изменить цвет страницы';
  button.addEventListener('click', getRandomColor);

  document.body.append(button);
}
