/* Réalisation de l'effet flip sur les cards de la homepage*/
const card = document.querySelector('.card');
const front = card.querySelector('.front');
const back = card.querySelector('.back');

card.addEventListener('click', function() {
  front.classList.toggle('flip');
  back.classList.toggle('flip');
});
 

