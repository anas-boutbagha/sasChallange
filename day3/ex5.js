const p = require("prompt-sync")()
let str = String(p ("give me a word "))

function isitapoli(s){
    let nstr = ""
    let l = s.length
  for(let i= l; i >= 0  ; i--){
    nstr+= s.charAt(i)
  }
  return(console.log(nstr))
}
isitapoli(str)