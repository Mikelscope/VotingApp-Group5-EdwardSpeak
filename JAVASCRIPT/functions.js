// const getCards = () => {
//   return candidates.map((candidate) => {
//     return `<div class="card">
//             <img src="../IMAGES/${candidate.id}.png"  class="card-image">
//             <div class="card-info">
//               <div class="candidate-votes">
//                 <span class="votes-number-${candidate.id}">${candidate.votes}</span>
//                 <span class="votes-text" onclick>VOTES</span>
//               </div>
//               <div class="line"></div>
//               <div class="candidate-info">
//                 <span class="candidate-name">${candidate.name}</span>
//                 <span class="candidate-country">${candidate.country}</span>
//               </div>
//             </div>
//             <button class="card-btn btn-${candidate.id}">VOTE</button>
//           </div>`;
//   });
// };


const getCardss = () => {
  return candidates.map(candidate => {
    return `
    <div class="elon-vs-edward">
    
    <div class="card-img-container ${candidate.id}-img-container">
        <h3>${candidate.firstName} <br> ${candidate.lastName} </h3>
        <img class="card-image" src="./IMAGES/${candidate.id} vote.png" alt="${candidate.id}"> 
        <button class="vote-text card-btn ${candidate.id}-btn " onclick>  VOTE</button>
    </div>
    
</div>

    
    
    `
  })
}

const voteCounts = () => {
  return candidates.map(candidate => {
    return `
    <div class="vote-count">
<h3 class="card-btn ${candidate.id}-vote-count"> ${candidate.votes} Votes </h3>
</div>
    `
  })
}




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
    document.querySelector(".edward-btn").textContent = "WINNER";

    document.querySelector(".elon-btn").textContent = "LOSER";
  } else {
    document.querySelector(".elon-btn").textContent = "WINNER";

    document.querySelector(".edward-btn").textContent = "LOSER";
  }
}
