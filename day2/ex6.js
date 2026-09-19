const a = require("prompt-sync")()
let f = a ("give me a number ")
function factorial(n) {
    let total = 1
    for (let i = 1 ; i<=f ; i++ ){
        total= i*total
    }
    return(total)
}
console.log(factorial(f))
