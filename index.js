

const buttonColours = [`red`, `blue`, `green`, `yellow`];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

const buttons = document.querySelectorAll('.btn');

const playSound = audio => {
  let sound = new Audio(audio);
  sound.play();
};

const wrongAnimation = () => {
  document.querySelector(`body`).classList.toggle(`game-over`);
  setTimeout(() => {
    document.querySelector(`body`).classList.toggle(`game-over`);
  }, 200);
};

const animatePress = currentColour => {
  document.querySelector(`#${currentColour}`).classList.toggle(`pressed`);
  setTimeout(() => {
    document.querySelector(`#${currentColour}`).classList.toggle(`pressed`);
  }, 100);
};

const nextSequence = () => {
  userClickedPattern = [];
  const randomNumber = Math.floor(Math.random() * buttonColours.length);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(`./sounds/${randomChosenColour}.mp3`)
  document.querySelector(`#level-title`).textContent = `Level ${level}`;
  level++;
};

const startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
};

const checkAnswer = currentLevel => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('./sounds/wrong.mp3')
    wrongAnimation();
    document.querySelector('#level-title').textContent =
      'Game over, press A to restart.';
    startOver();
  }
};

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(`./sounds/${userChosenColour}.mp3`)
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });
});

window.addEventListener('keydown', e => {
  if (e.code === 'KeyA') {
    if (!started) {
      nextSequence();
      document.querySelector(`#level-title`).textContent = `Level ${level}`;
      started = true;
    }
  }
});
