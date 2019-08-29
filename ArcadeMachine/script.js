

let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for(let i = 0; i<100; i++ ){
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');
let x = 1;
let y = 10;

for(let i=0; i < excel.length; i++){
  if(x>10){
    x=1;
    y--;
  }
  excel[i].setAttribute('posX', x);
  excel[i].setAttribute('posY', y);
  x++;
}

let input = document.createElement('input');
document.body.appendChild(input);



function generateSnake() {
    let posX = Math.round(Math.random() * (10-3)+3);
    let posY = Math.round(Math.random() * (10-1)+1);
    return[posX, posY];
}

let coordinates= generateSnake();
let snakeBody=[document.querySelector('[posX =  "'+ coordinates[0] + '"][posY =  "'+ coordinates[1] + '"]'),
document.querySelector('[posX =  "'+ (coordinates[0]-1) + '"][posY =  "'+ coordinates[1] + '"]'),
document.querySelector('[posX =  "'+ (coordinates[0]-2) + '"][posY =  "'+ coordinates[1] + '"]')];

for(let i=0; i<snakeBody.length; i++){
  snakeBody[i].classList.add('snake-body')
}

snakeBody[0].classList.add('head');

let mouse;

function createMouse() {
  function generateMouse() {
      let posX = Math.round(Math.random() * (10-3)+3);
      let posY = Math.round(Math.random() * (10-1)+1);
      return[posX, posY];
  }

  let mouseCoordinates = generateMouse();
  mouse = document.querySelector('[posX =  "'+ mouseCoordinates[0] + '"][posY =  "'+ mouseCoordinates[1] + '"]');

  while(mouse.classList.contains('snake-body')){
  let mouseCoordinates =   generateMouse();
  mouse = document.querySelector('[posX =  "'+ mouseCoordinates[0] + '"][posY =  "'+ mouseCoordinates[1] + '"]');

  }

  mouse.classList.add('mouse');
}
createMouse();

  let direction = 'right';
  let steps = false;

  let score = 0;
  input.value= ("Score is: " + score);


function move() {
    let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('head');
    snakeBody[snakeBody.length-1].classList.remove('snake-body');
    snakeBody.pop();

    if(direction == 'right'){
      if(snakeCoordinates[0]<10){
        snakeBody.unshift(document.querySelector('[posX =  "'+ (+snakeCoordinates[0]+1) + '"][posY =  "'+ snakeCoordinates[1] + '"]'));
      }else{
        snakeBody.unshift(document.querySelector('[posX =  "'+ 1 + '"][posY =  "'+ snakeCoordinates[1] + '"]'));
      }
    }

  else  if(direction == 'left'){
      if(snakeCoordinates[0]>1){
        snakeBody.unshift(document.querySelector('[posX =  "'+ (+snakeCoordinates[0]-1) + '"][posY =  "'+ snakeCoordinates[1] + '"]'));
      }else{
        snakeBody.unshift(document.querySelector('[posX =  "10"][posY =  "'+ snakeCoordinates[1] + '"]'));
      }
    }

  else  if(direction == 'up'){
      if(snakeCoordinates[1]<10){
        snakeBody.unshift(document.querySelector('[posX =  "'+ snakeCoordinates[0] + '"][posY =  "'+ (+snakeCoordinates[1]+1) + '"]'));
      }else{
        snakeBody.unshift(document.querySelector('[posX =  "'+ snakeCoordinates[0] +'"][posY =  "1"]'));
      }
    }

  else  if(direction == 'down'){
      if(snakeCoordinates[1]>1){
        snakeBody.unshift(document.querySelector('[posX =  "'+ snakeCoordinates[0] + '"][posY =  "'+ (snakeCoordinates[1]-1) + '"]'));
      }else{
        snakeBody.unshift(document.querySelector('[posX =  "'+snakeCoordinates[0] +'"][posY =  "10"]'));
      }
    }


    if(snakeBody[0].getAttribute('posX') == mouse.getAttribute('posX') && snakeBody[0].getAttribute('posY') == mouse.getAttribute('posY')){
      mouse.classList.remove('mouse');
      let a = snakeBody[snakeBody.length-1].getAttribute('posX');
      let b = snakeBody[snakeBody.length-1].getAttribute('posY');
      snakeBody.push(document.querySelector('[posX = "'+a+ '"][posY = "'+b+ '"]'));
      createMouse();
      score++;
      input.value= ("Score is: " + score);
    }


      if(snakeBody[0].classList.contains('snake-body')){

        clearInterval(interval);
        snakeBody[0].style.background = '#693c3c';
        setTimeout(() => {
          alert('You lose! ' +  '   Score: ' + score);
          if(confirm('Reload?')){
            location.reload();
          }
        }, 200);
      }

    snakeBody[0].classList.add('head');
    for(let i = 0; i < snakeBody.length; i++){
      snakeBody[i].classList.add('snake-body');
    }

    steps = true;
}

let interval = setInterval(move, 300);

window.addEventListener('keydown', function (e) {
if(steps = true){
  if(e.keyCode == 37 && direction != 'right'){
    direction = 'left';
    steps = false;
  }
  else  if(e.keyCode == 38 && direction != 'down'){
    direction = 'up';
    steps = false;
  }
  else  if(e.keyCode == 39 && direction != 'left'){
    direction = 'right';
    steps = false;
  }
  else  if(e.keyCode == 40 && direction != 'up'){
    direction = 'down';
    steps = false;
  }
}
});
