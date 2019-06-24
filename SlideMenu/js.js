let menu = document.querySelector('.menu');
let button = document.querySelector('.button');
console.log(button);
var isActive = false;




function MenuMove() {
if (isActive == true){
  menu.style.transform = "translateX(-100%)";
  button.style.left = "0";
  isActive = false;
}
else{
  menu.style.transform = "translateX(0%)";
  isActive = true;
  button.style.left = "30%";
}
}
