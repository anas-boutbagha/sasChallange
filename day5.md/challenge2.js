let text = "javascript";
let character = "a";
let x = 0 ; 
for(let i = 0 ; i < text.length; i++){
    let b = text.charAt(i)
    if(b == character)
        x++
}
console.log(x);
