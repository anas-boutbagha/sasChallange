const p = require("prompt-sync")()
let a = p ("choose a number")
let mul = 0 
for(let i = 1;i<10;i++){
mul = a*i
console.log(a,"*",i,"=",mul)
}