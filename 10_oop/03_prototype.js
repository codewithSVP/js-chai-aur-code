let myName = "SVP     "
let myPreference = "Coffee     "

// console.log(myName.truelength)

let myHeros = ['thor', 'spiderman' ]

let heroPower = {
    thor: 'hammer',
    spiderman: 'slingshot',

    getSpiderPower() {
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.svp = function() {
    console.log('SVP is present in all objects')
}

// heroPower.svp()
// myHeros.svp()

Array.prototype.heySvp = function() {
    console.log('SVP says hello')
}

// myHeros.heySvp()
// heroPower.heySvp()

// ++++++++++ INHERITANCE ++++++++++

const User = {
    name: 'John',
    email: 'john@wick.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    isFullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport, Teacher)

// Going back to first line of this file.
let anotherUsername = 'CodeWithSVP     '

String.prototype.trueLength = function() {
    return this.trim().length
}

console.log(anotherUsername.trueLength())
console.log("     svp    ".trueLength())