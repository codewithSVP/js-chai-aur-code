// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is Best Number")
//     }
//     console.log(element)
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} of outer loop: ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// break & continue
for (let index = 1; index < 15; index++) {
    if (index === 5) {
        console.log("5 Detected")
        continue
    }
    if (index == 9) {
        console.log("9 Detected")
        break
    }
    console.log(`Value of i: ${index}`)
}