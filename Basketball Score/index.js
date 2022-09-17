let homeEl = document.getElementById("homeScore");
let guestEl = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;

homeEl.textContent = homeScore;
guestEl.textContent = guestScore;

function add(x, num){
    if (x == 'H'){
        homeScore += num;
        homeEl.textContent = homeScore;
    }
    else if(x == 'G'){
        guestScore += num;
        guestEl.textContent = guestScore;
    }
}

function sub(x, num){
    if (x == 'H'){
        homeScore -= num;
        homeEl.textContent = homeScore;
    }
    else if(x == 'G'){
        guestScore -= num;
        guestEl.textContent = guestScore;
    }
}

function reset(){
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = 0;
    guestEl.textContent = 0;
}