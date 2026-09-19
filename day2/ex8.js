const p = require("prompt-sync")()
let x = Number(p ("give me a number "))
function createMultiplie(a, multiplier){
    return multiplier(a);
}

const multiplier = (a) => a*a

console.log(createMultiplie(x,multiplier))
