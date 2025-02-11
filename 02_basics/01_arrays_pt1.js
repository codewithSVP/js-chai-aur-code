// Arrays

const myArr = [ 0, 1, 2, 3, 4, 5 ]
const myHeros = ['Shaktiman', 'Iron-Man', 'Homelander']

const anotherArr = new Array(1,2,3,4)

// console.log(myArr[2])

// Array Methods

// myArr.push(6) Appends at the end of array
// myArr.push(7)
// myArr.pop() Removes last element of array

// myArr.unshift(12) Inserts at the beginning of array
// myArr.shift() Removes the starting element of array

// console.log(myArr.includes(2)) Tells if the provided argument is in the array
// console.log(myArr.indexOf(2)) Tells the index of provided argument in the array.

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// Slice & Splice
console.log("A: ", myArr)

const myNewArr = myArr.slice(1, 3) // slice(x, y) copies values from x-index till y-index not including y-index
console.log(myNewArr);
console.log("B: ", myArr)

const myNewArr2 = myArr.splice(1, 3) // splice(x,y) grabs values out from x-index till y-index including y-index
console.log(myNewArr2);
console.log("C: ", myArr)