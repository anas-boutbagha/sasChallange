const p = require("prompt-sync")()
let str = String(p ("give me a word "))

function firstandlastchar(s){
    let a = ""
    let b = ""
    a = s.charAt(0)
    b = s.charAt((s.length)-1)
    
    return(console.log(b),(console.log(a)))
}
firstandlastchar(str)