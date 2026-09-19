const n = require("prompt-sync")()
let s = n ("prompt in a name")
function greet(name){
    console.log("hello" , name)
}
greet(s)