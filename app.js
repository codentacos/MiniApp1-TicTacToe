// must have reset button

//----------------------------------------------//
// MODEL - HANDLES DATA AND STATE OF GAME
//----------------------------------------------//
let currentMove = 'x-class';
// first move is always X
// alternate player icon each turn
// detect win or tie and display message

let handleTurn = () => {
  if (currentMove === 'x-class') {
    currentMove = 'o-class';
  } else {
    currentMove = 'x-class';
  }
  
}

//----------------------------------------------//
// CONTROLLER - HANDLES USER INTERACTIONS
//----------------------------------------------//

const td = document.getElementsByTagName('td');

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

