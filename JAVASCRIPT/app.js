// keeps track of a winner
let winner = false;

// get a refernce to the card div
const cards = document.querySelector(".elon-vs-edward");

// Render cards
cards.innerHTML = getCards();

// get a refernce to the votes div
const votes = document.querySelector(".vote-count")

// render the vote count
votes.innerHTML = voteCounts()

// Get a refernce to the cards buttons
const cardButtons = document.querySelectorAll(".card-btn");

//  Get a reference to the edward votes  span
const edwardVotesE1 = document.querySelector(".edward-vote-count");

//  Get a reference to the elon votes  span
const elonVotesE1 = document.querySelector(".elon-vote-count");

// set event listeners for the vote buttons
cardButtons.forEach((cardButton) => {
  cardButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("edward-btn")) {
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

