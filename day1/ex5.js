const p = require("prompt-sync")()
let s = p ("choose a random word")
let aid
let nbr = 0
for (let i = 0 ; i <= s.length ; i++){
    aid = s.charAt(i)
    if (aid=="a")
        nbr++
    else if (aid=="e")
        nbr++
    else if(aid=="u")
        nbr++
    else if(aid=="i")
        nbr++
    else if(aid=="o")
        nbr++
}
console.log(nbr)