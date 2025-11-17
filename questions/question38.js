// question38.js print karo n x n star pattern jaha n user se input lena hai
// jaise agar user ne 4 input diya to output hoga
// * * * *
// * * * *
// * * * *
// * * * *
let prompt = require("prompt-sync")();

let n = Number(prompt("enter the any number "))
for(let i = 1; i<=n; i++){
    for(let j = 1; j<=n;j++){
        process.stdout.write("* ")
    }
    console.log("  ")
}