// question39.js print karo star pattern jaha har row me star ke sath uska column number bhi print ho
// jaise agar user ne 4 input diya to output hoga
// * 1
// * 1 * 2
// * 1 * 2 * 3
// * 1 * 2 * 3 * 4
let prompt = require("prompt-sync")();

let n = Number(prompt("enter the any number "))
for(let i = 1; i<=n; i++){
    for(let j = 1; j<=i; j++){
        process.stdout.write("* " + j)
    }
    console.log(" ")
}