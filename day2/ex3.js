const n = require("prompt-sync")()
let s = n ("give me a nbr ")
s = parseInt(s, 10)
function square (s){
    return(s * s)
}
console.log(square(s))
