
// Timer starts & Given a question
// Answer question->Given new question


// when game is over->Enter Initials for highscore




var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var remove = document.querySelector("#startRemove")
var userResponse = document.querySelector("#possibleAnswers")
var timer;
var timerCount;
var score;
var scoreEl = document.querySelector("#score")
var qCounter = 0;


// var answer = questions[answers[" "]];

// Questions for test
var questions = [
  {
    question: "What is a value that can change depending on conditions or on information passed to the program?",
    answers: [
      "Variable", "Array", "String", "Constant"
    ],
    correctAnswer: "Variable"
  },

  {
    question: "What can we use to store a list of multiple data types?",
    answers: [
      "Variable", "Array", "String", "Constant"
    ],
    correctAnswer: "Array"
  },

  {
    question: "What is the opposite of a variable?",
    answers: [
      "Variable", "Array", "String", "Constant"
    ],
    correctAnswer: "Constant"
  },
]




// var answers = ["variable", "array", "modulus", "object", "function", "string", "boolean", "constant", "if else", "Query Selector"];


function init() {
}

// start timer
function startGame() {
  timerCount = 60;
  startButton.disabled = true;
  startTimer()
  takeTest()
  // startButton.addEventListener("click", startButton.style.display = "none");
}




// timer function
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    console.log(timerCount)
    if (timerCount > 0) {
      if (score && timerCount > 0) {
        clearInterval(timer);
      }
      // When all questions are answered or Time=0-> Game over
    } else if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}



function takeTest() {

  var quizQuestionsEl = document.querySelector("#quizQuestions")
  quizQuestionsEl.innerHTML = ""
  userResponse.innerHTML = ""
    for (var i = 0; i < questions[qCounter].answers.length; i++) {
      var answer = questions[qCounter].answers[i]
      var button = document.createElement("button")
      button.textContent = answer
      userResponse.append(button)
}
    var p = document.createElement("p")
    p.textContent = questions[qCounter].question
    quizQuestionsEl.append(p)
}


function checkCorrect(event) {
var userAnswer = event.target.textContent
var correctAnswer = questions[qCounter].correctAnswer
if (userAnswer === correctAnswer){
  scoreEl++
  console.log("Correct")
} else {
  // (timerCount - 10)
  console.log("Incorrect")
}
// scoreEl.textContent = score
// scoreEl.innerHTML = ""
// scoreEl.append(score)
qCounter++
takeTest()
}


// Click start button-game begins
startButton.addEventListener("click", startGame)
userResponse.addEventListener("click", checkCorrect)