import subtract, { square, add } from './utils'

console.log('app.js is running!')
console.log(square(4))
console.log(add(2, 2))
console.log(subtract(2, 1))

import isSenior, { isAdult, canDrink } from './person'

console.log(`Is an adult  ${isAdult(18)}`)
console.log(`Can drink = ${canDrink(21)}`)
console.log(`Is Senior = ${isSenior(64)}`)
