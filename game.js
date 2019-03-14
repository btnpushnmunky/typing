function wordSubmitted(){
    let typedWord = document.getElementById("entryBox").value;
    let targetWord = document.getElementById("targetWord").innerHTML;
    if (typedWord == targetWord) {
        alert(typedWord);
    }
}