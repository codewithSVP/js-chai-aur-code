const marvel_heros = ["thor", "iron-man", "spider-man"]
const dc_heros = ["batman", "flash", "superman"]

// marvel_heros.push(dc_heros) // Output: [ 'thor', 'iron-man', 'spider-man', [ 'batman', 'flash', 'superman' ] ]
// console.log(marvel_heros)

// console.log(marvel_heros.concat(dc_heros)) // Output: [ 'thor', 'iron-man', 'spider-man', 'batman', 'flash', 'superman' ]

const all_heros = [...marvel_heros, ...dc_heros, "Hulk"]
// console.log(all_heros)

// Push: Pushes values into existing array
// Concat: Returns new array consisting the sum of two arrays
// Spread Operator(...): Spreads the values of array individually

const anotherArr = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const usableAnotherArr = anotherArr.flat(2) // You can also use Infinity as argument and it will flatout all sub-array elements present.
// console.log(usableAnotherArr)

// console.log(Array.isArray("Shivansh")) 
// console.log(Array.from("Shivansh"))
// console.log(Array.from({name: "Shivansh"})); // Interesting case, because it returns a empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

