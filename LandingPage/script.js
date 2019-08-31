let button = document.querySelector('.mobile-menu-btn');
let menu = document.querySelector('.menu-nav');
let isOpened = false;

function MenuAnim() {
  if(isOpened == false){
    button.classList.add('mobile-menu-btn_active');
    menu.classList.add('menu-nav_active');
    isOpened = true;
  }
  else{
    button.classList.remove('mobile-menu-btn_active');
    menu.classList.remove('menu-nav_active');
    isOpened = false;
  }

}
