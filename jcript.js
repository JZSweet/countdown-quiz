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
function qustionsholder() {
    document.querySelector("#question-title").innerHTML = questionsCont[qindex].title;
    document.querySelector("#btn1").innerHTML = questionsCont[qindex].answers[0].text;
    document.querySelector("#btn2").innerHTML = questionsCont[qindex].answers[1].text;
    document.querySelector("#btn3").innerHTML = questionsCont[qindex].answers[2].text;
    document.querySelector("#btn4").innerHTML = questionsCont[qindex].answers[3].text;

}
document.querySelector("#btn1").addEventListener("click",function(){

    console.log("btn",questionsCont[qindex].answers[0].correct)
} );
document.querySelector("#btn2").addEventListener("click",function(){

    console.log("btn",questionsCont[qindex].answers[1].correct)
} );
document.querySelector("#btn3").addEventListener("click",function(){

    console.log("btn",questionsCont[qindex].answers[2].correct)
} );
document.querySelector("#btn4").addEventListener("click",function(){

    console.log("btn",questionsCont[qindex].answers[3].correct)
} );


// qustionsholder()
document.querySelector("#start").addEventListener("click", function () {
    qindex++
    qustionsholder()
})

// start the game with score of 0.
var score = 0;
// Loop over every question.
// for (var i = 0; i < questionsCont.length; i++) {
//     if (questionsCont[qindex].answers === true) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// }
// Show total score at end
// alert("You got " + score + "/" + questionsCont.length);


// set timer
var timeEl = document.getElementById("countdown");
var secondsLeft = 50;

function setTime() {
    var timerInterval = setInterval(function () {
        timeEl.innerHTML = secondsLeft + " seconds remaining";
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

setTime()

// submit score
var signUpButton = document.querySelector("#sign-up");