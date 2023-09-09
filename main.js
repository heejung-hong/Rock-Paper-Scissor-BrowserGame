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

function renderScores() {
  for (let key in scores) { // 1st loop, key will hold p, 2nd loop, key will hold t, 3rd loop, key will hold c
    const scoreEl = document.getElementById(`${key}-score`)
    scoreEl.innerText = scores[key]; // key is used to access the property of scores object
  }
};

function renderResults() {
  // create src element
  pResultEl.src = RPS_LOOKUP[results.p];
  cResultEl.src = RPS_LOOKUP[results.c];
};

function render() {
  renderScores();
  renderResults();
};