var playerDisplay = document.querySelector("#the-score");
var userScore = document.querySelector("#final-score");
var score = localStorage.getItem("final-score");
userScore.append(score);

var signUpButton = document.querySelector("#submit");
signUpButton.addEventListener("click", function () {
    var initials = document.querySelector("#initials").value;
    var listEntry = {name: initials, score: score};
    var pastPlayers = JSON.parse(localStorage.getItem("user-names"));
    if(pastPlayers){
        console.log(pastPlayers);
        pastPlayers[pastPlayers.length] = listEntry;
        localStorage.setItem("user-names", JSON.stringify(pastPlayers));
    } else {
        var initialList = []
        initialList[0] = listEntry;
        localStorage.setItem("user-names", JSON.stringify(initialList));
    }
    playerDisplay.append(initials + " your score is: " + score)
});


var inDisplay = localStorage.getItem("user-name");
var scDisplay = localStorage.getItem("final-score");
document.querySelector("#past-score").append(inDisplay + "-" + scDisplay);