const p="   f  "
let x = 0
for(let i = 0; i<p.length;i++){
    if (p.charAt(i)!=" ")
        x = 1
        break;
}

if(x==1){
    
console.log(true)
}else
console.log(false)