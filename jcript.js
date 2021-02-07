// set timer
document.querySelector("#questions-container").style.display = "none";
var startButton = document.getElementById("start");
var timeEl = document.getElementById("countdown");
var secondsLeft = 50;
var timerInterval 
var score = 0;

function setTime() {
    timerInterval = setInterval(function () {
        timeEl.textContent = secondsLeft + " seconds remaining";
        secondsLeft--;
        
        if (secondsLeft === 0) {
            endgame();
        }
    }, 1000);
}
function endgame() {
    clearInterval(timerInterval);
    localStorage.setItem("final-score",score);
    return window.location.assign("./highscores.html");
}
// start button
startButton.addEventListener("click", function () {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("questions-container").style.display = "block";
    showQuestion()
    setTime()
})

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

// place questions to html
var qindex = 0
function showQuestion() {
    document.querySelector("#question-title").innerHTML = questionsCont[qindex].title;
    document.querySelector("#btn1").innerHTML = questionsCont[qindex].answers[0].text;
    document.querySelector("#btn2").innerHTML = questionsCont[qindex].answers[1].text;
    document.querySelector("#btn3").innerHTML = questionsCont[qindex].answers[2].text;
    document.querySelector("#btn4").innerHTML = questionsCont[qindex].answers[3].text;
    if (qindex === questionsCont.length - 1) {
        endgame();
    };
}
let answerBtn = document.querySelectorAll(".tnb")
answerBtn.forEach((button) => {
    button.addEventListener("click")
});




// count score
var name = document.getElementById("initials");
var finalScore = document.getElementById("final-score");
document.querySelector("#btn1").addEventListener("click", function () {
    if (questionsCont[qindex].answers[0].correct === true) {
        score++;
    } else {
        secondsLeft - 10;
    }
    qindex++
    showQuestion()
});

document.querySelector("#btn2").addEventListener("click", function () {
    if (questionsCont[qindex].answers[1].correct === true) {
        score++;
    } else {
        secondsLeft - 10;
    }
    qindex++
    showQuestion()
});
document.querySelector("#btn3").addEventListener("click", function () {
    if (questionsCont[qindex].answers[2].correct === true) {
        score++;
    } else {
        secondsLeft - 10;
    }
    qindex++
    showQuestion()
});
document.querySelector("#btn4").addEventListener("click", function () {
    if (questionsCont[qindex].answers[3].correct === true) {
        score++;
    } else {
        secondsLeft - 10;
    }
    qindex++
    showQuestion()
});
