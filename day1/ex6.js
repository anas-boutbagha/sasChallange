let a = "*"
let b = "     "
for(let i = 0;i<5;i++){
    for( let j = 0;j<b.length;j++){
        b.charAt(j) = a;
    }
    console.log(b)
}