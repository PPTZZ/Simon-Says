let buttonColours = [`red`, `blue`, `green`,`yellow`];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;


$(`.btn`).click( function(){
    var userChosenColour = $(this).attr(`id`);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(window).keydown(function(){
    if(!started){
    nextSequence();
    $(`#level-title`).text(`Level ${level}`);
    started = true;
    }
    
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
    }
    } else {
        wrongSound();
        wrongAnimation();
        $(`#level-title`).text(`Game over, press any key to restart.`);
        startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random()*buttonColours.length);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
    $(`#level-title`).text(`Level ${level}`);
    level++;
}

function playSound(name){
    let sound = new Audio(`/sounds/${name}.mp3`);
    sound.play();
}

function wrongSound(){
    let mistake = new Audio(`/sounds/wrong.mp3`);
    mistake.play();
}

function wrongAnimation(){
    $(`body`).toggleClass(`game-over`);
    setTimeout( () => {
        $(`body`).toggleClass(`game-over`)
    }, 200);
}

function animatePress(currentColour){
    $(`#${currentColour}`).toggleClass(`pressed`);
    setTimeout( () => {
        $(`#${currentColour}`).toggleClass(`pressed`); 
    }, 100);
    
}   

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

