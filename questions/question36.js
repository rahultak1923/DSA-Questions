// question36.js user se ek number input leke us number ke har digit ka factorial nikalke unka sum calculate karo
// jaise agar user ne 145 input diya to output 145 aayega (1! + 4! + 5! = 1 + 24 + 120 = 145)
// strong number bhi kehte hain isko
let n = Number(prompt("enter the number "))
if(n>0){
    let sum = 0 ;
    while(n>0){
        let last = n%10
        let fact = 1
        for(let i = 1; i<=last;i++){
            fact = fact *i;

        }
        sum = sum + fact 
        n = Math.floor(n/10)
    }
    console.log(sum)
}