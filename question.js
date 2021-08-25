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

var choice_bank = [
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

var answer_bank = [
    "1" , "3" , "2" , "4","1" , "3" , "2" , "4","1" , "3"
]

var n = 0;
var score = 0;
var answered = false;

window.onload = function(){
    question.innerHTML = question_bank[0]
    choice1.innerHTML = choice_bank[0][0]
    choice2.innerHTML = choice_bank[0][1]
    choice3.innerHTML = choice_bank[0][2]
    choice4.innerHTML = choice_bank[0][3]
}

next.addEventListener("click", function(){nextquestion();});
choice1.addEventListener("click", function(){reply(choice1.id);});
choice2.addEventListener("click", function(){reply(choice2.id);})
choice3.addEventListener("click", function(){reply(choice3.id);})
choice4.addEventListener("click", function(){reply(choice4.id);})

function nextquestion(){
    if(answered){
        n = n+1;
        if(n == 10){
            localStorage.setItem("score" , score)
            window.location.href = "result.html"
        }else{
            progress.setAttribute("style", "width:" + String(n+1) + "0%")
            progress.style.backgroundColor = '#024AAD';
            progress.style.borderRadius = '50px';
            text.innerHTML = "Question" + String(n+1)
            question.innerHTML = question_bank[n]
            choice1.innerHTML = choice_bank[n][0]
            choice2.innerHTML = choice_bank[n][1]
            choice3.innerHTML = choice_bank[n][2]
            choice4.innerHTML = choice_bank[n][3]
            choice1.style.background = "#F5F3F3"
            choice2.style.background = "#F5F3F3"
            choice3.style.background = "#F5F3F3"
            choice4.style.background = "#F5F3F3"
            answered = false;
        }
    }
}

function reply(choice){
    if(!answered){
        if(choice == "choice"+answer_bank[n]){
            score = score + 1;
            document.getElementById("choice" + String(answer_bank[n])).style.background = "#5ECA7C"
        }else{
            document.getElementById("choice" + String(answer_bank[n])).style.background = "#5ECA7C"
            document.getElementById(choice).style.background = "#FF6666"
        }
        answered = true
    }
}
