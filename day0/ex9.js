let weight 
let height 
let bmi 
let x
x=height*height;
bmi=weight/x;
if (bmi <18.5)
{
    console.log(" " ,${bmi}, "Underweight")
}
else if (bmi >= 18.5 && bmi < 24.9)
{
    console.log( ${bmi}, "Normal")
}
else (bmi >= 24.9)
{
        console.log( ${bmi}, "Overweight")
}