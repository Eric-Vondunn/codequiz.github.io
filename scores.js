
//var setup
var clearBtn = document.getElementById("clear");
var highScores = document.getElementById("highscores");
var ol = document.getElementById("ol");



function printHighscores() {
  // either get scores from localstorage or set to empty array
  var StoreHighScore = localStorage.getItem("score");

  // (optional) sort highscores by score property in descending order

  // for each score
    // create li tag for each high score
    var highScoreli = document.createElement("li");
    li.innerText = scores[savedScores][i];
    li.setAttribute("score", i);

    // display on page
    ol.append(li);
}

function clearHighscores() {
  // (and reload)
}

// attach clear event to clear score button
clearBtn.addEventListener("click", function() {
  highScores.value = "";
}, false)

// run printhighscore when page loads
