import { createHeader } from './header';
import { createContent } from './homepage';
import { cleanContent } from './recurrentFunctions';
import { createMenu } from './menu.js';


let content = document.getElementById('content');


createContent(content);
document.body.insertBefore(createHeader(content), content);

const links = document.querySelectorAll('.link');
links.forEach(element => element.addEventListener('click', () => cleanContent(content)));

links[0].addEventListener('click', () => createContent(content));
links[1].addEventListener('click', () => createMenu(content));