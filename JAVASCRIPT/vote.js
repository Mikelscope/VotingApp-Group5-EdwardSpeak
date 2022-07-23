//Defining Event Listeners
document.getElementById('vote-elon').onclick = voteElon;
//Function for add votes
function voteElon(){
    document.getElementById('elon-vote-count').textContent = '1 Vote';
}