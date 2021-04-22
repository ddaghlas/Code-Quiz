var introEl = document.querySelector(".intro"); // L13 <div></div>
var viewHighscoreBtn = document.querySelector("#view-highscore"); // L14 <button></button>
var timerEl = document.querySelector(".timer-count"); // L15 <div></div>
var startBtn = document.querySelector("#start-button"); // L21 <button></button>
var questionsEl = document.querySelector("#questions-container"); // L24 <div></div>
var answerEl = document.querySelector("#answers-container"); // L25 <div></div>
var chosenAnswerBtn = document.querySelector(".chosen-answer"); // L27 <button></button>
var rightWrongEl = document.querySelector("#right-wrong"); // L27 <div></div>
var displayCorrectAnswer = document.querySelector(".correct-answer"); // L27 <div></div>
var endEl = document.querySelector(".end"); // L30 <div></div>
var submitBtn = document.querySelector("#submitBtn");
var score = document.querySelector("#score"); // L39 <h2></h2>
var initials = document.querySelector(".initials");
var finalPageEl = document.querySelector(".finalPage");
// var highscorePage = document.querySelector("#highscore");
var playAgain = document.querySelector("#play-again");
// var again = document.querySelector(".tryAgain");




var timeAlotted = 115;
// var questions = [''];
var chosenQuestion = "";
var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0; 
// var correctAnswer = false;
// var timer;
// var timerCount;

var choicesAnswersEl = " ";
// var incorrecrAnswerInChosenAnswer = [""]; 

// var correctAnswer = [];

var incorrectAnswer = (!correctAnswer);

var timer = function() {
  time = time - 1;
  timerEl.textContent = time;
  if (time < 0) {
    endQuiz();
  }
}

var questions = [
  {
    question: "What is a variable?", 
    answers: {
      a: "When a keyword is declared",
      b: "When a user clicks the mouse",
      c: "A collection of data or variables",
      d: "Boolean"
      },
      correctAnswer: "a"
    },
    {
      question: "Which is a DOM event?", 
      answers: {
        a: "When a keyword is declared",
        b: "When a user clicks the mouse",
        c: "A collection of data or variables",
        d: "Boolean"
        },
        correctAnswer: "b"
    },
    {
      question: "An array in JavaScript can be used to store", 
      answers: {
        a: "When a keyword is declared",
        b: "When a user clicks the mouse",
        c: "A collection of data or variables",
        d: "Boolean"
        },
        correctAnswer: "c"
    },
    {
      question: "Commonly used data-types include...", 
      answers: {
        a: "When a keyword is declared",
        b: "When a user clicks the mouse",
        c: "A collection of data or variables",
        d: "Boolean"
        },
        correctAnswer: "d"
    }
  ];

  var questionEl = document.querySelector(".code-quiz");
  var questionsIndex = 0;
  var time = questions.length * 10;


// The init function is called when the page loads 
function init() {
  questionEl.classList.remove("hide")
  introEl.classList.add("hide")
  timerEl.classList.remove("hide")
  timerInterval = setInterval(timer, 1000)
  timerInterval.textContent = time;
  launchQuestion()
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