import {createLi} from './recurrentFunctions';

function createMenu(content){
  const title = document.createElement('h2');
  title.textContent = 'Menu';
  content.appendChild(title);

  const menu = document.createElement('ul');
  const meals = [createLi('Hamburger'), createLi('Hot Dog'), createLi('Pizza')];
  meals.forEach(element => menu.appendChild(element));
  content.appendChild(menu);
}

export {createMenu};