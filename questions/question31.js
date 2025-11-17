// question31.js user se ek number input leke check karo ki wo prime number hai ya nahi
let n = Number(prompt("enter any number"))
if(n>0){
    for (let i = 2 ; i<n;i++){
        if(n%i==0){
            console.log("this is not prime number ")
        }
        else{
            console.log("this is prime number ")
        }
    }
}