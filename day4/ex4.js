const p = require("prompt-sync")()
let l = Number(p ("give me the length of the array "))
let table = [l-1]
for(let i = 0;i < l; i++)
    {
const p = require("prompt-sync")()
table[i] = Number (p (`give me the number in the case ${i}: ` ))
}
function thelargestnbr(t){
    let max = 0
    for (let i = 0; i< l;i++){
        if(t[i]>max){
            max= t[i]
        }
    }
    return(console.log(max))
}
thelargestnbr(table)