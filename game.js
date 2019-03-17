/* exported wordSubmitted */

let wordList = ["word", "typing", "banana", "apple", "boogers"];

const targetWordDiv = document.getElementById("targetWord");
const scoreSpan = document.getElementById("score");
let score = 0;


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
        setWord();
        score += 1;
        setScore();
        document.getElementById("entryBox").value = "";

    }
}

function focusTextField() {
    document.getElementById("entryBox").focus();
}


window.onload=function() {
    document.getElementById("typingForm").onsubmit = function () {
        wordSubmitted();
        return false;
    };
};

//Do some initial setup
focusTextField();
setWord();
scoreSpan.innerHTML = score;
