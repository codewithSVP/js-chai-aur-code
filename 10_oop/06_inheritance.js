// +++++++++++++ INHERITANCE +++++++++++++

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is: ${this.username}`)
    }

}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const coffee = new Teacher('coffee', 'coffee@mail.com', 'coffeeIsLove')
coffee.addCourse()

const chai = new User('chai')
chai.logMe()

coffee.logMe()

console.log(coffee === chai)
console.log(coffee === Teacher) // because 'coffee' is an instance of 'Teacher' class
console.log(coffee instanceof Teacher) // True
console.log(coffee instanceof User) // True
console.log(Teacher instanceof User) // False, because 'Teacher' is a class which inherits 'User' class, not an instance of 'User' class.