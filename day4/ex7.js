let s = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]
let t = []
for (let i = 0 ; i < 3; i++ ){
    for (let j = 0 ; j < 3 ; j++ ){
        t.push(s[i][j])
    }
}
console.log(t)