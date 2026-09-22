let t = []
let somme = 0
for(let i = 0;i < 5; i++)
    {
const p = require("prompt-sync")()
t[i] = Number (p (`give me the number in the case ${i} ` ))
}
for (let i = 0 ; i<5 ; i++){
    somme = somme + t[i]
}
console.log(somme)