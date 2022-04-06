const charmander = document.querySelector('#charmander')
const bulbasaur = document.querySelector('#bulbasaur')
const squirtle = document.querySelector('#squirtle')

let trainerScore = 0;
let rivalScore = 0;

document.querySelector('#charmanderChoose').addEventListener('click', checkWinnerCharmander);
document.querySelector('#bulbasaurChoose').addEventListener('click', checkWinnerBulbasaur);
document.querySelector('#squirtleChoose').addEventListener('click', checkWinnerSquirtle);
document.querySelector('#reset').addEventListener('click', reset);

function reset(){
    trainerScore = 0;
    rivalScore = 0;
    document.querySelector('#trainerScore').innerText = trainerScore;
    document.querySelector('#rivalScore').innerText = rivalScore;
}

function limiter(){  //Scoreboard resets with an alert
        alert(`WOW! The Scoreboard Limit has been reached! Resetting . . .`);
        reset();
}


function charmanderBulbasaurSquirtle(){
    let random = Math.random();
    if (random < 0.33){
        rivalCharmander.classList.add('hidden');//add the hidden css class! 
        rivalBulbasaur.classList.add('hidden');//add the hidden css class! 
        rivalSquirtle.classList.add('hidden');//add the hidden css class! 
        rivalCharmander.classList.toggle('hidden');//we will toggle hidden!
        return 'Charmander';
    }else if (random < 0.66){
        rivalCharmander.classList.add('hidden');//add the hidden css class! 
        rivalBulbasaur.classList.add('hidden');//add the hidden css class! 
        rivalSquirtle.classList.add('hidden');//add the hidden css class! 
        rivalBulbasaur.classList.toggle('hidden');//we will toggle hidden!
        return 'Bulbasaur'
    }else{
        rivalCharmander.classList.add('hidden')//add the hidden css class! 
        rivalBulbasaur.classList.add('hidden')//add the hidden css class! 
        rivalSquirtle.classList.add('hidden')//add the hidden css class! 
        rivalSquirtle.classList.toggle('hidden')//we will toggle hidden!
        return 'Squirtle'
    }
}


function checkWinner(trainerChoice){ //Check if the trainer meets the win, lose, or tie conditions, therefore our paramter is trainerChouce
    let opponentChoice = charmanderBulbasaurSquirtle();
    console.log(`Your rival chose ${opponentChoice}!`);
    document.querySelector('#rivalChoice').innerText = (`Your rival chose ${opponentChoice}!`);
    if ( (trainerChoice === 'Charmander' && opponentChoice === 'Bulbasaur')||
    (trainerChoice === 'Bulbasaur' && opponentChoice === 'Squirtle')||
    (trainerChoice === 'Squirtle' && opponentChoice === 'Charmander') ){
        console.log(`Your rival's ${opponentChoice} FAINTED! Your ${trainerChoice} WINS!`);
        document.querySelector('#outcome').innerText = (`Your rival's ${opponentChoice} FAINTED! Your ${trainerChoice} WINS!`);
        trainerScore++; 
        document.querySelector('#trainerScore').innerText = trainerScore;
        if (trainerScore > 55){
            limiter();
        }



}else if(trainerChoice === opponentChoice){
    console.log(`Both ${opponentChoice}s are still standing! You both TIE!`);
    document.querySelector('#outcome').innerText = (`Both ${opponentChoice}s are still standing! You both TIE!`);
}else{
    console.log(`Your ${trainerChoice} FAINTED! You LOSE!`);
    document.querySelector('#outcome').innerText = (`Your ${trainerChoice} FAINTED! You LOSE!`);
    rivalScore++;
    document.querySelector('#rivalScore').innerText = rivalScore;
    if (rivalScore > 55) {
        limiter();
    }
}
}

//The following functions pass the selected pokemon through the
//checkWinner function
function checkWinnerCharmander(){
    charmander.classList.add('hidden')//add the hidden css class! 
    bulbasaur.classList.add('hidden')//add the hidden css class! 
	squirtle.classList.add('hidden')//add the hidden css class! 
	charmander.classList.toggle('hidden')//we will toggle hidden!
    checkWinner('Charmander');
}

function checkWinnerBulbasaur(){
    charmander.classList.add('hidden')//add the hidden css class! 
    bulbasaur.classList.add('hidden')//add the hidden css class! 
	squirtle.classList.add('hidden')//add the hidden css class! 
	bulbasaur.classList.toggle('hidden')//we will toggle hidden!
    checkWinner('Bulbasaur');
}

function checkWinnerSquirtle(){
    charmander.classList.add('hidden')//add the hidden css class! 
    bulbasaur.classList.add('hidden')//add the hidden css class! 
	squirtle.classList.add('hidden')//add the hidden css class! 
	squirtle.classList.toggle('hidden')//we will toggle hidden!
    checkWinner('Squirtle');
}
