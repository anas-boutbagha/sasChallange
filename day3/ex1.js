const p = require("prompt-sync")()
let str = String(p ("give me a word "))
function persentage(a){
    let ctr=0
    let x=0
for(i=0; i<str.length; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="u"||str[i]=="i"||str[i]=="o")
        ctr++
}
x=(ctr*100)/str.length
return(console.log(x))
}
persentage(str)