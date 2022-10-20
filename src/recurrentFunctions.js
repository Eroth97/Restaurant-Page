function createLi(text){
  const li = document.createElement('li');
  li.textContent = text;
  return li
}

function createTitle(titleName){
  const title = document.createElement('h2');
  title.textContent = titleName;
  return title;
}

function cleanContent(content){
  //Remember: something.children returns an HTML Collection. Not an array!
  const children = [...content.children]; 
  children.forEach(element => content.removeChild(element));
}

export {createLi, cleanContent, createTitle};