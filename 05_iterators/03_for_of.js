// There loops are array-specific

// for of loop
const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char: ${greet}`)
// }

// maps - similar to array. Link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UAE', "United Arab Emirates")
map.set('IN', "India")

// console.log(map)

// for (const key of map) {
//     console.log(key)
// }
/*
Output: 
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'UAE', 'United Arab Emirates' ]
*/

// for (const [key, value] of map) {
//     console.log(`${key} => ${value}`)
// }
/*
Output:
IN => India
USA => United States of America
UAE => United Arab Emirates
*/

const gamesObj = {
    'GTA': "Grand Theft Auto",
    'NFS': "Need for Speed",
    'RDR2': "Red Dead Redemption 2"
}
// for (const [gameKey, gameName] of myObj) {
//     console.log(`${gameKey} => ${gameName}`)
// }

// NOTE: This for-of loop structure does not work to iterate over an object