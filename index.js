console.log('Football Sim')

import { ARSENAL } from "./Teams/Arsenal.js"
import { ASTON_VILLA } from "./Teams/Aston Villa.js"

let teams = {'Arsenal': ARSENAL, 'Aston Villa': ASTON_VILLA}

for (let team in teams) {
    console.log(team)
    for (let player of teams[team]['players']) {
            console.log(player.surname)
    }
}

let min = 0;
const max_minutes = 90;

let home_score = 0
let away_score = 0

let home_def_modi = 1
let away_def_modi = 0.9

function updateMinute() {
    if (min <= max_minutes) {
        document.getElementById("time").innerText = min; 
        min++;

        for (let player of ARSENAL.players) {
            let goals_per_min = player.gls / player.min
        
            //console.log(player.surname)
        
            if (playerScores(goals_per_min, min, home_def_modi, player.surname)) {
                let ticker = document.getElementById('ticker')
                let message = document.createElement('p')
                message.innerText = `${min}' !!GOAL!! to Arsenal\n ${player.surname} has scored`
                ticker.appendChild(message)

                home_score += 1
                document.getElementById('home-score').innerText = home_score
            }
            
        }

        for (let player of ASTON_VILLA.players) {
            let goals_per_min = player.gls / player.min
        
            //console.log(player.surname)
        
            if (playerScores(goals_per_min, min, home_def_modi, player.surname)) {
                let ticker = document.getElementById('ticker')
                let message = document.createElement('p')
                message.innerText = `${min}' !!GOAL!! to Aston Villa\n ${player.surname} has scored`
                ticker.appendChild(message)

                away_score += 1
                document.getElementById('away-score').innerText = away_score
            }
            
        }

        setTimeout(updateMinute, 100); // Schedule the next update in x milliseconds
    } else {
        console.log(home_score + ' - ' + away_score)
        home_score = 0
        away_score = 0
        min = 0
    }
}

for (let i = 0; i < 1; i++) {
    min = 0
    updateMinute()
}

function playerScores(player_goals_per_min, game_min, defense_modifier=1, player_name = 'No Name') {
    let rng = Math.random()
    if (game_min > 45) {
        game_min - 45
    }
    let likelihood = (player_goals_per_min / 100 * defense_modifier) + 0.0001 + (game_min / 45 / 1000)

    

    if (rng < likelihood) {
        console.log(`RNG: ${rng.toFixed(6)} / ${player_name} to score ${likelihood.toFixed(6)}`)
        return true
    } else {
        return false
    }
}

