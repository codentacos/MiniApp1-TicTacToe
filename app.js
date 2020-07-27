// must have reset button

//----------------------------------------------//
// MODEL - HANDLES DATA AND STATE OF GAME
//----------------------------------------------//
const td = document.getElementsByTagName('td');
const resetbtn = document.getElementsByClassName('reset')[0];
let currentMove = 'x-class';
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
  for (var i = 0; i < td.length; i++) {
    td[i].classList.value = '';
  }
}

//----------------------------------------------//
// CONTROLLER - HANDLES USER INTERACTIONS
//----------------------------------------------//

// add click events to each square
for (let i = 0; i < td.length; i++) {
  td[i].addEventListener('click', (event) => {
    // adds the current players move to the board
    if (event.currentTarget.classList.value === '') {
      event.currentTarget.classList.add(currentMove);
      handleTurn();
    }
  });
}


// reset game, clears all classes
resetbtn.addEventListener('click', () => {
  reset();
});
