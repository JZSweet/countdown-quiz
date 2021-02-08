var playerDisplay = document.querySelector("#the-score");
var userScore = document.querySelector("#final-score");
var score = localStorage.getItem("final-score");
userScore.append(score);

var signUpButton = document.querySelector("#submit");
signUpButton.addEventListener("click", function () {
    var initials = document.querySelector("#initials").value;
    playerDisplay.append(initials + " your score is: " + score)
    localStorage.setItem("final-score", score);
    localStorage.setItem("user-name", initials);
});


var inDisplay = localStorage.getItem("user-name");
var scDisplay = localStorage.getItem("final-score");
document.querySelector("#past-score").append(inDisplay + "-" + scDisplay);