var answer = document.querySelector(".answer-button");
var correct = document.querySelector(".correct-answer");
var incorrect = document.querySelector(".incorrect-answer");
var timerEl = document.querySelector(".timer-count");
var startBtn = document.querySelector(".start-button");

var chosenQuestion = "";
var correctCounter = 0;
var incorrectCounter = 0; 
var isCorrect = false;
var timer;
var timerCount;

var choicesInChosenQuestion = [""];
var incorrecrAnswerInChosenAnswer = [""]; 

var correctAnswer = ["When a keyword is declared", "When a user clicks the mouse", "A collection of data or variables", "Boolean"];

var incorrectAnswer = (!correctAnswer);

var question = ["What is a variable?", "Which is a DOM event?", "An array in JavaScript can be used to store", "Commonly used data-types include..."];

// The init function is called when the page loads 
function init() {
    getCorrectAnswers();
    getIncorrectAnswers();
    // getlosses();
  }

  // The startGame function is called when the start button is clicked
function startQuiz() {
    isCorrect = false;
    timerCount = 115;
    // Prevents start button from being clicked when round is in progress
    startBtn.disabled = true;
    renderQuestions()
    startTimer()
  }

  function allDone() {
    // wordBlank.textContent = "YOU WON!!!🏆 ";
    // winCounter++
    // startButton.disabled = false;
    // setWins()
  }

  // Create a function for the form to input user initials

  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--; // Look up how to subtract timer by 10 seconds
      timerEl.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if correct condition is met
        if (isCorrect && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          allDone();
        } 
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        allDone();
      }
    }, 1000);
  }

  // Creates blanks on screen
function renderQuestions() {
  // Randomly picks questions from the questions array
  chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
  choicesInChosenQuestion = chosenQuestion.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ")
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}