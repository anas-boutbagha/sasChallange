const n = require("prompt-sync")()
let s = n ("give me a nbr ")
const m = require("prompt-sync")()
let q = m ("give me a  second nbr ")
let some = 0
s = parseInt(s, 10)
q = parseInt(q, 10)
function add (s, q){
    return(s + q)
}
console.log(add(s, q))
