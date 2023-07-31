let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let countHome = 0
let countGuest = 0
// home

function plusOneHome() {
    countHome += 1
    homeScoreEl.textContent = countHome
}

function plusTwoHome() {
    countHome += 2
    homeScoreEl.textContent = countHome
}

function plusThreehome() {
    countHome += 3
    homeScoreEl.textContent = countHome
}

// guest
function plusOneGuest() {
    countGuest += 1
    guestScoreEl.textContent = countGuest
}

function plustTwoGuest() {
    countGuest += 2
    guestScoreEl.textContent = countGuest
}

function plusThreeGuest() {
    countGuest += 3
    guestScoreEl.textContent = countGuest
}

let newGameBtn = document.getElementById("new-game-btn")

document.getElementById("new-game-btn").onclick = function() {
    countHome = 0
    document.getElementById("home-score-el").innerHTML = countHome
    countGuest = 0
    document.getElementById("guest-score-el").innerHTML = countGuest
}


