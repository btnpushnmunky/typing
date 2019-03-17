/* exported wordSubmitted */

let wordList = ["word", "typing", "banana", "apple", "boogers"];

const targetWordDiv = document.getElementById("targetWord");

function setWord() {
    let newWord = wordList[Math.floor(Math.random() * wordList.length)];
    targetWordDiv.innerHTML = newWord;
}


function wordSubmitted() {
    let typedWord = document.getElementById("entryBox").value;
    let targetWord = document.getElementById("targetWord").innerHTML;
    if (typedWord == targetWord) {
        setWord();
        document.getElementById("entryBox").value = "";
    }
}

function focusTextField() {
    document.getElementById("entryBox").focus();
}


focusTextField();
setWord();


window.onload=function() {
    document.getElementById("typingForm").onsubmit = function () {
        wordSubmitted();
        return false;
    };
};
