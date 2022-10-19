function createLi(name){
  const li = document.createElement('li');
  li.textContent = name;
  return li
}

function createHeader(){
  const header = document.createElement('header');
  const ul = document.createElement('ul');

  const links = [createLi('Home'), createLi('Menu'), createLi('Contact')];

  links.forEach(element => ul.appendChild(element));

  header.appendChild(ul);

  return header;
}

function createContent(content){
  const firstTitle = document.createElement('h2');
  content.appendChild(firstTitle);

  
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

export {createLi, createHeader, createContent};