const name = "svp"
const repoCount = 3

// console.log(name + repoCount + " Repos!") Outdated Syntax

// console.log(`Hello! My name is ${name} and I have ${repoCount} Repos on GitHub`) This is a better way of string concatenation

const stringName = new String("svp-896") // String is stored as object

// console.log(stringName[0])
// console.log(stringName.length)
// console.log(stringName.toUpperCase())
console.log(stringName.charAt(2)) // returns the value at that particular index
console.log(stringName.indexOf('p')) // returns the index of that particular value

const newString = stringName.substring(0, 3) // Negative values not possible in substring()
console.log(newString)

const anotherString = stringName.slice(0,2) // Negative values are allowed in slice()
console.log(anotherString)

const newSpaceString = "    svp896     "
console.log(newSpaceString.trim())

const url = "https//github.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) // replace() replaces the first argument to with the second argument.

console.log(url.includes('hitesh')) // includes() returns true or false value.

console.log(stringName.split('-'))