let x= 0
let aid
for(let i = 1 ; i<51 ; i++){

    aid = 0
    for(let j =0 ; j<=i ; j++){
        if(i%j==0){
            aid++
        }


    }
 if(aid<=2)
    console.log(i,"est un nbr premier")
 else
    console.log(i,"est pas un nbr premier")
}
