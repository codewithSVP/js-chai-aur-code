/* 
Switch Case Syntax 👇
    switch (key) {
        case value:
            break;
        default:
            break;
    }
*/

// NOTE: If not using break statement in case, it will run all other case statements EXCEPT default case.
const month = "Apr"
switch (month) {
    case "Jan":
        console.log("Jan")
        break;
    case "Feb":
        console.log("Feb")
        break;
    case "Mar":
        console.log("Mar")
        break;
    case "Apr":
        console.log("Apr")
        break;
    default:
        console.log("Default Case Match")
        break;
}