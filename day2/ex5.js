const n = require("prompt-sync")()
let str = n ("give me a word ")
function isEmpty(a) {
    let aid = 0
    for (let i=0 ; i<str.length;i++ ){
        if(str.charAt(i)===" ")
            aid++
    }
    if(aid < str.length)
    return(true)
    else
        return(false)
}
console.log(isEmpty(str))
