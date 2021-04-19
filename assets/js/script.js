var correct = document.querySelector(".correct-answer");
var incorrect = document.querySelector(".incorrect-answer");
var timerEl = document.querySelector(".timer-count");
var startBtn = document.querySelector(".start-button");

var chosenAnswer = "";
var correctCounter = 0;
var incorrectCounter = 0; 
var isCorrect = true;
var timer;
var timerCount;

var correctAnswerInChosenWord = [""];
var incorrecrAnswerInChosenWord = [""]; 

var correctAnswer1 = ("When a keyword is declared");
var correctAnswer2 = ("When a user clicks the mouse");
var correctAnswer3 = ("A collection of data or variables");
var correctAnswer4 = ("Boolean")
var incorrectAnswers = (!isCorrect);

var question1 = ["What is a variable?"];
var question2 = ["Which is a DOM event?"];
var question3 = ["An array in JavaScript can be used to store"];
var question4 = ["Commonly used data-types include..."];

// The init function is called when the page loads 
function init() {
    getCorrectAnswers();
    getIncorrectAnswers();
    // getlosses();
  }

  // The startGame function is called when the start button is clicked
function startGame() {
    isCorrect = false;
    timerCount = 115;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
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
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isCorrect && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          allDone();
        } else if (isIncorrect)
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
  // Randomly picks word from words array
  chosenAnswer = questions[Math.floor(Math.random() * questions.length)];
  lettersInChosenWord = chosenWord.split("");
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