function random() {
  return Math.floor(Math.random() * 100 + 1);
}

let randomORG = random();
const button = document.getElementById('btn');
const uOutput = document.getElementById('result');
const restartButton = document.getElementById('restart');
const uInput = document.getElementById('userInput');

window.onload = function () {
  uInput.focus();
};

function steve() {
  const hurtSteve = document.getElementById('hurt');
  const winSteve = document.getElementById('win');
  const blinkSteve = document.getElementById('blink');

  if (uInput.value == '' || uInput.value == null) {
    blinkSteve.classList.add('active');
    winSteve.classList.remove('active');
  } else if (uInput.value < randomORG) {
    hurtSteve.classList.add('active');
    hurtSteve.autoplay = true;
    hurtSteve.load();
  } else if (uInput.value > randomORG) {
    hurtSteve.classList.add('active');
    hurtSteve.autoplay = true;
    hurtSteve.load();
  }
  if (uInput.value == randomORG) {
    hurtSteve.classList.remove('active');
    winSteve.classList.add('active');
    winSteve.autoplay = true;
    winSteve.load();
  }
}

button.addEventListener('click', () => {
  if (uInput.value == '' || uInput.value == null) {
    uOutput.innerHTML = 'We need a number to test the game';
  } else if (uInput.value > 100 || uInput.value == 0) {
    uOutput.innerHTML = 'Please enter a number between 1 - 100';
  } else if (uInput.value < randomORG) {
    uOutput.innerHTML = 'Your number is too low!';
    steve();
  } else if (uInput.value > randomORG) {
    uOutput.innerHTML = 'Your number is too high!';
    steve();
  }
  if (uInput.value == randomORG) {
    uOutput.innerHTML = 'YEEEY WINNER';
    uOutput.classList.add('winner');
    steve();
    uInput.disabled = true;
    button.disabled = true;
    restartButton.style.display = 'block';
  }

  uInput.value = '';
  uInput.focus();
});
console.log(randomORG);

restartButton.addEventListener('click', () => {
  console.log((randomORG = random()));
  steve();
  restartButton.style.display = 'none';
  uInput.disabled = false;
  button.disabled = false;
  uOutput.innerHTML = '';
  uOutput.classList.remove('winner');
  uInput.focus();
});
