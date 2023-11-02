let hull = 20
let firePow = 5
let accur = 0.7

// let hullAl = 6
// let firePowAl = 5
// let accurAl = 0.6

const alienShips = [{
    name: 'ship1',
    hull: 3,
    firePow: 4,
    accur: 0.6
},
{
    name: 'ship2',
    hull: 5,
    firePow: 3,
    accur: 0.8
}]

function attack() {
    for (let ship of alienShips) {
        while (ship.hull > 0 && hull > 0) {
            const newaccur = Math.random()
            if (newaccur >= accur) {
                console.log('You attacked Alien')
                ship.hull = ship.hull - firePow
                console.log(`${ship.hull} ship.hull`)
            } else console.log('You missed')
            if (ship.hull <= 0) {
                console.log(`${ship.name} Destroyed`);
                break
            }
            const newaccurAl = Math.random()
            if (newaccurAl >= ship.accur) {
                console.log('Alien attacked you')
                hull = hull - ship.firePow
                console.log(`${hull} hull`)
            } else console.log('Alien missed')
        }
    }
}

attack()
