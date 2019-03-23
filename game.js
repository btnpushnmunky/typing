/* exported wordSubmitted */

let wordList = ["word", "typing", "banana", "apple", "boogers"];

const targetWordDiv = document.getElementById("targetWord");
const scoreSpan = document.getElementById("score");
const timerSpan = document.getElementById("timer");

let score = 0;
let timer = 60;


function setScore() {
    scoreSpan.innerHTML = score;    
}

function setWord() {
    let newWord = wordList[Math.floor(Math.random() * wordList.length)];
    targetWordDiv.innerHTML = newWord;
}

function wordSubmitted() {
    let typedWord = document.getElementById("entryBox").value;
    let targetWord = document.getElementById("targetWord").innerHTML;
    if (typedWord == targetWord) {
        targetWordDiv.className = "word animated rollOut";
        targetWordDiv.addEventListener("animationend", function () { 
            targetWordDiv.className = "word animated infinite bounce";
            setWord();
        });
        score += 1;
        setScore();
        document.getElementById("entryBox").value = "";

    }
}

// Prevent the default page reload when enter is pressed. We just want it to reset the word
window.onload=function() {
    document.getElementById("typingForm").onsubmit = function () {
        wordSubmitted();
        return false;
    };
};

//Do some initial setup
document.getElementById("entryBox").focus(); // Set focus to the input
setWord(); // Set the initial word
setScore(); // Set the score
timerSpan.innerHTML = timer;
