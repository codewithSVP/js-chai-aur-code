//console.log("2" > 1) // auto conversion of string "2" to number 2

/* AVOID THIS TYPE OF COMPARISONS

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // here null got converted into 0 due to some JS Rule

console.log(undefined >= 0) // always false, because undefined doesn't get converted.

*/

console.log("2" === 2) // strict checking which also does datatype checking