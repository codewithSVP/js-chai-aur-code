// Object Literal
const user = {
    username: 'SVP',
    loginCount: 8,
    loggedIn: true,

    getUserDetails: function() {
        // console.log(`Got user details from DB.`)
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())

// console.log(this)

// ++++++++++++ CONSTRUCTOR ++++++++++++
// const promiseOne = new Promise()
// const dateOne = new Date()

function User (username, loginCount, loggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.loggedIn = loggedIn

    this.greeting = function() {
        console.log(`Welcome: ${this.username}`)
    }

    return this
}

// const userOne = User("SVP", 8, true)
// const userTwo = User("Coffee", 12, false) // here userTwo will overwrite the existing values of userOne, so when you try to print userOne, it will print the overwritten values and not the original values.
// console.log(userOne)

const userOne = new User("SVP", 8, true)
const userTwo = new User ("Coffee", 12, false)
console.log(userOne.constructor)
// console.log(userTwo)