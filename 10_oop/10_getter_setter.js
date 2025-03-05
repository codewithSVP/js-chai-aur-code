// get (MDN) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
// set (MDN) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

// TOPICS Discussed in this: Modern Syntax for Get/Set, Function-based Syntax & lastly Object-based Syntax

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `***${this._password}***`
    }
    set password(value) {
        this._password = value
    }
}

const abc = new User('abc@email.com', 'abc')
console.log(abc.email)
console.log(abc.password)

// ********** FUNCTION-BASED SYNTAX for Get/Set **********
/*
function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")
console.log(chai.email);
*/

// ********** OBJECT-BASED SYNTAX for Get/Set **********
/*
    const User = {
        _email: 'abc@email.com',
        _password: 'abc',

        get email() {
            return this._email.toUpperCase()
        },
        set email(value) {
            this._email = value
        },

        get password() {
            return this._password.toUpperCase()
        },
        set password(value) {
            this._password = value
        }
    }

    const coffee = Object.create(User)
    console.log(coffee.email)
*/