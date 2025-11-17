// Write a program to check whether a number is prime or not.
let n = Number(prompt("enter the number "))

function primenumber(n){
    if(n<=1)return false;
    if(n==2) return true;
    if(n%2==0) false;
    for(let i = 3 ;i<= Math.floor(Math.sqrt(n)); i+=2){
        if(n%i==0) return false
    }
    return true
}

console.log(primenumber(n))