/* Primitive Data Types (Call by Value)
1. string
2. number
3. bigint
4. boolean => true/false
5. null => standalone value (object)
6. undefined => value yet to be defined (NOT NULL! & has it's own data type.)
7. symbol => for unique values
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 2983457443553045

/* Non-Primitive (Reference) Data Types
1. Arrays
2. Objects
3. Functions
*/

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Object
const obj1 = {
    name: "SVP",
    age: 18,
    isAdult: true
}

// Function
const myFunction = function() {
    console.log("Hello World!")
}

console.log(typeof myFunction)