
//----------------------------------------------//
// MODEL - HANDLES DATA AND STATE OF GAME
//----------------------------------------------//
const td = document.getElementsByTagName('td');
const table = document.getElementsByTagName('table')[0];
const resetbtn = document.getElementsByClassName('reset')[0];
let currentMove = 'x-class';
let winner = false;

// alternates player 
let handleTurn = () => {
  if (currentMove === 'x-class') {
    currentMove = 'o-class';
  } else {
    currentMove = 'x-class';
  }
}

let reset = () => {
  currentMove = 'x-class';
  winner = false;
  for (let i = 0; i < td.length; i++) {
    td[i].classList.value = '';
  }
}

let winnerCheckX = () => {
  // check for horizontal X wins --------------------------------------------------  
  if (
    td[0].classList.value === 'x-class' &&
    td[1].classList.value === 'x-class' &&
    td[2].classList.value === 'x-class' ||
    td[3].classList.value === 'x-class' &&
    td[4].classList.value === 'x-class' &&
    td[5].classList.value === 'x-class' ||
    td[6].classList.value === 'x-class' &&
    td[7].classList.value === 'x-class' &&
    td[8].classList.value === 'x-class') {
    winner = true;
  }
  // ----------------------------------------------------------------------------

  // check for vertical X wins --------------------------------------------------
  if (
    td[0].classList.value === 'x-class' &&
    td[3].classList.value === 'x-class' &&
    td[6].classList.value === 'x-class' ||
    td[1].classList.value === 'x-class' &&
    td[4].classList.value === 'x-class' &&
    td[7].classList.value === 'x-class' ||
    td[2].classList.value === 'x-class' &&
    td[5].classList.value === 'x-class' &&
    td[8].classList.value === 'x-class') {
    winner = true;
  }
  // ----------------------------------------------------------------------------

  // check for diagonal X wins --------------------------------------------------
  if (
    td[0].classList.value === 'x-class' &&
    td[4].classList.value === 'x-class' &&
    td[8].classList.value === 'x-class' ||
    td[2].classList.value === 'x-class' &&
    td[4].classList.value === 'x-class' &&
    td[6].classList.value === 'x-class') {
    winner = true;
  }
  // ----------------------------------------------------------------------------
  return winner;
}

let winnerCheckO = () => {
  // check for horizontal O wins --------------------------------------------------  
  if (
    td[0].classList.value === 'o-class' &&
    td[1].classList.value === 'o-class' &&
    td[2].classList.value === 'o-class' ||
    td[3].classList.value === 'o-class' &&
    td[4].classList.value === 'o-class' &&
    td[5].classList.value === 'o-class' ||
    td[6].classList.value === 'o-class' &&
    td[7].classList.value === 'o-class' &&
    td[8].classList.value === 'o-class') {
    winner = true;
  }
  // ----------------------------------------------------------------------------

  // check for vertical O wins --------------------------------------------------
  if (
    td[0].classList.value === 'o-class' &&
    td[3].classList.value === 'o-class' &&
    td[6].classList.value === 'o-class' ||
    td[1].classList.value === 'o-class' &&
    td[4].classList.value === 'o-class' &&
    td[7].classList.value === 'o-class' ||
    td[2].classList.value === 'o-class' &&
    td[5].classList.value === 'o-class' &&
    td[8].classList.value === 'o-class') {
    winner = true;
  }
  // ----------------------------------------------------------------------------

  // check for diagonal O wins --------------------------------------------------
  if (
    td[0].classList.value === 'o-class' &&
    td[4].classList.value === 'o-class' &&
    td[8].classList.value === 'o-class' ||
    td[2].classList.value === 'o-class' &&
    td[4].classList.value === 'o-class' &&
    td[6].classList.value === 'o-class') {
    winner = true;
  }
  // ----------------------------------------------------------------------------
  return winner;
}

let checkTie = () => {
  // let tie = false;
  let boardFull = false;

  for (let i = 0; i < td.length; i++) {
    if (td[i].classList.value === '') {
      return;
    }
    boardFull = true;
  }
  return boardFull;
}

//----------------------------------------------//
// CONTROLLER - HANDLES USER INTERACTIONS
//----------------------------------------------//

table.addEventListener('click', (event) => {
  // adds the current players move to the board
  // fix ability to add move to whole table instead of just TD elements
  console.log(event.target);
    if (!winner) {
      if (event.target.classList.value === '') {
        event.target.classList.add(currentMove);
      
        // check for winners and tie games
        if (winnerCheckX()) {
          alert('Player X Wins!!!');
        } else if (winnerCheckO()) {
          alert('Player O Wins!!!');
        }
        
        
        if (checkTie() && !winner) {
          alert('The game ended in a Tie!');
        }
        // go to next player
        handleTurn();
      }
    }
});


// reset game, clears all classes
resetbtn.addEventListener('click', () => {
  reset();
});
