const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}
// for (const key in myObj) {
//     console.log(myObj[key])
// }

// NOTE: for-in loop structure can be used to iterate over a object which is similarly functioning to for-of loop

const langArr = ['js', 'py', 'rb', 'cpp', 'java']
for (const key in langArr) {
    console.log(langArr[key])
}

// NOTE: When using for-in loop with array, we get the key-index of array, not the key-value. (IMPORTANT)

// NOTE: You cannot use for-in loop with maps because it is not iterable object and will return nothing.