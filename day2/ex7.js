const p = require("prompt-sync")()
let x = Number(p ("give me a number "))
const q = require("prompt-sync")()
let y = Number(q ("give me a second number "))
function calculate(a, b, operation){

    return operation(a,b);


}

const addition = (a,b) => a + b 
const soustraction = (a,b) => a - b


console.log(calculate(x,y ,addition))
console.log(calculate(x,y ,soustraction))
