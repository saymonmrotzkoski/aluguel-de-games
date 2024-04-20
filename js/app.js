function alterarStatus(id) {
   let jogoClicado = document.getElementById(`game-${id}`);
   let imagen = jogoClicado.querySelector('.dashboard__item__img');
   let botao = jogoClicado.querySelector('.dashboard__item__button');
   
   if (imagen.classList.contains('dashboard__item__img--rented')) {
      imagen.classList.remove('dashboard__item__img--rented');
      botao.classList.remove('dashboard__item__button--return');
      botao.textContent = 'Alugar';
   } else {
      imagen.classList.add('dashboard__item__img--rented');
      botao.classList.add('dashboard__item__button--return');
      botao.textContent = 'Devolver';
   }
}