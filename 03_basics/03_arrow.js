// NOTE: Global object of Browser is 'Window'

const user = {
    userName: "svp",
    price: 199,
    welcomeMessage: function() {
        console.log(`${this.userName}, welcome!`)
        console.log(this)
    }
}

// user.welcomeMessage()
// console.log(this)

// function coffee() {
//     let userName = "abc"
//     console.log(this) // returns many values
//     console.log(this.userName) // It returns undefined within function.
// }
// coffee()

// const coffee = function() {
//     let userName = "abc"
//     console.log(this.userName)
// }

// const coffee = () => {
//     let userName = "abc"
//     console.log(this) // Here it returns empty object.
// }

// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => ( num1 + num2 ) // Implicit Return Arrow Function (IMP FOR REACT)

// SIMPLE TRICK: If you use {} after => you need to type 'return', but if you use () then no need to write 'return' it will automatically implicitly return it.

// console.log(addTwo(1,2))

const abc = () => ({userName: "xyz"})
// console.log(abc())

const myArray = [2,3,5,7,9]
myArray.forEach()