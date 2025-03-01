// Promises MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const firstPromise = new Promise(function(resolve, reject) {
    // Do an async task
    // DB Calls, Cryptography, Network calls, etc.
    setTimeout(function() {
        console.log('Async task 1 is complete!')
        resolve()
    }, 1000)
})

firstPromise.then(function() {
    console.log('firstPromise Consumed!')
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 Resolved!')
})

const thirdPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({userName: 'svp', email: 'svp@mail.com'})
    }, 1000)
})

thirdPromise.then(function (user) {
    console.log(user)
})

const fourthPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({userName: 'svp', password: '000'})
        } else {
            reject('ERROR! Something went wrong.')
        }
    }, 1000)
})

// Chaining of Promises
fourthPromise.then((user) => {
    console.log(user)
    return user.userName
}).then( (username) => {
    console.log(username)
}).catch( function(err) {
    console.log(err)
}).finally( () => console.log('The promise is either resolved or rejected.'))


// async-await method for promises
// Async-Await MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({userName: 'js', password: '123'})
        } else {
            reject('ERROR! JS went wrong.')
        }
    }, 1000)
})

// NOTE: async-await cannot directly handle/catch errors, so use it in try/catch block.

async function consumePromiseFive () {
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// Sneak Peek for next class

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const jsonData = await response.json() // turn response into json
//         console.log(jsonData)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()

// Chaining of then() is also called thenable
fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch( (err) => console.log(err))

// Why is this fetch block being console.log'd before all the other promises? To know that, watch this: https://youtu.be/Rive84an6Lc?si=s8LiHHd3FEqJp_5g