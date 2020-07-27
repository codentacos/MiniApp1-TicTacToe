// first move is always X
// detect win or tie and display message
// must have reset button


let td = document.getElementsByTagName('td');

// add click events to each square
for (let i = 0; i < td.length; i++) {
  td[i].addEventListener('click', (event) => {
    console.log(event.currentTarget.id)
  });
}
