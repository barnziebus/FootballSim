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