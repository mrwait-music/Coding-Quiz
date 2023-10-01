
// Timer starts & Given a question
// Answer question->Given new question


// when game is over->Enter Initials for highscore




var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timer;
var timerCount;
var score = 0;

// var answer = questions[answers[" "]];

// Questions for test
var questions = [ 
  {
    question1: "What is a value that can change depending on conditions or on information passed to the program?",
    answers: [
    {text: "Variable", isCorrect: true }, 
    {text: "Boolean", isCorrect: false }, 
    {text: "String", isCorrect: false }, 
    {text: "Constant", isCorrect: false }
  ]
  },

  {
 question2: "What can we use to store a list of multiple data types?",
    answers: [
    {text: "Variable", isCorrect: false }, 
    {text: "Array", isCorrect: true },
    {text: "String", isCorrect: false },
    {text: "Constant", isCorrect: false },
  ]
  },

  { question3: "What is the opposite of a variable?",
    answers: [
      {text: "Variable", isCorrect: false },
      {text: "Array", isCorrect: false }, 
      {text: "String", isCorrect: false }, 
      {text: "Constant", isCorrect: true }
    ]
  },
]




var answers = ["variable", "array", "modulus", "object", "function", "string", "boolean", "constant", "if else", "Query Selector"];


function init() {
}

// start timer
function startGame() {
  timerCount = 60;
  startButton.disabled = true;
  startTimer()
  takeTest()
}




// timer function
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
    if (score && timerCount > 0) {
        clearInterval(timer);
            }
            // When all questions are answered or Time=0-> Game over
    } else if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
  console.log(timer)
}



  function takeTest() {
    if (timerCount !== 60) {
    for (var i=0; i <questions.length; i++) {
      var userResponse = document.querySelector("#selections")
      if(userResponse === questions.answers[i])
      {
        score++;
        alert("Correct!");
      } else {
        alert("Incorrect!")
        (timerCount - 10);
    }
}
}
}


// checkCorrect() {
//   if answers
// }


// Click start button-game begins
startButton.addEventListener("click", startGame)