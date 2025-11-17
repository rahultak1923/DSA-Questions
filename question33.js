// question33.js user se ek number input leke us number ko reverse karo
// jaise agar user ne 1234 input diya to output 4321 aayega
let n = Number(prompt("enter the your number"))
if(n>0){
    rev = 0
    while(n>0){
        last  = n%10
        rev = rev *10+last;
        n = Math.floor(n/10)
    }
    console.log(rev)
}