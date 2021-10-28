function main (){
  const botao = document.querySelector('#butaozimTop');
  const listinha = document.querySelector('#listinhaTop');
  const campoTexto = document.querySelector('#campoTexto');

  botao.addEventListener ('click', () => {
    let item = document.createElement('li');
    let texto = campoTexto.value;
    item.innerHTML = texto;
    listinha.appendChild(item);
    campoTexto.value = '';
  });
}

main();