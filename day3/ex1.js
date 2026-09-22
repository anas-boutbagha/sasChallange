const p = require("prompt-sync")()
let str = String(p ("give me a word "))
let a = 0
let b = 0
a = str.length
b = str.toUpperCase()
console.log(a)
console.log(b)