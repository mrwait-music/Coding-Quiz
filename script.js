// Click start button-game begins
// Timer starts & Given a question
// Answer question->Given new question
// Answer Incorrectly->Time is subtracted
// When all questions are answered or Time=0-> Game over
// when game is over->Enter Initials for highscore

// Clock


var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timer;
var timerCount;
var score = 0;
var answers = questions[answer[i]]
var questions = [ 
  {
    question: "What is a value that can change depending on conditions or on information passed to the program?",
    answers: ["Variable", "Boolean", "String", "Constant"]

  },
  {
 question: "What can we use to store a list of multiple data types?",
    answers: ["Variable", "Array", "String", "Constant"]
  
  },
  { question: "What can we use to store a list of multiple data types?",
    answers: ["Variable", "Array", "String", "Constant"]
  },
]



var answers = ["variable", "array", "modulus", "object", "function", "string", "boolean", "constant", "if else", "Query Selector"];


function init() {
}


function startGame() {
  timerCount = 60;
  startButton.disabled = true;
  startTimer()
}

// takeTest()


function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
    if (score && timerCount > 0) {
        clearInterval(timer);
            }
    }

    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);

  function takeTest() {
    for (var i=0; i <questions.length; i++) {
      var userResponse = window.prompt(questions[i.prompt])
      if(userResponse === questions[i].answer){
        score++;
        alert("Correct!");
      } else {
        alert("Incorrect!")
        timerCount - 10;
      }
      }
    }
}

checkCorrect() {
  if answers
}



startButton.addEventListener("click", startGame);

init();


