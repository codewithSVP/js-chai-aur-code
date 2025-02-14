let a = 100

if (true) {
    let a = 10
    // console.log("INNER: ", a)
    const b = 20 
    var c = 30 // var has global scope, which is like a double-edged sword hence it's NOT recommended.
}

// console.log("OUTER: ",a)
// console.log(b)
// console.log(c)

function one() {
    const userName = "abd"

    function two() {
        const website = "YouTube"
        console.log(userName)
    }
    // console.log(website) Parent function cannot access elements from Child function

    two()
}
// one()

if (true) {
    const userName = "xyz"
    if (userName === "xyz") {
        const website = " github"
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)

// ---------------- Interesting Thing ----------------
// 1. Using 'function' keyword
console.log(addOne(5))
function addOne(num) {
    return num + 1
}

// 2. Declaring as 'Expression' function, similar to variable.
// NOTE: You cannot call 'Expression' function before initializing it, but you can when using normal functions.
const addTwo = function(num) {
    return num + 2
}
addTwo(5)