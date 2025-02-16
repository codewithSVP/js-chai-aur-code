const userEmail = []
// if (userEmail) {
//     console.log(`User email: ${userEmail}`)
// }
// else {
//     console.log("Don't have user email")
// }

/*
FALSY VALUES:
1. false
2. 0 (zero)
3. -0 (negative zero)
4. BigInt = 0n
5. "" (empty string)
6. null
7. undefined
8. NaN (Not a Number) 
*/

/*
TRUTHY VALUES:
1. "0" (zero in string is truthy value)
2. "false" (false in string is truthy value)
3. "anything written in string is truthy value"
4. [] (empty array)
5. {} (empty object)
6. function(){} (empty function)
*/

// if (userEmail.length === 0) {
//     console.log("Empty")
// }

const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Empty Object")
// }

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // This assigns 10 to it, because it receives 10 first.
console.log(val1)

// Ternary Operator
// condition ? true : false

const coffeePrice = 100
coffeePrice <= 80 ? console.log("Less than 80") : console.log("More than 80")