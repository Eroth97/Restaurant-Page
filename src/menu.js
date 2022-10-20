import {createLi, createTitle} from './recurrentFunctions';

function createMenu(content){
  content.appendChild(createTitle('Menu'));

  const menu = document.createElement('ul');
  const meals = [createLi('Hamburger'), createLi('Hot Dog'), createLi('Pizza')];
  meals.forEach(element => menu.appendChild(element));
  content.appendChild(menu);
}

export {createMenu};