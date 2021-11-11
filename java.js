const button = document.querySelector("#createButton");


function main (){
  button.addEventListener('click', () => {
    createToDo()
  });
}

function createToDo (){
  //Pegar valores dos campos
  let title = document.getElementById('titleInput');
  let description = document.getElementById('descriptionInput');
  //Criar um ToDo com os valores pegos do campo
  //const toDo = new ToDo(title.value, description.value)
  //limpar campo
  title.value = '';
  description.value = '';
}

main();