const p = require("prompt-sync")()
let l = Number(p ("give me the length of the array "))
let Ft =[]
let table = [l-1]
for(let i = 0;i < l; i++)
    {
const p = require("prompt-sync")()
table[i] = Number (p (`give me the number in the case ${i}: ` ))
}
function thelargestnbr(t ,tf){
    for (let i = 0; i< l;i++){
        if(t[i]==t[i+1]){
            continue;
        }
        else if (t[i]!=t[i+1]){
            tf.push(t[i])
        }

    }
    return(console.log(tf))
}
thelargestnbr(table, Ft)