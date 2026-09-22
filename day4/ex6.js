const p = require("prompt-sync")()
let l = Number(p ("give me the length of the array "))
let Ft =[]
let table = [l-1]
for(let i = 0;i < l; i++)
    {
const p = require("prompt-sync")()
table[i] = Number (p (`give me the number in the case ${i}: ` ))
}
function reverse(t ,tf){
    for (let i = 0; i< l;i++){
tf.push(t[l-1-i])
    }
    return(console.log(t),console.log(tf))
}
reverse(table, Ft)
