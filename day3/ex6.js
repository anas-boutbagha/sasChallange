const p = require("prompt-sync")()
let str = String(p ("give me a word "))
let char = String(p("what char are u looking for ? "))
function countChar(s, c){
    let cmt = 0
    let l = s.length
  for(let i=0; i< l ; i++ ){  
    if(s.charAt(i)==c){
        cmt++
  }
}
return(console.log(cmt))
}


countChar(str, char)