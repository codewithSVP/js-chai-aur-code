function setUsername(username) {
    // Complex DB Calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    setUsername.call(this, username) // here, we have passed 'this' to share the same current context of createUser() with setUsername()
    
    this.email = email
    this.password = password
}

const coffee = new createUser("coffee", "coffee@gmail.com", "coffeeIsLove")
console.log(coffee)