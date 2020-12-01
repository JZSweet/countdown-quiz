// The array of questions for quiz.
var questionsCont = [
    {
        title: "commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false },
        ]
    },
    {
        title: "The condition in an if/else statement is enclosed within___. ",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parentheses", correct: true },
            { text: "square brackets", correct: false },
        ]
    },
    {
        title: "Arrays in javaScript can be used to store___.",
        answers: [
            { text: "numbers and strings", correct: false },
            { text: "booleans", correct: false },
            { text: "other arrays", correct: false },
            { text: "all of the above", correct: true },
        ]
    },
    {
        title: "strings values must be enclosed within ___ when being assigned to variables.",
        answers: [
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "quotes", correct: true },
            { text: "parentheses", correct: false },
        ]
    },
    {
        title: "a very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "javaScript", correct: false },
            { text: "terminal/bash", correct: false },
            { text: "for loops", correct: false },
            { text: "console.log", correct: true },
        ]
    },
]

// set timer
var timeEl = document.getElementById("countdown");
var secondsLeft = 50;

function setTime() {
    var timerInterval = setInterval(function () {
        timeEl.innerHTML = secondsLeft + " seconds remaining";
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame;
        }
    }, 1000);
}

// place questions to html
var qindex = 0
function qustionsholder() {
    document.querySelector("#question-title").innerHTML = questionsCont[qindex].title;
    document.querySelector("#btn1").innerHTML = questionsCont[qindex].answers[0].text;
    document.querySelector("#btn2").innerHTML = questionsCont[qindex].answers[1].text;
    document.querySelector("#btn3").innerHTML = questionsCont[qindex].answers[2].text;
    document.querySelector("#btn4").innerHTML = questionsCont[qindex].answers[3].text;
}

// start quiz
document.querySelector("#start").addEventListener("click", function () {
    qindex++
    qustionsholder()
    setTime()
})

var score = 0;
document.querySelector("#btn1").addEventListener("click", function () {
    console.log("btn", questionsCont[qindex].answers[0].correct)
    if (questionsCont[qindex].answers[0].correct === true) {
        score++;
        alert("Correct!");
    } else {
        secondsLeft--;
        alert("Wrong!");
    }
});

document.querySelector("#btn2").addEventListener("click", function () {
    console.log("btn", questionsCont[qindex].answers[1].correct)
    if (questionsCont[qindex].answers[1].correct === true) {
        score++;
        alert("Correct!");
    } else {
        secondsLeft--;
        alert("Wrong!");
    }
});
document.querySelector("#btn3").addEventListener("click", function () {
    console.log("btn", questionsCont[qindex].answers[2].correct)
    if (questionsCont[qindex].answers[2].correct === true) {
        score++;
        alert("Correct!");
    } else {
        secondsLeft--;
        alert("Wrong!");
    }
});
document.querySelector("#btn4").addEventListener("click", function () {
    console.log("btn", questionsCont[qindex].answers[3].correct)
    if (questionsCont[qindex].answers[3].correct === true) {
        score++;
        alert("Correct!");
    } else {
        secondsLeft--;
        alert("Wrong!");
    }
});


// end quiz
function endGame() {
    document.querySelector("end-screen");
}


// submit score
function renderLastRegistered() {
    var score = localStorage.getItem("final-score");
    var initials = localStorage.getItem("initials");

    if (!score || !initials) {
        return;
    }
    ScoreSpan.textContent = score;
    initialsSpan.textContent = initials;
}

var signUpButton = document.querySelector("#submit");
var initials = document.querySelector("#initials");

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("final-score", score);
    localStorage.setItem("initials", initials);
    renderLastRegistered();
})