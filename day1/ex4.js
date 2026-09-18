let t 
let s
let b
for (let i = 1;i<=50;i++){
    t = i % 3
    s = i % 5
    b = t + s
    console.log(i)
    if (t==0 && b!=0)
        console.log("fizz")
    else if (s==0 && b!=0)
        console.log("buzz")
    else if (b==0)
        console.log("fizzbuzz")
    else 
        console.log("c'est pas une mul de 5 ou de 4")
}