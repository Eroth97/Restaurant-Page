import { createLi, createTitle } from "./recurrentFunctions";

function createContact(content){
  content.appendChild(createTitle('Contact'));

  const ul = document.createElement('ul');
  const lis = [createLi('First Contact'), createLi('Second Contact'), createLi('Last Contact')];

  lis.forEach(element => ul.appendChild(element));
  content.appendChild(ul);
}

export {createContact};