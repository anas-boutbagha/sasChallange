const p = require("prompt-sync")()
let str = String(p ("give me a word "))
let t=[str.length,2]
function mostreapetedchar(a){
    for(i=0 ; i <a.length; i++){
        for(j=0 ; j < a.length; j++){
            if(a[i]==a[j])
                com++
        }
        t[i,q]=(i,com)
    }
    console.log(t)
}