const n = require("prompt-sync")()
let c = n ("give me a tempetature en c ")
c = parseInt(c, 10)
function celsiusToFahrenheit(c) {
    return(((c * 9)/5) + 32)
}
console.log(celsiusToFahrenheit(c))
