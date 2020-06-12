let button = document.querySelector('.m-menu-btn');
let menu = document.querySelector('.menu-content');
let header_txt = document.querySelector('.titles-form');
let isOpened = false;


function MenuAnim() {
  if(isOpened == false){
    menu.classList.add('menu-content-active');
    button.classList.add('m-menu-btn-active');
    header_txt.classList.add('titles-form-disabled');
    isOpened = true;
  }
  else{
    menu.classList.remove('menu-content-active');
    button.classList.remove('m-menu-btn-active');
    header_txt.classList.remove('titles-form-disabled');
    isOpened = false;
  }

}
