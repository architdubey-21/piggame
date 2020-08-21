/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game





//Coding Challenge 3
-Consecutive 2 times 6 reset the ENTIRE score and moves to next player
-add input field to insert value for user to set the limit of the score
-add another dice if one of them is 1 current score will be zero

*/


var document, console, scores, roundScore, activePlayer, gamePlaying, prevDice, targetScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){    
    
    targetScore = document.getElementById('target').value;
    if(targetScore == 0 || isNaN(targetScore)){
        alert('Enter Your limit Score in numbers!!!');
    }
    else{
    if(gamePlaying){    
        //Random Number
        var dice = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);
        //Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice+ '.png';                  
        document.getElementById('dice-2').src = 'dice-' + dice2+ '.png';                  
        
        //Update the score if the rolled number is not 1
        
//        //If 2 consecutive six numbers appeared
//        
//        if(prevDice === 6 && dice === 6)
//            {
//                document.querySelector('#score-' + activePlayer).textContent = '0';
//                document.getElementById('current-' + activePlayer).textContent = '0';
//                scores[activePlayer] = 0;
//                nextPlayer();
//                console.log(dice);
//            }
//        else{
//            if(dice !== 1){
//                //Add score
//                roundScore += dice;
//                document.getElementById('current-' + activePlayer).textContent = roundScore;
//                prevDice = dice;
//                console.log(dice);
//            }
//            else{
//                //Next player
//                console.log(dice);
//                nextPlayer();
//            }
//        }
        
        //Update the score if the rolled number is not 1
        if(dice !== 1 && dice2 !== 1){
            //Add score
            roundScore += dice + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else{
            //Next player
            nextPlayer();
        }
    }
    }
}); 

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
//Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    
//Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    }
//Check if the player won the game
    if(scores[activePlayer] >= targetScore){
        //won the game
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else{
//next player
    nextPlayer();
    }
});

function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        prevDice = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');        
        document.getElementById('dice-1').style.display = 'none';    
        document.getElementById('dice-2').style.display = 'none';    
}

document.querySelector('.btn-new').addEventListener('click', init);  

function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    prevDice = 0;
    targetScore = 0;
    document.querySelector('#target').value = '';
    document.querySelector('#target').placeholder = ' Enter Score';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    //document.querySelector('#current-' + activePlayer).textContent = dice;     ////setter
    //var x = document.querySelector('#score-0').textContent;                    ////getter 
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
} 




