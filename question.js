var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var progress = document.getElementById("progress");
var next = document.getElementById("next");
var text = document.getElementById("text");

var question_bank = [
    "How many schools are there in HKUST?",
    "Where is the mosquito pool?",
    "What is the consequence if you cannot jump over smart stone?",
    "Who is the president of HKUST?",
    "How many halls are there in HKUST?",
    "How many Hlth 1010 hours you need to satisfy its requirement?",
    "Which floor does not exist in HKUST?",
    "What is the ranking of HKUST in the World's Top 50 Young Universities Under 50 2021 QS World University Ranking?",
    "Which halls have sink?",
    "Which of the following is the correct official website of HKUST?"
]

var answer_bank = [
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
    ["1" , "2" , "3" , "4"],
]

var n = 0;
window.onload = function(){
    question.innerHTML = question_bank[0]
    choice1.innerHTML = answer_bank[0][0]
}

next.addEventListener("click", nextquestion);

function nextquestion(){
    n = n+1;
    if(n == 10){
        window.location.href = "result.html"
    }else{
        progress.setAttribute("style", "width:" + String(n+1) + "0%")
        text.innerHTML = "Question" + String(n+1)
        question.innerHTML = question_bank[n]
        choice1.innerHTML = answer_bank[n][0]
    }
}
