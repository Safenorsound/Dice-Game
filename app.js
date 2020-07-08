/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;

scores[(0, 0)];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').getElementsByClassName.display = 'none';

//Anonymous function
document.querySelector('btn-roll').addEventListener('click', function{

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the Result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'

    // 3. Update the roundScore IF the roll is NOT 1. 

    // document.querySelector('#current-0' + activePlayer).textContent = dice;
// document.querySelector('#current-0' + activePlayer).innerHTML =
// '<em>' + dice + '</em>';

// //Hides dice at strt of round

});
