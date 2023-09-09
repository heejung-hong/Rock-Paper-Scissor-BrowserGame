/*---------- constraints ----------*/


/*---- aap's state (variables) ----*/
// State is the data that has to be remembered while the app is running.
// global data accessable to all the functions in the app
let score;  // Object key of 'p' -> Player Score; 't' -> Tie; 'c' -> Computer;
let results;// Object key of 'p' -> Player Results; 't'
            // Values of 'r' -> Rock, 'p' -> Paper, 's' -> Scissor
let winner; // String 'p' if player wins, 't' for tie, 'c' if computer wins

/*--- cached element references ---*/


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

function render() {
  
};