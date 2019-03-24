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
        // Roll out animation when the correct word is typed
        targetWordDiv.className = "word animated zoomOut faster";
        targetWordDiv.addEventListener("animationend", () => { 
            targetWordDiv.className = "word animated infinite bounce";
            setWord();
        });
        score += 1;
        setScore();
        document.getElementById("entryBox").value = "";
    }
}

function time() {
    let time = 60;
    let timer = setInterval(timerCount, 1000);
    function timerCount() {
        if (time == 0) {
            targetWordDiv.className = "word";
            clearInterval(timer);
            alert("Out of time. Your score is " + score + ".");
            score = 0;
            setScore();
            createResetButton();
        } else {
            time--;
            timerSpan.innerHTML = time;
        }
    }
}

function createResetButton() {
    let resetButton = document.createElement("button");
    resetButton.textContent = "Click to Try Again";
    document.body.append(resetButton);
    targetWordDiv.className = "word";            
    resetButton.className = "btn btn-primary";
    resetButton.type = "button";
    resetButton.addEventListener("click", () => {
        location.reload();
    });

}

// Prevent the default page reload when enter is pressed. We just want it to reset the word
window.onload = () => {
    document.getElementById("typingForm").onsubmit = () => {
        wordSubmitted();
        return false;
    };
};

//Do some initial setup
document.getElementById("entryBox").focus(); // Set focus to the input
setWord(); // Set the initial word
setScore(); // Set the score
timerSpan.innerHTML = timer; // Set initial timer value
time(); // Start the timer