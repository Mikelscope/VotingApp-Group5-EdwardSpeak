const getCards = () => {
  return candidates.map((candidate) => {
    return `<div class="card">
            <img src="../IMAGES/${candidate.id}.png"  class="card-image">
            <div class="card-info">
              <div class="candidate-votes">
                <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                <span class="votes-text" onclick>VOTES</span>
              </div>
              <div class="line"></div>
              <div class="candidate-info">
                <span class="candidate-name">${candidate.name}</span>
                <span class="candidate-country">${candidate.country}</span>
              </div>
            </div>
            <button class="card-btn btn-${candidate.id}">VOTE</button>
          </div>`;
  });
};

//   Adds one vote to the corresponding candidate
function addVote(index, candidate, votesE1) {
   // increase vote by one as long as there's not a winner
   if (!winner) {
    // increase vote by one
    candidates[index].votes++;

    // update votes element
    votesE1.textContent = candidates[index].votes;

    // check if the candidate won
    isWinner(candidate, candidates[index].votes);
  }
}

// if candidate wins, set winner varialble to true
const isWinner = (candidate, votes) => {
  if (votes == 10) {
    winner = true;

    setWinnerLoser(candidate);
  }
};

// Shows who won and who lost
const setWinnerLoser = (candidate) => {
  if (candidate === "edward") {
    document.querySelector(".btn-edward").textContent = "WINNER";

    document.querySelector(".btn-elon").textContent = "LOSER";
  } else {
    document.querySelector(".btn-elon").textContent = "WINNER";

    document.querySelector(".btn-edward").textContent = "LOSER";
  }
}
