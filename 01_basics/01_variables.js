const accountId = 144552
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
/* Prefer not to use var,
because var doesn't allow for scope usability
*/
accountCity = "Jaipur" // this method is not preferable for creating variables
let accountState; // undefined variable

// accountId = 2 (because changing const is not allowed)

accountEmail = "xy@z.com"
accountPassword = "1298347"
accountCity = "Bengaluru"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])