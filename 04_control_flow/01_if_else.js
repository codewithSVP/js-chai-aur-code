// if statement
if (true) {}
if (false) {}

const userIsLoggedIn = true
if (userIsLoggedIn) {}

// Comparison Operators : <, >, <=, >=, ==, ===, !=, !

// if ( 2 != 3 ) { console.log("executed!") }

// const temp = 27
// if (temp < 30) {
//     console.log("Less than 30")
// }
// else {
//     console.log("More than 30")
// }

// const score = 200
// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power: ${power}`)
// }

const balance = 1000
// if (balance > 500) console.log("Continue");
// If trying to write implicit if statement, use ';' at the end to avoid confusion for the node compiler as well as the code reader.

// if (balance < 500) {
//     console.log("Less than 500")
// }
// else if (balance < 750) {
//     console.log("Less than 750")
// }
// else if (balance < 900) {
//     console.log("Less than 900")
// }
// else {
//     console.log("More than 900")
// }

const userLoggedIn = true
const paymentMethodAdded = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in!")
}

if (userLoggedIn && paymentMethodAdded) {
    console.log("Allowed to purchase courses")
}