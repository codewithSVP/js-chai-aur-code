const myNums = [1,2,3]

const myFuncTotal = myNums.reduce(function(acc, currValue) {
    // console.log(`${acc} + ${currValue}: ${acc + currValue}`)
    return acc + currValue
}, 0)

const myArrowTotal = myNums.reduce( (acc, currValue) => acc + currValue, 0 )

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 2999
    },
    {
        itemName: 'mobile dev course',
        price: 4999
    },
    {
        itemName: 'data science course',
        price: 9999
    },
]

const cartPrice = shoppingCart.reduce( (acc, currItem) => acc + currItem.price, 0 )
console.log(`Cart Total: ${cartPrice.toLocaleString('IN')}`)