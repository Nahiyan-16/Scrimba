let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let keepEl = document.getElementById("keep-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let keepCount = 0;

function save() {
    if(keepCount == 0){
        saveEl.textContent += count
        countEl.textContent = 0
        count = 0
        keepCount += 1;
    }
    else if(keepCount < 10 && keepCount != 0){
        saveEl.textContent += " - " + count
        countEl.textContent = 0
        count = 0
        keepCount += 1;
    }
    else{
        keepEl.textContent = "NO MORE SPACE (MUST RESET)"
    }
}

function reset() {
    saveEl.textContent = "Previous entries: ";
    count = 0;
    keepCount = 0;
    countEl.textContent = 0;
    keepEl.textContent = "";
}