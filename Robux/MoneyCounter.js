let robloxInp = document.querySelector('#MoneyInp');
let NickInp = document.querySelector('#NicknameInp');
let robloxTxt = document.querySelector('#roblox');
let rublesTxt = document.querySelector('#rubles');
let roblox = 0;
let money = robloxInp / 2.1;
money.toPrecision(1);

robloxInp.addEventListener('keyup', function(e) {
  robloxTxt.textContent = e.target.value;
  rublesTxt.textContent = Math.round(e.target.value / 2.1);
})
