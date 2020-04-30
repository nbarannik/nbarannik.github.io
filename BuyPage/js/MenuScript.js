let button = document.querySelector('.m-menu-btn');
let menu = document.querySelector('.menu-content');
let isOpened = false;


function MenuAnim() {
  if(isOpened == false){
    menu.classList.add('menu-content-active');
    button.classList.add('m-menu-btn-active');
    isOpened = true;
  }
  else{
    menu.classList.remove('menu-content-active');
    button.classList.remove('m-menu-btn-active');
    isOpened = false;
  }

}
