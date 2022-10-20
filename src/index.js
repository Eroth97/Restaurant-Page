import { createHeader } from './header';
import { createContent } from './homepage';
import { cleanContent } from './recurrentFunctions';


let content = document.getElementById('content');


createContent(content);
document.body.insertBefore(createHeader(content), content);

const links = document.querySelectorAll('.link');
links.forEach(element => element.addEventListener('click', () => cleanContent(content)));