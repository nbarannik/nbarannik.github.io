let robloxInp = document.querySelector('#MoneyInp');
let NickInp = document.querySelector('#NicknameInp');
let robloxTxt = document.querySelector('#roblox');
let rublesTxt = document.querySelector('#rubles');

robloxInp.addEventListener('keyup', function(e) {
  robloxTxt.textContent = e.target.value;
  rublesTxt.textContent = e.target.value / ;
})
