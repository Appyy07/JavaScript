const accountId = 12345
let accountEmail = "appy@ap.com"  //preferred
var accountName = "Appy"  //prefer not to use var due to issue in block scope and functional scope
accountCity = "delhi"
let accountState

// accountId = 21 not allowed, we cannot change a constant that is once declared

console.log(accountId)
accountEmail = "hc@hc.com"
accountName = "fizz"
accountCity = "gurugram"



console.table([accountId, accountEmail, accountName, accountCity, accountState])