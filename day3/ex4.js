const p = require("prompt-sync")()
let str = String(p ("give me a word "))

function isitapoli(s){
    let cmt = 0
    let l = s.length
  for(let i=0; i< l/2 ; i++ ){
    if(s.charAt(i)==s.charAt(l-1-i)){
        cmt++
  }
}
 if(cmt==l/2)
    console.log(s ,"it is a palindrome")
else
        console.log(s ,"it is not a palindrome")
}
isitapoli(str)