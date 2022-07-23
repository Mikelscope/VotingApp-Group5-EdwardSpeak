// keeps track of a winner
let winner = false;

// get a refernce to the card div
const cards = document.querySelector(".cards");

// Render cards
cards.innerHTML = getCards();

// Get a refernce to the cards buttons
const cardButtons = document.querySelectorAll(".card-btn");

//  Get a reference to the edward votes  span
const edwardVotesE1 = document.querySelector(".votes-number-edward");

//  Get a reference to the elon votes  span
const elonVotesE1 = document.querySelector(".votes-number-elon");

// set event listeners for the vote buttons
cardButtons.forEach((cardButton) => {
  cardButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-edward")) {
      addVote(0, "edward", edwardVotesE1);
    } else {
      addVote(1, "elon", elonVotesE1);
    }
  });
});


// panels.forEach( (panel) => {
//   panel.addEventListener('click', () => {
//       removeActiveClasses()
//       panel.classList.add('active');
//   })
// });

// function increaseVote() {

// }

