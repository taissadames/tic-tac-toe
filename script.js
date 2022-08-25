const square = document.querySelectorAll('input');

const restartButton = document.querySelector('#restart');

const result = document.querySelector('.result')

const firstPlayer = document.querySelector('#player'); //to random select the player that will start the game.

var currentPlayer = '_'; // '_' = indefined player; 'X' = X player, 'O' = O player
var winner = '_'; // '_' = nobody wins; 'X' = player X is the winner, 'O' = player O is the winner
var finish;

for (var i = 0; i < 9; i++) {
	square[i].addEventListener('click', (event) => {
		//checks if the square value is empty
		if ( (event.target.value == '_') && (winner == '_')) {
			event.target.value = currentPlayer
			event.target.style.color = 'rgba(255, 255, 255, 0.886)'

			changePlayer(); //change players between X player and O player
			winner = victory(); //checks if any of the players has own the game.
		}
	})
}

//Restarting the game:
restartButton.addEventListener('click', (event) => {
	for (var i = 0; i< 9; i++) {
		square[i].value='_'; //clear all squares
		square[i].style.color='#cc7f9b'; //value '_' appears
		square[i].style.backgroundColor='#cc7f9b'; //makes background 'invisible'
	}
	result.innerText = " "
	winner = '_' //Reset winner
	randomSelectPlayer() //Random select first player
})

var randomSelectPlayer = function() {
	if (Math.floor(Math.random() * 2) == 0) {
		currentPlayer = "O" //defines player O as current player
		firstPlayer.innerText = "O" //displays current player as player O
	} else {
		currentPlayer = "X" //defines current player as player X
		firstPlayer.innerText = "X" //displays current player as player X
	}
}
randomSelectPlayer()

//Alternate turns between player X and player O
var changePlayer = function() {
	if (currentPlayer == 'X') {
		currentPlayer = 'O';
		firstPlayer.innerText = 'O';	
	} else {
		currentPlayer = 'X';
		firstPlayer.innerText = 'X';
	}
}

//Winning possibilities: Color changes if a combination is achieved.
var victory = function() {
	if ((square[0].value == square[1].value) && (square[1].value == square[2].value) && square[0].value != '_' ) {
		square[0].style.backgroundColor = 'orchid';
		square[1].style.backgroundColor = 'orchid';
		square[2].style.backgroundColor = 'orchid';

		return result.innerText = "Player " + square[0].value + " is the winner!"

	} else if ((square[3].value == square[4].value) && (square[4].value == square[5].value) && square[3].value!='_' ) {
		square[3].style.backgroundColor = 'orchid';
		square[4].style.backgroundColor = 'orchid';
		square[5].style.backgroundColor = 'orchid';

		return result.innerText = "Player " + square[3].value  + " is the winner!"

	} else if ((square[6].value == square[7].value) && (square[7].value == square[8].value) && square[6].value != '_' ) {
		square[6].style.backgroundColor = 'orchid';
		square[7].style.backgroundColor = 'orchid';
		square[8].style.backgroundColor = 'orchid';

		return result.innerText = "Player " + square[6].value + " is the winner!"

	} else if ((square[0].value == square[3].value) && (square[3].value == square[6].value) && square[0].value != '_' ) {
		square[0].style.backgroundColor = 'orchid';
		square[3].style.backgroundColor = 'orchid';
		square[6].style.backgroundColor = 'orchid';

		return result.innerText = "Player " + square[0].value + " is the winner!"

	} else if ((square[1].value == square[4].value) && (square[4].value == square[7].value) && square[1].value != '_' ) {
		square[1].style.backgroundColor = 'orchid';
		square[4].style.backgroundColor = 'orchid';
		square[7].style.backgroundColor = 'orchid';

		return result.innerText = "Player " + square[1].value+ " is the winner!"

	} else if ((square[2].value == square[5].value) && (square[5].value == square[8].value) && square[2].value != '_' ) {
		square[2].style.backgroundColor = 'orchid';
		square[5].style.backgroundColor = 'orchid';
		square[8].style.backgroundColor = 'orchid';

		return result.innerText = "Player " + square[2].value + " is the winner!"

	} else if ((square[0].value == square[4].value) && (square[4].value == square[8].value) && square[0].value != '_' ) {
		square[0].style.backgroundColor = 'orchid';
		square[4].style.backgroundColor = 'orchid';
		square[8].style.backgroundColor = 'orchid';
		
		return result.innerText = "Player " + square[0].value + " is the winner!"

	} else if ((square[2].value == square[4].value) && (square[4].value == square[6].value) && square[2].value != '_' ) {
		square[2].style.backgroundColor = 'orchid';
		square[4].style.backgroundColor = 'orchid';
		square[6].style.backgroundColor = 'orchid';

		return result.innerText = "Player " + square[2].value + " is the winner!"
	} else if ((winner == '_') && (square[0].value != '_') && (square[1].value != '_') && (square[2].value != '_') && (square[3].value != '_') && (square[4].value != '_') && (square[5].value != '_') && (square[6].value != '_') && (square[7].value != '_')&& (square[8].value != '_')) {
		return result.innerText = "It's a draw! Play again."
	}						
    return '_'
}