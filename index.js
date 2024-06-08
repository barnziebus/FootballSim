console.log('Football Sim')

import { ARSENAL } from "./Teams/Arsenal.js"
import { ASTON_VILLA } from "./Teams/Aston Villa.js"

let teams = {'Arsenal': ARSENAL, 'Aston Villa': ASTON_VILLA}

for (let team in teams) {
    console.log(team)
    for (let player of teams[team]['players']) {
        if (player.gls > 9) {
            console.log(player.surname + ': ' + player.gls)
            }
    }
}

let min = 0;
const max_minutes = 90;

let home_score = 0
let away_score = 0

let home_def_modi = 1
let away_def_modi = 0.5

function updateMinute() {
    if (min <= max_minutes) {
        document.getElementById("time").innerText = min; 
        min++;

        for (let player of ARSENAL.players) {
            let goals_per_game = player.gls / player.mp
        
            //console.log(player.surname)
        
            if (playerScores(goals_per_game, away_def_modi)) {
                let ticker = document.getElementById('ticker')
                let message = document.createElement('p')
                message.innerText = `${min}' !!GOAL!! to Arsenal\n ${player.surname} has scored`
                ticker.appendChild(message)

                home_score += 1
                document.getElementById('home-score').innerText = home_score
            }
            
        }

        for (let player of ASTON_VILLA.players) {
            let goals_per_game = player.gls / player.mp
        
            //console.log(player.surname)
        
            if (playerScores(goals_per_game, home_def_modi)) {
                let ticker = document.getElementById('ticker')
                let message = document.createElement('p')
                message.innerText = `${min}' !!GOAL!! to Aston Villa\n ${player.surname} has scored`
                ticker.appendChild(message)

                away_score += 1
                document.getElementById('away-score').innerText = away_score
            }
            
        }

        setTimeout(updateMinute, 10); // Schedule the next update in x milliseconds
    } else {
        console.log(home_score + ' - ' + away_score)
        home_score = 0
        away_score = 0
        min = 0
    }
}

for (let i = 0; i < 100; i++) {
    min = 0
    updateMinute()
}

function playerScores(player_goals_per_game, defense_modifier=1) {
    let rng = Math.random()
    let likelihood = (player_goals_per_game / 100 * defense_modifier) + 0.001

    //console.log(rng + ' / ' + likelihood)

    if (rng < likelihood) {
        return true
    } else {
        return false
    }
}

