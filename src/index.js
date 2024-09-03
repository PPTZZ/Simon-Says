import wrong from 'url:./sounds/wrong.mp3';
import blue from 'url:./sounds/blue.mp3';
import green from 'url:./sounds/green.mp3';
import red from 'url:./sounds/red.mp3';
import yellow from 'url:./sounds/yellow.mp3';

const buttonColours = [`red`, `blue`, `green`, `yellow`];
const buttonSounds = [red, blue, green, yellow];
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
    wrongAnimation();
    playSound(wrong);
    document.querySelector('#level-title').textContent =
      'Game over, press A to restart.';
    startOver();
  }
};

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const userChosenColour = e.target.id;
    const userChosenSound = buttonColours.findIndex(e => e == userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    playSound(buttonSounds[userChosenSound])
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
