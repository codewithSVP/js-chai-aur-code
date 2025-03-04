const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const myNewObject = {
    name: 'coffee',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log('Coffee failed!')
    }
} 

console.log(Object.getOwnPropertyDescriptor(myNewObject, 'name'))


Object.defineProperty(myNewObject, 'name', {
    writable: false,
    enumerable: false
})

for (let [key, value] of Object.entries(myNewObject)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}

// console.log(Object.getOwnPropertyDescriptor(myNewObject, 'name'))