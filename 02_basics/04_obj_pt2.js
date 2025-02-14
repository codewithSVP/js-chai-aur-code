const ytUser = {}

ytUser.id = "abc"
ytUser.name = "Abraham"
ytUser.isLoggedIn = false

// console.log(ytUser)

const regularUser = {
    email: "smth@gmail.com",
    fullName: {
        userFullName: {
            firstName: "regular",
            lastName: "user"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    5: "a",
    6: "b"
}

// This way, you can merge 2 or more objects. (YES, It's the same way like you merge an array.)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

// console.log(ytUser)

// console.log(Object.keys(ytUser)) // returns an array of keys in object
// console.log(Object.values(ytUser)) // returns an array of values in object
// console.log(Object.entries(ytUser)) // returns arrays of key-value pairs from the object

// console.log(ytUser.hasOwnProperty('LoggedIn')) // It returns true if the object has your specified property. If not, then it returns false.


// +++++++++++++++++ Objects Destructing ++++++++++++++++++++++
const course = {
    courseName: "JS in Hindi | Chai aur Code",
    price: 999,
    courseInstructor: "Hitesh Chaudhary"
}

const {courseInstructor: Instructor} = course

console.log(Instructor);


// ---------- Now for the good stuff, JSON & APIs ----------
// {
//     name: "SVP",
//     courseName: "JS in Hindi",
//     price: "free"
// }

// [
//     {},
//     {},
//     {}
// ]