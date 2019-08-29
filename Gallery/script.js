let picts = document.querySelectorAll('.pict');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let current = 0;

//Убирает все картинки с экрана
function reset() {
  for(let i = 0; i < picts.length; i++){
    picts[i].style.display = 'none';
  }
}



 arrowRight.addEventListener('click', function () {
   if(current == 3){
     reset();
     picts[0].style.display = "block";
     current = 0;
   }
   else{
     reset();
     picts[current + 1].style.display = "block";
     current++;
   }
 });


 arrowLeft.addEventListener('click', function () {
   if(current == 0){
     reset();
     picts[3].style.display = "block";
     current = 3;
   }
   else{
     reset();
     picts[current - 1].style.display = "block";
     current--;
   }
 });
