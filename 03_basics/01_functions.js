function AddTwoNums(num1, num2) {
    return num1 + num2
}

const sum = AddTwoNums(2, true)
// console.log(`Result: ${sum}`)

function loginUserMessage(userName = "User") {
    if(!userName) {
        return "Please enter a username"
    }
    return `Hello, ${userName}! You have successfully logged in.`
}

// console.log(loginUserMessage("SVP"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) { // Here, '...' is used as Rest operator, which bundles all the loose values into a single array
    return [val1, val2, num1]
}

// console.log(calculateCartPrice(10, 20, 40, 50, 60, 100))

const user = {
    userName: "svp",
    cartPrice: 199
}

// When you have to pass object in a function as a parameter, you MUST use 'anyobject' and NOT the object name.
function handleObject(anyobject) {
    console.log(`Username is: ${anyobject.userName} and Cart Price is: ${anyobject.cartPrice}`)
}
// Now, when you are calling the function, you have to pass the name of object you want to provide as argument. This allows you to choose which object to pass and not have to stick with the pre-defined argument.

// handleObject(user)
handleObject({
    userName: "abc",
    cartPrice: 1199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1,2,3,4,5]))