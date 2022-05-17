let away = 1
let home = 1


function resetScore() {
    let homeScore = document.getElementById('homeScore')
    let awayScore = document.getElementById('awayScore')

    homeScore.innerText = home *= 0
    awayScore.innerText = away *= 0

}

function lowScoreHome() {

    let homeScore = document.getElementById('homeScore')

    homeScore.innerText = home++
}


function lowScoreAway() {

    let awayScore = document.getElementById('awayScore')

    awayScore.innerText = away++
}

function highScoreHome() {
    let homeScore = document.getElementById('homeScore')

    homeScore.innerText = home += 3

}

function highScoreAway() {
    let awayScore = document.getElementById('awayScore')

    awayScore.innerText = away += 3

}

