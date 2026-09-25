let numbers = [4, 7, 2, 9, 10, 13]
let odd = 0
let even = 0
for (let i = 0 ; i < numbers.length ; i++){
if(numbers[i]%2==0)
    even++
else if(numbers[i]%2!=0)
    odd++
}
console.log(even);
console.log(odd);

