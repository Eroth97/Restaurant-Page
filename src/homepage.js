import { createLi, createTitle } from "./recurrentFunctions";

function createContent(content){
  content.appendChild(createTitle('The Crazy Restaurant'));

  
  const presentation = document.createElement('div');
  presentation.classList.add('presentation');
  presentation.innerText = 'The Crazy Restaurant is a place where you can eat, some normal food. We are crazy because we are building this webpage using JS only, even though now we are using pieces of html and CSS.'
  content.appendChild(presentation);

  
  const hours = document.createElement('div');
  hours.classList.add('hours');
  
  const secondTitle = document.createElement('h3');
  secondTitle.innerText = 'Hours';
  hours.appendChild(secondTitle);

  const ul = document.createElement('ul');
  const lis = [createLi('Sunday 8:00-16:00'), createLi('Monday 8:00-16:00'), createLi('Tuesday 8:00-16:00'), createLi('Wednesday 8:00-16:00'), createLi('Thursday 8:00-16:00'), createLi('Friday 8:00-16:00'), createLi('Saturday 8:00-16:00')];
  lis.forEach(element => ul.appendChild(element));
  hours.appendChild(ul);
  content.appendChild(hours);
}

export {createContent};