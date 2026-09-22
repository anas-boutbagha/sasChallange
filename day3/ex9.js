const p = require("prompt-sync")()
let str1 = String(p ("give me a word "))
let str2 = String(p ("give me a word "))
function countChar(s1 , s2){
    let cmt = 0
    let result = "not"
    let l1 = s1.length
    let l2 = s2.length
if(l1==l2){
 for(let i = 0 ; i< l1 ; i++){
    for(let j = 0 ; j < l2 ; j++){
        let r1 = s1[i]
        let r2 = s2[j]

        if(r1==r2){
            cmt++
            break;
        }
    }
 }
 if(cmt==l1){ 
    result = ""}


}
else{
    console.log("they are not anagrams")
}
return(console.log("they are",result,"anagrams"))
}

countChar(str1 , str2)