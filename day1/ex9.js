let f = 0
let num = 0
const p = 1.618034
console.log("0")
for(let i = 1 ; i<=9; i++){
    f= ((((p**i) - (1-p)**i) )/ 2.236067)
    num = parseInt(f, 10)
    console.log(num)
}