// Date and Time in JS has a arbitrary date and time of January 1st, 1970 (UTC)

let currentDate = new Date()
// console.log(currentDate.toString())
// console.log(currentDate.toDateString())
// console.log(currentDate.toLocaleString('IN'))
// console.log(currentDate.toLocaleDateString('IN'))
// console.log(currentDate.toLocaleTimeString('IN'))
// console.log(typeof currentDate)

let customDate = new Date(2025, 1, 11, 5, 3, 27) // Format(YYYY, MM, DD, HH, MM, SS) and Months start from index 0.
let cDate2 = new Date("2025-02-11") // another way of creating a Date object.
// console.log(customDate.toLocaleString())
// console.log(cDate2.toLocaleString())

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(customDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDate())
// console.log(newDate.getHours())
// console.log(newDate.getMinutes())
// console.log(`The date and time right now is: ${newDate.toLocaleString('IN')}`)

console.log(newDate.toLocaleString('default', {
    weekday: "short",
}))