let button = document.querySelector('.m-menu-btn');
let menu = document.querySelector('.menu-content');
let isOpened = false;


function MenuAnim() {
  if(isOpened == false){
    menu.classList.add('menu-content-active');
    isOpened = true;
  }
  else{
    menu.classList.remove('menu-content-active');
    isOpened = false;
  }

}
