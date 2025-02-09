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
console.log(stringOfNum, typeof(stringOfNum))