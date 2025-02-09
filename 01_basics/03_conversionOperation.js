let score = undefined

// console.log(typeof(score))

// Parse methods always have first alphabet CAPS.

let valueInNumber = Number(score)
/* 
eg. "33" => 33
    "33abc" => NaN
    true => 1, false => 0
    null => 0
    undefined => NaN
*/

// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

let isLoggedIn = 32

let booleanIsLoggedIn = Boolean(isLoggedIn)
/*
eg. 1 => true, 0 => false, random num => true
    "" => false, "random text" => true
    null => false, undefined => false
*/

// console.log(booleanIsLoggedIn)

let someNum = 33
let stringOfNum = String(someNum)
// console.log(stringOfNum, typeof(stringOfNum))

// ******************OPERATIONS******************

let value = 3
let negValue = -value
// console.log(negValue)

/* ARITHMETIC OPERATIONS
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)
*/

let str1 = "Hello"
let str2 = " SVP"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2) // auto conversion of 2nd arg to string
// console.log(1 + "2") // auto conversion of 1st arg to string
// console.log("1" + 2 + 2) // because 1st arg was string, it auto converted everything to string
// console.log(1 + 2 + "2") // here, because addition of args was possible, so last arg which is a string was appended to the string of sum of first 2 args

let num1, num2, num3

// num1 = num2 = num3 = 2 + 2 (NOT a good way to write variables)

let gameCounter = 100
gameCounter++;
console.log(gameCounter)