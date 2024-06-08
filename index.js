console.log('Football Sim')

import { ARSENAL } from "./Teams/Arsenal.js"

for (let player of ARSENAL.players) {
    if (player.gls > 10) {
        console.log(player.forename + ': ' + player.gls)
    }
}