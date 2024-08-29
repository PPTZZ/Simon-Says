const buttonColours = [`red`, `blue`, `green`,`yellow`];
const gamePattern = [];
const userClickedPattern = [];
let started = false;
let level = 0;

const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const userChosenColour = e.target.id;
        console.log(userChosenColour);
    })
});

// $(`.btn`).click( function(){
    
//     userClickedPattern.push(userChosenColour);
//     playSound(userChosenColour);
//     animatePress(userChosenColour);
//     checkAnswer(userClickedPattern.length-1);
// });

// $(window).keydown(function(){
//     if(!started){
//     nextSequence();
//     $(`#level-title`).text(`Level ${level}`);
//     started = true;
//     }
    
// })

// function checkAnswer(currentLevel){
//     if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//         if (userClickedPattern.length === gamePattern.length){
//             setTimeout(function(){
//                 nextSequence();
//             }, 1000);
//     }
//     } else {
//         wrongSound();
//         wrongAnimation();
//         $(`#level-title`).text(`Game over, press any key to restart.`);
//         startOver();
//     }
// }

// function nextSequence(){
//     userClickedPattern = [];
//     let randomNumber = Math.floor(Math.random()*buttonColours.length);
//     let randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
//     playSound(randomChosenColour);
//     $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
//     $(`#level-title`).text(`Level ${level}`);
//     level++;
// }

// function playSound(name){
//     let sound = new Audio(`/sounds/${name}.mp3`);
//     sound.play();
// }

// function wrongSound(){
//     let mistake = new Audio(`/sounds/wrong.mp3`);
//     mistake.play();
// }

// function wrongAnimation(){
//     $(`body`).toggleClass(`game-over`);
//     setTimeout( () => {
//         $(`body`).toggleClass(`game-over`)
//     }, 200);
// }

// function animatePress(currentColour){
//     $(`#${currentColour}`).toggleClass(`pressed`);
//     setTimeout( () => {
//         $(`#${currentColour}`).toggleClass(`pressed`); 
//     }, 100);
    
// }   

// function startOver() {
//     level = 0;
//     gamePattern = [];
//     started = false;
// }

