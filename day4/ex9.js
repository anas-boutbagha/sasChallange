let s = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]
function swichrowcol (tab){
let t = []

for (let i = 0 ; i < 3; i++ ){
    let aid = []
    for (let j = 0 ; j < 3 ; j++ ){
        aid.push(s[j][i])
    }
    t.push(aid)
}
return(console.log(t))
}
swichrowcol (s)