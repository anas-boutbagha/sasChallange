let year=2026
if (year%4==0 &&year%100!=0 )
    console.log(" it's a leap year")
else if (year%100==0 && year%400==0 )
    console.log(" it's a leap year")
else
    console.log(" it's not a leap year")