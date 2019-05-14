const card = document.querySelector('.card');

card.addEventListener('mousemove', rotate)
function rotate(event) {
const  cardItem =  this.querySelector('.card-item');
console.log(cardItem.style);
}
