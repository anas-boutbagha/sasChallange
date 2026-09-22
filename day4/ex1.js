const p = require("prompt-sync")()
let l = Number(p ("give me the length of the array "))
let t = [l-1]
for(let i = 0;i < l; i++)
    {
const p = require("prompt-sync")()
t[i] = (p (`give me the color in the case ${i} ` ))
}
t.push('red')
t.shift
console.log(t)