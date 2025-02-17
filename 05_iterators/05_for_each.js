// forEach loop
const langArr = ["javascript", "python", "java", "ruby"]

// langArr.forEach( function (language) {
//     console.log(language)
// } )

// langArr.forEach( (language) => {
//     console.log(language)
// } )

// function printMe(item) {
//     console.log(item)
// }

// langArr.forEach(printMe) // when passing in a user-defined function, you only need to pass in the reference of that function.

// langArr.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// } )

const myCoding = [
    {
        languageName: 'JavaScript',
        langaugeFileName: 'js'
    },
    {
        languageName: 'Java',
        langaugeFileName: 'java'
    },
    {
        languageName: 'Python',
        langaugeFileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )