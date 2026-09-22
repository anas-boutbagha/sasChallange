const p = require("prompt-sync")()
let l = Number(p ("give me the length of the array "))
let t = [l-1]
for(let i = 0;i < l; i++)
    {
const p = require("prompt-sync")()
t[i] = (p (`give me the number in the case ${i}: ` ))
}
let v = Number(p ("give me the number u r looking for: "))
function findthenumber(arr, b){
    let cont=0 
    for(let i = 0; i< l; i++){
        if(t[i]==b)
            cont++
    }
    if (cont>=1)
        console.log("there is an occurece")
    if (cont<1)
        console.log("there isn't an occurece")
}
findthenumber(t, v)