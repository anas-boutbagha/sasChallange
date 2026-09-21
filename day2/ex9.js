const p = require("prompt-sync")()
let l = Number(p ("give me the length of the array "))
let Tf = []
let t = [l-1]
for(let i = 0;i < l; i++)
    {
const p = require("prompt-sync")()
t[i] = Number(p (`give me the number in the case ${i} ` ))
}
function filterOddNumbers(a, callback){
   return(callback(t))
   }
let verification = (t) => {
for(j=0;j<l;j++){    
    if ( t[j] %2==0 ){
        Tf.push(t[j])
}}
console.log(Tf)
}

filterOddNumbers(t, verification)