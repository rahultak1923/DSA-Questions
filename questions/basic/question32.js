// question32.js user se ek number input leke us number ke digits ka sum calculate karo
// jaise agar user ne 1234 input diya to output 10 aayega (1+2+3+4=10)
let n = Number(prompt("enter your number"))
if(n>0){
    let total = 0 
    while(n>0){
        last = n%10
        total = total + last 
        n = Math.floor(n/10)

    }
    console.log(total)
}