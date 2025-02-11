const score = 400

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(1)) // Returns a string representing a number in fixed-point notation.

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) // returns precise numbers according to precision argument.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) // Returns string in locale language.

// ++++++++++++++++++ MATHS ++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.floor(10.9))
// console.log(Math.ceil(9.01))
// console.log(Math.min(4,2,5,89,24))
// console.log(Math.max(4,2,5,89,24))

console.log(Math.random())
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// This is to produce a random number within the given range. Where (max - min + 1) is used to avoid generating a number starting with 0 and then added 'min' to keep it within range.