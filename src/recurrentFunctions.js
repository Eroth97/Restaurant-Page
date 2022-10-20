function createLi(name){
  const li = document.createElement('li');
  li.textContent = name;
  return li
}

function cleanContent(content){
  //Remember: something.children returns an HTML Collection. Not an array!
  const children = [...content.children]; 
  children.forEach(element => content.removeChild(element));
}

export {createLi, cleanContent};