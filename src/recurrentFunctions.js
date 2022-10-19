function createLi(name){
  const li = document.createElement('li');
  li.textContent = name;
  return li
}

export {createLi};