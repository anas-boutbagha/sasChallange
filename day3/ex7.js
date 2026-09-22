const p = require("prompt-sync")()
let str = String(p ("give me a word "))
function Capitalize_Words(s){
let aid = ""
let aid2 = ""
const words = str.split(" ")
for (let i= 0; i< words.length; i++){
 aid = words[i].charAt(0)
 aid = aid.toUpperCase()
 aid2 += " " + words[i].replace(words[i].charAt(0), aid)
}
 
return(console.log(aid2))}
Capitalize_Words(str)