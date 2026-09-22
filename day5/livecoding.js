function removeDuplicate(arr){
    let result = []
    for (let i = 0; i < arr.length; i++){
        let count = 0
        for(let j=0;j<result;j++){
            if(arr[i] == result[j])
                count = 1
    } 
    if (count == 0)
        result.push(arr[i])
}
}
console.log(removeDuplicate([4,5,1,5,8,4,9]))