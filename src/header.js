import { createLi } from './recurrentFunctions';

function createHeader(){
  const header = document.createElement('header');
  const ul = document.createElement('ul');

  const links = [createLi('Home'), createLi('Menu'), createLi('Contact')];

  links.forEach(element => element.classList.add('link'));
  links.forEach(element => ul.appendChild(element));

  header.appendChild(ul);

  return header;
}

export{createHeader};