const p = require("prompt-sync")()
let str = String(p ("give me a word "))
function countChar(s){
    let cmt = 1
    let l = s.length
    let sf= ""
  for(let i=0; i< l ; i++ ){ 
    let x = s.charAt(i)
    let y = s.charAt(i + 1) 
    if(x==y){
        console.log(x)
        console.log(cmt)
        cmt = cmt + 1
  }
   else if(x!=y){
    sf += x + cmt
    cmt = 1
}
}
return(console.log(sf))
}

countChar(str)