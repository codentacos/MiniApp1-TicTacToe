// must have reset button

//----------------------------------------------//
// MODEL - HANDLES DATA AND STATE OF GAME
//----------------------------------------------//
const td = document.getElementsByTagName('td');
const resetbtn = document.getElementsByClassName('reset')[0];
let currentMove = 'x-class';
let winner = false;
let xMoves = [];
let oMoves = [];
// detect win or tie and display message

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
  xMoves = [];
  oMoves = [];
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
}


//----------------------------------------------//
// CONTROLLER - HANDLES USER INTERACTIONS
//----------------------------------------------//

// add click events to each square
for (let i = 0; i < td.length; i++) {
  td[i].addEventListener('click', (event) => {
    // adds the current players move to the board
    if (!winner) {
      if (event.currentTarget.classList.value === '') {
        event.currentTarget.classList.add(currentMove);
        
        // push to array to track squares occupied by each player
        if (currentMove === 'x-class') {
          xMoves.push(Number(event.currentTarget.id));
        } else {
          oMoves.push(Number(event.currentTarget.id));
        }
        
        winnerCheckX();
        winnerCheckO();
        handleTurn();
      }
    }
  });
}


// reset game, clears all classes
resetbtn.addEventListener('click', () => {
  reset();
});
