// +++++++++++++ Static Properties +++++++++++++
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createUID() {
        return `123`
    }

}

const svp = new User('svp')
// console.log(svp.createUID())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const google = new Teacher('google', 'g@google.com')
google.logMe()