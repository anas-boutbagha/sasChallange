let num1=5
let num2=6
let operator="-"
let result
switch (operator) {
   case "+":
    result=num1+num2
    console.log(result)
       break;
   case "-":
       result=num1-num2
    console.log(result)
       break;
   case "*":
      result=num1*num2
    console.log(result)
       break;
   case "/":
    if(num2==0)
        console.log(erro)
    else
       result=num1/num2
    console.log(result)  
       break;
   default:
console.log("choose an operator")  }