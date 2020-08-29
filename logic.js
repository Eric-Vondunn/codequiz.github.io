// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var score = 0;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var questionTitle = document.getElementById("question-title")


// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");
var myInterval;
function startQuiz() {
  
  
  // hide start screen
  document.getElementById("start-screen").style.display = "none";
  
  // un-hide questions section
  document.getElementById("questions").style.display = "block";
  
  // start timer
  
  timerEl.textContent = 60;
 var myInterval = setInterval(function () {
    timerEl.textContent -= 1;
    time = timerEl.textContent;
    
    if (time <= 0) {
      alert("Game Over ");
      clearInterval(myInterval);

      //unhide end screen
      document.getElementById("end-screen").style.display = "block";

      //hide questions
      document.getElementById("questions").style.display = "none";
    }
  }, 1000);
  getQuestion();
  
}

function getQuestion() {
  
  // get current question object from array
  questions[currentQuestionIndex];
  
  // update title with current question
  questionTitle.innerText = questions[currentQuestionIndex].title;
  
  // clear out any old question choices
  choicesEl.innerHTML = "";
  
  // loop over choices
  for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
    
    // create new button for each choice
    var answerButton = document.createElement("button");
    answerButton.innerText = questions[currentQuestionIndex].choices[i];
    
    // display on the page
    choicesEl.append(answerButton);
    
    //attach click event listener to each choice
    answerButton.addEventListener("click", function (e) {
      var input = e.target.textContent
      
      // answerClick(input)
      if (questions[currentQuestionIndex].answer !== input) {
        
        // reduce 10 from the counter
        var time = time - 10;

        // reduce one from the score
        var score = score - 1;
        sfxWrong.play();
        alert("Wrong!");
      }
      if (questions[currentQuestionIndex].answer === input) {
        sfxRight.play();
        alert("Correct!");
        
        //increase score by 1
        var score = score + 1;
      }
      currentQuestionIndex++
      if (currentQuestionIndex === questions.length) {
        
        // go to results
        alert("Game Over ");
        clearInterval(myInterval);

        //end timer 
        
        
        //unhide end screen to enter initials
        document.getElementById("end-screen").style.display = "block";
        document.getElementById("questions").style.display = "none";

        //display final score in span element
        document.getElementById("final-score").innerText = parseInt(score);

      }
      else {
        getQuestion()
      }
    })
  }
}

function questionClick() {
  // check if user guessed wrong
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  // else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion
}

function quizEnd() {
  // stop timer
  // show end screen

  // show final score
  // hide questions section
}

function clockTick() {
  // update time
  // check if user ran out of time
}

function saveHighscore() {

   // get value of input box
  var inputBoxInitials = document.getElementById("initials").nodeValue;

  // make sure value wasn't empty
  if (inputBoxInitials === ""){
    alert("Please add your initials");
  }
  // get saved scores from localstorage, or if not any, set to empty array
  var savedScores = localStorage.getItem("score");

   
 // save to localstorage
 var inputBox = localStorage.setItem("inputBox", inputBox);
 localStorage.setItem("score", score);

//get data 
var lastUserScore = localStorage.getItem("inputBox");

  // redirect to next page
  function redirect(){
  document.getElementById("submit").onclick.window.location.href = "highscores.html";
  }
}

  


function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
var highScoreAttempt = submitBtn.onclick = saveHighscore();


// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
