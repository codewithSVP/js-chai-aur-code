// Objects

// FUN FACT: When we declare object like literals, it has multiple instances. But when declared with constructor, it is Singleton Object.

// Object Literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "SVP",
    age: 18,
    [mySymbol]: "symbolKey1", // to use Symbol as key in object, you need to enclose it within []
    location: "IND",
    email: "svp@example.com",
    isLoggedIn: false
}

// How to access object values.
// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser[mySymbol])

// In JS, when using [] method to access key values of object, you need to put the key name within double quotations, whereas this is not the case when using dot function to access key values.

JsUser.email = "svp@eg.com" // This is used to change value of key 'email'
// Object.freeze(JsUser) // Now 'JsUser' object is freezed and changes cannot be made within it.
JsUser.email = "abc@eg.com"  // It won't throw an error, but it won't change the 'email' value either!
console.log(JsUser["email"])

// Method for defining functions as keys is below 👇
JsUser.greeting = function() {
    console.log(`Hello, ${this.name}!`)
}

// Try running these!
console.log(JsUser.greeting)
JsUser.greeting()

// console.log(JsUser)

//Singleton Object: Object.create