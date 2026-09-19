const p = require("prompt-sync")()
let l = Number(p ("give me the length of the array "))
let t = [l-1]
for(let i = 0;i < l; i++)
    {
const p = require("prompt-sync")()
t[i] = Number(p (`give me a number dans la case ${i} ` ))
}
console.log(t)
function filterOddNumbers(arr, callback){
    return(callback)
}
const callback = (t) => t%2==0
