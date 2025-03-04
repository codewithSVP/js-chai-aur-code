// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    capitaliseUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const coffee = new User('coffee', 'coffee@gmail.com', 'coffeeIsLove')
console.log(coffee.encryptPassword())
console.log(coffee.capitaliseUsername())


// bts: behind the scene

/*
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.capitaliseUsername = function() {
    return `${this.username.toUpperCase()}`
}


const chai = new User('chai', 'chai@gmail.com', 'chaiIsLove')
console.log(chai.encryptPassword())
console.log(chai.capitaliseUsername())
*/