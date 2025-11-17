// question34.js user ke liye ek number guessing game banao
// jisme computer ek random number generate kare 1 se 100 ke beech me
// aur user ko guess karna hai ki wo number kya hai
// har guess ke baad computer batayega ki wo number chota hai ya bada
// jab tak user sahi number guess nahi kar leta tab tak game chalti rahegi
console.log("welcome to number guessing game")
let prompt = require("prompt-sync")();
let random = Math.floor(Math.random()*100)+1

let guess = 0 
while(guess !== random){
    guess = Number(prompt("enter the number "))
    if(isNaN(guess) || guess<1 || guess>100){
        console.log("please enter the number b/w 1 - 100")
    }
    if(guess<random){
        console.log("it's to low")
    }
    else if(guess>random){
        console.log("it's to high")
    }
    else{
        console.log("congrats your number is ",guess)
    }
}

