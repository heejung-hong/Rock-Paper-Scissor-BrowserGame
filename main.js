/*---------- constraints ----------*/
const RPS_LOOKUP = {
  r: 'imgs/rock.png',
  p: 'imgs/paper.png',
  s: 'imgs/scissors.png'
};

/*---- aap's state (variables) ----*/
// State is the data that has to be remembered while the app is running.
// global data accessable to all the functions in the app
let score;  // Object key of 'p' -> Player Score; 't' -> Tie; 'c' -> Computer;
let results;// Object key of 'p' -> Player Results; 't'
            // Values of 'r' -> Rock, 'p' -> Paper, 's' -> Scissor
let winner; // String 'p' if player wins, 't' for tie, 'c' if computer wins

/*--- cached element references ---*/
// cached element we can reder to by setting the dot src properties
const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result');

/*-------- event listeners --------*/
// main is the parent so add a guard so that it only recognizes the button
document.querySelector('main')
  .addEventListener('click', handleChoice); // don't invoke handleChoice, just provide

/*----------- functions -----------*/
init(); // calling init function

// Initialize all state, the call render()
function init() {
  scores = { // no let or const so that it gets global variable
    p: 0,
    t: 0,
    c: 0
  };
  results = {
    p: 'r',
    c: 'r'
  };
  winner = 't'
  render();
}

// in response to user interaction (player makes a move),
// we update all impacted state, then finally, call render()
function handleChoice(event) {
  // console.log(event)
  // Guards (do nothing unless one of the three buttons were clicked)
  if (event.target.tagName !== 'BUTTON') return;
  // console.log(event.target.tagName)
  // Player has made a choice
  results.p = event.target.innerText.toLowerCase();
  // Compute a random choice for the computer
  results.c = getRandomRPS();
  winner = getWinner();

  render();
}

function getWinner() {
  
}

function getRandomRPS() {
  const rps = Object.keys(RPS_LOOKUP);
  const rndIdx = Math.floor(Math.random() * rps.length) // 0 to a certain number
  return rps[rndIdx];
}

function renderScores() {
  for (let key in scores) { // 1st loop, key will hold p, 2nd loop, key will hold t, 3rd loop, key will hold c
    const scoreEl = document.getElementById(`${key}-score`)
    scoreEl.innerText = scores[key]; // key is used to access the property of scores object
  }
}

function renderResults() {
  // create src element
  pResultEl.src = RPS_LOOKUP[results.p];
  cResultEl.src = RPS_LOOKUP[results.c];
}

// Transfer/vidualize all state to the DOM
function render() {
  renderScores();
  renderResults();
}